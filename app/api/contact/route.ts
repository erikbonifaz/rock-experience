import { participationSchema } from "@/features/contact/schema";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const invalidSubmission = {
  success: false,
  message: "Los datos enviados no son válidos.",
};

const persistenceFailure = {
  success: false,
  message: "No pudimos procesar tu solicitud.",
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(invalidSubmission, { status: 400 });
  }

  const parsed = participationSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(invalidSubmission, { status: 400 });
  }

  const { name, email, phone, company, message, privacy } = parsed.data;

  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone,
        company: company || null,
        message,
        privacy_accepted: privacy,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[api/contact] Supabase insert failed.", {
        errorCode: error.code,
      });
      return Response.json(persistenceFailure, { status: 500 });
    }

    if (!Number.isSafeInteger(data.id) || data.id < 1) {
      console.error("[api/contact] Supabase returned an invalid submission ID.");
      return Response.json(persistenceFailure, { status: 500 });
    }

    return Response.json(
      {
        success: true,
        id: data.id,
        registrationCode: `RX-${String(data.id).padStart(4, "0")}`,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error && error.message.includes("SUPABASE_URL")) {
      console.error("[api/contact] Supabase configuration error:", error.message);
    } else {
      console.error("[api/contact] Supabase request failed.", {
        errorName: error instanceof Error ? error.name : "UnknownError",
      });
    }

    return Response.json(persistenceFailure, { status: 500 });
  }
}

import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Registro de demostración | ROCK EXPERIENCE",
  robots: {
    index: false,
    follow: false,
  },
};

function maskEmail(email: string) {
  const [localPart, domain] = email.split("@");
  return `${localPart.slice(0, 1)}***@${domain}`;
}

function maskPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `••••••${digits.slice(-4)}`;
}

function formatCreatedAt(value: string) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "America/Mexico_City",
  })
    .format(new Date(value))
    .replace(",", " ·")
    .toUpperCase();
}

export default async function SubmissionDemoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submissionId = Number(id);

  if (
    !/^[1-9]\d*$/.test(id) ||
    !Number.isSafeInteger(submissionId) ||
    submissionId < 1
  ) {
    notFound();
  }

  await connection();

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("id, name, email, phone, company, message, created_at")
    .eq("id", submissionId)
    .maybeSingle();

  if (error) {
    console.error("[demo/submissions] Supabase lookup failed.", {
      errorCode: error.code,
    });
    throw new Error("No se pudo consultar el registro de demostración.");
  }

  if (!data) notFound();

  const registrationCode = `RX-${String(data.id).padStart(4, "0")}`;
  const formattedCreatedAt = formatCreatedAt(data.created_at);

  return (
    <main className="min-h-screen bg-[#101010] px-[var(--page-gutter)] py-10 text-[#F2F0E9] md:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-wrap items-end justify-between gap-5 border-b border-[#F2F0E9]/20 pb-5">
          <Link
            className="font-display text-2xl leading-[0.88] tracking-[-0.02em] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-4"
            href="/"
            aria-label="ROCK EXPERIENCE, volver al inicio">
            <span className="block">ROCK</span>
            <span className="block">EXPERIENCE</span>
          </Link>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA69F]">
            Vista técnica · PostgreSQL
          </p>
        </header>

        <section className="py-12 md:py-16" aria-labelledby="submission-title">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA69F]">
            <span className="text-[#FF2442]">{"//"}</span> Registro de
            demostración
          </p>
          <h1
            className="mt-6 font-display text-[clamp(3.5rem,12vw,7rem)] leading-[0.88] tracking-[-0.02em] text-[#F2F0E9]"
            id="submission-title">
            Registro
          </h1>
          <p className="mt-5 font-display text-3xl leading-none text-[#FF2442] md:text-4xl">
            #{registrationCode}
          </p>

          <dl className="mt-10 grid grid-cols-1 border-y border-[#F2F0E9]/20 md:grid-cols-2">
            <div className="border-b border-[#F2F0E9]/15 py-5 md:pr-6">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Nombre
              </dt>
              <dd className="mt-2 break-words font-sans text-lg text-[#F2F0E9]">
                {data.name}
              </dd>
            </div>
            <div className="border-b border-[#F2F0E9]/15 py-5 md:border-l md:pl-6">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Correo
              </dt>
              <dd className="mt-2 break-all font-sans text-lg text-[#F2F0E9]">
                {maskEmail(data.email)}
              </dd>
            </div>
            <div className="border-b border-[#F2F0E9]/15 py-5 md:pr-6">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Teléfono
              </dt>
              <dd className="mt-2 font-sans text-lg text-[#F2F0E9]">
                {maskPhone(data.phone)}
              </dd>
            </div>
            <div className="border-b border-[#F2F0E9]/15 py-5 md:border-l md:pl-6">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Empresa
              </dt>
              <dd className="mt-2 break-words font-sans text-lg text-[#F2F0E9]">
                {data.company || "No especificada"}
              </dd>
            </div>
            <div className="border-b border-[#F2F0E9]/15 py-5 md:col-span-2">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Mensaje
              </dt>
              <dd className="mt-2 whitespace-pre-wrap break-words font-sans text-base leading-relaxed text-[#F2F0E9]">
                {data.message}
              </dd>
            </div>
            <div className="py-5 md:col-span-2">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#AAA69F]">
                Fecha
              </dt>
              <dd className="mt-2 font-sans text-base text-[#F2F0E9]">
                <time dateTime={data.created_at}>{formattedCreatedAt}</time>
              </dd>
            </div>
          </dl>

          <p className="mt-8 max-w-[58ch] font-sans text-sm leading-relaxed text-[#AAA69F]">
            Este registro fue almacenado correctamente en PostgreSQL mediante
            Supabase.
          </p>
          <Link
            className="mt-10 inline-flex min-h-12 items-center gap-3 border border-[#FF2442] px-5 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#FF2442] transition-colors hover:bg-[#FF2442] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-3"
            href="/">
            <span aria-hidden="true">←</span>
            Volver a ROCK EXPERIENCE
          </Link>
        </section>
      </div>
    </main>
  );
}

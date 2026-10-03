import experiences from "@/data/experiences.json";

export async function GET() {
  return Response.json(experiences);
}

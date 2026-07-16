import { redirect } from "next/navigation";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const next = params?.next || "/evolucoes";
  const query = new URLSearchParams({ auth: "login", next });
  redirect(`/legacy?${query.toString()}`);
}

import { redirect } from "next/navigation";
import { EvolucoesManager } from "../../components/EvolucoesManager";
import { hasSupabaseEnv } from "../../lib/env";
import { createClient } from "../../lib/supabaseServer";

export default async function EvolucoesPage() {
  if (!hasSupabaseEnv()) {
    return (
      <section className="page-panel">
        <h1>Evolucoes SOAP</h1>
        <div className="alert error">Configure `.env.local` para ativar esta area protegida.</div>
      </section>
    );
  }

  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) {
    redirect("/auth/login?next=/evolucoes");
  }

  const { data, error } = await supabase
    .from("evolucoes")
    .select("*")
    .order("updated_at", { ascending: false });

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="eyebrow">Area protegida · RLS ativo</span>
        <h1>Evolucoes SOAP</h1>
        <p>Crie modelos privados sincronizados no Supabase. Cada usuario enxerga apenas seus proprios registros.</p>
      </div>
      {error ? <div className="alert error">{error.message}</div> : null}
      <EvolucoesManager initialRows={data || []} />
    </section>
  );
}

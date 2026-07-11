import { redirect } from "next/navigation";
import { FavoritosManager } from "../../components/FavoritosManager";
import { hasSupabaseEnv } from "../../lib/env";
import { createClient } from "../../lib/supabaseServer";

export default async function FavoritosPage() {
  if (!hasSupabaseEnv()) {
    return (
      <section className="page-panel">
        <h1>Favoritos</h1>
        <div className="alert error">Configure `.env.local` para ativar favoritos e medicamentos personalizados.</div>
      </section>
    );
  }

  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) {
    redirect("/auth/login?next=/favoritos");
  }

  const [{ data: favorites, error: favError }, { data: meds, error: medError }] = await Promise.all([
    supabase.from("favoritos").select("*").order("created_at", { ascending: false }),
    supabase.from("custom_medicamentos").select("*").order("updated_at", { ascending: false })
  ]);

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="eyebrow">Dados personalizados · Supabase</span>
        <h1>Favoritos e medicamentos</h1>
        <p>Salve atalhos e itens locais sem misturar dados entre usuarios.</p>
      </div>
      {favError ? <div className="alert error">{favError.message}</div> : null}
      {medError ? <div className="alert error">{medError.message}</div> : null}
      <FavoritosManager initialFavorites={favorites || []} initialMedicamentos={meds || []} />
    </section>
  );
}

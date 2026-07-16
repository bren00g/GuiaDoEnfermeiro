import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "../../lib/env";
import { createClient } from "../../lib/supabaseServer";

export default async function GuiaPage() {
  if (!hasSupabaseEnv()) {
    redirect("/legacy?auth=login&next=/guia");
  }

  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) {
    redirect("/legacy?auth=login&next=/guia");
  }

  redirect("/legacy/index.html?skipSplash=1");
}

import Link from "next/link";
import { createClient } from "../lib/supabaseServer";
import { signOut } from "../app/auth/actions";
import { hasSupabaseEnv } from "../lib/env";

const nav = [
  ["Prescricoes", "/prescricoes"],
  ["Vacinas", "/vacinas"],
  ["Calculadora", "/calculadora"],
  ["Evolucoes", "/evolucoes"],
  ["Favoritos", "/favoritos"]
];

export async function AppShell({ children }) {
  let user = null;

  if (hasSupabaseEnv()) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user;
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>
            <strong>Guia do Enfermeiro APS</strong>
            <small>Cuidar · Acolher · Transformar</small>
          </span>
        </Link>

        <nav className="nav-list" aria-label="Navegacao principal">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link href="/legacy">Versao legada</Link>
        </nav>

        <div className="account-box">
          {!hasSupabaseEnv() ? (
            <p>Configure `.env.local` para ativar login e banco.</p>
          ) : user ? (
            <form action={signOut}>
              <p>{user.email}</p>
              <button className="btn subtle" type="submit">Sair</button>
            </form>
          ) : (
            <div className="auth-links">
              <Link className="btn primary" href="/auth/login">Entrar</Link>
              <Link className="btn subtle" href="/auth/signup">Criar conta</Link>
            </div>
          )}
        </div>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}

import Link from "next/link";
import { signUp } from "../actions";

export default async function SignupPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error;

  return (
    <section className="auth-panel">
      <h1>Criar conta</h1>
      <p>Use um email individual. Os dados privados serao isolados por usuario via RLS.</p>

      {error ? <div className="alert error">{error}</div> : null}

      <form className="stack-form" action={signUp}>
        <label>
          Nome completo
          <input name="full_name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Senha
          <input name="password" type="password" autoComplete="new-password" minLength={8} required />
        </label>
        <button className="btn primary" type="submit">Cadastrar</button>
      </form>

      <p className="muted">
        Ja possui conta? <Link href="/auth/login">Entrar</Link>
      </p>
    </section>
  );
}

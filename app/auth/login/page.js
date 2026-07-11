import Link from "next/link";
import { signIn } from "../actions";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error;
  const message = params?.message;
  const next = params?.next || "/evolucoes";

  return (
    <section className="auth-panel">
      <h1>Entrar</h1>
      <p>Acesse suas evolucoes, favoritos e medicamentos personalizados.</p>

      {error ? <div className="alert error">{error}</div> : null}
      {message ? <div className="alert success">{message}</div> : null}

      <form className="stack-form" action={signIn}>
        <input type="hidden" name="next" value={next} />
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Senha
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button className="btn primary" type="submit">Entrar</button>
      </form>

      <p className="muted">
        Ainda nao tem conta? <Link href="/auth/signup">Criar cadastro</Link>
      </p>
    </section>
  );
}

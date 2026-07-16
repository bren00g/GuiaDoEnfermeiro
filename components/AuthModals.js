"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createClient } from "../lib/supabaseBrowser";

export function AuthModals() {
  const supabase = createClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState(null);
  const [statusError, setStatusError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const authMode = searchParams.get("auth") || "";
  const error = searchParams.get("error") || "";
  const message = searchParams.get("message") || "";
  const nextPath = useMemo(() => searchParams.get("next") || "/evolucoes", [searchParams]);

  useEffect(() => {
    if (authMode === "login") {
      setMode("login");
      return;
    }
    if (authMode === "signup") {
      setMode("signup");
      return;
    }
    setMode(null);
  }, [authMode]);

  function buildUrl(modeValue, targetNext) {
    const params = new URLSearchParams(searchParams.toString());

    if (modeValue) {
      params.set("auth", modeValue);
    } else {
      params.delete("auth");
    }

    if (targetNext) {
      params.set("next", targetNext);
    }

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  function openModal(modeValue) {
    setStatusError("");
    setMode(modeValue);
    router.replace(buildUrl(modeValue));
  }

  function closeModal() {
    setMode(null);
    setStatusError("");
    router.replace(buildUrl(null));
  }

  async function handleLoginSubmit() {
    if (!loginEmail || !loginPassword) {
      setStatusError("Preencha email e senha.");
      return;
    }

    setSubmitting(true);
    setStatusError("");

    const email = loginEmail.trim();
    const password = loginPassword;

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setStatusError(authError.message);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setMode(null);
    router.replace(buildUrl(null));
    router.push(nextPath);
    router.refresh();
  }

  async function handleSignupSubmit() {
    if (!signupName || !signupEmail || !signupPassword) {
      setStatusError("Preencha nome, email e senha.");
      return;
    }

    setSubmitting(true);
    setStatusError("");

    const fullName = signupName.trim();
    const email = signupEmail.trim();
    const password = signupPassword;

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });

    if (authError) {
      setStatusError(authError.message);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setMode("login");
    router.replace(buildUrl("login"));
  }

  return (
    <>
      <div className="auth-links">
        <button className="btn primary" type="button" onClick={() => openModal("login")}>Entrar</button>
        <button className="btn subtle" type="button" onClick={() => openModal("signup")}>Criar conta</button>
      </div>

      {mode ? (
        <div className="auth-modal-backdrop" role="presentation" onClick={closeModal}>
          <section
            className="auth-modal"
            role="dialog"
            aria-modal="true"
            aria-label={mode === "login" ? "Entrar" : "Criar conta"}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="auth-modal-close" type="button" onClick={closeModal} aria-label="Fechar">x</button>

            {mode === "login" ? (
              <>
                <h2>Entrar</h2>
                <p>Acesse suas evolucoes, favoritos e medicamentos personalizados.</p>
                {error ? <div className="alert error">{error}</div> : null}
                {message ? <div className="alert success">{message}</div> : null}
                {statusError ? <div className="alert error">{statusError}</div> : null}
                <div className="stack-form">
                  <input type="hidden" name="next" value={nextPath} />
                  <label>
                    Email
                    <input name="email" type="email" autoComplete="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} required />
                  </label>
                  <label>
                    Senha
                    <input name="password" type="password" autoComplete="current-password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} required />
                  </label>
                  <button className="btn primary" type="button" onClick={handleLoginSubmit} disabled={submitting}>{submitting ? "Entrando..." : "Entrar"}</button>
                </div>
              </>
            ) : (
              <>
                <h2>Criar conta</h2>
                <p>Use um email individual. Seus dados ficam isolados por usuario.</p>
                {error ? <div className="alert error">{error}</div> : null}
                {statusError ? <div className="alert error">{statusError}</div> : null}
                {message ? <div className="alert success">{message}</div> : null}
                <div className="stack-form">
                  <label>
                    Nome completo
                    <input name="full_name" type="text" autoComplete="name" value={signupName} onChange={(event) => setSignupName(event.target.value)} required />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" autoComplete="email" value={signupEmail} onChange={(event) => setSignupEmail(event.target.value)} required />
                  </label>
                  <label>
                    Senha
                    <input name="password" type="password" autoComplete="new-password" minLength={8} value={signupPassword} onChange={(event) => setSignupPassword(event.target.value)} required />
                  </label>
                  <button className="btn primary" type="button" onClick={handleSignupSubmit} disabled={submitting}>{submitting ? "Cadastrando..." : "Cadastrar"}</button>
                </div>
              </>
            )}
          </section>
        </div>
      ) : null}
    </>
  );
}

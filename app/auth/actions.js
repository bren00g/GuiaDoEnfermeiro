"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabaseServer";
import { hasSupabaseEnv } from "../../lib/env";

function getField(formData, key) {
  return String(formData.get(key) || "").trim();
}

export async function signIn(formData) {
  if (!hasSupabaseEnv()) {
    redirect("/auth/login?error=Configure o arquivo .env.local antes de usar login.");
  }

  const supabase = await createClient();
  const email = getField(formData, "email");
  const password = getField(formData, "password");
  const next = getField(formData, "next") || "/evolucoes";

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    redirect(`/auth/login?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect(next);
}

export async function signUp(formData) {
  if (!hasSupabaseEnv()) {
    redirect("/auth/signup?error=Configure o arquivo .env.local antes de criar contas.");
  }

  const supabase = await createClient();
  const email = getField(formData, "email");
  const password = getField(formData, "password");
  const fullName = getField(formData, "full_name");

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });

  if (error) {
    redirect(`/auth/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/auth/login?message=Verifique seu email ou entre se a confirmacao estiver desativada.");
}

export async function signOut() {
  if (!hasSupabaseEnv()) {
    redirect("/");
  }

  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

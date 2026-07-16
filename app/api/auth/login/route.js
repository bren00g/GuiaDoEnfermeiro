import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getSupabaseConfig } from "../../../../lib/env";

export async function POST(request) {
  const { email, password } = await request.json();
  const { url, anonKey } = getSupabaseConfig();

  if (!email || !password) {
    return NextResponse.json({ error: "Email e senha sao obrigatorios." }, { status: 400 });
  }

  if (!url || !anonKey) {
    return NextResponse.json({ error: "Configuracao do Supabase ausente no servidor." }, { status: 500 });
  }

  const cookieStore = await cookies();
  const cookiesToApply = [];

  const supabase = createServerClient(
    url,
    anonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookiesToApply.push({ name, value, options });
          });
        }
      }
    }
  );

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  cookiesToApply.forEach(({ name, value, options }) => {
    response.cookies.set(name, value, options);
  });

  return response;
}

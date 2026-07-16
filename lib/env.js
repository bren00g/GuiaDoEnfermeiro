function normalizeSupabaseUrl(rawUrl) {
  const value = String(rawUrl || "").trim();
  if (!value) {
    return "";
  }

  try {
    const parsed = new URL(value);
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return value
      .replace(/\/(auth|rest|storage|realtime|functions)\/v1.*$/i, "")
      .replace(/\/$/, "");
  }
}

export function getSupabaseConfig() {
  return {
    url: normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonKey: String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").trim()
  };
}

export function hasSupabaseEnv() {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(
    url &&
    anonKey
  );
}

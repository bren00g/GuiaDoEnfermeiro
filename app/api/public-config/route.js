import { NextResponse } from "next/server";
import { getSupabaseConfig } from "../../../lib/env";

export async function GET() {
  const { url, anonKey } = getSupabaseConfig();

  return NextResponse.json(
    {
      url,
      anonKey
    },
    {
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}

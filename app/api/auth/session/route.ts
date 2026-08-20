import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api";
import { createSession, getCurrentUser, sessionCookie } from "@/lib/auth";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();
    if (typeof idToken !== "string") return NextResponse.json({ error: "Missing identity token." }, { status: 400 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookie.name, await createSession(idToken), sessionCookie);
    return response;
  } catch (error) { return apiError(error); }
}
export async function GET() {
  const user = await getCurrentUser();
  return user ? NextResponse.json({ user }) : NextResponse.json({ error: "Sign in to continue." }, { status: 401 });
}
export function DELETE() { const response = NextResponse.json({ ok: true }); response.cookies.set(sessionCookie.name, "", { ...sessionCookie, maxAge: 0 }); return response; }

import "server-only";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

const sessionName = "momentum_session";
const sessionMaxAge = 60 * 60 * 24 * 5;
export type CurrentUser = { uid: string; email: string | null; name: string | null; image: string | null };

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const session = (await cookies()).get(sessionName)?.value;
  if (!session) return null;
  try {
    const token = await adminAuth().verifySessionCookie(session, true);
    return { uid: token.uid, email: token.email ?? null, name: token.name ?? null, image: typeof token.picture === "string" ? token.picture : null };
  } catch { return null; }
}

export async function requireUser(): Promise<CurrentUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export function unauthorizedResponse() { return NextResponse.json({ error: "Sign in to continue." }, { status: 401 }); }
export async function createSession(idToken: string) { return adminAuth().createSessionCookie(idToken, { expiresIn: sessionMaxAge * 1000 }); }
export const sessionCookie = { name: sessionName, maxAge: sessionMaxAge, httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/" };

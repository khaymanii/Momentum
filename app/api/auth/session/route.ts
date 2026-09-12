import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api";
import {
  createSession,
  getCurrentUser,
  revokeUserSessions,
  sessionCookie,
} from "@/lib/auth";
import { adminAuth } from "@/lib/firebase-admin";
import {
  getClientIp,
  logSecurityEvent,
  consumeRateLimit,
} from "@/lib/security";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request.headers);
  const key = `session:${ip ?? "unknown"}`;

  if (consumeRateLimit(key, 10, 60_000)) {
    logSecurityEvent("failed_session_establishment", {
      ip,
      route: "/api/auth/session",
      success: false,
      reason: "rate_limited",
      statusCode: 429,
    });
    return NextResponse.json(
      { error: "Too many attempts. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  try {
    const { idToken } = await request.json();
    if (typeof idToken !== "string") {
      logSecurityEvent("failed_session_establishment", {
        ip,
        route: "/api/auth/session",
        success: false,
        reason: "missing_id_token",
        statusCode: 400,
      });
      return NextResponse.json(
        { error: "Missing identity token." },
        { status: 400 },
      );
    }

    const verified = await adminAuth().verifyIdToken(idToken);
    const user = await adminAuth().getUser(verified.uid);
    if (user.disabled) {
      logSecurityEvent("failed_session_establishment", {
        userId: verified.uid,
        ip,
        route: "/api/auth/session",
        success: false,
        reason: "disabled_user",
        statusCode: 401,
      });
      return NextResponse.json(
        { error: "Sign in to continue." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(
      sessionCookie.name,
      await createSession(idToken),
      sessionCookie,
    );

    logSecurityEvent("successful_session_establishment", {
      userId: verified.uid,
      email: user.email ?? undefined,
      ip,
      route: "/api/auth/session",
      success: true,
      statusCode: 200,
    });

    return response;
  } catch (error) {
    logSecurityEvent("failed_session_establishment", {
      ip,
      route: "/api/auth/session",
      success: false,
      reason: error instanceof Error ? error.message : "invalid_token",
      statusCode: 401,
    });
    return apiError(error);
  }
}

export async function GET() {
  const user = await getCurrentUser();
  return user
    ? NextResponse.json({ user })
    : NextResponse.json({ error: "Sign in to continue." }, { status: 401 });
}

export async function DELETE(request: NextRequest) {
  const ip = getClientIp(request.headers);
  try {
    const session = request.cookies.get(sessionCookie.name)?.value;
    if (session) {
      const token = await adminAuth()
        .verifySessionCookie(session, true)
        .catch(() => null);
      if (token) {
        await revokeUserSessions(token.uid);
        logSecurityEvent("logout", {
          userId: token.uid,
          ip,
          route: "/api/auth/session",
          success: true,
          statusCode: 200,
        });
      }
    }
  } catch (error) {
    logSecurityEvent("logout", {
      ip,
      route: "/api/auth/session",
      success: false,
      reason: error instanceof Error ? error.message : "logout_failed",
      statusCode: 401,
    });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie.name, "", { ...sessionCookie, maxAge: 0 });
  return response;
}

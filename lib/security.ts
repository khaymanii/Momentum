export type SecurityEvent =
  | "failed_login"
  | "successful_login"
  | "failed_session_establishment"
  | "successful_session_establishment"
  | "logout"
  | "password_reset_requested"
  | "password_reset_completed"
  | "unauthorized_api_access"
  | "suspicious_activity";

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const rateLimitBuckets = new Map<string, RateLimitBucket>();

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function getClientIp(
  headers: Headers | Record<string, string | undefined> | undefined,
) {
  if (!headers) return null;
  const source = headers instanceof Headers ? headers.get("x-forwarded-for") : headers["x-forwarded-for"];
  const ip = (source ?? (headers instanceof Headers ? headers.get("x-real-ip") : headers["x-real-ip"])) ?? null;
  if (!ip) return null;
  return ip.split(",")[0].trim();
}

export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number,
) {
  const now = Date.now();
  const existing = rateLimitBuckets.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (existing.count >= maxRequests) {
    return true;
  }

  existing.count += 1;
  return false;
}

export function consumeRateLimit(key: string, maxRequests: number, windowMs: number) {
  return checkRateLimit(key, maxRequests, windowMs);
}

export function isClientRateLimited(
  key: string,
  maxRequests: number,
  windowMs: number,
) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (bucket.count >= maxRequests) return true;
  bucket.count += 1;
  return false;
}

export function getRateLimitError(message = "Too many attempts. Please wait a moment and try again.") {
  return { error: message, status: 429 } as const;
}

export function safeAuthErrorMessage(
  cause: unknown,
  fallback: string,
) {
  const text = cause instanceof Error ? cause.message.toLowerCase() : String(cause ?? "").toLowerCase();

  if (
    text.includes("too-many-requests") ||
    text.includes("rate limit") ||
    text.includes("too many requests")
  ) {
    return "Too many attempts. Please wait a moment and try again.";
  }

  if (
    text.includes("invalid-login-credentials") ||
    text.includes("user-not-found") ||
    text.includes("wrong-password") ||
    text.includes("email-not-found") ||
    text.includes("invalid email or password")
  ) {
    return "Invalid email or password.";
  }

  if (
    text.includes("invalid-oob-code") ||
    text.includes("expired-action-code") ||
    text.includes("reset link") ||
    text.includes("action code")
  ) {
    return "This reset link is invalid or has expired.";
  }

  if (text.includes("weak-password")) {
    return "Choose a stronger password.";
  }

  return fallback;
}

export function logSecurityEvent(
  event: SecurityEvent,
  details: {
    userId?: string;
    email?: string;
    route?: string;
    success?: boolean;
    statusCode?: number;
    ip?: string | null;
    userAgent?: string | null;
    reason?: string;
  } = {},
) {
  const payload = {
    timestamp: new Date().toISOString(),
    event,
    success: details.success ?? true,
    userId: details.userId ?? null,
    email: details.email ? normalizeEmail(details.email) : null,
    route: details.route ?? null,
    statusCode: details.statusCode ?? null,
    ip: details.ip ?? null,
    userAgent: details.userAgent ?? null,
    reason: details.reason ?? null,
  };

  if (process.env.NODE_ENV === "production") {
    console.warn("[security]", payload);
    return;
  }

  console.info("[security]", payload);
}

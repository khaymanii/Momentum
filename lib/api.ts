import { NextResponse } from "next/server";

export function apiError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected server error.";
  const status = message === "Unauthorized" ? 401 : message.includes("not configured") ? 503 : 500;
  return NextResponse.json({ error: message }, { status });
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

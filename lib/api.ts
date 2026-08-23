import { NextResponse } from "next/server";

export function apiError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected server error.";
  if (message === "Unauthorized") return NextResponse.json({ error: "Sign in to continue." }, { status: 401 });
  if (message.includes("not configured")) return NextResponse.json({ error: message }, { status: 503 });
  if (message.includes("database (default) does not exist")) return NextResponse.json({ error: "Firestore has not been created for this Firebase project. Create a Firestore database in Firebase Console and try again." }, { status: 503 });
  if (message.includes("PERMISSION_DENIED")) return NextResponse.json({ error: "The Firebase service account cannot access Firestore. Grant it the Cloud Datastore User role in Google Cloud IAM." }, { status: 503 });
  return NextResponse.json({ error: message }, { status: 500 });
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { apiError } from "@/lib/api";
import { db } from "@/lib/firebase-admin";

export const runtime = "nodejs";

export async function POST(request: NextRequest, context: RouteContext<"/api/public/w/[slug]/subscribers">) {
  try {
    const { slug } = await context.params;
    const { email } = await request.json();
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    const projects = await db().collection("projects").where("slug", "==", slug).limit(1).get();
    if (projects.empty || projects.docs[0].data().status !== "published") return NextResponse.json({ error: "Waitlist not found." }, { status: 404 });
    const project = projects.docs[0];
    const subscriber = project.ref.collection("subscribers").doc(normalizedEmail);
    await db().runTransaction(async (transaction) => {
      if ((await transaction.get(subscriber)).exists) return;
      transaction.set(subscriber, { email: normalizedEmail, status: "active", createdAt: FieldValue.serverTimestamp() });
      transaction.update(project.ref, { memberCount: FieldValue.increment(1), updatedAt: FieldValue.serverTimestamp(), status: "growing" });
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) { return apiError(error); }
}

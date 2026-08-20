import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { apiError, slugify } from "@/lib/api";
import { db } from "@/lib/firebase-admin";
import { requireUser } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const user = await requireUser();
    const snapshot = await db().collection("projects").where("ownerId", "==", user.uid).get();
    return NextResponse.json({ projects: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) });
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) return NextResponse.json({ error: "Project name is required." }, { status: 400 });

    const slug = slugify(name);
    if (!slug) return NextResponse.json({ error: "Project name must contain letters or numbers." }, { status: 400 });
    const existing = await db().collection("projects").where("slug", "==", slug).limit(1).get();
    if (!existing.empty) return NextResponse.json({ error: "Choose a different project name." }, { status: 409 });

    const project = {
      name,
      slug,
      description: typeof body.description === "string" ? body.description.trim() : "",
      type: ["startup", "community", "product"].includes(body.type) ? body.type : "startup",
      website: typeof body.website === "string" ? body.website.trim() : "",
      status: "draft",
      memberCount: 0,
      momentumScore: 0,
      ownerId: user.uid,
      waitlist: {
        headline: "Be the first to experience what's next.",
        description: "Join the waitlist and be part of something exciting from the very beginning.",
        buttonText: "Join the waitlist",
        brandColor: "#1d5c43",
      },
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };
    const ref = await db().collection("projects").add(project);
    return NextResponse.json({ project: { id: ref.id, ...project, createdAt: null, updatedAt: null } }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}

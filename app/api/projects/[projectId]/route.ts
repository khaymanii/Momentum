import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { apiError, slugify } from "@/lib/api";
import { db } from "@/lib/firebase-admin";
import { requireUser } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(_: NextRequest, context: RouteContext<"/api/projects/[projectId]">) {
  try {
    const user = await requireUser();
    const { projectId } = await context.params;
    const snapshot = await db().collection("projects").doc(projectId).get();
    const projectData = snapshot.data();
    if (!snapshot.exists || !projectData || projectData.ownerId !== user.uid) return NextResponse.json({ error: "Project not found." }, { status: 404 });
    return NextResponse.json({ project: { id: snapshot.id, ...snapshot.data() } });
  } catch (error) { return apiError(error); }
}

export async function PATCH(request: NextRequest, context: RouteContext<"/api/projects/[projectId]">) {
  try {
    const user = await requireUser();
    const { projectId } = await context.params;
    const project = await db().collection("projects").doc(projectId).get();
    if (!project.exists || project.data()?.ownerId !== user.uid) return NextResponse.json({ error: "Project not found." }, { status: 404 });
    const body = await request.json();
    const update: Record<string, unknown> = { updatedAt: FieldValue.serverTimestamp() };
    if (typeof body.name === "string" && body.name.trim()) {
      update.name = body.name.trim();
      update.slug = slugify(body.name);
    }
    for (const key of ["description", "website", "status"] as const) if (typeof body[key] === "string") update[key] = body[key].trim();
    if (body.waitlist && typeof body.waitlist === "object") update.waitlist = body.waitlist;
    await db().collection("projects").doc(projectId).update(update);
    const saved = await db().collection("projects").doc(projectId).get();
    return NextResponse.json({ project: { id: saved.id, ...saved.data() } });
  } catch (error) { return apiError(error); }
}

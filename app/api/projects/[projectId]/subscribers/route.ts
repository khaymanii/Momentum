import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api";
import { db } from "@/lib/firebase-admin";
import { requireUser } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(_: NextRequest, context: RouteContext<"/api/projects/[projectId]/subscribers">) {
  try {
    const user = await requireUser();
    const { projectId } = await context.params;
    const project = await db().collection("projects").doc(projectId).get();
    if (!project.exists || project.data()?.ownerId !== user.uid) return NextResponse.json({ error: "Project not found." }, { status: 404 });
    const snapshot = await db().collection("projects").doc(projectId).collection("subscribers").orderBy("createdAt", "desc").get();
    return NextResponse.json({ subscribers: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) });
  } catch (error) { return apiError(error); }
}

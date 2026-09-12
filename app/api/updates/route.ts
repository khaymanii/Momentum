import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { apiError } from "@/lib/api";
import { db } from "@/lib/firebase-admin";
import { requireUser } from "@/lib/auth";
import { getClientIp, logSecurityEvent } from "@/lib/security";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const user = await requireUser();
    const snapshot = await db()
      .collection("updates")
      .where("ownerId", "==", user.uid)
      .get();
    return NextResponse.json({
      updates: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      logSecurityEvent("unauthorized_api_access", { ip: getClientIp(request.headers), route: "/api/updates", success: false, statusCode: 401 });
    }
    return apiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireUser();
    const {
      title,
      content,
      projectId,
      status = "published",
    } = await request.json();
    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof content !== "string" ||
      !content.trim()
    )
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 },
      );
    if (typeof projectId === "string") {
      const project = await db().collection("projects").doc(projectId).get();
      if (!project.exists || project.data()?.ownerId !== user.uid)
        return NextResponse.json(
          { error: "Project not found." },
          { status: 404 },
        );
    }
    const ref = await db()
      .collection("updates")
      .add({
        ownerId: user.uid,
        title: title.trim(),
        content: content.trim(),
        projectId: typeof projectId === "string" ? projectId : null,
        status: status === "draft" ? "draft" : "published",
        createdAt: FieldValue.serverTimestamp(),
      });
    return NextResponse.json({ update: { id: ref.id } }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      logSecurityEvent("unauthorized_api_access", { ip: getClientIp(request.headers), route: "/api/updates", success: false, statusCode: 401 });
    }
    return apiError(error);
  }
}

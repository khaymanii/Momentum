import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api";
import { db } from "@/lib/firebase-admin";

export const runtime = "nodejs";

export async function GET(_: NextRequest, context: RouteContext<"/api/public/w/[slug]">) {
  try {
    const { slug } = await context.params;
    const snapshot = await db().collection("projects").where("slug", "==", slug).limit(1).get();
    if (snapshot.empty || snapshot.docs[0].data().status !== "published") return NextResponse.json({ error: "Waitlist not found." }, { status: 404 });
    const project = snapshot.docs[0];
    return NextResponse.json({ project: { id: project.id, name: project.data().name, memberCount: project.data().memberCount ?? 0, waitlist: project.data().waitlist } });
  } catch (error) { return apiError(error); }
}

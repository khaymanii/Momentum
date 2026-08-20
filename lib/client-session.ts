"use client";

import { User } from "firebase/auth";

export async function establishSession(user: User) {
  const response = await fetch("/api/auth/session", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken: await user.getIdToken() }) });
  if (!response.ok) { const data = await response.json(); throw new Error(data.error || "Could not start your session."); }
}

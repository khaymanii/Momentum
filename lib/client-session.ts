"use client";

import { User } from "firebase/auth";

export async function establishSession(user: User) {
  const idToken = await user.getIdToken();
  const response = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });

  if (!response.ok) {
    let errorMessage = "Could not start your session.";
    try {
      const data = await response.json();
      if (data && typeof data.error === "string") {
        errorMessage = data.error;
      }
    } catch {
      errorMessage = `Server error (${response.status}): Could not start your session.`;
    }
    throw new Error(errorMessage);
  }
}


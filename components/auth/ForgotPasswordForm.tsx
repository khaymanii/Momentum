"use client";

import Link from "next/link";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase-client";
import { AuthInput } from "./AuthInput";

export function ForgotPasswordForm() {
  const [message, setMessage] = useState("");

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "");
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      setMessage("Reset link sent. Check your inbox.");
    } catch (cause) {
      setMessage(
        cause instanceof Error
          ? cause.message.replace("Firebase: ", "")
          : "Could not send reset link.",
      );
    }
  }
  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <AuthInput
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <button
          type="submit"
          className="h-12 w-full rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99]"
        >
          Send reset link
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm text-[#337456]">{message}</p>
      )}

      <p className="mt-6 text-center text-sm text-[#656861]">
        Remember your password?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-[#1d5c43] hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </>
  );
}

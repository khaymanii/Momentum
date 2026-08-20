"use client";

import Link from "next/link";
import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase-client";
import { PasswordInput } from "./PasswordInput";

export function ResetPasswordForm() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); const form = new FormData(event.currentTarget); const password = String(form.get("password") ?? ""); if (password !== String(form.get("confirmPassword") ?? "")) return setMessage("Passwords do not match."); const code = params.get("oobCode"); if (!code) return setMessage("The reset link is invalid or expired."); try { await confirmPasswordReset(firebaseAuth, code, password); setMessage("Password reset. You can now sign in."); } catch (cause) { setMessage(cause instanceof Error ? cause.message.replace("Firebase: ", "") : "Could not reset password."); } }
  return (
    <>
      <form className="space-y-5" onSubmit={submit}>
        <PasswordInput
          label="New password"
          name="password"
          placeholder="Create a new password"
        />

        <PasswordInput
          label="Confirm new password"
          name="confirmPassword"
          placeholder="Confirm your new password"
        />

        <button
          type="submit"
          className="h-12 w-full rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99]"
        >
          Reset password
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-[#337456]">{message}</p>}

      <p className="mt-6 text-center text-sm text-[#656861]">
        Remember your password?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-[#1d5c43] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}

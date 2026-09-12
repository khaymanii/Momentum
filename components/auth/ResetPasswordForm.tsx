"use client";

import Link from "next/link";
import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { getFirebaseAuth, formatAuthError } from "@/lib/firebase-client";
import { PasswordInput } from "./PasswordInput";

export function ResetPasswordForm() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmPassword = String(form.get("confirmPassword") ?? "");

    if (!password) {
      return setError("Please enter a new password.");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }
    const code = params.get("oobCode");
    if (!code) {
      return setError("The reset link is invalid or has expired.");
    }

    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      await confirmPasswordReset(getFirebaseAuth(), code, password);
      setMessage("Password successfully reset. You can now sign in.");
    } catch (cause) {
      setError(formatAuthError(cause));
    } finally {
      setIsLoading(false);
    }
  }

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

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {message && (
          <div
            role="status"
            className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-[#1d5c43]"
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Resetting password..." : "Reset password"}
        </button>
      </form>

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


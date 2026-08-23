"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase-client";
import { establishSession } from "@/lib/client-session";

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const password = String(form.get("password") ?? "");
    if (password !== String(form.get("confirmPassword") ?? "")) return setError("Passwords do not match.");
    setError("");
    setIsLoading(true);
    try { const credential = await createUserWithEmailAndPassword(firebaseAuth, String(form.get("email") ?? ""), password); if (name) await updateProfile(credential.user, { displayName: name }); await establishSession(credential.user); router.push("/dashboard"); router.refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message.replace("Firebase: ", "") : "Could not create account."); }
    finally { setIsLoading(false); }
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <AuthInput
          label="Full name"
          name="name"
          placeholder="Enter your full name"
        />

        <AuthInput
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create a password"
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm your password"
        />

        <label className="flex items-start gap-3 text-sm leading-5 text-[#656861]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#1d5c43]"
          />

          <span>
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-medium text-[#1d5c43] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#1d5c43] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Creating account...
            </>
          ) : (
            "Create account"
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#656861]">
        Already have an account?{" "}
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



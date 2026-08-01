"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthDivider } from "./AuthDivider";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    // Temporary frontend simulation.
    // Firebase authentication will be connected later.
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <>
      <SocialLogin />

      <AuthDivider />

      <form className="space-y-5" onSubmit={handleSubmit}>
        <AuthInput
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <PasswordInput label="Password" name="password" />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-[#1d5c43] transition-colors hover:text-[#164732] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#656861]">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-[#1d5c43] hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}

import Link from "next/link";
import { AuthInput } from "./AuthInput";

export function ForgotPasswordForm() {
  return (
    <>
      <form className="space-y-5">
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
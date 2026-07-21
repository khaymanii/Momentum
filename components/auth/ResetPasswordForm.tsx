import Link from "next/link";
import { PasswordInput } from "./PasswordInput";

export function ResetPasswordForm() {
  return (
    <>
      <form className="space-y-5">
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
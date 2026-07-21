import Link from "next/link";

export function VerifyEmail() {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#e8f0eb] text-2xl">
        ✉
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-[#171817]">
        Check your inbox
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#656861]">
        We&apos;ve sent a verification link to your email address. Please verify
        your email to continue.
      </p>

      <button
        type="button"
        className="mt-8 h-12 w-full rounded-full bg-[#1d5c43] text-sm font-medium text-white transition-all hover:bg-[#164732] active:scale-[0.99]"
      >
        Resend verification email
      </button>

      <p className="mt-6 text-sm text-[#656861]">
        Wrong email address?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-[#1d5c43] hover:underline"
        >
          Create a new account
        </Link>
      </p>
    </div>
  );
}
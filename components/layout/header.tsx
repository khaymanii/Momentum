import Link from "next/link";
import { ArrowUpRight } from "../landing/arrow-up-right";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
      >
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
          M
        </span>

        Momentum
      </Link>

      <nav className="hidden items-center gap-8 text-sm text-[#656861] md:flex">
        <Link href="#how-it-works">How it works</Link>
        <Link href="#features">Features</Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="hidden rounded-full px-4 py-2.5 text-sm font-medium text-[#656861] transition-colors hover:text-[#171817] sm:block"
        >
          Sign in
        </Link>

        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 rounded-full bg-[#1d5c43] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#164732]"
        >
          <span className="hidden sm:inline">Create your waitlist</span>
          <span className="sm:hidden">Get started</span>

          <ArrowUpRight />
        </Link>
      </div>
    </header>
  );
}
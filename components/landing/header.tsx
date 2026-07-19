import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between">
      <Link
        className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
        href="/"
      >
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
          M
        </span>
        Momentum
      </Link>

      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-8 text-sm text-[#656861] md:flex"
      >
        <Link
          className="transition-colors hover:text-[#171817]"
          href="#how-it-works"
        >
          How it works
        </Link>
        <Link className="transition-colors hover:text-[#171817]" href="#features">
          Features
        </Link>
      </nav>

      <Link
        className="rounded-full bg-[#1d5c43] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#164732]"
        href="#early-access"
      >
        Create your waitlist
      </Link>
    </header>
  );
}

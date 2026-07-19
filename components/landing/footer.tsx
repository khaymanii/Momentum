import Link from "next/link";

const navigation = [
  ["How it works", "#how-it-works"],
  ["Why Momentum", "#why-momentum"],
  ["Early access", "#early-access"],
];

export function Footer() {
  return (
    <footer className="border-t border-[#e1e4df] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Link className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" href="/">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
                M
              </span>
              Momentum
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#70766e]">The pre-launch platform for teams building what&apos;s next.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#626760]">
            {navigation.map(([label, href]) => (
              <a className="transition-colors hover:text-[#171817]" href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-[#e9ebe7] pt-5 text-xs text-[#90958e]">
          © {new Date().getFullYear()} Momentum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

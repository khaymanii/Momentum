import Link from "next/link";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f8f8f6] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
      {/* Brand Panel */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#1d5c43] p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2.5 text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-sm font-bold text-[#1d5c43]">
            M
          </span>
          Momentum
        </Link>

        <div className="relative z-10 max-w-md">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
            Build anticipation
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            Launch with an audience that is already excited.
          </h2>

          <p className="mt-6 max-w-sm text-base leading-7 text-white/70">
            Keep your early users engaged, understand your audience, and build
            momentum before launch day.
          </p>
        </div>

        <p className="text-sm text-white/50">
          Built for founders who are building what comes next.
        </p>

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-20 top-[30%] h-56 w-56 rounded-full border border-white/10" />
      </section>

      {/* Form Panel */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
                M
              </span>
              Momentum
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-[#171817]">
              {title}
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#656861]">
              {description}
            </p>
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f6] text-[#171817]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="flex h-20 items-center justify-between">
          <Link className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" href="/">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
              M
            </span>
            Momentum
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm text-[#656861] md:flex">
            <a className="transition-colors hover:text-[#171817]" href="#how-it-works">
              How it works
            </a>
            <a className="transition-colors hover:text-[#171817]" href="#why-momentum">
              Why Momentum
            </a>
          </nav>

          <a
            className="rounded-full bg-[#1d5c43] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#164732]"
            href="#early-access"
          >
            Join early access
          </a>
        </header>

        <section className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-2 text-sm font-medium text-[#47725e]">
              <span className="h-2 w-2 rounded-full bg-[#83b89b]" />
              Built for teams before launch
            </p>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-[#161916] sm:text-6xl lg:text-7xl">
              Know if your launch has
              <span className="text-[#337456]"> momentum.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#626760] sm:text-xl">
              Create a beautiful waitlist, keep early users engaged, and see the
              signal behind your next product launch.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d5c43] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#164732]"
                href="#early-access"
              >
                Start building momentum <ArrowUpRight />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d6d9d3] bg-white px-6 py-3.5 text-sm font-medium text-[#31352f] transition-colors hover:border-[#aeb5ab]"
                href="#how-it-works"
              >
                See how it works
              </a>
            </div>
            <p className="mt-5 text-sm text-[#858a82]">No credit card. Built for your first 1,000 believers.</p>
          </div>

          <div aria-label="Momentum dashboard preview" className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-10 -z-10 rounded-full bg-[#d8eddf] blur-3xl" />
            <div className="rounded-2xl border border-[#dce0d9] bg-white p-3 shadow-[0_25px_70px_-28px_rgba(24,44,33,0.28)] sm:p-4">
              <div className="rounded-xl bg-[#f6f7f4] p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#858a82]">Project overview</p>
                    <p className="mt-1 font-semibold">Goodframe</p>
                  </div>
                  <span className="rounded-full bg-[#e3f2e8] px-3 py-1.5 text-xs font-medium text-[#377458]">Growing</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-[#777d74]">Waitlist</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">1,284</p>
                    <p className="mt-1 text-xs font-medium text-[#4b9470]">+18.4% this week</p>
                  </div>
                  <div className="rounded-xl bg-[#1d5c43] p-4 text-white">
                    <p className="text-xs text-[#cae0d1]">Momentum score</p>
                    <div className="mt-1 flex items-end gap-2">
                      <p className="text-3xl font-semibold tracking-tight">82</p>
                      <p className="mb-1 text-xs text-[#cae0d1]">/ 100</p>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/20">
                      <div className="h-full w-[82%] rounded-full bg-[#b7e2c5]" />
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Engagement</p>
                    <p className="text-xs font-medium text-[#4b9470]">↑ 12%</p>
                  </div>
                  <div className="mt-5 flex h-20 items-end justify-between gap-2">
                    {[36, 48, 42, 65, 55, 78, 92, 69, 84, 100].map((height, index) => (
                      <span
                        className={`w-full rounded-t-sm ${index === 9 ? "bg-[#1d5c43]" : "bg-[#c8dfd0]"}`}
                        key={height}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f1f7f2] text-[#397958]">↗</span>
                  <p className="text-xs leading-5 text-[#626760]">
                    Your latest update is resonating. <strong className="font-semibold text-[#343934]">62% opened it.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-[#e1e4df] bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-medium text-[#47725e]">One focused loop</p>
          <div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">From first signup to a clearer launch signal.</h2>
            <p className="max-w-sm leading-7 text-[#626760]">Everything you need before launch, without stitching together a stack of tools.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#e1e4df] bg-[#e1e4df] md:grid-cols-3">
            {[
              ["01", "Create your project", "Set up your product and get a hosted waitlist page in minutes."],
              ["02", "Build anticipation", "Collect early signups and send thoughtful updates to your audience."],
              ["03", "See the signal", "Turn engagement into a simple Momentum Score and useful insight."],
            ].map(([number, title, description]) => (
              <article className="bg-white p-6 sm:p-8" key={number}>
                <p className="text-sm font-medium text-[#4b9470]">{number}</p>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-xs leading-7 text-[#626760]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="why-momentum">
        <div className="rounded-3xl bg-[#1d5c43] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          <p className="text-sm font-medium text-[#b7e2c5]">Launching soon?</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Turn early interest into launch confidence.</h2>
          <p className="mx-auto mt-5 max-w-lg leading-7 text-[#cce2d3]">Build the audience you need, then understand how excited they really are.</p>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1d5c43] transition-colors hover:bg-[#e8f2eb]"
            href="mailto:hello@momentum.so?subject=Momentum%20early%20access"
            id="early-access"
          >
            Get early access <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}

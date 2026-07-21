export function Problem() {
  return (
    <section className="border-y border-[#e1e4df] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#83b89b]" />

              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#47725e]">
                The problem
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tighter text-[#161916] sm:text-5xl lg:text-6xl">
              A waitlist is only valuable if people still care.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#6d736b]">
              Most founders collect thousands of emails, then disappear for
              months while building. By launch day, the excitement that got
              people to sign up is already gone.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="rounded-3xl border border-[#e1e4df] bg-[#f8f9f7] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-[#e1e4df] pb-5">
                <div>
                  <p className="text-sm font-medium text-[#303530]">
                    Waitlist engagement
                  </p>

                  <p className="mt-1 text-sm text-[#858a82]">
                    Without consistent engagement
                  </p>
                </div>

                <span className="rounded-full bg-[#f3e4df] px-3 py-1.5 text-xs font-medium text-[#9a5b48]">
                  Losing momentum
                </span>
              </div>

              <div className="relative mt-8 h-48 overflow-hidden rounded-2xl border border-[#e1e4df] bg-white">
                <div className="absolute inset-x-0 bottom-0 h-px bg-[#e1e4df]" />

                <div className="absolute inset-y-0 left-10 border-l border-dashed border-[#e5e8e3]" />
                <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#e5e8e3]" />
                <div className="absolute inset-y-0 right-10 border-l border-dashed border-[#e5e8e3]" />

                <div className="absolute left-8 top-8 text-xs text-[#858a82]">
                  Signups
                </div>

                <div className="absolute left-1/2 top-8 -translate-x-1/2 text-xs text-[#858a82]">
                  Building
                </div>

                <div className="absolute right-8 top-8 text-xs text-[#858a82]">
                  Launch
                </div>

                <svg
                  viewBox="0 0 600 180"
                  className="absolute inset-x-0 bottom-5 h-32 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 35 C100 38 140 48 220 75 C300 100 350 115 430 135 C500 150 550 158 600 165"
                    fill="none"
                    stroke="#c88d7b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs text-[#858a82]">Day 1</p>

                  <p className="mt-2 text-xl font-semibold text-[#171817]">
                    100%
                  </p>

                  <p className="mt-1 text-xs text-[#47725e]">
                    Excited
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs text-[#858a82]">Month 2</p>

                  <p className="mt-2 text-xl font-semibold text-[#171817]">
                    61%
                  </p>

                  <p className="mt-1 text-xs text-[#9a5b48]">
                    Fading
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs text-[#858a82]">Launch</p>

                  <p className="mt-2 text-xl font-semibold text-[#171817]">
                    24%
                  </p>

                  <p className="mt-1 text-xs text-[#9a5b48]">
                    Still engaged
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#dce5de] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(30,60,40,0.08)] sm:block lg:-left-8">
              <p className="text-xs text-[#858a82]">
                The real problem
              </p>

              <p className="mt-1 text-sm font-medium text-[#303530]">
                Attention disappears.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-20 border-t border-[#e1e4df] pt-8 lg:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-[#303530]">
              Collecting emails is the beginning.
              <span className="text-[#337456]">
                {" "}
                Keeping people excited is the advantage.
              </span>
            </p>

            <div className="flex items-center gap-2 text-sm text-[#47725e]">
              <span className="h-2 w-2 rounded-full bg-[#83b89b]" />
              Momentum keeps the conversation going.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
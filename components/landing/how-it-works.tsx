import { ArrowRight } from "lucide-react";
import { steps } from "@/componentDummyData/Landingdata";

export function HowItWorks() {
  return (
    <section
      className="border-y border-[#e1e4df] bg-[#f8f9f7]"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#83b89b]" />

              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#47725e] sm:text-sm">
                How it works
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tightert-[#161916] sm:text-4xl md:text-5xl lg:mt-6 lg:text-6xl">
              Build the audience
              <span className="text-[#337456]"> your launch deserves.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#626760] sm:text-lg sm:leading-8 lg:pb-1">
            Momentum turns the time between your first signup and launch day
            into an opportunity to build something that lasts.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-[#d8e3db] lg:block" />

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex min-h-75 flex-col rounded-3xl border border-[#e1e4df] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cdbd] hover:shadow-[0_20px_50px_rgba(30,60,40,0.08)] sm:rounded-[28px] sm:p-7 lg:min-h-80 lg:p-8"
                >
                  {/* Step Header */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#dce8df] bg-[#eef6f0] text-[#337456] transition-colors duration-300 group-hover:bg-[#1d5c43] group-hover:text-white sm:h-12 sm:w-12">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>

                      <span className="text-[10px] font-semibold tracking-[0.14em] text-[#9aa59c] sm:text-xs sm:tracking-[0.16em]">
                        STEP {step.number}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight
                        size={17}
                        className="hidden shrink-0 text-[#a7b9ac] lg:block"
                        strokeWidth={1.6}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-8 flex-1 sm:mt-10">
                    <h3 className="max-w-sm text-lg font-semibold tracking-[-0.03em] text-[#171817] sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#6d736b] sm:text-[15px] sm:leading-7">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-1.5 sm:gap-2">
                    {steps.map((_, progressIndex) => (
                      <span
                        key={progressIndex}
                        className={`h-1 rounded-full transition-all ${
                          progressIndex <= index
                            ? "w-5 bg-[#337456] sm:w-8"
                            : "w-1.5 bg-[#dfe7e1] sm:w-2"
                        }`}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-[#dfe4df] pt-8 sm:mt-16 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-[#858a82]">
              The Momentum loop
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-base font-medium tracking-tight text-[#303530] sm:text-xl">
              <span>Interest</span>
              <span className="text-[#9aaca0]">→</span>
              <span>Engagement</span>
              <span className="text-[#9aaca0]">→</span>
              <span>Understanding</span>
              <span className="text-[#9aaca0]">→</span>
              <span className="text-[#337456]">Momentum</span>
            </div>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6d736b] lg:text-right">
            The goal isn&apos;t just to collect a list of people. It&apos;s to
            build an audience that is still excited when you&apos;re ready to
            launch.
          </p>
        </div>
      </div>
    </section>
  );
}

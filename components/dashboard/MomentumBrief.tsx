import { ArrowUpRight, Lightbulb, Sparkles } from "lucide-react";

export function MomentumBrief() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#dce8df] bg-[#eef6f0] p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d9ebdf] blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#337456] shadow-sm">
            <Sparkles size={17} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#47725e]">
              Momentum Brief
            </p>

            <p className="text-xs text-[#7c897f]">AI-powered insight</p>
          </div>
        </div>

        <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#171817] sm:text-3xl">
          Your launch is gaining momentum.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f6c63] sm:text-base">
          Your waitlist grew by 12.8% this month and engagement is holding
          strong. People are not just signing up — they are actively paying
          attention to your progress.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-sm font-medium text-[#337456]">
            <Lightbulb size={16} />
            <span>Consider sending an update this week.</span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1d5c43] transition-colors hover:text-[#164732]"
          >
            View insights
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

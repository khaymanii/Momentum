import { ArrowUpRight } from "lucide-react";
import { scoreBreakdown } from "@/componentDummyData/DashboardData";

export function MomentumScoreCard() {
  const score = 82;
  const circumference = 2 * Math.PI * 52;
  const progress = circumference - (score / 100) * circumference;

  return (
    <section className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-6">
          <div className="relative h-36 w-36 shrink-0">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#edf1ed"
                strokeWidth="8"
              />

              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#337456"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold tracking-tight text-[#171817]">
                {score}
              </span>

              <span className="text-xs text-[#858981]">/ 100</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#65a47d]" />

              <span className="text-sm font-medium text-[#337456]">
                Strong momentum
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#171817]">
              Your audience is engaged.
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#6d736b]">
              Your waitlist is growing and people are actively interacting with
              your updates.
            </p>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#337456] transition-colors hover:text-[#1d5c43]"
            >
              View detailed insights
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:w-105 lg:grid-cols-1">
          {scoreBreakdown.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-[#f8f9f7] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#47725e]">
                    <Icon size={16} />
                  </div>

                  <span className="text-sm text-[#656861]">{item.label}</span>
                </div>

                <span className="text-sm font-semibold text-[#171817]">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

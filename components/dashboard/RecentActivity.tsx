import { ArrowUpRight } from "lucide-react";
import { activities } from "@/componentDummyData/DashboardData";

export function RecentActivity() {
  return (
    <section className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#858981]">Recent activity</p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#171817]">
            What&apos;s happening
          </h2>
        </div>

        <button
          type="button"
          className="hidden items-center gap-1 text-sm font-medium text-[#337456] transition-colors hover:text-[#1d5c43] sm:flex"
        >
          View all
          <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="mt-6 divide-y divide-[#edf0ec]">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef5f0] text-[#337456]">
                <Icon size={17} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[#303530]">
                  {activity.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#858981]">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-xs text-[#a3aaa3]">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

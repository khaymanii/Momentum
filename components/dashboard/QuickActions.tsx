import { ArrowUpRight } from "lucide-react";
import { actions } from "@/dummyData/DashboardData";

export function QuickActions() {
  return (
    <section className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#858981]">Quick actions</p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#171817]">
            Keep the momentum going
          </h2>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              key={action.title}
              href={action.href}
              className="group flex items-center justify-between rounded-2xl border border-[#edf0ec] p-4 transition-all hover:border-[#cbd8ce] hover:bg-[#f8f9f7]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef5f0] text-[#337456] transition-colors group-hover:bg-[#1d5c43] group-hover:text-white">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#171817]">
                    {action.title}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-[#858981]">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-[#a3aaa3] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#337456]"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

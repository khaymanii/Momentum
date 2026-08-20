"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Download,
  TrendingUp,
} from "lucide-react";

import {
  engagementData,
  growthData,
  stats,
} from "@/appDummyData/dashboard/analytics";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function AnalyticsPage() {
  const maxValue = Math.max(...growthData.map((item) => item.value));

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-[#e5e7e2] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#1d5c43]">
              Audience intelligence
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-[#171817]">
              Analytics
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#858981]">
              Understand how your audience is growing, engaging, and moving
              toward launch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#dfe2dc] bg-white px-4 text-sm font-medium text-[#656861] transition hover:bg-[#f0f2ee]">
              <CalendarDays size={16} />
              Last 30 days
            </button>

            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#1d5c43] px-4 text-sm font-medium text-white transition hover:bg-[#164732]">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#e5e7e2] bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#858981]">{stat.label}</p>

                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#e8f2eb] text-[#1d5c43]">
                    <Icon size={17} />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#171817]">
                    {stat.value}
                  </p>

                  <span
                    className={`mb-1 flex items-center gap-1 text-xs font-medium ${
                      stat.positive ? "text-[#337456]" : "text-[#b35b5b]"
                    }`}
                  >
                    {stat.positive ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <ArrowDownRight size={14} />
                    )}

                    {stat.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main analytics */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Growth chart */}
          <div className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm text-[#858981]">Audience growth</p>

                <div className="mt-2 flex items-baseline gap-3">
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#171817]">
                    1,248
                  </h2>

                  <span className="text-sm font-medium text-[#337456]">
                    +12.8%
                  </span>
                </div>

                <p className="mt-1 text-xs text-[#9a9d97]">
                  Total waitlist members
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#858981]">
                <span className="h-2 w-2 rounded-full bg-[#337456]" />
                Members
              </div>
            </div>

            {/* CSS chart */}
            <div className="mt-10">
              <div className="flex h-64 items-end gap-2 sm:gap-4">
                {growthData.map((item) => {
                  const height = `${(item.value / maxValue) * 100}%`;

                  return (
                    <div
                      key={item.month}
                      className="group flex h-full flex-1 flex-col justify-end gap-3"
                    >
                      <div className="relative flex flex-1 items-end">
                        <div
                          style={{ height }}
                          className="w-full rounded-t-xl bg-[#dcece1] transition-all duration-300 group-hover:bg-[#337456]"
                        >
                          <div className="hidden -translate-y-8 text-center text-xs font-medium text-[#337456] group-hover:block">
                            {item.value}
                          </div>
                        </div>
                      </div>

                      <p className="text-center text-xs text-[#9a9d97]">
                        {item.month}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Engagement breakdown */}
          <div className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f2eb] text-[#1d5c43]">
                <BarChart3 size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-[#171817]">
                  Audience health
                </h2>

                <p className="text-xs text-[#858981]">Engagement breakdown</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {engagementData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#303530]">
                      {item.label}
                    </p>

                    <p className="text-sm font-semibold text-[#171817]">
                      {item.value}%
                    </p>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf0eb]">
                    <div
                      style={{ width: `${item.value}%` }}
                      className="h-full rounded-full bg-[#337456]"
                    />
                  </div>

                  <p className="mt-1 text-xs text-[#9a9d97]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom insights */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#dce8df] bg-[#f5f9f5] p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1d5c43] text-white">
                <TrendingUp size={18} />
              </div>

              <p className="font-semibold text-[#171817]">Strongest growth</p>
            </div>

            <p className="mt-5 text-2xl font-semibold text-[#1d5c43]">
              June → July
            </p>

            <p className="mt-2 text-sm leading-6 text-[#6d736b]">
              Your audience grew by 23.6% this month, your strongest growth
              period so far.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e5e7e2] bg-white p-6">
            <p className="text-sm text-[#858981]">Best performing update</p>

            <h3 className="mt-4 font-semibold text-[#171817]">
              Building in public: Week 4
            </h3>

            <div className="mt-5 flex items-center gap-6">
              <div>
                <p className="text-2xl font-semibold text-[#171817]">82%</p>
                <p className="mt-1 text-xs text-[#858981]">Open rate</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#171817]">41%</p>
                <p className="mt-1 text-xs text-[#858981]">Click rate</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e7e2] bg-white p-6">
            <p className="text-sm text-[#858981]">Recommended action</p>

            <h3 className="mt-4 font-semibold text-[#171817]">
              Re-engage your quiet audience
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6d736b]">
              16% of your audience has not interacted recently. A personal
              founder update could bring them back.
            </p>

            <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#337456]">
              Create re-engagement update
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

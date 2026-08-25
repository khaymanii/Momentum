"use client"

import {
  ArrowUpRight,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import {
  activities,
  chartData,
  stats,
} from "@/appDummyData/dashboard/dashboard";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-375">
        <section className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-[#eef6f0] px-3 py-1.5 text-xs font-medium text-[#337456]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#337456]" />
              Monday, July 21, 2026
            </div>

            <h1 className="text-3xl font-semibold tracking-tighter text-[#171817] sm:text-4xl lg:text-5xl">
              Good morning, {user?name}.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#656861] sm:text-base">
              Your audience is growing. Here&apos;s a look at the momentum
              behind your launch.
            </p>
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#1d5c43] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#164732]">
            <Plus size={17} />
            New update
          </button>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#e2e6e0] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(30,60,40,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#858981]">{stat.label}</p>

                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef6f0] text-[#337456]">
                    <Icon size={17} />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <p className="text-3xl font-semibold tracking-tight text-[#171817]">
                    {stat.value}
                  </p>

                  <span className="mb-1 text-xs font-medium text-[#337456]">
                    ↑ {stat.change}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main grid */}
        <section className="mt-4 grid gap-4 xl:grid-cols-[1.5fr_0.8fr]">
          {/* Growth chart */}
          <div className="min-w-0 rounded-2xl border border-[#e2e6e0] bg-white p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#171817]">
                  Audience growth
                </p>

                <p className="mt-1 text-sm text-[#858981]">
                  New waitlist members over the last 7 days
                </p>
              </div>

              <button className="grid h-9 w-9 place-items-center rounded-lg text-[#858981] hover:bg-[#f0f2ee]">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="mt-8 h-65 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="momentumGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#337456"
                        stopOpacity={0.22}
                      />
                      <stop offset="100%" stopColor="#337456" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} stroke="#edf0ec" />

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9a9d97", fontSize: 12 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9a9d97", fontSize: 12 }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#337456"
                    strokeWidth={2.5}
                    fill="url(#momentumGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Momentum Score */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1d5c43] p-6 text-white">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#b7e2c5]">
                    Momentum Score
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Based on audience engagement
                  </p>
                </div>

                <Sparkles size={20} className="text-[#b7e2c5]" />
              </div>

              <div className="mt-10 flex items-end gap-3">
                <span className="text-7xl font-semibold tracking-[-0.08em]">
                  82
                </span>

                <span className="mb-3 text-sm text-[#b7e2c5]">/ 100</span>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[82%] rounded-full bg-[#b7e2c5]" />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-white/70">Strong momentum</span>

                <span className="flex items-center gap-1 text-sm font-medium text-[#b7e2c5]">
                  <TrendingUp size={15} />
                  +6.2%
                </span>
              </div>

              <button className="mt-8 flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/15">
                View score breakdown
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Bottom grid */}
        <section className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Quick actions */}
          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#171817]">Quick actions</p>
                <p className="mt-1 text-sm text-[#858981]">
                  Keep your momentum moving
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Create an update", "Share progress with your audience"],
                ["Invite your first users", "Grow your waitlist faster"],
                ["View audience insights", "Understand your momentum"],
              ].map(([title, description]) => (
                <button
                  key={title}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#edf0ec] p-3 text-left transition hover:border-[#c9d9cd] hover:bg-[#f8faf8]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#eef6f0] text-[#337456]">
                    <ArrowUpRight size={16} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-[#303530]">
                      {title}
                    </span>

                    <span className="mt-0.5 block truncate text-xs text-[#858981]">
                      {description}
                    </span>
                  </span>

                  <ChevronRight size={16} className="text-[#9a9d97]" />
                </button>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#171817]">Recent activity</p>

                <p className="mt-1 text-sm text-[#858981]">
                  What&apos;s happening with your audience
                </p>
              </div>

              <button className="text-sm font-medium text-[#337456] hover:underline">
                View all
              </button>
            </div>

            <div className="mt-6 divide-y divide-[#edf0ec]">
              {activities.map((activity) => (
                <div
                  key={`${activity.name}-${activity.time}`}
                  className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eef6f0] text-xs font-semibold text-[#337456]">
                    {activity.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-[#303530]">
                      <span className="font-medium">{activity.name}</span>{" "}
                      {activity.action}
                    </p>

                    <p className="mt-1 text-xs text-[#9a9d97]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}

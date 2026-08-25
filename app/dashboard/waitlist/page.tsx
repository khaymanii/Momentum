import {
  Download,
  Filter,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  UserPlus,
  Users,
} from "lucide-react";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

const members = [
  {
    initials: "JD",
    name: "Jordan Davis",
    email: "jordan@example.com",
    status: "Highly engaged",
    score: 94,
    joined: "2 min ago",
  },
  {
    initials: "AK",
    name: "Alex Kim",
    email: "alex@example.com",
    status: "Engaged",
    score: 82,
    joined: "18 min ago",
  },
  {
    initials: "MS",
    name: "Maya Smith",
    email: "maya@example.com",
    status: "Engaged",
    score: 76,
    joined: "42 min ago",
  },
  {
    initials: "RB",
    name: "Ryan Brooks",
    email: "ryan@example.com",
    status: "At risk",
    score: 48,
    joined: "1 hr ago",
  },
  {
    initials: "EC",
    name: "Emma Carter",
    email: "emma@example.com",
    status: "Highly engaged",
    score: 91,
    joined: "2 hrs ago",
  },
  {
    initials: "LW",
    name: "Liam Wilson",
    email: "liam@example.com",
    status: "At risk",
    score: 36,
    joined: "3 hrs ago",
  },
];

const statusStyles: Record<string, string> = {
  "Highly engaged": "bg-[#e8f2eb] text-[#337456]",
  Engaged: "bg-[#eef4f0] text-[#47725e]",
  "At risk": "bg-[#f5eee7] text-[#9a6945]",
};

export default function WaitlistPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-375">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium text-[#337456]">Audience</p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-[#171817] sm:text-4xl">
              Your waitlist
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#656861] sm:text-base">
              Understand the people waiting for your product and how engaged
              they are.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-[#dfe2dc] bg-white px-4 py-3 text-sm font-medium text-[#656861] transition hover:bg-[#f0f2ee]">
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl bg-[#1d5c43] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#164732]">
              <UserPlus size={17} />
              Add member
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">Total members</p>

              <Users size={18} className="text-[#337456]" />
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">1,248</p>

            <p className="mt-2 text-xs font-medium text-[#337456]">
              ↑ 12.8% this month
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <p className="text-sm text-[#858981]">Highly engaged</p>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">684</p>

            <p className="mt-2 text-xs font-medium text-[#337456]">
              54.8% of audience
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <p className="text-sm text-[#858981]">Avg. momentum score</p>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">82</p>

            <p className="mt-2 text-xs font-medium text-[#337456]">
              ↑ 6.2% this month
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <p className="text-sm text-[#858981]">New this week</p>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">86</p>

            <p className="mt-2 text-xs font-medium text-[#337456]">
              ↑ 24.5% from last week
            </p>
          </div>
        </div>

        {/* Members table */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-[#e2e6e0] bg-white">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-[#edf0ec] p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9d97]"
              />

              <input
                type="search"
                placeholder="Search members..."
                className="h-11 w-full rounded-xl border border-[#dfe2dc] bg-[#fbfcfa] pl-10 pr-4 text-sm outline-none transition placeholder:text-[#9a9d97] focus:border-[#8fb29b] focus:ring-4 focus:ring-[#e8f2eb]"
              />
            </div>

            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#dfe2dc] px-3 py-2.5 text-sm text-[#656861] hover:bg-[#f0f2ee]">
                <Filter size={16} />
                <span>Filter</span>
              </button>

              <button className="grid h-10 w-10 place-items-center rounded-xl border border-[#dfe2dc] text-[#656861] hover:bg-[#f0f2ee]">
                <SlidersHorizontal size={16} />
              </button>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-190">
              <thead>
                <tr className="border-b border-[#edf0ec] text-left">
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#9a9d97]">
                    Member
                  </th>

                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#9a9d97]">
                    Momentum
                  </th>

                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#9a9d97]">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#9a9d97]">
                    Joined
                  </th>

                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {members.map((member) => (
                  <tr
                    key={member.email}
                    className="border-b border-[#edf0ec] last:border-0 transition hover:bg-[#fbfcfa]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#eef6f0] text-xs font-semibold text-[#337456]">
                          {member.initials}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-[#303530]">
                            {member.name}
                          </p>

                          <p className="mt-1 text-xs text-[#9a9d97]">
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-[#edf0ec]">
                          <div
                            className="h-full rounded-full bg-[#337456]"
                            style={{ width: `${member.score}%` }}
                          />
                        </div>

                        <span className="text-sm font-medium text-[#303530]">
                          {member.score}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[member.status]}`}
                      >
                        {member.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-[#858981]">
                      {member.joined}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        aria-label={`Options for ${member.name}`}
                        className="grid h-8 w-8 place-items-center rounded-lg text-[#9a9d97] hover:bg-[#f0f2ee]"
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-[#edf0ec] md:hidden">
            {members.map((member) => (
              <div key={member.email} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef6f0] text-xs font-semibold text-[#337456]">
                      {member.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-[#303530]">
                        {member.name}
                      </p>

                      <p className="mt-1 truncate text-xs text-[#9a9d97]">
                        {member.email}
                      </p>
                    </div>
                  </div>

                  <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[#9a9d97] hover:bg-[#f0f2ee]">
                    <MoreHorizontal size={17} />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[member.status]}`}
                  >
                    {member.status}
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 overflow-hidden rounded-full bg-[#edf0ec]">
                      <div
                        className="h-full rounded-full bg-[#337456]"
                        style={{ width: `${member.score}%` }}
                      />
                    </div>

                    <span className="text-sm font-medium text-[#303530]">
                      {member.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-[#edf0ec] px-4 py-4 text-sm text-[#858981] sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p>Showing 6 of 1,248 members</p>

            <div className="flex gap-2">
              <button className="rounded-lg border border-[#dfe2dc] px-3 py-2 text-xs hover:bg-[#f0f2ee]">
                Previous
              </button>

              <button className="rounded-lg border border-[#dfe2dc] px-3 py-2 text-xs hover:bg-[#f0f2ee]">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}

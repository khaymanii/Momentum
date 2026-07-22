import {
  Download,
  Mail,
  MoreHorizontal,
  Search,
  Users,
} from "lucide-react";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

const subscribers = [
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    joined: "Today",
    status: "Active",
  },
  {
    name: "Sarah Williams",
    email: "sarah@example.com",
    joined: "Yesterday",
    status: "Active",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    joined: "2 days ago",
    status: "Active",
  },
  {
    name: "Emma Davis",
    email: "emma@example.com",
    joined: "3 days ago",
    status: "Active",
  },
];

export default function WaitlistPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-[#337456]">
              My Startup
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#171817] sm:text-4xl">
              Waitlist
            </h1>

            <p className="mt-3 text-sm leading-7 text-[#656861] sm:text-base">
              Manage the people waiting to be part of your launch.
            </p>
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#dce2dc] bg-white px-4 py-3 text-sm font-medium text-[#303530] transition hover:bg-[#f8faf8]">
            <Download size={16} />
            Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">
                Total subscribers
              </p>

              <Users size={18} className="text-[#337456]" />
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">
              1,248
            </p>

            <p className="mt-2 text-sm text-[#337456]">
              +12.4% this month
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">
                New this week
              </p>

              <Mail size={18} className="text-[#337456]" />
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">
              142
            </p>

            <p className="mt-2 text-sm text-[#337456]">
              Growing steadily
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">
                Momentum score
              </p>

              <span className="text-sm font-semibold text-[#337456]">
                ↗
              </span>
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#171817]">
              82
            </p>

            <p className="mt-2 text-sm text-[#337456]">
              Strong audience interest
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#e2e6e0] bg-white">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-[#edf0ec] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-[#171817]">
                All subscribers
              </h2>

              <p className="mt-1 text-sm text-[#858981]">
                People who have joined your waitlist.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa59c]"
              />

              <input
                type="search"
                placeholder="Search subscribers..."
                className="h-10 w-full rounded-xl border border-[#dce2dc] bg-[#fbfcfa] pl-10 pr-4 text-sm outline-none transition focus:border-[#337456]"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#edf0ec] text-left text-xs uppercase tracking-wider text-[#858981]">
                  <th className="px-5 py-4 font-medium">
                    Subscriber
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Email
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Joined
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Status
                  </th>

                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {subscribers.map((subscriber) => (
                  <tr
                    key={subscriber.email}
                    className="border-b border-[#f0f2ef] last:border-0 hover:bg-[#fbfcfa]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e8f2eb] text-sm font-semibold text-[#337456]">
                          {subscriber.name.charAt(0)}
                        </span>

                        <span className="text-sm font-medium text-[#303530]">
                          {subscriber.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-[#656861]">
                      {subscriber.email}
                    </td>

                    <td className="px-5 py-4 text-sm text-[#858981]">
                      {subscriber.joined}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-[#e8f2eb] px-3 py-1 text-xs font-medium text-[#337456]">
                        {subscriber.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button className="text-[#858981] hover:text-[#303530]">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-[#edf0ec] md:hidden">
            {subscribers.map((subscriber) => (
              <div
                key={subscriber.email}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e8f2eb] text-sm font-semibold text-[#337456]">
                    {subscriber.name.charAt(0)}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#303530]">
                      {subscriber.name}
                    </p>

                    <p className="truncate text-xs text-[#858981]">
                      {subscriber.email}
                    </p>

                    <p className="mt-1 text-xs text-[#9aa59c]">
                      Joined {subscriber.joined}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-[#e8f2eb] px-2.5 py-1 text-xs font-medium text-[#337456]">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
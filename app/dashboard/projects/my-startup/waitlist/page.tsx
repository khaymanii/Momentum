"use client";

import {
  ArrowLeft,
  Download,
  Mail,
  MoreHorizontal,
  Search,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const subscribers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joined: "Today, 10:42 AM",
    status: "Engaged",
    source: "Landing page",
  },
  {
    id: 2,
    name: "Jamie Williams",
    email: "jamie.williams@example.com",
    joined: "Yesterday, 4:18 PM",
    status: "New",
    source: "Referral",
  },
  {
    id: 3,
    name: "Taylor Smith",
    email: "taylor.smith@example.com",
    joined: "Jul 20, 2026",
    status: "Engaged",
    source: "Landing page",
  },
  {
    id: 4,
    name: "Morgan Brown",
    email: "morgan.brown@example.com",
    joined: "Jul 19, 2026",
    status: "Inactive",
    source: "Landing page",
  },
];

export default function WaitlistPage() {
  const [search, setSearch] = useState("");

  const filteredSubscribers = subscribers.filter(
    (subscriber) =>
      subscriber.name.toLowerCase().includes(search.toLowerCase()) ||
      subscriber.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#f8f9f7] text-[#171817]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Link
            href="/dashboard/projects/my-startup/builder"
            className="flex w-fit items-center gap-2 text-sm text-[#656861] transition hover:text-[#1d5c43]"
          >
            <ArrowLeft size={16} />
            Back to builder
          </Link>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-[#337456]">
                My Startup
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Waitlist
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#656861] sm:text-base">
                Manage and understand the people waiting for your product.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#dfe3dd] bg-white px-4 py-3 text-sm font-medium text-[#656861] transition hover:bg-[#f5f7f4]">
                <Download size={16} />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#1d5c43] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#164732]">
                <Mail size={16} />
                <span className="hidden sm:inline">Send update</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">Total subscribers</p>

              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e8f2eb] text-[#337456]">
                <Users size={17} />
              </span>
            </div>

            <p className="mt-4 text-3xl font-semibold">1,248</p>

            <p className="mt-2 text-xs text-[#337456]">
              +142 this week
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">New this week</p>

              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef6f0] text-[#337456]">
                <UserPlus size={17} />
              </span>
            </div>

            <p className="mt-4 text-3xl font-semibold">142</p>

            <p className="mt-2 text-xs text-[#337456]">
              12.8% increase
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2e6e0] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#858981]">Engagement</p>

              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef6f0] text-[#337456]">
                %
              </span>
            </div>

            <p className="mt-4 text-3xl font-semibold">82%</p>

            <p className="mt-2 text-xs text-[#337456]">
              Healthy audience
            </p>
          </div>
        </div>

        {/* Subscriber table */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-[#e2e6e0] bg-white">
          {/* Table header */}
          <div className="flex flex-col justify-between gap-4 border-b border-[#edf0ec] p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold">All subscribers</h2>

              <p className="mt-1 text-sm text-[#858981]">
                People who joined your waitlist
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#858981]"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search subscribers..."
                className="h-10 w-full rounded-lg border border-[#dfe3dd] bg-[#fbfcfa] pl-9 pr-3 text-sm outline-none transition focus:border-[#337456] focus:ring-4 focus:ring-[#337456]/10"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#edf0ec] text-left text-xs text-[#858981]">
                  <th className="px-5 py-4 font-medium">Subscriber</th>
                  <th className="px-5 py-4 font-medium">Joined</th>
                  <th className="px-5 py-4 font-medium">Source</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr
                    key={subscriber.id}
                    className="border-b border-[#f0f2ef] last:border-0 hover:bg-[#fbfcfa]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e8f2eb] text-xs font-semibold text-[#337456]">
                          {subscriber.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </span>

                        <div>
                          <p className="text-sm font-medium">
                            {subscriber.name}
                          </p>

                          <p className="mt-0.5 text-xs text-[#858981]">
                            {subscriber.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-[#656861]">
                      {subscriber.joined}
                    </td>

                    <td className="px-5 py-4 text-sm text-[#656861]">
                      {subscriber.source}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          subscriber.status === "Engaged"
                            ? "bg-[#e8f2eb] text-[#337456]"
                            : subscriber.status === "New"
                              ? "bg-[#eef3f7] text-[#54728a]"
                              : "bg-[#f1f2ef] text-[#858981]"
                        }`}
                      >
                        {subscriber.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button className="grid h-8 w-8 place-items-center rounded-lg text-[#858981] transition hover:bg-[#f0f2ee]">
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
            {filteredSubscribers.map((subscriber) => (
              <div key={subscriber.id} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f2eb] text-xs font-semibold text-[#337456]">
                      {subscriber.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </span>

                    <div>
                      <p className="text-sm font-medium">
                        {subscriber.name}
                      </p>

                      <p className="mt-1 text-xs text-[#858981]">
                        {subscriber.email}
                      </p>
                    </div>
                  </div>

                  <button className="text-[#858981]">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-[#858981]">
                    Joined {subscriber.joined}
                  </span>

                  <span className="rounded-full bg-[#e8f2eb] px-2.5 py-1 font-medium text-[#337456]">
                    {subscriber.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredSubscribers.length === 0 && (
            <div className="px-5 py-16 text-center">
              <p className="font-medium">No subscribers found</p>

              <p className="mt-2 text-sm text-[#858981]">
                Try searching with a different name or email.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
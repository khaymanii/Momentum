"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Mail,
  MoreHorizontal,
  Plus,
  Send,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

const demoUpdates = [
  {
    id: "",
    title: "We just shipped something exciting",
    description:
      "A quick look at what we have been building behind the scenes.",
    status: "Published",
    date: "Jul 20, 2026",
    recipients: "1,248",
    opened: "68%",
    clicked: "42%",
  },
  {
    id: "",
    title: "A look inside our product journey",
    description:
      "Sharing what we learned while building the next version of Momentum.",
    status: "Published",
    date: "Jul 14, 2026",
    recipients: "1,162",
    opened: "72%",
    clicked: "38%",
  },
  {
    id: "",
    title: "Something new is coming",
    description:
      "A preview of what we are working on next.",
    status: "Draft",
    date: "Last edited Jul 12, 2026",
    recipients: "—",
    opened: "—",
    clicked: "—",
  },
];

export default function UpdatesPage() {
  const [updates, setUpdates] = useState(demoUpdates);
  useEffect(() => {
    fetch("/api/updates")
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) setUpdates(data.updates.map((update: { id: string; title: string; content: string; status: string }) => ({ id: update.id, title: update.title, description: update.content, status: update.status === "published" ? "Published" : "Draft", date: "Recently created", recipients: "—", opened: "—", clicked: "—" })));
      })
      .catch(() => undefined);
  }, []);
  return (
    <DashboardShell><div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[#1d5c43]">Audience</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#171817] sm:text-4xl">
            Updates
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#656861] sm:text-base">
            Keep your audience informed, engaged, and excited about what you
            are building.
          </p>
        </div>

        <Link
          href="/dashboard/updates/new"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1d5c43] px-5 text-sm font-medium text-white transition hover:bg-[#164732]"
        >
          <Plus size={17} />
          New update
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-[#e5e7e2] bg-white p-5">
          <div className="flex items-center gap-2 text-sm text-[#858981]">
            <Mail size={16} />
            Total updates
          </div>

          <p className="mt-3 text-3xl font-semibold text-[#171817]">12</p>

          <p className="mt-2 text-xs text-[#656861]">
            Across your workspace
          </p>
        </div>

        <div className="rounded-2xl border border-[#e5e7e2] bg-white p-5">
          <div className="flex items-center gap-2 text-sm text-[#858981]">
            <Send size={16} />
            Published
          </div>

          <p className="mt-3 text-3xl font-semibold text-[#171817]">10</p>

          <p className="mt-2 text-xs text-[#1d5c43]">
            2 drafts in progress
          </p>
        </div>

        <div className="rounded-2xl border border-[#e5e7e2] bg-white p-5">
          <div className="flex items-center gap-2 text-sm text-[#858981]">
            <BarChart3 size={16} />
            Average open rate
          </div>

          <p className="mt-3 text-3xl font-semibold text-[#171817]">68.4%</p>

          <p className="mt-2 text-xs text-[#1d5c43]">
            ↑ 6.2% from last month
          </p>
        </div>

        <div className="rounded-2xl border border-[#e5e7e2] bg-white p-5">
          <div className="flex items-center gap-2 text-sm text-[#858981]">
            <CheckCircle2 size={16} />
            Engagement
          </div>

          <p className="mt-3 text-3xl font-semibold text-[#171817]">74.2%</p>

          <p className="mt-2 text-xs text-[#1d5c43]">
            Strong audience signal
          </p>
        </div>
      </div>

      {/* Updates list */}
      <div className="mt-10">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#171817]">
            Recent updates
          </h2>

          <p className="mt-1 text-sm text-[#858981]">
            Your latest communications with your audience.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#e5e7e2] bg-white">
          {updates.map((update, index) => (
            <div
              key={update.id || update.title}
              className={`p-5 sm:p-6 ${
                index !== updates.length - 1
                  ? "border-b border-[#edf0eb]"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Update info */}
                <div className="flex min-w-0 items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#e8f2eb] text-[#1d5c43]">
                    {update.status === "Published" ? (
                      <Send size={18} />
                    ) : (
                      <Clock3 size={18} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-[#171817]">
                        {update.title}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          update.status === "Published"
                            ? "bg-[#e8f2eb] text-[#1d5c43]"
                            : "bg-[#f1f2ef] text-[#656861]"
                        }`}
                      >
                        {update.status}
                      </span>
                    </div>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-[#858981]">
                      {update.description}
                    </p>

                    <p className="mt-2 text-xs text-[#9a9d97]">
                      {update.date}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 lg:min-w-82.5">
                  <div className="rounded-xl bg-[#f8f9f7] px-3 py-3">
                    <p className="text-[11px] text-[#858981]">Recipients</p>
                    <p className="mt-1 text-sm font-semibold text-[#171817]">
                      {update.recipients}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f9f7] px-3 py-3">
                    <p className="text-[11px] text-[#858981]">Opened</p>
                    <p className="mt-1 text-sm font-semibold text-[#171817]">
                      {update.opened}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f9f7] px-3 py-3">
                    <p className="text-[11px] text-[#858981]">Clicked</p>
                    <p className="mt-1 text-sm font-semibold text-[#171817]">
                      {update.clicked}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 lg:ml-2">
                  <Link
                    href="/dashboard/updates/new"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfe2dc] px-3 py-2 text-sm font-medium text-[#656861] transition hover:bg-[#f0f2ee]"
                  >
                    View
                    <ArrowUpRight size={14} />
                  </Link>

                  <button
                    aria-label={`More options for ${update.title}`}
                    className="grid h-9 w-9 place-items-center rounded-lg text-[#858981] transition hover:bg-[#f0f2ee] hover:text-[#171817]"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI feature banner */}
      <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-[#1d5c43] p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-[#b7e2c5]">
            Founder AI Assistant
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            Turn your progress into an update your audience wants to read.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#d1e5d7]">
            Let AI help you transform your product progress, ideas, and notes
            into clear, engaging updates for your early audience.
          </p>
        </div>

        <Link
          href="/dashboard/updates/new"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#1d5c43] transition hover:bg-[#e8f2eb]"
        >
          Create with AI
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div></DashboardShell>
  );
}

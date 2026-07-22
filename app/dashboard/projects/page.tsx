import Link from "next/link";

import {
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  Rocket,
  Users,
} from "lucide-react";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

const projects = [
  {
    name: "My Startup",
    description: "The future of creator collaboration.",
    status: "Growing",
    members: "1,248",
    momentum: "82",
    updated: "Updated 2 hours ago",
  },
  {
    name: "Mobile App",
    description: "A better way to manage your daily workflow.",
    status: "Draft",
    members: "—",
    momentum: "—",
    updated: "Created yesterday",
  },
];

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-[#337456]">
              Workspace
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-[#171817] sm:text-4xl">
              Your projects
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#656861] sm:text-base">
              Create and manage the products you are building with Momentum.
            </p>
          </div>

          <Link
  href="/dashboard/projects/new"
  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#1d5c43] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#164732]"
>
  <Plus size={17} />
  New project
</Link>
        </div>

        {/* Project Grid */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-2xl border border-[#e2e6e0] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,60,40,0.07)] sm:p-6"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f2eb] text-[#1d5c43]">
                    <Rocket size={21} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#171817]">
                      {project.name}
                    </h2>

                    <p className="mt-1 text-xs text-[#858981]">
                      {project.updated}
                    </p>
                  </div>
                </div>

                <button
                  aria-label="Project options"
                  className="grid h-9 w-9 place-items-center rounded-lg text-[#858981] transition hover:bg-[#f0f2ee]"
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-[#656861]">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 divide-x divide-[#edf0ec] rounded-xl border border-[#edf0ec] py-4">
                <div className="px-3 text-center">
                  <p className="text-lg font-semibold text-[#171817]">
                    {project.members}
                  </p>

                  <p className="mt-1 text-[11px] text-[#858981]">
                    Members
                  </p>
                </div>

                <div className="px-3 text-center">
                  <p className="text-lg font-semibold text-[#171817]">
                    {project.momentum}
                  </p>

                  <p className="mt-1 text-[11px] text-[#858981]">
                    Score
                  </p>
                </div>

                <div className="px-3 text-center">
                  <p className="text-lg font-semibold text-[#337456]">
                    {project.status}
                  </p>

                  <p className="mt-1 text-[11px] text-[#858981]">
                    Status
                  </p>
                </div>
              </div>

              {/* Open Project */}
             <Link
  href={`/dashboard/projects/${project.name
    .toLowerCase()
    .replaceAll(" ", "-")}/builder`}
  className="mt-5 flex w-full items-center justify-between rounded-xl border border-[#e2e6e0] px-4 py-3 text-sm font-medium text-[#303530] transition hover:border-[#b9cdbd] hover:bg-[#f8faf8]"
>
  Open project
  <ArrowUpRight size={16} />
</Link>
            </article>
          ))}

          {/* Create New Project Card */}
          <Link
  href="/dashboard/projects/new"
  className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-[#cbd8ce] bg-[#fbfcfa] p-6 text-center transition hover:border-[#8fb29b] hover:bg-[#f5f9f6]"
>
  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f2eb] text-[#337456]">
    <Plus size={22} />
  </span>

  <h2 className="mt-5 font-semibold text-[#171817]">
    Create a new project
  </h2>

  <p className="mt-2 max-w-xs text-sm leading-6 text-[#858981]">
    Start building your next audience and track its momentum from day one.
  </p>
</Link>
        </div>

        {/* Bottom Insight */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#dce8df] bg-[#eef6f0] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Users
              className="mt-0.5 shrink-0 text-[#337456]"
              size={19}
            />

            <div>
              <p className="text-sm font-medium text-[#24583d]">
                Your audience is growing
              </p>

              <p className="mt-1 text-sm text-[#47725e]">
                My Startup gained 142 new members this week.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-[#337456]">
            View insights
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}
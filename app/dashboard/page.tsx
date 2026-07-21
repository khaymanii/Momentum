import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium text-[#1d5c43]">
          Monday, July 20, 2026
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#171817] sm:text-4xl">
          Good morning, Founder.
        </h1>

        <p className="mt-3 text-[#656861]">
          Here&apos;s what&apos;s happening with your audience today.
        </p>
      </div>
    </DashboardShell>
  );
}
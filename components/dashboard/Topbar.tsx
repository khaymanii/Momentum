import Link from "next/link";
import { Bell, HelpCircle } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#e5e7e2] bg-[#fbfcfa] px-5 sm:px-6 lg:px-8">
      <div>
        <p className="text-xs text-[#858981]">Workspace</p>

        <p className="mt-1 text-sm font-medium text-[#171817]">
          My Startup
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="hidden h-10 items-center gap-2 rounded-full border border-[#dfe2dc] px-4 text-sm font-medium text-[#656861] transition-colors hover:bg-[#f0f2ee] sm:flex"
        >
          <HelpCircle size={16} />

          Help
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#dfe2dc] text-[#656861] transition-colors hover:bg-[#f0f2ee]"
        >
          <Bell size={17} strokeWidth={1.8} />
        </button>

        <Link
          href="/dashboard/settings"
          className="grid h-10 w-10 place-items-center rounded-full bg-[#dfe9e2] text-sm font-semibold text-[#1d5c43]"
        >
          AF
        </Link>
      </div>
    </header>
  );
}
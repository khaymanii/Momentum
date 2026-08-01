import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-[#e5e7e2] bg-[#fbfcfa] px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="grid h-10 w-10 place-items-center rounded-xl border border-[#dfe2dc] text-[#656861] hover:bg-[#f0f2ee] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="hidden text-xs text-[#858981] sm:block">Workspace</p>

          <p className="text-sm font-semibold text-[#171817] sm:mt-0.5">
            My Startup
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          className="hidden h-10 items-center gap-2 rounded-xl border border-[#dfe2dc] px-3 text-sm text-[#656861] transition-colors hover:bg-[#f0f2ee] sm:flex"
          aria-label="Search"
        >
          <Search size={16} />
          <span>Search</span>
          <kbd className="ml-2 rounded-md bg-[#f0f2ee] px-1.5 py-0.5 text-[10px]">
            ⌘K
          </kbd>
        </button>

        <button
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#dfe2dc] text-[#656861] hover:bg-[#f0f2ee]"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#1d5c43]" />
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

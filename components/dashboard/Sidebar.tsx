"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  Mail,
  Settings,
  Users,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    label: "Waitlist",
    href: "/dashboard/waitlist",
    icon: Users,
  },
  {
    label: "Updates",
    href: "/dashboard/updates",
    icon: Mail,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-[#e5e7e2] bg-[#fbfcfa] lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-[#e5e7e2] px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-[#171817]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
            M
          </span>

          Momentum
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a9d97]">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[#e8f0eb] font-medium text-[#1d5c43]"
                    : "text-[#656861] hover:bg-[#f0f2ee] hover:text-[#171817]"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />

                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#656861] transition-colors hover:bg-[#f0f2ee] hover:text-[#171817]"
          >
            <Settings size={18} strokeWidth={1.8} />
            Settings
          </Link>

          <div className="mt-4 border-t border-[#e5e7e2] pt-4">
            <div className="flex items-center gap-3 rounded-xl px-3 py-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#dfe9e2] text-sm font-semibold text-[#1d5c43]">
                AF
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#171817]">
                  Founder
                </p>

                <p className="truncate text-xs text-[#858981]">
                  founder@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut, Settings, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase-client";
import { useAuthStore } from "@/stores/auth-store";
import { navigation } from "@/componentDummyData/DashboardData";

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const clear = useAuthStore((state) => state.clear);
  const initials = (user?.name || user?.email || "Founder")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  async function logout() {
    await signOut(firebaseAuth);
    await fetch("/api/auth/session", { method: "DELETE" });
    clear();
    router.push("/sign-in");
    router.refresh();
  }

  return (
    <>
      {open && (
        <button
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-70 flex-col
          border-r border-[#e5e7e2] bg-[#fbfcfa]
          transition-transform duration-300
          lg:static lg:z-auto lg:w-64 lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#e5e7e2] px-6">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-[#171817]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1d5c43] text-sm font-bold text-white">
              M
            </span>
            Momentum
          </Link>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-lg text-[#656861] hover:bg-[#f0f2ee] lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6">
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
                  onClick={onClose}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${
                    isActive
                      ? "bg-[#e8f0eb] font-medium text-[#1d5c43]"
                      : "text-[#656861] hover:bg-[#f0f2ee] hover:text-[#171817]"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2.2 : 1.8}
                    className="shrink-0"
                  />

                  <span>{item.label}</span>

                  {item.label === "Waitlist" && (
                    <span className="ml-auto rounded-full bg-[#e8f0eb] px-2 py-0.5 text-[10px] font-semibold text-[#1d5c43]">
                      1.2k
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-8">
            <Link
              href="/dashboard/settings"
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#656861] transition-colors hover:bg-[#f0f2ee] hover:text-[#171817]"
            >
              <Settings size={18} />
              Settings
            </Link>

            <button
              onClick={logout}
              className="mt-5 w-full border-t border-[#e5e7e2] pt-5 text-left"
            >
              <div className="flex items-center gap-3 rounded-xl px-2 py-2">
                <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-[#dfe9e2] text-sm font-semibold text-[#1d5c43]">
                  {user?.image ? (
                    <Image
                      width={40}
                      height={40}
                      src={user.image}
                      alt="Your profile"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    initials
                  )}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#171817]">
                    {user?.name || "Founder"}
                  </p>

                  <p className="truncate text-xs text-[#858981]">
                    {user?.email || ""}
                  </p>
                </div>

                <LogOut size={16} className="ml-auto shrink-0 text-[#9a9d97]" />
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

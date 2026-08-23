"use client";

import { create } from "zustand";

type User = { uid: string; email: string | null; name: string | null; image: string | null };
type AuthState = { user: User | null; loading: boolean; hydrate: () => Promise<void>; clear: () => void };

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  hydrate: async () => {
    try {
      const response = await fetch("/api/auth/session");
      set({ user: response.ok ? (await response.json()).user : null });
    } finally { set({ loading: false }); }
  },
  clear: () => set({ user: null, loading: false }),
}));

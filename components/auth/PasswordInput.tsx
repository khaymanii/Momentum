"use client";

import { useState } from "react";

type PasswordInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export function PasswordInput({
  label,
  name,
  placeholder = "Enter your password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#171817]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-[#dfe2dc] bg-white px-4 pr-20 text-sm text-[#171817] outline-none transition-colors placeholder:text-[#9a9d97] focus:border-[#1d5c43] focus:ring-2 focus:ring-[#1d5c43]/10"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#656861] hover:text-[#1d5c43]"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Eye,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
  Type,
  Users,
} from "lucide-react";
import Link from "next/link";

const brandColors = [
  "#1d5c43",
  "#2563eb",
  "#7c3aed",
  "#db2777",
  "#ea580c",
  "#111827",
];

export default function WaitlistBuilderPage() {
  const [projectName, setProjectName] = useState("My Startup");

  const [headline, setHeadline] = useState(
    "Be the first to experience what's next."
  );

  const [description, setDescription] = useState(
    "Join the waitlist and be part of something exciting from the very beginning."
  );

  const [buttonText, setButtonText] = useState("Join the waitlist");

  const [brandColor, setBrandColor] = useState("#1d5c43");

  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop"
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7f4]">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#e1e5e0] bg-white px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/projects"
            className="grid h-9 w-9 place-items-center rounded-lg text-[#656861] transition hover:bg-[#f0f2ee]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div className="hidden h-5 w-px bg-[#e1e5e0] sm:block" />

          <div>
            <p className="text-xs text-[#858981]">Project</p>

            <p className="text-sm font-semibold text-[#171817]">
              {projectName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden items-center gap-2 rounded-lg border border-[#dfe3dd] px-3 py-2 text-sm font-medium text-[#656861] transition hover:bg-[#f5f7f4] sm:flex">
            <Eye size={16} />
            Preview
          </button>

<Link
  href="/dashboard/projects/my-startup/waitlist"
  className="hidden items-center gap-2 rounded-lg border border-[#dfe3dd] px-3 py-2 text-sm font-medium text-[#656861] transition hover:bg-[#f5f7f4] sm:flex"
>
  <Users size={16} />
  Waitlist
</Link>

          <button className="rounded-lg border border-[#dfe3dd] px-3 py-2 text-sm font-medium text-[#656861] transition hover:bg-[#f5f7f4]">
            Save
          </button>

        <Link
  href="/w/my-startup"
  className="rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:px-4"
  style={{ backgroundColor: brandColor }}
>
  Publish
</Link>
        </div>
      </header>

      {/* Builder */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Settings Panel */}
        <aside className="w-full shrink-0 border-b border-[#e1e5e0] bg-white lg:w-95 lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <div className="p-5 sm:p-6">
            {/* Panel Header */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#337456]">
                Waitlist builder
              </p>

              <h1 className="mt-2 text-xl font-semibold tracking-tight text-[#171817]">
                Customize your page
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#858981]">
                Create a waitlist page that reflects your product and converts
                early interest into signups.
              </p>
            </div>

            {/* Project Details */}
            <div className="mt-8">
              <div className="flex items-center gap-2">
                <Type size={16} className="text-[#337456]" />

                <h2 className="text-sm font-semibold text-[#303530]">
                  Content
                </h2>
              </div>

              {/* Project Name */}
              <div className="mt-5">
                <label
                  htmlFor="projectName"
                  className="text-xs font-medium text-[#656861]"
                >
                  Project name
                </label>

                <input
                  id="projectName"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                  className="mt-2 h-11 w-full rounded-xl border border-[#dce1dc] px-3 text-sm outline-none transition focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
                />
              </div>

              {/* Headline */}
              <div className="mt-5">
                <label
                  htmlFor="headline"
                  className="text-xs font-medium text-[#656861]"
                >
                  Headline
                </label>

                <textarea
                  id="headline"
                  value={headline}
                  onChange={(event) => setHeadline(event.target.value)}
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-[#dce1dc] px-3 py-3 text-sm leading-6 outline-none transition focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
                />
              </div>

              {/* Description */}
              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="text-xs font-medium text-[#656861]"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-[#dce1dc] px-3 py-3 text-sm leading-6 outline-none transition focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
                />
              </div>

              {/* Button Text */}
              <div className="mt-5">
                <label
                  htmlFor="buttonText"
                  className="text-xs font-medium text-[#656861]"
                >
                  Button text
                </label>

                <input
                  id="buttonText"
                  value={buttonText}
                  onChange={(event) => setButtonText(event.target.value)}
                  className="mt-2 h-11 w-full rounded-xl border border-[#dce1dc] px-3 text-sm outline-none transition focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
                />
              </div>
            </div>

            {/* Brand */}
            <div className="mt-9 border-t border-[#edf0ec] pt-7">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-[#337456]" />

                <h2 className="text-sm font-semibold text-[#303530]">
                  Brand appearance
                </h2>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#858981]">
                Choose a color that represents your project.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {brandColors.map((color) => {
                  const isSelected = brandColor === color;

                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setBrandColor(color)}
                      className={`grid h-9 w-9 place-items-center rounded-full transition ${
                        isSelected
                          ? "ring-2 ring-offset-2 ring-[#6e9f80]"
                          : ""
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select ${color}`}
                    >
                      {isSelected && (
                        <Check size={16} className="text-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Assistant */}
            <div className="mt-9 rounded-2xl border border-[#dce8df] bg-[#eef6f0] p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#337456]">
                  <Sparkles size={17} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#24583d]">
                    Need help with your copy?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#47725e]">
                    Momentum AI can help you create compelling waitlist copy.
                  </p>

                  <button className="mt-3 text-xs font-semibold text-[#337456]">
                    Generate with AI →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Preview Area */}
        <main className="flex min-h-160 flex-1 flex-col">
          {/* Preview Toolbar */}
          <div className="flex items-center justify-between border-b border-[#e1e5e0] bg-white px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#303530]">
                Live preview
              </span>

              <span className="hidden rounded-full bg-[#eef6f0] px-2 py-1 text-[10px] font-medium text-[#337456] sm:block">
                Updates live
              </span>
            </div>

            <div className="flex items-center rounded-lg border border-[#dfe3dd] p-1">
              <button
                onClick={() => setPreviewMode("desktop")}
                className={`grid h-8 w-8 place-items-center rounded-md transition ${
                  previewMode === "desktop"
                    ? "bg-[#eef6f0] text-[#337456]"
                    : "text-[#858981]"
                }`}
              >
                <Monitor size={16} />
              </button>

              <button
                onClick={() => setPreviewMode("mobile")}
                className={`grid h-8 w-8 place-items-center rounded-md transition ${
                  previewMode === "mobile"
                    ? "bg-[#eef6f0] text-[#337456]"
                    : "text-[#858981]"
                }`}
              >
                <Smartphone size={16} />
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-1 items-center justify-center overflow-auto bg-[#edf0ec] p-5 sm:p-8 lg:p-12">
            <div
              className={`relative min-h-130 overflow-hidden rounded-2xl border border-[#dfe4df] bg-white shadow-[0_20px_60px_rgba(30,60,40,0.1)] transition-all duration-300 ${
                previewMode === "mobile"
                  ? "w-80"
                  : "w-full max-w-4xl"
              }`}
            >
              {/* Preview Navbar */}
              <div className="flex items-center justify-between border-b border-[#edf0ec] px-5 py-4 sm:px-8">
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: brandColor }}
                  >
                    {projectName.charAt(0).toUpperCase()}
                  </span>

                  <span className="text-sm font-semibold text-[#171817]">
                    {projectName}
                  </span>
                </div>

                <span className="text-xs text-[#858981]">
                  Coming soon
                </span>
              </div>

              {/* Preview Content */}
              <div className="flex min-h-115 items-center justify-center px-6 py-16 text-center sm:px-10">
                <div className="w-full max-w-xl">
                  <div
                    className="mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: brandColor }}
                  >
                    <Sparkles size={24} />
                  </div>

                  <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#171817] sm:text-5xl">
                    {headline}
                  </h2>

                  <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#656861] sm:text-base">
                    {description}
                  </p>

                  {/* Email Form */}
                  <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 min-w-0 flex-1 rounded-xl border border-[#dce1dc] px-4 text-sm outline-none"
                    />

                    <button
                      className="h-12 shrink-0 rounded-xl px-5 text-sm font-medium text-white"
                      style={{ backgroundColor: brandColor }}
                    >
                      {buttonText}
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-[#9aa09a]">
                    Join early. Be part of what comes next.
                  </p>
                </div>
              </div>

              {/* Preview Footer */}
              <div className="border-t border-[#edf0ec] px-5 py-4 text-center">
                <p className="text-[10px] text-[#9aa09a]">
                  Powered by Momentum
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
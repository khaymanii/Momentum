"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Eye,
  Mail,
  Send,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

export default function NewUpdatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const generateDraft = () => {
    setTitle("We just shipped something exciting");
    setContent(
      "We've been working behind the scenes to make Momentum better for founders building their next big idea.\n\nToday, we're excited to share a new update with you. Your feedback and support continue to shape what we're building.\n\nMore exciting things are coming soon."
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-[#e5e7e2] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <Link
            href="/dashboard/updates"
            className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#dfe2dc] text-[#656861] transition hover:bg-[#f0f2ee]"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <p className="text-sm font-medium text-[#1d5c43]">
              Founder communication
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#171817] sm:text-3xl">
              Create an update
            </h1>

            <p className="mt-2 text-sm text-[#858981]">
              Keep your audience informed about what you&apos;re building.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#dfe2dc] px-4 text-sm font-medium text-[#656861] transition hover:bg-[#f0f2ee]">
            <Eye size={16} />
            Preview
          </button>

          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#1d5c43] px-4 text-sm font-medium text-white transition hover:bg-[#164732]">
            <Send size={16} />
            Send update
          </button>
        </div>
      </div>

      {/* Main workspace */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* Editor */}
        <div className="rounded-3xl border border-[#e5e7e2] bg-white">
          <div className="border-b border-[#edf0eb] px-6 py-5 sm:px-8">
            <div className="flex items-center gap-2">
              <Mail size={17} className="text-[#1d5c43]" />

              <h2 className="font-semibold text-[#171817]">
                Update content
              </h2>
            </div>

            <p className="mt-1 text-sm text-[#858981]">
              Write something your audience will want to read.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="text-sm font-medium text-[#303530]"
              >
                Title
              </label>

              <input
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="What's new with your product?"
                className="mt-2 h-12 w-full rounded-xl border border-[#dfe2dc] bg-[#fbfcfa] px-4 text-sm text-[#171817] outline-none transition placeholder:text-[#a2a69f] focus:border-[#6d9d7e] focus:ring-4 focus:ring-[#e8f2eb]"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="content"
                  className="text-sm font-medium text-[#303530]"
                >
                  Content
                </label>

                <span className="text-xs text-[#9a9d97]">
                  {content.length} characters
                </span>
              </div>

              <textarea
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Share what's happening behind the scenes..."
                rows={13}
                className="mt-2 w-full resize-none rounded-xl border border-[#dfe2dc] bg-[#fbfcfa] p-4 text-sm leading-7 text-[#171817] outline-none transition placeholder:text-[#a2a69f] focus:border-[#6d9d7e] focus:ring-4 focus:ring-[#e8f2eb]"
              />
            </div>

            {/* Formatting hints */}
            <div className="flex flex-wrap gap-2 border-t border-[#edf0eb] pt-5">
              {["Bold", "Link", "Image", "Button"].map((item) => (
                <button
                  key={item}
                  className="rounded-lg border border-[#dfe2dc] px-3 py-2 text-xs font-medium text-[#656861] transition hover:bg-[#f0f2ee]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <aside className="h-fit rounded-3xl border border-[#dce8df] bg-[#f5f9f5]">
          <div className="border-b border-[#dce8df] p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1d5c43] text-white">
                <Sparkles size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-[#171817]">
                  Founder AI
                </h2>

                <p className="text-xs text-[#6d736b]">
                  Your writing assistant
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6">
            <div>
              <p className="text-sm font-medium text-[#303530]">
                Need help writing?
              </p>

              <p className="mt-2 text-sm leading-6 text-[#6d736b]">
                Give us a few details about your progress and AI will help
                turn your thoughts into an engaging update.
              </p>
            </div>

            <div className="space-y-2">
              {[
                "Write an update from my notes",
                "Make this more engaging",
                "Make this sound more personal",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#dce8df] bg-white p-3 text-left text-sm text-[#4d554e] transition hover:border-[#9dbba5] hover:bg-[#fbfdfb]"
                >
                  <WandSparkles size={15} className="shrink-0 text-[#337456]" />
                  {suggestion}
                </button>
              ))}
            </div>

            <button
              onClick={generateDraft}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d5c43] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#164732]"
            >
              <Sparkles size={16} />
              Generate a draft
            </button>

            <div className="rounded-2xl border border-[#dce8df] bg-white p-4">
              <p className="text-xs font-medium text-[#858981]">
                Tip from Momentum
              </p>

              <p className="mt-2 text-sm leading-6 text-[#4d554e]">
                The best founder updates feel personal. Share the progress,
                the challenge, or the small win behind what you&apos;re building.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Audience selection */}
      <div className="mt-6 rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f2eb] text-[#1d5c43]">
            <Mail size={18} />
          </div>

          <div>
            <h2 className="font-semibold text-[#171817]">
              Choose your audience
            </h2>

            <p className="mt-1 text-sm text-[#858981]">
              Decide who should receive this update.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Everyone",
              description: "Send to your entire waitlist",
            },
            {
              title: "Highly engaged",
              description: "Your most active audience members",
            },
            {
              title: "Re-engagement",
              description: "People who haven't opened recent updates",
            },
          ].map((audience, index) => (
            <button
              key={audience.title}
              className={`rounded-2xl border p-4 text-left transition ${
                index === 0
                  ? "border-[#7da58a] bg-[#f5f9f5]"
                  : "border-[#e5e7e2] hover:border-[#b9cdbd]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#171817]">
                  {audience.title}
                </p>

                {index === 0 && (
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#1d5c43] text-white">
                    <Check size={12} />
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs leading-5 text-[#858981]">
                {audience.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
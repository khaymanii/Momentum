"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe2,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const projectTypes = [
  {
    id: "startup",
    title: "Startup",
    description: "A new product or company you're building.",
    icon: Rocket,
  },
  {
    id: "community",
    title: "Community",
    description: "Build an audience around an idea or movement.",
    icon: Users,
  },
  {
    id: "product",
    title: "Product",
    description: "Launch a digital product or service.",
    icon: Sparkles,
  },
];

export default function NewProjectPage() {
  const [selectedType, setSelectedType] = useState("startup");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function createProject() {
    setError("");
    if (!name.trim()) return setError("Enter a project name to continue.");
    setSaving(true);
    try {
      const response = await fetch("/api/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, description, website, type: selectedType }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not create project.");
      router.push(`/dashboard/projects/${data.project.id}/builder`);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not create project."); }
    finally { setSaving(false); }
  }

  return (
    <div className="min-h-screen bg-[#f8f9f7]">
      {/* Header */}
      <header className="flex h-20 items-center border-b border-[#e1e4df] bg-white px-6 lg:px-10">
        <Link
          href="/dashboard/projects"
          className="flex items-center gap-2 text-sm font-medium text-[#656861] transition hover:text-[#171817]"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        <div className="mx-auto flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#1d5c43] text-sm font-bold text-white">
            M
          </span>

          <span className="font-semibold tracking-tight text-[#171817]">
            Create project
          </span>
        </div>

        <div className="w-32" />
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* Intro */}
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#e8f2eb] text-[#1d5c43]">
            <Rocket size={25} />
          </div>

          <p className="mt-6 text-sm font-medium text-[#337456]">
            Step 1 of 3
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#171817] sm:text-5xl">
            What are you building?
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#656861]">
            Tell us a little about your project. This will help Momentum create
            the right foundation for your launch community.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-3xl border border-[#e1e4df] bg-white p-6 shadow-[0_10px_40px_rgba(30,60,40,0.04)] sm:p-8">
          {/* Project Name */}
          <div>
            <label
              htmlFor="project-name"
              className="text-sm font-medium text-[#303530]"
            >
              Project name
            </label>

            <input
              id="project-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. My Startup"
              className="mt-2 h-12 w-full rounded-xl border border-[#dce1dc] bg-white px-4 text-sm text-[#171817] outline-none transition placeholder:text-[#a2a8a1] focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
            />

            <p className="mt-2 text-xs text-[#858981]">
              You can change this later.
            </p>
          </div>

          {/* Description */}
          <div className="mt-7">
            <label
              htmlFor="description"
              className="text-sm font-medium text-[#303530]"
            >
              What are you building?
            </label>

            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Tell your audience what your project is about..."
              className="mt-2 w-full resize-none rounded-xl border border-[#dce1dc] bg-white px-4 py-3 text-sm leading-6 text-[#171817] outline-none transition placeholder:text-[#a2a8a1] focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
            />

            <p className="mt-2 text-xs text-[#858981]">
              A clear description helps your audience understand your vision.
            </p>
          </div>

          {/* Project Type */}
          <div className="mt-7">
            <p className="text-sm font-medium text-[#303530]">
              What type of project is this?
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;

                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`relative rounded-2xl border p-4 text-left transition ${
                      isSelected
                        ? "border-[#6e9f80] bg-[#eef6f0] ring-2 ring-[#dcece0]"
                        : "border-[#e1e4df] hover:border-[#b9cdbd] hover:bg-[#fbfcfa]"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-[#1d5c43] text-white">
                        <Check size={12} />
                      </span>
                    )}

                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl ${
                        isSelected
                          ? "bg-[#dcece0] text-[#1d5c43]"
                          : "bg-[#f0f2ee] text-[#656861]"
                      }`}
                    >
                      <Icon size={18} />
                    </span>

                    <p className="mt-4 text-sm font-semibold text-[#171817]">
                      {type.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#858981]">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Website */}
          <div className="mt-7">
            <label
              htmlFor="website"
              className="flex items-center gap-2 text-sm font-medium text-[#303530]"
            >
              <Globe2 size={16} />
              Website
              <span className="font-normal text-[#9aa09a]">
                Optional
              </span>
            </label>

            <input
              id="website"
              type="url"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              placeholder="https://yourproject.com"
              className="mt-2 h-12 w-full rounded-xl border border-[#dce1dc] bg-white px-4 text-sm text-[#171817] outline-none transition placeholder:text-[#a2a8a1] focus:border-[#6e9f80] focus:ring-4 focus:ring-[#e8f2eb]"
            />
          </div>

          {/* Action */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#edf0ec] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/dashboard/projects"
              className="text-center text-sm font-medium text-[#656861] transition hover:text-[#171817]"
            >
              Cancel
            </Link>

            <button
              type="button"
              onClick={createProject}
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d5c43] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#164732]"
            >
              {saving ? "Creating..." : "Continue"}
              <ArrowRight size={17} />
            </button>
          </div>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </div>

        {/* Trust Message */}
        <p className="mt-6 text-center text-xs text-[#858981]">
          You can update your project details anytime from your workspace.
        </p>
      </main>
    </div>
  );
}

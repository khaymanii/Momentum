"use client";

<<<<<<< HEAD
import { SubmitEvent, useEffect, useState } from "react";
=======
import { SubmitEvent, useState } from "react";
>>>>>>> 81a8a0f855afc339975a7bc4a4cafe573612fc9d
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

type WaitlistPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

<<<<<<< HEAD
export default function WaitlistPage({ params }: WaitlistPageProps) {
=======
export default function WaitlistPage({}: WaitlistPageProps) {
>>>>>>> 81a8a0f855afc339975a7bc4a4cafe573612fc9d
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [slug, setSlug] = useState("");
  const [project, setProject] = useState<{ name: string; memberCount: number; waitlist: { headline: string; description: string; buttonText: string; brandColor: string } } | null>(null);

  useEffect(() => { params.then(({ slug: value }) => { setSlug(value); fetch(`/api/public/w/${encodeURIComponent(value)}`).then(async (response) => { const data = await response.json(); if (!response.ok) throw new Error(data.error); setProject(data.project); }).catch((cause) => setError(cause.message)); }); }, [params]);
  const projectName = project?.name ?? "Loading...";

<<<<<<< HEAD
  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
=======
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
>>>>>>> 81a8a0f855afc339975a7bc4a4cafe573612fc9d
    event.preventDefault();

    if (!email.trim()) return;

    setLoading(true); setError("");
    try { const response = await fetch(`/api/public/w/${encodeURIComponent(slug)}/subscribers`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Could not join the waitlist."); setSubmitted(true); setEmail(""); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Could not join the waitlist."); }
    finally { setLoading(false); }
  }

  return (
    <main className="min-h-screen bg-[#f8f9f7] text-[#171817]">
      {/* Navigation */}
      <header className="border-b border-[#e1e4df] bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#1d5c43] text-sm font-bold text-white">
              M
            </span>

            <span className="font-semibold tracking-tight">{projectName}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#858981]">
            <span className="h-2 w-2 rounded-full bg-[#83b89b]" />
            Coming soon
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center px-6 py-20 text-center lg:px-8">
          <div className="w-full max-w-3xl">
            {/* Badge */}
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#dce8df] bg-white px-4 py-2 text-sm text-[#47725e] shadow-sm">
              <Sparkles size={15} />
              You&apos;re early
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#161916] sm:text-6xl lg:text-8xl">
<<<<<<< HEAD
              {project?.waitlist.headline ?? "The future is almost here."}
=======
              The future is
              <span className="block text-[#337456]">almost here.</span>
>>>>>>> 81a8a0f855afc339975a7bc4a4cafe573612fc9d
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#626760] sm:text-xl">
<<<<<<< HEAD
              {project?.waitlist.description ?? "Be one of the first to experience what we are building."}
=======
              Be one of the first to experience what we are building. Join the
              waitlist and get early access when we launch.
>>>>>>> 81a8a0f855afc339975a7bc4a4cafe573612fc9d
            </p>

            {/* Signup Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="h-14 flex-1 rounded-full border border-[#d6dcd6] bg-white px-5 text-sm outline-none transition focus:border-[#337456] focus:ring-4 focus:ring-[#337456]/10"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1d5c43] px-7 text-sm font-medium text-white transition hover:bg-[#164732] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Joining..." : project?.waitlist.buttonText ?? "Join the waitlist"}

                  {!loading && <ArrowUpRight size={17} />}
                </button>
              </form>
            ) : (
              <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-[#cce0d1] bg-[#eef6f0] px-5 py-4 text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#337456] text-white">
                  <Check size={18} />
                </span>

                <div>
                  <p className="font-medium text-[#24583d]">
                    You&apos;re on the waitlist!
                  </p>

                  <p className="mt-1 text-sm text-[#47725e]">
                    We&apos;ll let you know when we&apos;re ready to launch.
                  </p>
                </div>
              </div>
            )}
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

            <p className="mt-5 text-sm text-[#858981]">
              No spam. Just occasional updates about the launch.
            </p>

            {/* Social proof */}
            <div className="mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-[#e1e4df] bg-white px-5 py-3 shadow-sm">
              <div className="flex -space-x-2">
                {["A", "J", "K", "M"].map((letter) => (
                  <span
                    key={letter}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#e8f2eb] text-xs font-semibold text-[#337456]"
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <span className="text-sm text-[#626760]">
                Join {project?.memberCount ?? 0}+ people waiting for launch
              </span>
            </div>

            {/* Benefits */}
            <div className="mx-auto mt-16 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
              {["Early access", "Exclusive updates", "Launch benefits"].map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-[#626760]"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e5f1e9] text-[#337456]">
                      <Check size={14} />
                    </span>

                    {benefit}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e1e4df] bg-white py-6">
        <p className="text-center text-xs text-[#858981]">
          Built with Momentum
        </p>
      </footer>
    </main>
  );
}

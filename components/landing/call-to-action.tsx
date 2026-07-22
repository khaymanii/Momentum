import { ArrowUpRight } from "./arrow-up-right";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl bg-[#1d5c43] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
        <p className="text-sm font-medium text-[#b7e2c5]">Your launch starts here</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Stop collecting emails. Start building momentum.</h2>
        <Link
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1d5c43] transition-colors hover:bg-[#e8f2eb]"
          href="/sign-up"
          id="early-access"
        >
          Create your first waitlist <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

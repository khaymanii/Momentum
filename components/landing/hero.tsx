import Link from "next/link";
import { ArrowUpRight } from "./arrow-up-right";
import { ProductPreview } from "./product-preview";

export function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
      <div className="max-w-2xl">
        <p className="mb-6 flex items-center gap-2 text-sm font-medium text-[#47725e]">
          <span className="h-2 w-2 rounded-full bg-[#83b89b]" />
          Built for teams before launch
        </p>

        <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-[#161916] sm:text-6xl lg:text-7xl">
          Know if your launch has
          <span className="text-[#337456]"> momentum.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-[#626760] sm:text-xl">
          Create a beautiful waitlist, keep early users engaged, and see the
          signal behind your next product launch.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d5c43] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#164732]"
            href="/sign-up"
          >
            Start building momentum <ArrowUpRight />
          </Link>

          <Link
            className="inline-flex items-center justify-center rounded-full border border-[#d6d9d3] bg-white px-6 py-3.5 text-sm font-medium text-[#31352f] transition-colors hover:border-[#aeb5ab]"
            href="#how-it-works"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-5 text-sm text-[#858a82]">
          No credit card. Built for your first 1,000 believers.
        </p>
      </div>

      <ProductPreview />
    </section>
  );
}
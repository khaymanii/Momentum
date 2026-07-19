import { ArrowUpRight } from "./arrow-up-right";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="why-momentum">
      <div className="rounded-3xl bg-[#1d5c43] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
        <p className="text-sm font-medium text-[#b7e2c5]">Launching soon?</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Turn early interest into launch confidence.</h2>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-[#cce2d3]">Build the audience you need, then understand how excited they really are.</p>
        <a
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1d5c43] transition-colors hover:bg-[#e8f2eb]"
          href="mailto:hello@momentum.so?subject=Momentum%20early%20access"
          id="early-access"
        >
          Get early access <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}

const steps = [
  "Create your project",
  "Share your waitlist page",
  "Collect early users",
  "Send founder updates",
  "Track engagement",
  "Launch with momentum",
];

export function HowItWorks() {
  return (
    <section className="border-y border-[#e1e4df] bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-medium text-[#47725e]">How it works</p>
        <div className="mt-3 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">One simple loop from idea to launch.</h2>
          <p className="mt-4 max-w-xl leading-7 text-[#626760]">Build your early audience, stay connected, and launch with confidence.</p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {steps.map((step, index) => (
            <li className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5" key={step}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e5f1e9] text-sm font-semibold text-[#377458]">
                {index + 1}
              </span>
              <p className="text-base font-medium tracking-tight">{step}</p>
              {index < steps.length - 1 && <span aria-hidden="true" className="hidden text-xl text-[#86aa95] lg:block">↓</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

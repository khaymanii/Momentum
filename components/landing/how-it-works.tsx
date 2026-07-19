const steps = [
  ["01", "Create your project", "Set up your product and get a hosted waitlist page in minutes."],
  ["02", "Build anticipation", "Collect early signups and send thoughtful updates to your audience."],
  ["03", "See the signal", "Turn engagement into a simple Momentum Score and useful insight."],
];

export function HowItWorks() {
  return (
    <section className="border-y border-[#e1e4df] bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-medium text-[#47725e]">One focused loop</p>
        <div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">From first signup to a clearer launch signal.</h2>
          <p className="max-w-sm leading-7 text-[#626760]">Everything you need before launch, without stitching together a stack of tools.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#e1e4df] bg-[#e1e4df] md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <article className="bg-white p-6 sm:p-8" key={number}>
              <p className="text-sm font-medium text-[#4b9470]">{number}</p>
              <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-xs leading-7 text-[#626760]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

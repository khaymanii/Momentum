const features = [
  ["AI Waitlist CRM", "Manage your early users in one place."],
  ["AI Founder Updates", "Write updates in seconds with AI assistance."],
  ["Momentum Score", "Know who is excited and who needs re-engagement."],
  ["Analytics", "Track opens, clicks and engagement over time."],
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="features">
      <p className="text-sm font-medium text-[#47725e]">Features</p>
      <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Everything your pre-launch audience needs.</h2>
        <p className="max-w-sm leading-7 text-[#626760]">A focused set of tools for creating and sustaining early interest.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map(([title, description], index) => (
          <article className="rounded-2xl border border-[#dce0d9] bg-white p-7 sm:p-8" key={title}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5f1e9] text-sm font-semibold text-[#377458]">
              0{index + 1}
            </span>
            <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 max-w-sm leading-7 text-[#626760]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="border-y border-[#e1e4df] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-medium text-[#47725e]">The problem</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Most waitlists go cold before launch.
          </h2>
        </div>
        <div className="max-w-md border-l border-[#dce5de] pl-6 sm:pl-8">
          <p className="text-lg font-medium leading-8 text-[#303530]">Collecting emails isn&apos;t enough.</p>
          <div className="mt-7 space-y-3 text-lg leading-8 text-[#6d736b]">
            <p>People forget.</p>
            <p>Excitement fades.</p>
            <p>Launch day arrives...</p>
            <p>...and only a fraction of your waitlist still cares.</p>
          </div>
          <p className="mt-8 text-lg font-medium leading-8 text-[#337456]">Momentum helps you keep that excitement alive.</p>
        </div>
      </div>
    </section>
  );
}

const chartHeights = [36, 48, 42, 65, 55, 78, 92, 69, 84, 100];

export function ProductPreview() {
  return (
    <div aria-label="Momentum dashboard preview" className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[#d8eddf] blur-3xl" />
      <div className="rounded-2xl border border-[#dce0d9] bg-white p-3 shadow-[0_25px_70px_-28px_rgba(24,44,33,0.28)] sm:p-4">
        <div className="rounded-xl bg-[#f6f7f4] p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#858a82]">Project overview</p>
              <p className="mt-1 font-semibold">Goodframe</p>
            </div>
            <span className="rounded-full bg-[#e3f2e8] px-3 py-1.5 text-xs font-medium text-[#377458]">Growing</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white p-4">
              <p className="text-xs text-[#777d74]">Waitlist</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">1,284</p>
              <p className="mt-1 text-xs font-medium text-[#4b9470]">+18.4% this week</p>
            </div>
            <div className="rounded-xl bg-[#1d5c43] p-4 text-white">
              <p className="text-xs text-[#cae0d1]">Momentum score</p>
              <div className="mt-1 flex items-end gap-2">
                <p className="text-3xl font-semibold tracking-tight">82</p>
                <p className="mb-1 text-xs text-[#cae0d1]">/ 100</p>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/20">
                <div className="h-full w-[82%] rounded-full bg-[#b7e2c5]" />
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Engagement</p>
              <p className="text-xs font-medium text-[#4b9470]">↑ 12%</p>
            </div>
            <div className="mt-5 flex h-20 items-end justify-between gap-2">
              {chartHeights.map((height, index) => (
                <span
                  className={`w-full rounded-t-sm ${index === chartHeights.length - 1 ? "bg-[#1d5c43]" : "bg-[#c8dfd0]"}`}
                  key={height}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f1f7f2] text-[#397958]">↗</span>
            <p className="text-xs leading-5 text-[#626760]">
              Your latest update is resonating. <strong className="font-semibold text-[#343934]">62% opened it.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

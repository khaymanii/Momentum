import { ArrowUpRight } from "lucide-react";
import { features } from "@/componentDummyData/Landingdata";

export function Features() {
  return (
    <section className="border-b border-[#e1e4df] bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#83b89b]" />

              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#47725e]">
                The platform
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#161916] sm:text-5xl lg:text-6xl">
              Everything between
              <span className="text-[#337456]"> sign up and launch day.</span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-[#626760]">
            Momentum gives founders the tools to understand, engage, and grow
            the audience behind their next launch.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[28px] border border-[#dfe4df] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cdbd] hover:shadow-[0_20px_55px_rgba(30,60,40,0.08)] sm:p-9 ${
                  index === 2 ? "bg-[#1d5c43] text-white" : "bg-[#f8f9f7]"
                }`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${
                    index === 2 ? "bg-[#337456]" : "bg-[#e6f0e8]"
                  }`}
                />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${
                        index === 2
                          ? "bg-white/10 text-[#b7e2c5]"
                          : "bg-[#e8f2eb] text-[#337456]"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`text-xs font-semibold tracking-[0.16em] ${
                        index === 2 ? "text-[#a9d4b5]" : "text-[#9aa59c]"
                      }`}
                    >
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12 max-w-md">
                    <p
                      className={`text-sm font-medium ${
                        index === 2 ? "text-[#b7e2c5]" : "text-[#47725e]"
                      }`}
                    >
                      {feature.label}
                    </p>

                    <h3
                      className={`mt-3 text-2xl font-semibold tracking-[-0.035em] ${
                        index === 2 ? "text-white" : "text-[#171817]"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-sm leading-7 ${
                        index === 2 ? "text-[#d2e6d7]" : "text-[#626760]"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom visual */}
                  <div
                    className={`mt-10 flex items-center justify-between border-t pt-5 ${
                      index === 2 ? "border-white/15" : "border-[#dfe4df]"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        index === 2 ? "text-[#b7e2c5]" : "text-[#858a82]"
                      }`}
                    >
                      Explore feature
                    </span>

                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${
                        index === 2
                          ? "bg-white text-[#1d5c43]"
                          : "bg-white text-[#337456]"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#dfe4df] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xl font-medium leading-8 tracking-tight text-[#303530]">
            Your waitlist is more than a list of emails.
            <span className="text-[#337456]">
              {" "}
              It&apos;s the first community around your product.
            </span>
          </p>

          <div className="flex items-center gap-2 text-sm text-[#47725e]">
            <span className="h-2 w-2 rounded-full bg-[#83b89b]" />
            Built for the journey before launch.
          </div>
        </div>
      </div>
    </section>
  );
}
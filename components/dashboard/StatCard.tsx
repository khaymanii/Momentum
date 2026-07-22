import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  description: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
};

export function StatCard({
  label,
  value,
  change,
  description,
  trend = "up",
  icon: Icon,
}: StatCardProps) {
  const isPositive = trend === "up";

  return (
    <article className="group rounded-2xl border border-[#e5e7e2] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cbd8ce] hover:shadow-[0_12px_35px_rgba(30,60,40,0.06)] sm:p-6">
      <div className="flex items-start justify-between">
        <p className="text-sm text-[#858981]">{label}</p>

        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef5f0] text-[#337456] transition-colors group-hover:bg-[#1d5c43] group-hover:text-white">
          <Icon size={18} strokeWidth={1.8} />
        </div>
      </div>

      <p className="mt-5 text-3xl font-semibold tracking-tight text-[#171817]">
        {value}
      </p>

      <div className="mt-3 flex items-center gap-2 text-sm">
        {trend !== "neutral" && (
          <span
            className={`flex items-center gap-1 font-medium ${
              isPositive ? "text-[#337456]" : "text-[#b05252]"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={15} />
            ) : (
              <ArrowDownRight size={15} />
            )}

            {change}
          </span>
        )}

        <span className="text-[#9a9d97]">{description}</span>
      </div>
    </article>
  );
}
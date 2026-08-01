import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "@/dummyData/DashboardData";

export function AudienceGrowthChart() {
  return (
    <section className="rounded-3xl border border-[#e5e7e2] bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-[#858981]">Audience growth</p>

          <div className="mt-2 flex items-baseline gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-[#171817]">
              1,248
            </h2>

            <span className="text-sm font-medium text-[#337456]">+12.8%</span>
          </div>

          <p className="mt-1 text-sm text-[#9a9d97]">Total waitlist members</p>
        </div>

        <select
          className="h-9 rounded-lg border border-[#e1e4df] bg-white px-3 text-sm text-[#656861] outline-none focus:border-[#337456]"
          defaultValue="7"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div className="mt-8 h-70 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="momentumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#337456" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#337456" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#edf0ec"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#858981", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#858981", fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
            />

            <Tooltip
              cursor={{ stroke: "#cbd8ce", strokeDasharray: "4 4" }}
              contentStyle={{
                border: "1px solid #e1e4df",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(30,60,40,0.08)",
              }}
              formatter={(value) => [`${value}`, "Members"]}
            />

            <Area
              type="monotone"
              dataKey="members"
              stroke="#337456"
              strokeWidth={2.5}
              fill="url(#momentumGradient)"
              activeDot={{
                r: 5,
                fill: "#337456",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

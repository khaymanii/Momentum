import { Mail, MousePointerClick, TrendingUp, Users } from "lucide-react";

export const stats = [
  {
    label: "Total audience",
    value: "1,248",
    change: "+12.8%",
    positive: true,
    icon: Users,
  },
  {
    label: "Engagement rate",
    value: "74.2%",
    change: "+8.4%",
    positive: true,
    icon: TrendingUp,
  },
  {
    label: "Avg. open rate",
    value: "68.5%",
    change: "+4.2%",
    positive: true,
    icon: Mail,
  },
  {
    label: "Click-through rate",
    value: "32.8%",
    change: "-2.1%",
    positive: false,
    icon: MousePointerClick,
  },
];

export const growthData = [
  { month: "Jan", value: 320 },
  { month: "Feb", value: 450 },
  { month: "Mar", value: 520 },
  { month: "Apr", value: 680 },
  { month: "May", value: 840 },
  { month: "Jun", value: 1010 },
  { month: "Jul", value: 1248 },
];

export const engagementData = [
  {
    label: "Highly engaged",
    value: 48,
    description: "Active in the last 7 days",
  },
  { label: "Engaged", value: 26, description: "Active in the last 30 days" },
  { label: "At risk", value: 16, description: "No activity for 30+ days" },
  { label: "Inactive", value: 10, description: "No recent activity" },
];

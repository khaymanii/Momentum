import { TrendingUp, Users, Zap } from "lucide-react";

export const chartData = [
  { day: "Mon", users: 42 },
  { day: "Tue", users: 58 },
  { day: "Wed", users: 51 },
  { day: "Thu", users: 78 },
  { day: "Fri", users: 92 },
  { day: "Sat", users: 84 },
  { day: "Sun", users: 118 },
];

export const activities = [
  {
    initials: "JD",
    name: "Jordan Davis",
    action: "joined your waitlist",
    time: "2 min ago",
  },
  {
    initials: "AK",
    name: "Alex Kim",
    action: "opened your latest update",
    time: "18 min ago",
  },
  {
    initials: "MS",
    name: "Maya Smith",
    action: "joined your waitlist",
    time: "42 min ago",
  },
  {
    initials: "RB",
    name: "Ryan Brooks",
    action: "shared your project",
    time: "1 hr ago",
  },
];

export const stats = [
  {
    label: "Waitlist members",
    value: "1,248",
    change: "+12.8%",
    icon: Users,
  },
  {
    label: "Engagement rate",
    value: "74.2%",
    change: "+8.4%",
    icon: TrendingUp,
  },
  {
    label: "Active this week",
    value: "86",
    change: "+24.5%",
    icon: Zap,
  },
];

import {
  Activity,
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Plus,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";

export const data = [
  { date: "Jul 14", members: 842 },
  { date: "Jul 15", members: 891 },
  { date: "Jul 16", members: 934 },
  { date: "Jul 17", members: 1012 },
  { date: "Jul 18", members: 1098 },
  { date: "Jul 19", members: 1174 },
  { date: "Jul 20", members: 1248 },
];

export const scoreBreakdown = [
  {
    label: "Audience growth",
    value: "88%",
    icon: Users,
  },
  {
    label: "Engagement",
    value: "76%",
    icon: MessageCircle,
  },
  {
    label: "Recent activity",
    value: "82%",
    icon: Activity,
  },
];

export const actions = [
  {
    title: "Create an update",
    description: "Share progress with your audience",
    icon: Mail,
    href: "/dashboard/updates/new",
  },
  {
    title: "View waitlist",
    description: "See everyone waiting for your launch",
    icon: UserPlus,
    href: "/dashboard/waitlist",
  },
  {
    title: "Add a project",
    description: "Start building your next idea",
    icon: Plus,
    href: "/dashboard/projects/new",
  },
];

export const activities = [
  {
    icon: UserPlus,
    title: "New waitlist member joined",
    description: "olivia@example.com joined your waitlist",
    time: "12 min ago",
  },
  {
    icon: Mail,
    title: "Founder update opened",
    description: "Your latest update reached 84% open rate",
    time: "2 hours ago",
  },
  {
    icon: Users,
    title: "Audience milestone reached",
    description: "Your waitlist passed 1,200 members",
    time: "Yesterday",
  },
];

export const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    label: "Waitlist",
    href: "/dashboard/waitlist",
    icon: Users,
  },
  {
    label: "Updates",
    href: "/dashboard/updates",
    icon: Sparkles,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
];

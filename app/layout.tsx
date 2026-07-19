import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momentum — Know if your launch has momentum",
  description:
    "Build your waitlist, engage early users, and understand your launch momentum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

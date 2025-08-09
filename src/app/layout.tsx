// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EnvBadge } from "@/components/EnvBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Staff Organizer",
  description: "Staff and schedule management",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <EnvBadge />
      </body>
    </html>
  );
}

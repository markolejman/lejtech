import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "LEJTECH - Modern Web Development Solutions",
  description:
    "LEJTECH delivers modern, responsive web development solutions with expert React and Next.js development. Specializing in SEO-optimized, high-performance websites, mobile-first design, and secure full-stack applications. Transform your digital presence with our professional web services.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/app/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/app/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/app/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/app/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/app/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-google-sans-code">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}

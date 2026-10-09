import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecoderacer.github.io/whoami/"),
  title: `${site.name} — ${site.title}`,
  description: site.pitch,
  keywords: [
    "Anggara Pratama",
    "Full Stack Engineer",
    "Backend Engineer",
    "PHP",
    "Laravel",
    "Go",
    "Vue.js",
    "Kubernetes",
    "Indonesia",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    type: "profile",
    title: `${site.name} — ${site.title}`,
    description: site.pitch,
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.pitch,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b132b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

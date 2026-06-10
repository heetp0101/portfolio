import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heet Patel — Full-Stack Developer & Software Engineer",
  description:
    "Full-stack developer specializing in React, Next.js, FastAPI, and AI integrations. I build production-grade web applications and SaaS products that scale.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "FastAPI",
    "software engineer",
    "freelance developer",
    "SaaS development",
    "AI integration",
    "web development",
    "Heet Patel",
  ],
  authors: [{ name: "Heet Patel" }],
  creator: "Heet Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heetpatel.dev",
    siteName: "Heet Patel",
    title: "Heet Patel — Full-Stack Developer & Software Engineer",
    description:
      "Full-stack developer building production-grade web apps and SaaS products with React, Next.js, FastAPI, and AI.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Heet Patel — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heet Patel — Full-Stack Developer & Software Engineer",
    description:
      "Building production-grade web apps and SaaS products with React, Next.js, FastAPI, and AI.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://heetpatel.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}

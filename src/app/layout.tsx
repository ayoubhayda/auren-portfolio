import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayoub Hayda | Full Stack Developer (SaaS & Modern Web)",
  description:
    "Full Stack Developer helping businesses build scalable SaaS and modern web products using Next.js and TypeScript.",

  metadataBase: new URL("https://ayoub-hayda.vercel.app"),

  keywords: [
    "Full Stack Developer",
    "SaaS Developer",
    "Next.js Developer",
    "TypeScript",
    "Modern Web Applications",
  ],

  openGraph: {
    title: "Ayoub Hayda | Full Stack Developer (SaaS & Modern Web)",
    description:
      "I help businesses build scalable SaaS and modern web products.",
    url: "https://ayoub-hayda.vercel.app",
    siteName: "Auren",
    images: [
      {
        url: "https://ayoub-hayda.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Hayda – Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayoub Hayda | Full Stack Developer",
    description:
      "Full Stack Developer building scalable SaaS and modern web products.",
    images: ["https://ayoub-hayda.vercel.app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

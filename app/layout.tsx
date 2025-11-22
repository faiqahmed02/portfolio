import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faiq Ahmed - Full-Stack Software Engineer",
  description:
    "Full-stack software engineer specializing in React, Next.js, TypeScript, Node.js, and Firebase. Building modern web applications with clean code and best practices.",
  generator: "v0.app",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Web Development",
  ],
  authors: [{ name: "Faiq Ahmed" }],
  openGraph: {
    title: "Faiq Ahmed - Full-Stack Software Engineer",
    description: "Full-stack software engineer specializing in modern web technologies.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

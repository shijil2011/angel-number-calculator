import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { Toaster } from "@/components/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Angel Number Calculator | Find Your Personal Angel Numbers",
  description:
    "Free angel number calculator - enter your birthdate to discover your personal angel numbers with detailed meanings and spiritual guidance.",
  generator: "Angel Number Calculator",
  keywords: [
    "angel number calculator",
    "angel number finder",
    "angel number meaning",
    "find my angel number",
    "numerology calculator",
  ],
  authors: [{ name: "Angel Number Calculator" }],
  creator: "Angel Number Calculator",
  publisher: "Angel Number Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://angel-number-calculator.vercel.app"),
  alternates: {
    canonical: "https://angel-number-calculator.vercel.app",
  },
  openGraph: {
    title: "Angel Number Calculator | Find Your Personal Angel Numbers",
    description:
      "Free angel number calculator - discover your personal angel numbers with detailed meanings and spiritual guidance.",
    url: "https://angel-number-calculator.vercel.app",
    siteName: "Angel Number Calculator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Angel Number Calculator - Find Your Personal Angel Numbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Number Calculator | Find Your Personal Angel Numbers",
    description: "Free angel number calculator - discover your personal angel numbers with detailed meanings.",
    images: ["/og-image.png"],
    creator: "@angelnumbercalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GVEP02H-vizy8NQQlzcud9EZ9wxDjVfPQpaS2u_FlKM",
  },
  other: {
    "google-site-verification": "GVEP02H-vizy8NQQlzcud9EZ9wxDjVfPQpaS2u_FlKM",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="GVEP02H-vizy8NQQlzcud9EZ9wxDjVfPQpaS2u_FlKM" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://angel-number-calculator.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TQK57BW93B" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TQK57BW93B', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

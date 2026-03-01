import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/main/Footer";
import { Navbar } from "@/components/main/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Pivot Metadata to Integration Architect Persona
export const metadata: Metadata = {
  title:
    "Mohammad Saddam - Integration Architect | HubSpot & CRM Automation Expert",
  description:
    "Expert Integration Architect specializing in fault-tolerant Node.js middleware, HubSpot CRM syncs, and automated data pipelines for high-stakes SaaS operations.",
  keywords: [
    "Integration Architect",
    "HubSpot Specialist",
    "CRM Automation",
    "Node.js Middleware",
    "Mohammad Saddam",
    "SaaS Integrations",
    "API Architect",
    "Data Synchronization",
    "Gong Integration",
    "Healthie API",
    "Filevine Integration",
  ],
  authors: [{ name: "Mohammad Saddam" }],
  creator: "Mohammad Saddam",
  publisher: "Mohammad Saddam",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammadsaddam.vercel.app",
    title: "Mohammad Saddam - Integration Architect Portfolio",
    description:
      "Architecting resilient data pipelines and HubSpot automations for global SaaS providers.",
    siteName: "Mohammad Saddam Portfolio",
    images: [
      {
        url: "/profile-pic.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Saddam - Integration Architect",
      },
    ],
  },
  alternates: {
    canonical: "https://mohammadsaddam.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. Updated JSON-LD with specialized Integration skills
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Saddam",
    jobTitle: "Integration Architect",
    description:
      "Specializing in fault-tolerant middleware and CRM data synchronization.",
    url: "https://mohammadsaddam.vercel.app",
    image: "https://mohammadsaddam.vercel.app/profile-pic.png",
    sameAs: [
      "https://github.com/mohammadsaddam-dev",
      "https://linkedin.com/in/mohammadsaddam",
    ],
    knowsAbout: [
      "HubSpot API",
      "Node.js",
      "CRM Integration",
      "Middleware Architecture",
      "API Design",
      "Data Mapping",
      "Gong API",
      "Fault-Tolerant Systems",
      "Asynchronous Processing",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 3. Added suppressHydrationWarning to specific script tag to fix extension errors */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://mohammadsaddam.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Thematic color sync with your new brand blue */}
        <meta
          name="theme-color"
          content="#2563eb"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1d4ed8"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main role="main">{children}</main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

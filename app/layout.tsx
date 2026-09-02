import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import Toast from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

const SITE = "https://kirtimaan.vercel.app";
const DESCRIPTION =
  "Frontend Developer (React.js / Next.js) and Full-Stack Developer (MERN) with 5+ years of experience designing and building scalable, high-performance web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kirtimaan Vishwakarma — Frontend & Full-Stack (MERN) Developer",
  description: DESCRIPTION,
  keywords: [
    "Kirtimaan Vishwakarma",
    "Frontend Developer",
    "Full-Stack Developer",
    "MERN",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Redux Toolkit",
    "Material UI",
    "Tailwind CSS",
  ],
  authors: [{ name: "Kirtimaan Vishwakarma" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kirtimaan Vishwakarma — Frontend & Full-Stack (MERN) Developer",
    description: DESCRIPTION,
    url: SITE,
    siteName: "Kirtimaan Vishwakarma",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kirtimaan Vishwakarma — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirtimaan Vishwakarma — Frontend & Full-Stack (MERN) Developer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#100C0A" };

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kirtimaan Vishwakarma",
  url: SITE,
  jobTitle: "Senior Software Engineer / Frontend & Full-Stack Developer",
  description: DESCRIPTION,
  worksFor: { "@type": "Organization", name: "AI-Thinkers" },
  sameAs: [
    "https://github.com/KirtimaanVishwakarma",
    "https://linkedin.com/in/kirtimaan-vishwakarma",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
      </head>
      <body>
        <a href="#top" className="skip-link">Skip to content</a>
        <Loader />
        <ScrollProgress />
        <Background />
        <Cursor />
        <Toast />
        <CommandPalette />
        <BackToTop />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

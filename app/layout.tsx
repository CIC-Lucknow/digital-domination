import "./globals.css";
import type { Metadata, Viewport } from "next";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";
const T = "Digital Domination 2.0 | Cybersecurity CTF & Summit, Lucknow",
  D =
    "Digital Domination 2.0 by Cyber Intelligence Community Lucknow: a 12-hour online CTF on 5 October and an offline cybersecurity summit on 10 October 2026 with workshops, expert sessions and networking.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: T, template: "%s | Digital Domination 2.0" },
  description: D,
  applicationName: SITE.name,
  keywords: [
    "Digital Domination 2.0",
    "CIC Lucknow",
    "Cyber Intelligence Community",
    "CTF",
    "capture the flag",
    "cybersecurity summit",
    "Lucknow",
    "OSINT",
    "digital forensics",
    "cybersecurity workshop",
  ],
  authors: [{ name: SITE.org, url: SITE.url }],
  creator: SITE.org,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: T,
    description: D,
    url: "/",
    locale: "en_IN",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Domination 2.0, Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: T,
    description: D,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/assets/logo-w.png", apple: "/assets/logo-w.png" },
};
export const viewport: Viewport = {
  themeColor: "#eef0f2",
  width: "device-width",
  initialScale: 1,
};
const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Digital Domination 2.0: Online CTF",
      startDate: "2026-10-05T12:00:00+05:30",
      endDate: "2026-10-06T00:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: SITE.url },
      description: "A 12-hour Jeopardy-style Capture The Flag competition.",
      organizer: { "@type": "Organization", name: SITE.org, url: SITE.url },
    },
    {
      "@type": "Event",
      name: "Digital Domination 2.0: Offline Cybersecurity Summit",
      startDate: "2026-10-10T10:00:00+05:30",
      endDate: "2026-10-10T16:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Lucknow",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
      description:
        "Technical sessions, a hands-on workshop, industry interaction and CTF winner felicitation.",
      organizer: { "@type": "Organization", name: SITE.org, url: SITE.url },
    },
    {
      "@type": "Organization",
      name: SITE.org,
      url: SITE.url,
      sameAs: SITE.social,
    },
  ],
};
export default function L({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Preloader />
        <Cursor />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

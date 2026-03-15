import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solderpasteinspection.com'),
  title: {
    default: "ASC International - Quality Inspection & Measurement Systems",
    template: "%s | ASC International"
  },
  description: "Global supplier of quality inspection and measurement systems for electronics manufacturing. Established 1992, serving over 1,000 customers worldwide.",
  keywords: ["3D SPI", "AOI", "conformal coating inspection", "electronics manufacturing", "quality inspection", "solder paste inspection", "automated optical inspection", "PCB inspection"],
  authors: [{ name: "ASC International" }],
  creator: "ASC International",
  publisher: "ASC International",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solderpasteinspection.com',
    siteName: 'ASC International',
    title: 'ASC International - Quality Inspection & Measurement Systems',
    description: 'Global supplier of quality inspection and measurement systems for electronics manufacturing. Established 1992, serving over 1,000 customers worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ASC International - Electronics Inspection Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASC International - Quality Inspection & Measurement Systems',
    description: 'Global supplier of quality inspection and measurement systems for electronics manufacturing.',
    images: ['/og-image.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: 'https://solderpasteinspection.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://solderpasteinspection.com/#organization",
    "name": "ASC International",
    "alternateName": "ASC International Inc.",
    "url": "https://solderpasteinspection.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solderpasteinspection.com/logo.png",
      "width": "250",
      "height": "60"
    },
    "image": "https://solderpasteinspection.com/og-image.png",
    "description": "Global supplier of quality inspection and measurement systems for electronics manufacturing. Established 1992, serving over 1,000 customers worldwide with 3D SPI, AOI, conformal coating inspection, and measurement solutions.",
    "foundingDate": "1992",
    "slogan": "Your partner for quality and yield improvement",
    "knowsAbout": [
      "3D Solder Paste Inspection",
      "Automated Optical Inspection",
      "Conformal Coating Inspection",
      "Electronics Manufacturing",
      "Quality Control",
      "PCB Inspection",
      "SMT Inspection"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-763-479-6210",
        "contactType": "sales",
        "email": "info@ascinternational.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-763-479-6210",
        "contactType": "technical support",
        "email": "info@ascinternational.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} font-body bg-[#0a0e27]`}>{children}</body>
    </html>
  );
}

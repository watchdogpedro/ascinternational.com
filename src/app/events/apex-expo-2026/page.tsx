import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Visit ASC International at IPC APEX EXPO 2026 | Anaheim, CA",
  description: "Meet ASC International at IPC APEX EXPO 2026 in Anaheim, CA - March 17-19. See live demos of 3D SPI, AOI, and PCB inspection systems. Schedule a booth meeting today.",
  keywords: ["IPC APEX EXPO 2026", "APEX 2026", "ASC International trade show", "solder paste inspection demo", "AOI demo", "PCB inspection Anaheim", "electronics manufacturing trade show"],
  openGraph: {
    title: "Visit ASC International at IPC APEX EXPO 2026",
    description: "See live demos of 3D SPI and AOI systems at the largest electronics manufacturing trade show. March 17-19, Anaheim Convention Center.",
    type: "website",
  },
};

export default function ApexExpo2026() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "ASC International at IPC APEX EXPO 2026",
    "description": "Visit ASC International at IPC APEX EXPO 2026 to see live demonstrations of 3D Solder Paste Inspection (SPI), Automated Optical Inspection (AOI), and other PCB inspection systems.",
    "startDate": "2026-03-17T10:00:00-08:00",
    "endDate": "2026-03-19T17:00:00-08:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Anaheim Convention Center",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "800 West Katella Avenue",
        "addressLocality": "Anaheim",
        "addressRegion": "CA",
        "postalCode": "92802",
        "addressCountry": "US"
      }
    },
    "image": `${SITE_URL}/images/apex-expo-2026.png`,
    "organizer": {
      "@type": "Organization",
      "name": "IPC",
      "url": "https://www.ipc.org"
    },
    "performer": {
      "@type": "Organization",
      "name": "ASC International",
      "url": `${SITE_URL}`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_URL}/events/apex-expo-2026`,
      "validFrom": "2025-10-01"
    },
    "superEvent": {
      "@type": "Event",
      "name": "IPC APEX EXPO 2026",
      "startDate": "2026-03-17",
      "endDate": "2026-03-19",
      "location": {
        "@type": "Place",
        "name": "Anaheim Convention Center"
      }
    }
  };

  const exhibitorSchema = {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    "name": "ASC International Booth at IPC APEX EXPO 2026",
    "about": [
      "3D Solder Paste Inspection",
      "Automated Optical Inspection",
      "PCB Inspection Systems",
      "Electronics Manufacturing Quality Control"
    ],
    "startDate": "2026-03-17",
    "endDate": "2026-03-19",
    "location": {
      "@type": "Place",
      "name": "Anaheim Convention Center"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exhibitorSchema) }}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Events", href: "/events" },
            { name: "APEX EXPO 2026" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Event Logo */}
              <div className="mb-6">
                <div className="bg-white p-4 rounded-lg inline-block">
                  <img
                    src="/images/apex-expo-logo.png"
                    alt="APEX EXPO 2026 - by Global Electronics Association"
                    className="h-20 w-auto"
                  />
                </div>
              </div>

              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
                March 17-19, 2026 | Anaheim, CA | Booth #2742
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Visit ASC International at IPC APEX EXPO 2026
              </h1>
              <p className="text-xl text-white mb-8">
                See live demonstrations of our 3D SPI, AOI, and PCB inspection systems at the largest electronics manufacturing trade show in North America
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact?ref=apex2026"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Schedule a Booth Meeting
                </Link>
                <a
                  href="https://www.apexexpo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
                >
                  Register for APEX EXPO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Exhibition Dates</h3>
                  <p className="text-gray-800">March 17-19, 2026</p>
                  <p className="text-gray-600 text-sm">Tuesday - Thursday</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-800">Anaheim Convention Center</p>
                  <p className="text-gray-600 text-sm">800 W Katella Ave, Anaheim, CA</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ASC International Booth</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">Booth #2742</p>
                  <p className="text-gray-600 text-sm">Visit us on the show floor!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demonstrations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Live Demonstrations at Our Booth</h2>
              <p className="text-gray-800 text-center mb-12 max-w-3xl mx-auto">
                Experience hands-on demonstrations of our industry-leading inspection and measurement systems. Our technical experts will be available to answer your questions and discuss your specific application requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3D Solder Paste Inspection</h3>
                  <p className="text-gray-800 mb-4">
                    See real-time 3D SPI measurement with ±1μm height resolution. Watch as we demonstrate volume, height, and area measurement on live PCB samples.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Phase-shift 3D measurement technology</li>
                    <li>• Real-time SPC and trend analysis</li>
                    <li>• Closed-loop printer feedback</li>
                  </ul>
                  <Link href="/products/3d-solder-paste-inspection" className="text-blue-600 font-semibold hover:underline mt-4 inline-block">
                    Learn more about 3D SPI →
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Automated Optical Inspection</h3>
                  <p className="text-gray-800 mb-4">
                    Experience AI-powered AOI with deep learning defect detection. See how our systems achieve &lt;0.5% false call rates on complex assemblies.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 2D + 3D hybrid inspection</li>
                    <li>• AI-powered defect classification</li>
                    <li>• 50+ defect types detected</li>
                  </ul>
                  <Link href="/products/automated-optical-inspection" className="text-blue-600 font-semibold hover:underline mt-4 inline-block">
                    Learn more about AOI →
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Conformal Coating Inspection</h3>
                  <p className="text-gray-800 mb-4">
                    Automated inspection of conformal coating coverage, thickness, and defects. Critical for automotive, aerospace, and medical electronics.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• UV fluorescence detection</li>
                    <li>• Thickness measurement</li>
                    <li>• Coverage verification</li>
                  </ul>
                  <Link href="/products/conformal-coating-inspection" className="text-blue-600 font-semibold hover:underline mt-4 inline-block">
                    Learn more about CCI →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Visit Our Booth */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Visit ASC International at APEX?</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">34+ Years of Industry Experience</h3>
                    <p className="text-gray-800">
                      Since 1992, ASC International has been helping electronics manufacturers improve quality and yield. Our team understands your challenges and can recommend the right solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hands-On Equipment Demonstrations</h3>
                    <p className="text-gray-800">
                      See our inspection systems in action with your own eyes. Bring your PCB samples and we&apos;ll run live demonstrations tailored to your specific applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Technical Consultations</h3>
                    <p className="text-gray-800">
                      Our applications engineers will be on hand to discuss your inspection challenges, answer technical questions, and help you evaluate the best solution for your production line.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Special Show Pricing</h3>
                    <p className="text-gray-800">
                      Take advantage of exclusive APEX show pricing and promotions on new equipment, pre-owned systems, and service contracts. Contact us before the show to learn more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/industries/electronics-manufacturing" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-3">🔌</div>
                  <h3 className="font-semibold">Electronics Manufacturing</h3>
                </Link>
                <Link href="/industries/automotive-electronics" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="font-semibold">Automotive</h3>
                </Link>
                <Link href="/industries/aerospace-defense" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-3">✈️</div>
                  <h3 className="font-semibold">Aerospace & Defense</h3>
                </Link>
                <Link href="/industries/medical-devices" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-3">🏥</div>
                  <h3 className="font-semibold">Medical Devices</h3>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Booth Meeting Today
              </h2>
              <p className="text-xl mb-8 text-white">
                Don&apos;t wait in line at the show. Schedule a dedicated meeting time with our technical team to discuss your inspection requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?ref=apex2026"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Schedule a Meeting
                </Link>
                <a
                  href="tel:+17634796210"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500 inline-flex items-center justify-center"
                >
                  Call: (763) 479-6210
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About IPC APEX EXPO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About IPC APEX EXPO</h2>
              <p className="text-gray-800 mb-4">
                IPC APEX EXPO is the largest electronics manufacturing trade show in North America, bringing together over 9,000 professionals from 45+ countries. The event features:
              </p>
              <ul className="text-gray-800 space-y-2 mb-6">
                <li>• <strong>400+ exhibitors</strong> showcasing the latest equipment and materials</li>
                <li>• <strong>Technical conference</strong> with industry-leading presentations</li>
                <li>• <strong>Professional development courses</strong> from IPC</li>
                <li>• <strong>Networking events</strong> connecting industry professionals</li>
              </ul>
              <p className="text-gray-800">
                Whether you&apos;re looking to upgrade your inspection capabilities, explore new technologies, or connect with industry peers, IPC APEX EXPO 2026 is the place to be.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.apexexpo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Visit the official IPC APEX EXPO website →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

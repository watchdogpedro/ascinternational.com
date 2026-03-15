import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About ASC International - 34+ Years in Electronics Inspection",
  description: "Founded in 1992, ASC International is a global leader in quality inspection and measurement systems for electronics manufacturing with 1,000+ customers worldwide.",
  keywords: ["ASC International", "electronics inspection", "company history", "manufacturing inspection", "quality control systems"],
  openGraph: {
    title: "About ASC International - Industry Leader Since 1992",
    description: "34+ years of excellence in electronics inspection and measurement systems for global manufacturers.",
    type: "website",
  },
};

export default function AboutCompany() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ASC International",
    "foundingDate": "1992",
    "description": "Global supplier of quality inspection and measurement systems for electronics manufacturing",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "100+"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about/company" },
            { name: "Company History" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About ASC International
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Leading the electronics inspection industry since 1992
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="max-w-none text-lg space-y-4 leading-relaxed">
                <p>
                  Founded in 1992, ASC International has grown from a pioneering startup to a globally recognized leader in quality inspection and measurement systems for electronics manufacturing. For over 34 years, we have been dedicated to helping manufacturers enhance production efficiency and profitability through innovative inspection solutions.
                </p>
                <p>
                  What began as a vision to improve manufacturing quality has evolved into a comprehensive portfolio of inspection technologies serving more than 1,000 satisfied customers worldwide. Our journey has been marked by continuous innovation, including the development of multiple patented technologies that have set industry standards.
                </p>
                <p>
                  Today, ASC International stands as a trusted partner for quality and yield improvement, offering cost-effective solutions specifically designed for electronics manufacturers operating in competitive global markets. Our commitment to customer success drives everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Company Milestones</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">1992</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                    <p className="text-gray-600">
                      ASC International established with a mission to provide innovative quality inspection solutions for electronics manufacturers
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">1995</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">First 3D SPI System</h3>
                    <p className="text-gray-600">
                      Launched our first 3D solder paste inspection system, revolutionizing pre-reflow quality control
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2000</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">Growing Customer Base</h3>
                    <p className="text-gray-600">
                      Expanded customer base across North America and international markets, building long-term manufacturing partnerships
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2005</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">1,000th Customer</h3>
                    <p className="text-gray-600">
                      Reached milestone of serving over 1,000 customers worldwide across diverse industries
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2010</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">Advanced AOI Launch</h3>
                    <p className="text-gray-600">
                      Introduced next-generation 3D AOI systems with AI-powered defect detection
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2015</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">Industry 4.0 Integration</h3>
                    <p className="text-gray-600">
                      Pioneered full factory integration with IPC-CFX and SECS/GEM connectivity standards
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2020</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600">
                      Integrated advanced AI and machine learning algorithms for enhanced defect detection
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">Today</div>
                  </div>
                  <div className="flex-1 border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
                    <p className="text-gray-600">
                      Continuing to innovate with comprehensive inspection solutions for modern electronics manufacturing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-gray-600">
                    Unwavering commitment to delivering the highest quality products and services
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Continuous pursuit of technological advancement and industry-leading solutions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
                  <p className="text-gray-600">
                    Dedicated to ensuring our customers achieve their quality and productivity goals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Partnership</h3>
                  <p className="text-gray-600">
                    Building lasting relationships with customers based on trust, expertise, and results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">ASC by the Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">34+</div>
                  <div className="text-xl text-gray-700 font-medium mb-1">Years</div>
                  <div className="text-sm text-gray-600">Industry Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">1,000+</div>
                  <div className="text-xl text-gray-700 font-medium mb-1">Customers</div>
                  <div className="text-sm text-gray-600">Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">Multiple</div>
                  <div className="text-xl text-gray-700 font-medium mb-1">Patents</div>
                  <div className="text-sm text-gray-600">Innovative Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">Direct</div>
                  <div className="text-xl text-gray-700 font-medium mb-1">Engineer</div>
                  <div className="text-sm text-gray-600">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partner with an Industry Leader
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join over 1,000 manufacturers worldwide who trust ASC International for their quality inspection needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about/why-choose-asc"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500 inline-flex items-center justify-center"
                >
                  Why Choose ASC
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

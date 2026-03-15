import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";


export const metadata: Metadata = {
  title: "Contact ASC International - Get in Touch Today",
  description: "Contact ASC International for quality inspection and measurement systems. Request a quote, schedule a demo, or speak with our experts about your manufacturing needs.",
  keywords: ["contact ASC", "request quote", "inspection systems", "sales inquiry", "technical support", "demo request"],
  openGraph: {
    title: "Contact ASC International - Quality Inspection Experts",
    description: "Get in touch with our team for quotes, demos, and technical support.",
    type: "website",
  },
};

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ASC International",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@ascinternational.com",
        "telephone": "+1-763-479-6210"
      }
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
            { name: "Contact" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Ready to improve your manufacturing quality? Let's talk about your inspection needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        <a href="tel:+18884782912" className="hover:text-blue-600">+1 (888) 478-2912</a>
                        <span className="text-gray-400 text-sm ml-2">Toll Free</span>
                      </p>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+17634796210" className="hover:text-blue-600">+1 (763) 479-6210</a>
                        <span className="text-gray-400 text-sm ml-2">Direct</span>
                      </p>
                      <p className="text-gray-500 text-sm mt-1">Fax: +1 (763) 479-6206</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 8:00 AM - 5:00 PM CST</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </h3>
                      {/* Email displayed as SVG image to prevent bot harvesting */}
                      <svg
                        role="img"
                        aria-label="info at ascinternational dot com"
                        width="230"
                        height="22"
                        viewBox="0 0 230 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          x="0"
                          y="16"
                          fontFamily="Arial, sans-serif"
                          fontSize="14"
                          fill="#4b5563"
                        >
                          info@ascinternational.com
                        </text>
                      </svg>
                      <p className="text-sm text-gray-500 mt-1">We&apos;ll respond within 24 hours</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Location
                      </h3>
                      <p className="text-gray-600">Minnesota, USA</p>
                      <p className="text-sm text-gray-500 mt-1">Serving customers across North America</p>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/products" className="text-blue-600 hover:underline">
                            View Products
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" className="text-blue-600 hover:underline">
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/company" className="text-blue-600 hover:underline">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/resources" className="text-blue-600 hover:underline">
                            Resources
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-10">
                    <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      The best way to reach us is by email. Tell us about your inspection needs,
                      request a quote, or ask any questions — we respond within 24 hours.
                    </p>

                    <a
                      href="mailto:info@ascinternational.com"
                      className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Us Now
                    </a>

                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-1">Or copy our address directly:</p>
                      <svg
                        role="img"
                        aria-label="info at ascinternational dot com"
                        width="230"
                        height="24"
                        viewBox="0 0 230 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="15" fill="#2563eb">
                          info@ascinternational.com
                        </text>
                      </svg>
                    </div>

                    <div className="mt-10 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">24hr</div>
                        <div className="text-sm text-gray-600">Typical response time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">34+</div>
                        <div className="text-sm text-gray-600">Years in business</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">Real</div>
                        <div className="text-sm text-gray-600">Engineers answer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Other Ways to Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-4">
                    See our systems in action with a live demonstration
                  </p>
                  <a href="mailto:info@ascinternational.com?subject=Demo Request" className="text-blue-600 hover:underline font-medium">
                    Request Demo →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
                  <p className="text-gray-600 mb-4">
                    Get pricing for your specific inspection requirements
                  </p>
                  <a href="mailto:info@ascinternational.com?subject=Quote Request" className="text-blue-600 hover:underline font-medium">
                    Get Quote →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get help with your existing ASC equipment
                  </p>
                  <Link href="/services/technical-support" className="text-blue-600 hover:underline font-medium">
                    Technical Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

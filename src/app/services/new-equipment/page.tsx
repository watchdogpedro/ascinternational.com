import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Equipment Sales | ASC International",
  description: "Purchase the latest inspection and measurement systems from ASC International. Cutting-edge technology, full warranty coverage, and comprehensive support for electronics manufacturing.",
  keywords: ["new inspection equipment", "3D SPI purchase", "AOI systems", "new equipment sales", "inspection system purchase"],
  openGraph: {
    title: "New Equipment Sales - ASC International",
    description: "Latest inspection systems with cutting-edge technology and full warranty support.",
    type: "website",
  },
};

export default function NewEquipment() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "New Equipment Sales",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "description": "Sales of new inspection and measurement equipment for electronics manufacturing"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "New Equipment" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">New Equipment Sales</h1>
              <p className="text-xl text-white mb-8">
                Invest in the latest inspection and measurement technology with full warranty coverage and comprehensive support
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Quote
                </Link>
                <Link href="/products" className="bg-white/5 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Why Buy New Equipment from ASC?</h2>
              <p className="text-gray-900 text-lg mb-4">
                When you purchase new inspection equipment from ASC International, you're investing in cutting-edge technology backed by decades of engineering expertise. Our latest systems incorporate the most advanced features available in the industry, including AI-powered defect detection, true 3D imaging, and full Industry 4.0 connectivity.
              </p>
              <p className="text-gray-900 text-lg">
                Every new system comes with comprehensive warranty coverage, factory training, and access to our global technical support network. We stand behind our products with confidence, knowing they represent the pinnacle of inspection technology.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">New Equipment Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Latest Technology</h3>
                  <p className="text-gray-600">
                    Access to the newest features, algorithms, and capabilities as soon as they're released
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Full Warranty</h3>
                  <p className="text-gray-600">
                    Comprehensive warranty coverage for parts and labor, protecting your investment
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Factory Training</h3>
                  <p className="text-gray-600">
                    Comprehensive operator and maintenance training from certified ASC technicians
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Software Updates</h3>
                  <p className="text-gray-600">
                    Free software updates and upgrades for the lifetime of the equipment
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Maximum Uptime</h3>
                  <p className="text-gray-600">
                    Brand new components ensure maximum reliability and minimal downtime
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Long-Term Value</h3>
                  <p className="text-gray-600">
                    Extended lifespan and higher resale value compared to used equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">What's Included with New Equipment</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Installation</h3>
                    <p className="text-gray-600">Factory-certified technicians install and calibrate your system to optimal specifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comprehensive Training</h3>
                    <p className="text-gray-600">On-site operator training and ongoing technical support for your team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Full Documentation</h3>
                    <p className="text-gray-600">Complete user manuals, maintenance guides, and technical documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Warranty Coverage</h3>
                    <p className="text-gray-600">Industry-leading warranty with options for extended coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Application Support</h3>
                    <p className="text-gray-600">Assistance with program development and process optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Available New Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/products/3d-solder-paste-inspection" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">3D SPI Systems</h3>
                  <p className="text-gray-600 text-sm">Solder paste inspection with ±1μm accuracy</p>
                </Link>
                <Link href="/products/automated-optical-inspection" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">2D-3D AOI</h3>
                  <p className="text-gray-600 text-sm">AI-powered automated optical inspection</p>
                </Link>
                <Link href="/products/conformal-coating-inspection" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">Conformal Coating</h3>
                  <p className="text-gray-600 text-sm">UV fluorescence coating inspection</p>
                </Link>
                <Link href="/products/digital-video-inspection" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">Video Inspection</h3>
                  <p className="text-gray-600 text-sm">High-resolution digital microscopy</p>
                </Link>
                <Link href="/products/3d-industrial-metrology" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">3D Metrology</h3>
                  <p className="text-gray-600 text-sm">Laser scanning measurement systems</p>
                </Link>
                <Link href="/products/jetting-valves" className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">Jetting Valves</h3>
                  <p className="text-gray-600 text-sm">Precision fluid dispensing solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Invest in New Equipment?</h2>
              <p className="text-xl mb-8 text-white">
                Contact our sales team to discuss your requirements and receive a customized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request a Quote
                </Link>
                <a href="tel:+18884782912" className="bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  Call Sales: +1 (888) 478-2912
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

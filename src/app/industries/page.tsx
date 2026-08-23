import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/industries' },
  title: "Industries We Serve",
  description: "ASC International provides specialized inspection solutions for electronics manufacturing, automotive electronics, medical devices, and aerospace & defense industries worldwide.",
  keywords: ["electronics manufacturing", "automotive electronics inspection", "medical device quality control", "aerospace inspection", "defense electronics"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Industries We Serve - ASC International",
    description: "Specialized inspection solutions for critical manufacturing industries.",
    type: "website",
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "Electronics Manufacturing",
      slug: "electronics-manufacturing",
      description: "Comprehensive inspection solutions for PCB assembly, SMT production, and electronics manufacturing operations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      highlights: [
        "SMT & PCB Assembly",
        "High-Volume Production",
        "Complex Assemblies",
        "Quality Compliance"
      ]
    },
    {
      name: "Automotive Electronics",
      slug: "automotive-electronics",
      description: "Zero-defect inspection systems meeting the stringent quality requirements of automotive electronics manufacturing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      highlights: [
        "IATF 16949 Compliance",
        "Zero-Defect Requirements",
        "Traceability Systems",
        "PPAP Documentation"
      ]
    },
    {
      name: "Medical Devices",
      slug: "medical-devices",
      description: "FDA-compliant inspection and documentation systems for medical electronics and device manufacturing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      highlights: [
        "FDA 21 CFR Part 11",
        "ISO 13485 Compliance",
        "Device History Records",
        "Validation Documentation"
      ]
    },
    {
      name: "Aerospace & Defense",
      slug: "aerospace-defense",
      description: "Mission-critical inspection systems with documentation and traceability for aerospace and defense applications",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      highlights: [
        "AS9100 Compliance",
        "IPC Class 3 Standards",
        "Full Traceability",
        "First Article Inspection"
      ]
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Industries" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Industries We Serve
              </h1>
              <p className="text-xl text-white mb-8">
                Specialized inspection solutions tailored to the unique quality requirements of your industry
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4 text-gray-900">Industry-Specific Expertise</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ASC International understands that each industry has unique quality requirements, compliance standards, and manufacturing challenges. Our solutions are designed to meet these specific needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-all overflow-hidden group hover:shadow-xl"
                  >
                    <div className="p-8">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all">
                        {industry.icon}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {industry.name}
                      </h2>
                      <p className="text-gray-600 mb-6">{industry.description}</p>

                      <div className="space-y-2 mb-4">
                        {industry.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="text-blue-600 font-semibold group-hover:underline">
                        Learn more →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-8 text-center text-gray-900">Why Industry Expertise Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Compliance Knowledge</h3>
                  <p className="text-gray-600">
                    Deep understanding of industry-specific regulations and standards ensures your inspection systems meet all compliance requirements
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Application Experience</h3>
                  <p className="text-gray-600">
                    Decades of experience solving quality challenges specific to your industry's manufacturing processes
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Optimized Solutions</h3>
                  <p className="text-gray-600">
                    Systems configured and programmed for the typical defect types and inspection requirements of your industry
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Documentation Standards</h3>
                  <p className="text-gray-600">
                    Reporting and traceability features designed to meet your industry's documentation and audit requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Industry Capabilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Cross-Industry Capabilities</h2>
              <p className="text-gray-900 text-lg mb-6">
                While we specialize in these key industries, ASC International's inspection systems are used by manufacturers across many sectors including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Consumer Electronics</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Industrial Controls</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Telecommunications</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Energy Systems</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">LED Lighting</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">IoT Devices</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Military Systems</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <p className="font-semibold text-gray-900">Research & Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-dark-secondary to-dark-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Discuss Your Industry Requirements
              </h2>
              <p className="text-xl mb-8 text-white">
                Connect with our industry specialists to learn how ASC can support your quality objectives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all inline-flex items-center justify-center"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all inline-flex items-center justify-center"
                >
                  View Products
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

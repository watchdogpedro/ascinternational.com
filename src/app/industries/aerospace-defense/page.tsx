import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/industries/aerospace-defense' },
  title: "Aerospace & Defense Inspection",
  description: "Mission-critical inspection systems for aerospace and defense electronics. AS9100 compliant solutions with IPC Class 3 standards and complete traceability.",
  keywords: ["aerospace inspection", "defense electronics", "AS9100", "IPC Class 3", "mil-spec inspection"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Aerospace & Defense - ASC International",
    description: "Inspection systems meeting the demanding requirements of aerospace and defense manufacturing.",
    type: "website",
  },
};

export default function AerospaceDefense() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Aerospace & Defense Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "Mission-critical inspection systems for aerospace and defense electronics manufacturing"
  };

  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Industries", href: "/industries" },
            { name: "Aerospace & Defense" },
          ]}
        />

        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Aerospace & Defense Inspection</h1>
              <p className="text-xl text-white mb-8">
                Mission-critical inspection systems with the documentation and traceability required for aerospace and defense applications
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="bg-white/5 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">What is Aerospace & Defense Inspection?</h2>
              <p className="text-gray-900 text-lg mb-4">
                Aerospace and defense inspection encompasses the rigorous quality control processes required for electronic systems used in aircraft, spacecraft, missiles, satellites, and defense equipment. These applications demand the highest levels of reliability because failures can have catastrophic consequences affecting mission success, equipment worth millions of dollars, and most importantly, human lives.
              </p>
              <p className="text-gray-900 text-lg mb-4">
                The aerospace and defense industries operate under strict quality standards including AS9100 for aerospace quality management, IPC Class 3 for high-reliability assemblies, and various military specifications. Products must withstand extreme environmental conditions including temperature extremes, vibration, shock, and in some cases, radiation exposure.
              </p>
              <p className="text-gray-900 text-lg">
                ASC International provides inspection solutions specifically designed for these demanding applications. Our systems deliver the inspection accuracy, comprehensive documentation, and complete traceability required for aerospace and defense manufacturing. With features supporting first article inspection (FAI), AS9102 documentation, and military standard compliance, ASC helps manufacturers meet customer requirements and maintain their certifications.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Industry Standards & Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">AS9100 Quality Management</h3>
                  <p className="text-gray-600 mb-4">
                    Aerospace quality management system standard requiring advanced process controls, configuration management, and documented inspection procedures.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Process capability requirements</li>
                    <li>• First article inspection (FAI)</li>
                    <li>• Configuration management</li>
                    <li>• Risk management integration</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">IPC Class 3 Standards</h3>
                  <p className="text-gray-600 mb-4">
                    High-reliability electronic assemblies where continued performance is critical and equipment downtime cannot be tolerated.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strictest workmanship criteria</li>
                    <li>• Enhanced inspection requirements</li>
                    <li>• Detailed defect classification</li>
                    <li>• 100% inspection coverage</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">AS9102 First Article Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive FAI documentation required for new products, process changes, or returning to production after extended periods.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dimensional verification reports</li>
                    <li>• Functional test results</li>
                    <li>• Material certifications</li>
                    <li>• Complete inspection records</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Military Specifications</h3>
                  <p className="text-gray-600 mb-4">
                    Defense systems must meet various MIL-STD requirements for reliability, environmental survivability, and quality documentation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MIL-STD-883 (microelectronics)</li>
                    <li>• MIL-STD-810 (environmental)</li>
                    <li>• Full traceability to raw materials</li>
                    <li>• Counterfeit detection protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Critical Inspection Capabilities</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">First Article Inspection (FAI)</h3>
                  <p className="text-gray-600 mb-4">
                    Complete dimensional and visual verification of first production articles with AS9102 compliant documentation packages.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">CAD Comparison</p>
                      <p className="text-sm text-gray-600">Automated comparison to design data for dimensional verification</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Complete Documentation</p>
                      <p className="text-sm text-gray-600">AS9102 forms with detailed measurements and images</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Characteristic Verification</p>
                      <p className="text-sm text-gray-600">All critical, major, and key characteristics documented</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Production Inspection to Class 3 Standards</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive inspection meeting IPC-A-610 Class 3 acceptance criteria with detailed defect classification and documentation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Solder Joint Quality</p>
                      <p className="text-sm text-gray-600">3D measurement of fillet geometry meeting Class 3 requirements</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Component Inspection</p>
                      <p className="text-sm text-gray-600">Verification of placement, orientation, and part numbers</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Workmanship Verification</p>
                      <p className="text-sm text-gray-600">Detailed analysis meeting strictest acceptance criteria</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Complete Traceability</h3>
                  <p className="text-gray-600 mb-4">
                    Full product genealogy from raw materials through final assembly with inspection results linked to each serialized unit.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Serial Number Tracking</p>
                      <p className="text-sm text-gray-600">Barcode/2D code integration for unit-level traceability</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Component Traceability</p>
                      <p className="text-sm text-gray-600">Lot code tracking for all components to detect counterfeits</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Long-Term Archival</p>
                      <p className="text-sm text-gray-600">Permanent storage of inspection data and images</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">X-Ray Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Essential for hidden solder joints and void analysis in high-reliability applications including BGA, QFN, and through-hole components.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Void Analysis</p>
                      <p className="text-sm text-gray-600">Automated measurement against aerospace specifications</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">3D Imaging</p>
                      <p className="text-sm text-gray-600">Computed tomography for complex package inspection</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Solder Quality</p>
                      <p className="text-sm text-gray-600">Detailed analysis of joint formation and wetting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Aerospace & Defense Applications</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Avionics Systems</h3>
                  <p className="text-gray-600">
                    Flight control computers, navigation systems, communication equipment, and cockpit displays where reliability is absolutely critical for flight safety
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Military Electronics</h3>
                  <p className="text-gray-600">
                    Radar systems, weapons control systems, secure communications, and tactical equipment requiring extreme reliability in harsh environments
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Space Systems</h3>
                  <p className="text-gray-600">
                    Satellites, spacecraft avionics, and launch vehicle electronics where repair is impossible and extended mission life is required
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Unmanned Systems</h3>
                  <p className="text-gray-600">
                    UAV control systems, autonomous vehicle electronics, and drone payloads requiring reliable operation in diverse conditions
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Missile & Guidance Systems</h3>
                  <p className="text-gray-600">
                    Precision guidance electronics, inertial measurement units, and targeting systems with zero tolerance for failure
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Naval Systems</h3>
                  <p className="text-gray-600">
                    Ship navigation, weapons systems, sonar electronics, and submarine systems requiring long-term reliability in marine environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">ASC Aerospace & Defense Advantages</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Aerospace Industry Experience</h3>
                    <p className="text-gray-600">Extensive experience supporting aerospace and defense manufacturers with AS9100 certified quality systems and military contractor requirements</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">AS9102 FAI Support</h3>
                    <p className="text-gray-600">Complete first article inspection documentation packages meeting AS9102 requirements with dimensional reports, measurement data, and images</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">IPC Class 3 Expertise</h3>
                    <p className="text-gray-600">Systems programmed for IPC-A-610 Class 3 acceptance criteria with detailed defect classification and workmanship verification</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Complete Traceability Systems</h3>
                    <p className="text-gray-600">Full product genealogy with component lot code tracking, serial number management, and permanent data archival meeting defense contractor requirements</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Long-Term Support</h3>
                    <p className="text-gray-600">Extended product lifecycles with ongoing support, spare parts availability, and system upgrades to support programs lasting decades</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Security & Compliance</h3>
                    <p className="text-gray-600">Systems designed with security features and data protection appropriate for defense manufacturing environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Support Mission-Critical Manufacturing</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact ASC to discuss inspection solutions for aerospace and defense applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Solutions
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

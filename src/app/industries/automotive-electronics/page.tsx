import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive Electronics Inspection | ASC International",
  description: "Zero-defect inspection systems for automotive electronics manufacturing. IATF 16949 compliant solutions with full traceability and PPAP documentation support.",
  keywords: ["automotive electronics inspection", "IATF 16949", "automotive quality", "PPAP documentation", "zero-defect manufacturing"],
  openGraph: {
    title: "Automotive Electronics - ASC International",
    description: "Inspection solutions meeting the stringent requirements of automotive electronics.",
    type: "website",
  },
};

export default function AutomotiveElectronics() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Automotive Electronics Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "Zero-defect inspection systems for automotive electronics with IATF 16949 compliance"
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
            { name: "Automotive Electronics" },
          ]}
        />

        <section className="relative overflow-hidden py-16">
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
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent-cyan">AUTOMOTIVE ELECTRONICS</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Automotive Electronics Inspection</h1>
              <p className="text-xl text-white mb-8">
                Zero-defect inspection systems meeting the stringent quality and traceability requirements of automotive electronics manufacturing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Quote
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
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">What is Automotive Electronics Inspection?</h2>
              <p className="text-gray-900 text-lg mb-4">
                Automotive electronics inspection refers to the specialized quality control processes required for manufacturing electronic components and assemblies destined for automotive applications. The automotive industry demands the highest levels of quality and reliability because failures can impact vehicle safety, lead to expensive recalls, and damage brand reputation.
              </p>
              <p className="text-gray-900 text-lg mb-4">
                Modern vehicles contain dozens of electronic control units (ECUs) managing everything from engine performance to advanced driver assistance systems (ADAS). Each of these systems requires zero-defect manufacturing with complete traceability. ASC International's inspection solutions are specifically designed to meet these demanding requirements while maintaining the high production volumes typical of automotive manufacturing.
              </p>
              <p className="text-gray-900 text-lg">
                Our systems provide the comprehensive inspection, documentation, and traceability capabilities required for IATF 16949 certification and PPAP (Production Part Approval Process) submissions. With features tailored to automotive quality standards, ASC helps manufacturers meet customer requirements and protect their reputation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Automotive Quality Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Zero-Defect Mandate</h3>
                  <p className="text-gray-600 mb-4">
                    Automotive OEMs demand PPM (parts per million) defect rates measured in single digits or better, requiring inspection systems with exceptional accuracy and reliability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Low false call rates to maintain efficiency</li>
                    <li>• High defect detection capability</li>
                    <li>• Consistent, repeatable results</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Complete Traceability</h3>
                  <p className="text-gray-600 mb-4">
                    Every board and component must be traceable from raw materials through final assembly. Inspection data becomes part of the permanent product record.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Barcode/2D code tracking</li>
                    <li>• Database integration</li>
                    <li>• Long-term data retention</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">PPAP Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    Production Part Approval Process requires detailed inspection reports, capability studies, and first article inspection documentation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dimensional measurement reports</li>
                    <li>• Process capability studies (Cpk)</li>
                    <li>• First article inspection reports</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">IATF 16949 Compliance</h3>
                  <p className="text-gray-600 mb-4">
                    Automotive quality management standard requires validated processes, statistical control, and documented inspection procedures.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Process validation documentation</li>
                    <li>• Statistical process control (SPC)</li>
                    <li>• Measurement system analysis (MSA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Critical Inspection Points</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Solder Paste Inspection - Essential for Automotive</h3>
                  <p className="text-gray-600 mb-4">
                    Studies show 60-70% of solder defects originate at the paste print stage. 3D SPI with statistical process control is critical for achieving automotive quality levels.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Volume Control</p>
                      <p className="text-sm text-gray-600">Tight control limits ensure consistent solder joint formation</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Real-Time SPC</p>
                      <p className="text-sm text-gray-600">Cpk calculations and trend analysis prevent defect escapes</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Process Optimization</p>
                      <p className="text-sm text-gray-600">Data-driven feedback improves print process capability</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Post-Reflow AOI - Comprehensive Coverage</h3>
                  <p className="text-gray-600 mb-4">
                    100% inspection of all solder joints and components with detailed defect classification and documentation for traceability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Solder Joint Quality</p>
                      <p className="text-sm text-gray-600">3D measurement of fillet height, shape, and wetting angle</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Component Verification</p>
                      <p className="text-sm text-gray-600">Confirm correct parts, polarity, and placement accuracy</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Defect Classification</p>
                      <p className="text-sm text-gray-600">Automated classification linked to rework documentation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">X-Ray Inspection - Hidden Joint Verification</h3>
                  <p className="text-gray-600 mb-4">
                    Critical for BGA and QFN packages common in automotive ECUs. Void analysis and joint quality verification meet automotive standards.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">BGA Void Analysis</p>
                      <p className="text-sm text-gray-600">Automated void measurement against customer specifications</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Thermal Pad Inspection</p>
                      <p className="text-sm text-gray-600">Critical for power semiconductors in electric vehicles</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Documentation</p>
                      <p className="text-sm text-gray-600">X-ray images stored with traceability data</p>
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
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Automotive Electronics Applications</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Powertrain Control Modules</h3>
                  <p className="text-gray-600">
                    Engine control units, transmission controllers, and hybrid/EV power management systems requiring extreme reliability and harsh environment capability
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Advanced Driver Assistance Systems (ADAS)</h3>
                  <p className="text-gray-600">
                    Camera modules, radar systems, lidar processing units, and sensor fusion ECUs where quality directly impacts vehicle safety
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Body Electronics</h3>
                  <p className="text-gray-600">
                    Body control modules, lighting controllers, HVAC systems, and infotainment units requiring high quality at competitive costs
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Electric Vehicle Systems</h3>
                  <p className="text-gray-600">
                    Battery management systems, DC-DC converters, onboard chargers, and high-voltage power electronics with unique inspection challenges
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Safety-Critical Systems</h3>
                  <p className="text-gray-600">
                    Airbag controllers, ABS/ESC modules, and steering control units where failure is not acceptable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">ASC Automotive Advantages</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Proven in Automotive Manufacturing</h3>
                    <p className="text-gray-600">Decades of experience supporting automotive electronics manufacturers worldwide, including direct OEM suppliers and Tier 1/Tier 2 suppliers</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">PPAP Support</h3>
                    <p className="text-gray-600">Complete documentation packages including dimensional reports, capability studies, and measurement system analysis for smooth customer approvals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Traceability Integration</h3>
                    <p className="text-gray-600">Seamless integration with MES, ERP, and quality management systems for complete product genealogy and recall readiness</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Process Capability Focus</h3>
                    <p className="text-gray-600">Advanced SPC tools and process optimization features help achieve and maintain the high Cpk values required by automotive customers</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Technical Support</h3>
                    <p className="text-gray-600">Direct access to our engineering team for technical questions, troubleshooting, and application support — no call centers, no queues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Automotive Quality Standards</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact ASC to discuss how our inspection solutions support automotive electronics manufacturing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Quote
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

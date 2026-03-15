import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device Inspection Systems | ASC International",
  description: "FDA-compliant inspection and documentation systems for medical electronics. ISO 13485 certified solutions with validation support and complete traceability.",
  keywords: ["medical device inspection", "FDA compliance", "ISO 13485", "21 CFR Part 11", "medical electronics quality"],
  openGraph: {
    title: "Medical Devices - ASC International",
    description: "FDA-compliant inspection systems for medical device manufacturing.",
    type: "website",
  },
};

export default function MedicalDevices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Medical Device Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "FDA-compliant inspection and documentation systems for medical electronics manufacturing"
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
            { name: "Medical Devices" },
          ]}
        />

        {/* Hero Section */}
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
                <span className="text-sm font-semibold text-accent-cyan">MEDICAL DEVICE MANUFACTURING</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Medical Device Inspection</h1>
              <p className="text-xl text-white mb-8">
                FDA-compliant inspection and documentation systems meeting the stringent requirements of medical device manufacturing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Information
                </Link>
                <Link href="/products" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Medical Device Inspection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">What is Medical Device Inspection?</h2>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Medical device inspection refers to the quality control processes required when manufacturing electronic medical devices and equipment. The medical device industry operates under some of the most stringent regulatory requirements in manufacturing because product failures can directly impact patient safety and health outcomes.
              </p>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                From implantable devices to diagnostic equipment, medical electronics require not only flawless assembly quality but also comprehensive documentation, validation, and traceability. Regulatory bodies like the FDA (United States), EMA (Europe), and other global authorities mandate specific quality management systems and manufacturing controls.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                ASC International's inspection systems are designed to meet these unique requirements. Our solutions support FDA 21 CFR Part 11 compliance, integrate with ISO 13485 quality systems, provide the detailed documentation required for device history records (DHR), and offer complete validation packages to satisfy regulatory audits.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-12 text-center text-white">Regulatory Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">FDA 21 CFR Part 11</h3>
                  <p className="text-gray-600 mb-4">
                    Electronic records and electronic signatures requirements for systems used in FDA-regulated manufacturing.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• User access controls and authentication</li>
                    <li>• Audit trail of all system changes</li>
                    <li>• Data integrity and security</li>
                    <li>• Electronic signature capability</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">ISO 13485</h3>
                  <p className="text-gray-600 mb-4">
                    Quality management system standard specifically for medical device manufacturers and suppliers.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Process validation documentation</li>
                    <li>• Risk management integration</li>
                    <li>• Measurement equipment validation</li>
                    <li>• Supplier quality control</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Device History Record (DHR)</h3>
                  <p className="text-gray-600 mb-4">
                    Complete documentation of manufacturing and inspection for each device produced, required for traceability.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Inspection results and images</li>
                    <li>• Component traceability</li>
                    <li>• Process parameter records</li>
                    <li>• Long-term data retention</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Design Controls</h3>
                  <p className="text-gray-600 mb-4">
                    FDA requirement for documented product design and development process including verification and validation.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Design verification protocols</li>
                    <li>• Process validation studies</li>
                    <li>• Installation qualification (IQ/OQ/PQ)</li>
                    <li>• Acceptance criteria documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-12 text-center text-white">Inspection Solutions for Medical Devices</h2>
              <div className="space-y-8">
                <div className="bg-dark-secondary border border-white/10 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">Pre-Production Validation</h3>
                  <p className="text-gray-600 mb-4">
                    Complete validation packages demonstrating inspection system capability before production begins. Essential for regulatory submissions and FDA audits.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">IQ/OQ/PQ Protocols</p>
                      <p className="text-sm text-gray-400">Installation, operational, and performance qualification documentation</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Gage R&R Studies</p>
                      <p className="text-sm text-gray-400">Measurement system analysis demonstrating repeatability and reproducibility</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Capability Studies</p>
                      <p className="text-sm text-gray-400">Process capability analysis meeting regulatory requirements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-secondary border border-white/10 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">Production Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    100% inspection with complete documentation of every device manufactured. Data becomes part of permanent device history record.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Complete Traceability</p>
                      <p className="text-sm text-gray-400">Serial number tracking with inspection data linked to each device</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Image Archival</p>
                      <p className="text-sm text-gray-400">High-resolution images stored for future review and audits</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Secure Data Storage</p>
                      <p className="text-sm text-gray-400">Long-term data retention meeting regulatory requirements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-secondary border border-white/10 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">Compliance Features</h3>
                  <p className="text-gray-600 mb-4">
                    Built-in features specifically designed to support FDA and ISO 13485 compliance requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">User Management</p>
                      <p className="text-sm text-gray-400">Role-based access control with electronic signatures</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Audit Trail</p>
                      <p className="text-sm text-gray-400">Complete logging of all system activities and changes</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-white">Change Control</p>
                      <p className="text-sm text-gray-400">Documented procedures for system modifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Device Applications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-8 text-white">Medical Device Applications</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Implantable Devices</h3>
                  <p className="text-gray-600">
                    Pacemakers, neurostimulators, cochlear implants, and other life-sustaining devices requiring the highest quality levels and complete traceability
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Diagnostic Equipment</h3>
                  <p className="text-gray-600">
                    Blood analyzers, imaging equipment, patient monitors, and diagnostic instruments where accurate results are critical for patient care
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Surgical Instruments</h3>
                  <p className="text-gray-600">
                    Electrosurgical units, robotic surgery systems, and powered surgical instruments requiring reliability during critical procedures
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Patient Monitoring</h3>
                  <p className="text-gray-600">
                    Vital signs monitors, pulse oximeters, ECG systems, and continuous monitoring devices where failures can impact patient safety
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Therapeutic Devices</h3>
                  <p className="text-gray-600">
                    Infusion pumps, ventilators, dialysis equipment, and other treatment delivery systems requiring precise and reliable operation
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Wearable Medical Devices</h3>
                  <p className="text-gray-600">
                    Continuous glucose monitors, cardiac monitors, and other wearable health monitoring devices combining small size with high reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ASC */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-8 text-white">Why Choose ASC for Medical Devices?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Medical Device Experience</h3>
                    <p className="text-gray-600">Decades of experience supporting medical device manufacturers through regulatory submissions, audits, and production</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Validation Support</h3>
                    <p className="text-gray-600">Complete IQ/OQ/PQ documentation packages, validation protocols, and measurement system analysis to support regulatory compliance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">21 CFR Part 11 Ready</h3>
                    <p className="text-gray-600">Systems designed with FDA electronic records requirements built-in, including user management, audit trails, and electronic signatures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Long-Term Partnership</h3>
                    <p className="text-gray-600">Ongoing support through product lifecycle including system requalification, software updates, and audit support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Integration Capabilities</h3>
                    <p className="text-gray-600">Connect with MES, ERP, and quality management systems for seamless DHR generation and traceability</p>
                  </div>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">Support Medical Device Quality</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact ASC to discuss how our FDA-compliant inspection solutions support medical device manufacturing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Information
                </Link>
                <Link href="/products" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
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

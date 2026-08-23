import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Semiconductor Inspection Solutions",
  description: "Advanced inspection systems for semiconductor manufacturing, wafer-level inspection, die-level SPI, and advanced packaging quality control. Ultra-high-resolution solutions for extreme miniaturization.",
  keywords: ["semiconductor inspection", "wafer inspection", "die inspection", "semiconductor quality", "wafer bumping inspection", "advanced packaging inspection", "flip-chip inspection"],
  openGraph: {
    title: "Semiconductor Inspection Solutions - ASC International",
    description: "Ultra-high-resolution inspection solutions for semiconductor manufacturing and advanced packaging operations.",
    type: "website",
  },
};

export default function SemiconductorInspection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Semiconductor Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "Advanced inspection solutions for semiconductor manufacturing, wafer-level inspection, and advanced packaging operations"
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
            { name: "Semiconductor" },
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
                <span className="text-sm font-semibold text-accent-cyan">SEMICONDUCTOR</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Semiconductor Inspection Solutions</h1>
              <p className="text-xl text-white mb-8">
                Ultra-high-resolution inspection for wafer-level processes, die-level quality control, and advanced packaging in semiconductor manufacturing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">What is Semiconductor Inspection?</h2>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Semiconductor inspection involves the precision quality control processes used throughout chip manufacturing, wafer fabrication, and advanced packaging. As node sizes shrink below 5nm and packaging technologies evolve toward heterogeneous integration, the demands on inspection systems have grown exponentially. Every micron matters when defect densities directly impact yield and profitability.
              </p>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Modern semiconductor manufacturing requires inspection at multiple critical stages: from incoming wafer verification and solder paste deposition on wafer-level packages, through die attach and wire bonding, to final package-level quality assurance. ASC International provides inspection solutions purpose-built for the extreme resolution, speed, and cleanliness requirements of semiconductor production environments.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                Our systems are designed to operate within cleanroom environments and integrate seamlessly with semiconductor production workflows. With sub-micron measurement capability and advanced defect classification algorithms, ASC inspection platforms help fabs and OSATs maximize yield while maintaining the throughput needed for volume production.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Semiconductor Manufacturing Challenges We Solve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Extreme Miniaturization</h3>
                  <p className="text-gray-600 mb-4">
                    Feature sizes continue to shrink as the industry pushes beyond 3nm nodes. Bump pitches below 100 microns, micro-pillar interconnects, and copper pillar arrays demand inspection systems with sub-micron resolution and exceptional measurement repeatability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sub-micron 3D measurement capability</li>
                    <li>• Micro-bump and copper pillar inspection</li>
                    <li>• Fine-pitch redistribution layer (RDL) verification</li>
                    <li>• Through-silicon via (TSV) coplanarity measurement</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Cleanroom Compatibility</h3>
                  <p className="text-gray-600 mb-4">
                    Semiconductor fabs operate under stringent environmental controls. Inspection equipment must meet cleanroom particle generation standards while maintaining measurement accuracy across tightly controlled temperature and humidity ranges.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ISO Class 5 (Class 100) cleanroom compatible</li>
                    <li>• Low-outgassing materials and construction</li>
                    <li>• Particle-free wafer handling systems</li>
                    <li>• ESD-safe design throughout</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Yield Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    With wafer costs reaching tens of thousands of dollars, even small yield improvements translate into significant revenue gains. Inspection data must be actionable, providing the insights needed to identify and eliminate systematic defect sources.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wafer-level defect mapping and clustering analysis</li>
                    <li>• Systematic vs. random defect classification</li>
                    <li>• Process window optimization feedback</li>
                    <li>• Die-level yield prediction models</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Defect Density Management</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced packaging technologies introduce new defect modes at each process step. From solder paste deposition on wafer-level packages to die stacking in 3D integration, every interface must be inspected to ensure final device reliability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-layer defect tracking through process flow</li>
                    <li>• Known-good-die (KGD) verification</li>
                    <li>• Interconnect integrity assessment</li>
                    <li>• Statistical defect density monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Semiconductor Inspection Solutions</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">3D Metrology for Wafer-Level Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Our wafer-level 3D metrology platforms deliver the resolution and throughput needed for high-volume semiconductor production. Measure bump height, coplanarity, volume, and diameter across entire wafers with sub-micron precision at production speeds.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Bump Metrology</p>
                      <p className="text-sm text-gray-600">Precise 3D measurement of solder bump height, diameter, volume, and coplanarity across full wafer surfaces</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Wafer Warpage Analysis</p>
                      <p className="text-sm text-gray-600">Full-surface warpage mapping to identify stress-induced deformation before downstream assembly steps</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Defect Detection</p>
                      <p className="text-sm text-gray-600">Automated identification of missing bumps, bridging, cracking, and surface contamination defects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Die-Level Solder Paste Inspection (SPI)</h3>
                  <p className="text-gray-600 mb-4">
                    For advanced packaging processes that apply solder paste at the die or substrate level, our high-resolution SPI systems ensure deposit accuracy on ultra-fine-pitch patterns. Critical for fan-out wafer-level packaging, system-in-package, and chiplet-based architectures.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Ultra-Fine-Pitch SPI</p>
                      <p className="text-sm text-gray-600">Volume and height measurement on paste deposits with pitches below 200 microns for advanced packages</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Substrate-Level Inspection</p>
                      <p className="text-sm text-gray-600">Inspect solder paste on organic and ceramic substrates used in multi-chip module assembly</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Process Feedback</p>
                      <p className="text-sm text-gray-600">Real-time SPC data loops to stencil printers and dispensing equipment for closed-loop process control</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Ultra-High-Resolution AOI</h3>
                  <p className="text-gray-600 mb-4">
                    Purpose-built for semiconductor packaging inspection, our AOI platforms combine multi-angle optics with advanced algorithms to detect defects invisible to standard electronics inspection systems. From wire bond verification to package-level cosmetic inspection, these systems deliver the sensitivity semiconductor applications demand.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Wire Bond Inspection</p>
                      <p className="text-sm text-gray-600">Verify bond placement, loop height, ball shape, and stitch quality for gold and copper wire bonding</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Die Attach Verification</p>
                      <p className="text-sm text-gray-600">Confirm die placement accuracy, tilt, adhesive coverage, and fillet formation on leadframes and substrates</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Package-Level Inspection</p>
                      <p className="text-sm text-gray-600">Final outgoing quality inspection for package marking, lead coplanarity, and cosmetic defects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">X-Ray Inspection for Hidden Interconnects</h3>
                  <p className="text-gray-600 mb-4">
                    Semiconductor packages increasingly rely on hidden solder joints that cannot be inspected optically. Our X-ray systems provide 2D and CT capabilities for comprehensive internal quality verification of advanced packages.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Flip-Chip Inspection</p>
                      <p className="text-sm text-gray-600">Verify underfill coverage, bump integrity, and void percentages in flip-chip packages</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">3D CT Analysis</p>
                      <p className="text-sm text-gray-600">Full volumetric reconstruction for failure analysis and process development in complex packages</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">TSV & Micro-Via Inspection</p>
                      <p className="text-sm text-gray-600">Verify fill quality and structural integrity of through-silicon vias and micro-vias in interposers</p>
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
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Industry Standards Compliance</h2>
              <p className="text-gray-600 mb-6">
                ASC inspection systems help semiconductor manufacturers meet the rigorous quality and environmental standards required in chip fabrication and advanced packaging:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">SEMI Standards</h3>
                  <p className="text-gray-600">SEMI E10, E79, and E142 for equipment reliability, utilization tracking, and overall equipment effectiveness (OEE) in semiconductor manufacturing</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">ISO 14644 Cleanroom</h3>
                  <p className="text-gray-600">Cleanroom classification and contamination control standards ensuring equipment compatibility with ISO Class 5 and above environments</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IPC-7711/7721</h3>
                  <p className="text-gray-600">Rework, modification, and repair standards for semiconductor packages with detailed defect documentation and process traceability</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">JEDEC Standards</h3>
                  <p className="text-gray-600">JEDEC J-STD-020 moisture sensitivity, J-STD-033 handling, and package reliability testing standards for semiconductor devices</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">AEC-Q Standards</h3>
                  <p className="text-gray-600">Automotive Electronics Council qualification standards for semiconductor components destined for automotive applications</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IATF 16949</h3>
                  <p className="text-gray-600">Automotive quality management system requirements for semiconductor suppliers serving the automotive supply chain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Common Applications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Wafer Bumping</h3>
                    <p className="text-gray-600">Full-wafer 3D inspection of solder bumps, copper pillars, and micro-bumps used in flip-chip and 2.5D/3D packaging. Measure height, diameter, volume, and coplanarity at production throughput with sub-micron repeatability.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Flip-Chip Assembly</h3>
                    <p className="text-gray-600">Pre- and post-reflow inspection of flip-chip assemblies including underfill verification, bump contact integrity, and thermal interface material coverage. X-ray and AOI integration provides complete quality assurance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Packaging</h3>
                    <p className="text-gray-600">Inspection for fan-out wafer-level packaging (FOWLP), system-in-package (SiP), chiplet integration, and 2.5D/3D stacking technologies. Support for multi-die modules, embedded bridges, and heterogeneous integration architectures.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">LED Manufacturing</h3>
                    <p className="text-gray-600">Inspection of LED die bonding, phosphor application, and chip-scale packaging. Verify die placement accuracy, wire bond quality, and optical alignment for high-brightness LED and micro-LED production.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Power Semiconductor Packaging</h3>
                    <p className="text-gray-600">Inspection of power modules including IGBT, SiC, and GaN devices. Verify large-area solder interfaces, wire bond and ribbon bond quality, and thermal management structures critical for power electronics reliability.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">MEMS & Sensor Packaging</h3>
                    <p className="text-gray-600">Specialized inspection for MEMS devices, image sensors, and other sensitive semiconductor components requiring careful handling and high-resolution quality verification during assembly and packaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Why Semiconductor Manufacturers Choose ASC</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Vendor-Independent</h3>
                  <p className="text-gray-600">Our open architecture integrates with any equipment on your line. No vendor lock-in means you choose the best tools for each process step.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Production Throughput</h3>
                  <p className="text-gray-600">High-speed scanning and parallel processing ensure inspection keeps pace with your production volume without creating bottlenecks.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Yield-Driven Analytics</h3>
                  <p className="text-gray-600">Advanced data analytics transform raw inspection data into actionable yield improvement insights with wafer maps, Pareto charts, and trend analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">Maximize Your Semiconductor Yield</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact us to discuss how ASC inspection solutions can improve yield and quality in your semiconductor operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
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

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/industries/electronics-manufacturing' },
  title: "Electronics Manufacturing Inspection Solutions",
  description: "Comprehensive inspection systems for PCB assembly, SMT production, and electronics manufacturing. Solutions for high-volume production, complex assemblies, and quality compliance.",
  keywords: ["PCB inspection", "SMT inspection", "electronics manufacturing", "PCB assembly quality", "surface mount inspection"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Electronics Manufacturing - ASC International",
    description: "Industry-leading inspection solutions for electronics manufacturing operations.",
    type: "website",
  },
};

export default function ElectronicsManufacturing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electronics Manufacturing Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "Comprehensive inspection solutions for PCB assembly and electronics manufacturing operations"
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
            { name: "Electronics Manufacturing" },
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
                <span className="text-sm font-semibold text-accent-cyan">ELECTRONICS MANUFACTURING</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Electronics Manufacturing</h1>
              <p className="text-xl text-white mb-8">
                Comprehensive inspection solutions for PCB assembly, SMT production, and modern electronics manufacturing operations
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
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">What is Electronics Manufacturing Inspection?</h2>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Electronics manufacturing inspection encompasses the quality control processes used during printed circuit board (PCB) assembly and electronics production. As electronics become more complex with smaller components, higher densities, and tighter tolerances, automated inspection systems have become essential for maintaining quality and production efficiency.
              </p>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Modern electronics manufacturing requires multiple inspection points throughout the assembly process. ASC International provides complete inspection solutions from solder paste application through final assembly, ensuring defects are detected and corrected at the optimal point in your production line.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                Our systems help electronics manufacturers achieve their quality objectives while maintaining high throughput and competitive costs. With decades of experience in the industry, we understand the challenges of modern SMT production and provide solutions that deliver measurable results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Manufacturing Challenges We Solve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Miniaturization</h3>
                  <p className="text-gray-600 mb-4">
                    Components continue to shrink with 01005 parts, micro-BGAs, and fine-pitch devices becoming standard. Our 3D inspection systems provide the resolution and accuracy needed for these tiny components.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 01005 and 0201 component inspection</li>
                    <li>• Micro-BGA void analysis</li>
                    <li>• Fine-pitch connector verification</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">High-Mix Production</h3>
                  <p className="text-gray-600 mb-4">
                    Modern electronics manufacturers handle diverse product portfolios with frequent changeovers. Our systems adapt quickly with automated program creation and optimization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fast program changeover</li>
                    <li>• CAD-driven programming</li>
                    <li>• Recipe management systems</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Quality Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    Customers demand zero-defect quality while cost pressures remain intense. Strategic inspection placement and data-driven process optimization are essential.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Statistical process control</li>
                    <li>• Defect trend analysis</li>
                    <li>• Traceability systems</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Production Efficiency</h3>
                  <p className="text-gray-600 mb-4">
                    Inspection must not become a bottleneck. Our high-speed systems maintain line throughput while providing comprehensive quality data.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Inline inspection speed</li>
                    <li>• Low false call rates</li>
                    <li>• Automated handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Complete Inspection Solutions</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Pre-Reflow Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Catch defects at the solder paste stage where they're easiest and least expensive to fix. Our 3D SPI systems provide comprehensive analysis of paste deposits.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Volume Measurement</p>
                      <p className="text-sm text-gray-600">Accurate 3D volume analysis ensures proper solder quantity for reliable joints</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Offset Detection</p>
                      <p className="text-sm text-gray-600">Identify stencil alignment issues before components are placed</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Process Control</p>
                      <p className="text-sm text-gray-600">Real-time SPC data helps optimize your print process</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Post-Reflow Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Verify assembly quality with automated optical inspection that detects component and solder defects using advanced imaging and AI algorithms.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Component Verification</p>
                      <p className="text-sm text-gray-600">Confirm correct parts are placed with proper orientation and alignment</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Solder Joint Analysis</p>
                      <p className="text-sm text-gray-600">3D inspection of fillet shape, wetting, and joint quality</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Defect Classification</p>
                      <p className="text-sm text-gray-600">Automated defect detection and classification for all component types</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">X-Ray Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Essential for hidden solder joints under BGAs, QFNs, and other packages. Our X-ray systems provide 2D and 3D imaging with void analysis.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">BGA Inspection</p>
                      <p className="text-sm text-gray-600">Verify ball attachment and measure void percentages accurately</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">QFN/DFN Packages</p>
                      <p className="text-sm text-gray-600">Inspect thermal pads and side wetting quality</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Through-Hole Joints</p>
                      <p className="text-sm text-gray-600">Verify barrel fill and solder wicking in PTH components</p>
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
                ASC inspection systems help electronics manufacturers meet and exceed industry quality standards:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IPC-A-610</h3>
                  <p className="text-gray-600">Acceptability of Electronic Assemblies - industry standard for assembly quality criteria</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IPC-7711/7721</h3>
                  <p className="text-gray-600">Rework and repair standards supported by detailed defect documentation</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">J-STD-001</h3>
                  <p className="text-gray-600">Requirements for soldered electrical and electronic assemblies</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">ISO 9001</h3>
                  <p className="text-gray-600">Quality management system documentation and process control</p>
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
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Consumer Electronics</h3>
                    <p className="text-gray-600">Smartphones, tablets, wearables, and other high-volume consumer products requiring consistent quality at competitive costs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Industrial Control Systems</h3>
                    <p className="text-gray-600">PLCs, motor drives, process controllers, and industrial automation equipment requiring high reliability</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Communications Equipment</h3>
                    <p className="text-gray-600">Network infrastructure, wireless base stations, and telecommunications hardware with complex RF assemblies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">LED & Lighting Systems</h3>
                    <p className="text-gray-600">LED driver boards, lighting controls, and solid-state lighting assemblies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Contract Manufacturing</h3>
                    <p className="text-gray-600">EMS providers handling diverse customer products requiring flexible inspection solutions</p>
                  </div>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">Optimize Your Electronics Manufacturing</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact us to discuss how ASC inspection solutions can improve your quality and efficiency
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

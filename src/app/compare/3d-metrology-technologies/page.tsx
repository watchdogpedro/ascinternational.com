import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/compare/3d-metrology-technologies' },
  title: "Laser Scanning vs Structured Light vs CMM Comparison",
  description: "Compare laser scanning, structured light, and contact CMM metrology technologies. Detailed comparison of accuracy, speed, surface requirements, and cost for dimensional measurement.",
  keywords: ["laser scanning vs CMM", "structured light metrology", "3D measurement comparison", "metrology technology"],
};

export default function MetrologyTechnologiesComparison() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "3D Metrology Technologies Comparison",
    "description": "Compare laser scanning, structured light, and contact CMM measurement methods"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: "3D Metrology Technologies" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">3D Metrology Technologies Comparison</h1>
              <p className="text-xl text-blue-100 mb-4">
                Compare laser scanning, structured light, and contact CMM methods for dimensional measurement and quality control.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Quick Summary</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  TL;DR: Laser Scanning for PCBs and complex surfaces, Structured Light for large parts, CMM for highest precision.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Laser Scanning if:</strong> PCB warpage analysis, coplanarity measurement, reverse engineering, need 0.5μm accuracy with fast scanning (2M points/sec).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Structured Light if:</strong> Large parts (100mm-1000mm), body panels, complex shapes, need full-field capture, or faster scanning of bigger objects.
                </p>
                <p className="text-gray-700">
                  <strong>Choose Contact CMM if:</strong> Highest precision (0.3μm), GD&T inspection per ASME Y14.5, precision machine parts, or regulatory compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Detailed Comparison Table</h2>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">Laser Scanning</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Structured Light</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Contact (CMM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">0.5μm - 2μm (excellent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">5μm - 20μm (good)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">0.3μm - 1μm (best)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Fast (millions of points/sec)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Very fast (full area capture)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Slow (point-by-point)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Surface Requirements</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Works on most surfaces</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Matte/coating may be needed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">All surfaces (contact)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Part Contact</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Non-contact (no damage)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Non-contact (no damage)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Contact (may deflect soft parts)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Complex Geometry</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent (captures details)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Good (full area view)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Limited (hard-to-reach areas)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Density</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Very high (dense point cloud)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Very high (full surface)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low (sampled points)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Typical Part Size</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">50mm - 500mm (versatile)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">100mm - 1000mm (larger)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">10mm - 3000mm (very large)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cost Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium ($50K - $150K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Medium-High ($80K - $200K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High ($100K - $500K+)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Environmental Sensitivity</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Low (stable in production)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Medium (ambient light)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High (temperature controlled)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Training Required</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Moderate (2-3 days)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Moderate (2-4 days)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Extensive (weeks/months)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">PCB warpage, flatness, reverse engineering</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Large parts, body panels, complex shapes</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">GD&T inspection, precision components</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">When to Choose Each Technology</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose Laser Scanning If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>PCB warpage analysis and flatness measurement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Coplanarity measurement for component placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Reverse engineering with high point density required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Non-contact measurement essential (delicate parts)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Need 0.5-2μm accuracy with fast scanning speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Production environment (stable, repeatable measurements)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-600">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Structured Light If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Large parts requiring full-field capture (100mm-1000mm)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Body panels, enclosures, or complex organic shapes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Need very fast scanning (full area in one shot)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>5-20μm accuracy sufficient for application</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Non-contact requirement with larger measurement volume</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Contact CMM If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Highest precision required (0.3-1μm accuracy)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>GD&T inspection per ASME Y14.5 or ISO 1101</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Precision machined components with tight tolerances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Aerospace or medical regulatory compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Need traceable calibration and ISO 17025 certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Precision Measurement Solutions</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us to learn how 3D metrology can improve quality assurance and reduce measurement time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Consultation
                </Link>
                <Link href="/products/3d-industrial-metrology" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View Metrology Systems
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

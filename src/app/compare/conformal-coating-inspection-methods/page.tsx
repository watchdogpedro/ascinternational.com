import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manual vs UV vs 3D Conformal Coating Inspection Comparison | ASC International",
  description: "Compare manual, UV fluorescence, and 3D conformal coating inspection methods. Detailed comparison of accuracy, speed, coverage detection, and thickness measurement capabilities.",
  keywords: ["conformal coating inspection", "UV inspection", "3D coating measurement", "manual inspection vs automated"],
};

export default function CoatingInspectionComparison() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "Conformal Coating Inspection Methods Comparison",
    "description": "Compare manual, UV fluorescence, and 3D measurement inspection methods for conformal coating"
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
            { name: "Coating Inspection Methods" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Conformal Coating Inspection Methods Comparison</h1>
              <p className="text-xl text-blue-100 mb-4">
                Compare manual visual, UV fluorescence, and 3D measurement methods for conformal coating quality verification.
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
                  TL;DR: 3D measurement for critical applications, UV for production verification, Manual for simple checks.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose 3D Measurement if:</strong> Need thickness accuracy (±5μm), IPC-CC-830 compliance, medical/automotive/aerospace applications, or precise thickness control documentation.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose UV Fluorescence if:</strong> Need fast coverage verification, production-speed inspection, UV-traceable coatings, or balance of speed and accuracy.
                </p>
                <p className="text-gray-700">
                  <strong>Choose Manual Visual if:</strong> Low volume, simple boards, basic coverage check, touch-up verification, or budget constraints.
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
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Manual Visual</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-green-600">UV Fluorescence</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">3D Measurement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Coverage Detection</td>
                      <td className="px-6 py-4 text-gray-600">⚠ Subjective visual check</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">✓ Excellent (fluorescence shows gaps)</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">✓ Excellent (height map)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Thickness Measurement</td>
                      <td className="px-6 py-4 text-gray-600">✗ Not possible</td>
                      <td className="px-6 py-4 text-green-600">⚠ Estimated from brightness</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">✓ Accurate (±5μm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-6 py-4 text-gray-600">Slow (manual review)</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Fast (automated)</td>
                      <td className="px-6 py-4 text-blue-600">Medium (3D scanning)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Repeatability</td>
                      <td className="px-6 py-4 text-gray-600">Poor (operator dependent)</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Good (consistent detection)</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">Excellent (±0.5μm repeatability)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Documentation</td>
                      <td className="px-6 py-4 text-gray-600">✗ Manual notes only</td>
                      <td className="px-6 py-4 text-green-600">✓ Images and pass/fail data</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">✓ Full thickness maps & statistics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">IPC-CC-830 Compliance</td>
                      <td className="px-6 py-4 text-gray-600">⚠ Limited documentation</td>
                      <td className="px-6 py-4 text-green-600">✓ Coverage verification</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">✓ Full compliance + thickness</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Coating Type Compatibility</td>
                      <td className="px-6 py-4 text-gray-600">All types (visual)</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">UV-traceable coatings only</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">All coating types</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Defect Detection</td>
                      <td className="px-6 py-4 text-gray-600">Obvious gaps only</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Gaps, thin areas, pooling</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">All defects + dimensional data</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Operator Skill Required</td>
                      <td className="px-6 py-4 text-gray-600">High (experience needed)</td>
                      <td className="px-6 py-4 text-green-600">Low (automated detection)</td>
                      <td className="px-6 py-4 text-blue-600">Low (automated measurement)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Initial Cost</td>
                      <td className="px-6 py-4 text-gray-600">$500 - $5K (lights, microscope)</td>
                      <td className="px-6 py-4 text-green-600">$25K - $80K</td>
                      <td className="px-6 py-4 text-blue-600">$80K - $200K</td>
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
              <h2 className="text-3xl font-bold mb-8">When to Choose Each Method</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose 3D Measurement If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Aerospace, medical, or automotive applications requiring thickness documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>IPC-CC-830 compliance with thickness measurement requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Need ±5μm thickness accuracy for process control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Non-UV coatings (Parylene, some epoxies) requiring measurement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Statistical process control and trend analysis requirements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-600">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Choose UV Fluorescence If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Production-speed inspection (medium to high volume)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Using UV-traceable conformal coatings (acrylic, urethane, silicone)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Need automated coverage verification without thickness measurement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Balance of inspection speed and accuracy requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Want to reduce manual inspection time and operator fatigue</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Manual Visual If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Very low volume production (under 50 boards/day)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Simple boards with basic coverage check requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Touch-up verification after rework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Prototype or R&D applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Budget constraints prevent automated inspection investment</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing Coating Inspection?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our specialists can help you select the right inspection method for your coating type and quality requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Consultation
                </Link>
                <Link href="/products/conformal-coating-inspection" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View Coating Inspection Systems
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

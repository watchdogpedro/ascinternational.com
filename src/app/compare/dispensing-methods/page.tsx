import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jetting vs Contact Dispensing vs Spray Coating Comparison | ASC International",
  description: "Compare jetting valves, contact dispensing, and spray coating methods for conformal coating and adhesive dispensing. Detailed comparison of precision, speed, waste reduction, and material compatibility.",
  keywords: ["jetting valves vs contact dispensing", "spray coating comparison", "non-contact dispensing", "dispensing methods comparison"],
};

export default function DispensingMethodsComparison() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "Dispensing Methods Comparison",
    "description": "Compare jetting valves, contact dispensing, and spray coating for conformal coating and adhesive dispensing"
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
            { name: "Dispensing Methods" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Dispensing Methods Comparison</h1>
              <p className="text-xl text-blue-100 mb-4">
                Compare jetting valves, contact dispensing, and spray coating methods for conformal coating and precision adhesive dispensing applications.
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
                  TL;DR: Jetting for precision and selective coating, Contact for high-viscosity materials, Spray for full-board coverage.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Jetting Valves if:</strong> Need precision spot coating (±50μm), selective area coating, zero waste dispensing, conformal coating keep-out areas, or 50-90% material savings.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Contact Dispensing if:</strong> High-viscosity materials (100K+ cP), potting compounds, underfill, dam-and-fill applications, or complex 3D bead patterns.
                </p>
                <p className="text-gray-700">
                  <strong>Choose Spray Coating if:</strong> Full-board coverage required, high-volume production, simple boards without selective coating, or established spray process.
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
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">Jetting Valves</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Contact Dispensing</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Spray Coating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Precision</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent (±50μm placement)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Good (±100μm with needle)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Poor (overspray issues)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Material Waste</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Minimal (50-90% reduction)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low (only what's dispensed)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High (overspray, masking)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Part Contact</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Non-contact (no damage risk)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Contact (may damage delicate)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Non-contact (requires masking)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Selective Coating</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent (programmable areas)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Good (programmable paths)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Limited (requires masking)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coating Thickness Control</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Precise (±5μm per pass)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Good (needle height control)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Variable (operator dependent)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Viscosity Range</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">1 - 100,000 cP (wide range)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1,000 - 1M+ cP (very high)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">10 - 5,000 cP (limited)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Fast (1,000+ dots/sec)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Medium (path speed limited)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Very fast (full area)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Setup/Changeover Time</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Minutes (program change)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">15-30 min (needle change)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">30-60 min (masking setup)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Material Compatibility</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Most conformal coatings, adhesives</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">All materials (potting, underfill)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low-viscosity coatings only</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Automation Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Fully automated (robot/gantry)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fully automated (robot/gantry)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Manual to semi-automated</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cost Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium-High ($40K - $150K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Medium ($20K - $80K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low-Medium ($5K - $40K)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Selective coating, fine-pitch, keep-out areas</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Potting, underfill, dam-and-fill</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Full-board coating, simple boards</td>
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
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose Jetting Valves If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Selective conformal coating with keep-out areas around connectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Fine-pitch components requiring precision placement (±50μm)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Need 50-90% material savings vs spray coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Non-contact dispensing essential (delicate components)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>High-mix production with frequent product changeovers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Want to eliminate masking and reduce processing time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Dot, line, or area dispensing patterns with precise control</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-600">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Contact Dispensing If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>High-viscosity materials (potting compounds 100K+ cP)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Underfill applications for BGA and flip-chip devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Dam-and-fill processes requiring complex 3D bead patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Thermal interface materials (TIM) for heat sink attachment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Gasket or sealant dispensing with controlled bead height</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Budget constraints favor lower-cost contact systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Spray Coating If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Full-board conformal coating coverage required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Simple boards with minimal or no keep-out areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Very high-volume production (1000+ boards/day)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Established spray process already in place</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Lowest initial equipment investment priority</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Material waste not a primary concern</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Advantages of Jetting Technology</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Material Savings</h3>
                  <p className="text-gray-700 mb-2">
                    Jetting valves deliver 50-90% material savings compared to spray coating by eliminating overspray and only applying coating exactly where needed.
                  </p>
                  <p className="text-gray-700">
                    ROI typically achieved in 6-18 months from material cost reduction alone, not including labor savings from eliminating masking.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">No Masking Required</h3>
                  <p className="text-gray-700 mb-2">
                    Eliminate time-consuming masking processes. Program keep-out areas digitally and change instantly between product variants.
                  </p>
                  <p className="text-gray-700">
                    Reduce processing time by 40-60% and eliminate masking material waste and labor costs.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Precision Placement</h3>
                  <p className="text-gray-700 mb-2">
                    ±50μm placement accuracy enables coating around fine-pitch components (0.4mm pitch BGAs) and tight connector areas.
                  </p>
                  <p className="text-gray-700">
                    Consistent droplet volume (±2%) ensures uniform coating thickness and quality across production runs.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Fast Changeover</h3>
                  <p className="text-gray-700 mb-2">
                    Switch between products in minutes with program changes - no physical tooling or masking setup required.
                  </p>
                  <p className="text-gray-700">
                    Ideal for high-mix manufacturing environments with frequent product changes and short production runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reduce Material Waste?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us to learn how jetting technology can save 50-90% on coating materials and eliminate masking processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request ROI Analysis
                </Link>
                <Link href="/products/jetting-valves" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View Jetting Systems
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

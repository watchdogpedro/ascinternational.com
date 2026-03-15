import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inline vs. Offline SPI: Which Configuration is Right for Your Line? | ASC International",
  description: "Compare inline and offline SPI configurations. Learn which solder paste inspection setup delivers the best ROI for your production volume, board mix, and quality targets.",
  keywords: ["inline SPI", "offline SPI", "SPI configuration", "solder paste inspection setup", "inline vs offline inspection"],
  openGraph: {
    title: "Inline vs. Offline SPI: Which Configuration is Right for Your Line?",
    description: "Choosing the wrong SPI configuration costs time and money. Learn the key differences between inline and offline setups to make the right call.",
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Inline vs. Offline SPI: Which Configuration is Right for Your Production Line?",
    "description": "A practical guide to choosing between inline and offline solder paste inspection configurations based on production volume, board mix, and quality requirements.",
    "author": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solderpasteinspection.com/logo.png"
      }
    },
    "datePublished": "2026-03-18",
    "dateModified": "2026-03-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://solderpasteinspection.com/blog/inline-vs-offline-spi"
    },
    "articleSection": "Buyer's Guide",
    "keywords": ["SPI", "inline inspection", "offline inspection", "solder paste", "electronics manufacturing"]
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Inline vs. Offline SPI" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Buyer&apos;s Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Inline vs. Offline SPI: Which Configuration is Right for Your Production Line?
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  The placement of your SPI system — inside the line or beside it — changes everything about how it performs. Here&apos;s how to choose.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2026-03-18">March 18, 2026</time>
                  <span className="mx-2">•</span>
                  <span>11 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  When manufacturers evaluate solder paste inspection systems, they often focus entirely on measurement performance — accuracy, repeatability, speed. But there&apos;s a more fundamental decision that shapes how useful any SPI system will be in practice: <strong>where in your process it sits</strong>.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Inline SPI operates within the SMT line itself, inspecting every board automatically as it passes through. Offline SPI sits adjacent to the line, requiring manual board transport. The right choice depends on your production profile — and making the wrong call means either paying for capability you can&apos;t use, or building in bottlenecks that defeat the purpose of inspection altogether.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">How Each Configuration Works</h2>

                <h3 className="text-xl font-semibold mt-8 mb-3">Inline SPI</h3>
                <p className="text-gray-700 mb-4">
                  An inline SPI system is integrated directly between the stencil printer and the pick-and-place machine. Boards enter automatically via conveyor, are inspected in full 3D, and exit to the next process — all without operator intervention. If a board fails inspection, it can be automatically diverted to a reject lane or trigger a line stop depending on how your system is configured.
                </p>
                <p className="text-gray-700 mb-6">
                  The critical advantage is 100% inspection with zero handling. Every board gets measured. Trends are tracked in real time. When integrated with closed-loop printer feedback, the SPI system can automatically correct printer offsets before the next board is printed — preventing defects rather than simply catching them.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Offline SPI</h3>
                <p className="text-gray-700 mb-4">
                  An offline (also called benchtop or standalone) SPI system sits beside the production line. Boards are manually carried to the unit for inspection — either as part of a first-article check, periodically during a run, or whenever a quality issue is suspected. Some offline systems have semi-automated loading, but board handling is still fundamentally manual.
                </p>
                <p className="text-gray-700 mb-6">
                  Offline inspection is inherently sampling-based. You can&apos;t inspect every board on a high-volume line by hand. That&apos;s a significant limitation for process control purposes, but it&apos;s often the right tradeoff for low-volume, high-mix environments where full automation doesn&apos;t make economic sense.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                  <h3 className="text-lg font-semibold mb-2">Key Decision Factors</h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-1">
                    <li>Production volume (boards per shift)</li>
                    <li>Board mix complexity (high-mix vs. dedicated lines)</li>
                    <li>Closed-loop printer integration requirements</li>
                    <li>Floor space and line layout constraints</li>
                    <li>Quality standards (automotive, medical, aerospace)</li>
                    <li>Operator headcount and skill level</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">When Inline SPI is the Right Choice</h2>

                <h3 className="text-xl font-semibold mt-8 mb-3">High-Volume, Dedicated Lines</h3>
                <p className="text-gray-700 mb-4">
                  If you&apos;re running the same board family at high volume — hundreds or thousands of boards per shift — inline SPI pays for itself quickly. The cost per board inspected drops dramatically as throughput increases, and the value of 100% inspection coverage compounds over time through defect prevention and trend data.
                </p>
                <p className="text-gray-700 mb-6">
                  A typical inline SPI system on a high-volume line will inspect 600–1,200 boards per hour depending on board size and complexity. At those volumes, manual offline inspection is practically impossible to scale — you&apos;d need a team of people just to keep up with sampling.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Closed-Loop Process Control Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Closed-loop SPI — where the inspection system automatically feeds correction data back to the stencil printer — is only possible inline. The system measures paste deposits, calculates positional drift and volume trends, and sends real-time corrections to the printer&apos;s offsets before the next board prints.
                </p>
                <p className="text-gray-700 mb-6">
                  Manufacturers targeting very low defect rates (automotive PPM targets, Class 3 electronics) almost universally require closed-loop control. An offline system, by definition, cannot close this loop — boards have already traveled past the printer by the time they reach the inspection station.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Traceability and Data Requirements</h3>
                <p className="text-gray-700 mb-6">
                  Industries with strict traceability requirements — medical devices, aerospace, automotive — need 100% inspection records linked to individual board serial numbers. An inline system automatically captures this data for every board. An offline sampling approach creates coverage gaps that may not satisfy regulatory or customer audit requirements.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">When Offline SPI Makes More Sense</h2>

                <h3 className="text-xl font-semibold mt-8 mb-3">High-Mix, Low-Volume Production</h3>
                <p className="text-gray-700 mb-4">
                  In a job shop or prototype environment where you might run 10–50 boards of a given type and then switch to something completely different, inline automation is hard to justify. The programming overhead and changeover time can exceed the time actually spent inspecting.
                </p>
                <p className="text-gray-700 mb-6">
                  Offline systems shine in these environments because they offer flexibility. One machine can serve multiple lines or cells, inspecting first articles and periodic samples without being tied to any single conveyor. The per-unit cost is higher, but the asset utilization across the whole facility can be excellent.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Process Development and New Product Introduction</h3>
                <p className="text-gray-700 mb-4">
                  NPI teams and process engineers use offline SPI to validate stencil designs, paste types, and printer settings before committing a new product to a production line. The ability to inspect a board quickly and make measurements without disrupting a running line is genuinely valuable.
                </p>
                <p className="text-gray-700 mb-6">
                  Many manufacturers run both: an offline system in the engineering lab for development work, and inline systems on the production floor for volume manufacturing. These aren&apos;t competing use cases — they&apos;re complementary.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Budget Constraints</h3>
                <p className="text-gray-700 mb-6">
                  Offline systems generally cost less than inline configurations with equivalent measurement capability. If your quality requirements can be met with sampling-based inspection and your production volume doesn&apos;t demand 100% coverage, an offline system offers a lower entry point while still delivering meaningful process visibility.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left">Factor</th>
                        <th className="p-4 text-left">Inline SPI</th>
                        <th className="p-4 text-left">Offline SPI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Inspection Coverage</td>
                        <td className="p-4 text-green-700">100% of boards</td>
                        <td className="p-4 text-orange-700">Sampling only</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Closed-Loop Feedback</td>
                        <td className="p-4 text-green-700">Yes — automatic</td>
                        <td className="p-4 text-red-700">No</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Best Volume Profile</td>
                        <td className="p-4">High volume, dedicated</td>
                        <td className="p-4">High-mix, low volume</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Operator Handling</td>
                        <td className="p-4 text-green-700">None required</td>
                        <td className="p-4 text-orange-700">Manual board transport</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Floor Space</td>
                        <td className="p-4 text-orange-700">In-line footprint required</td>
                        <td className="p-4 text-green-700">Flexible placement</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Traceability</td>
                        <td className="p-4 text-green-700">Full board-level data</td>
                        <td className="p-4 text-orange-700">Sample records only</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Initial Cost</td>
                        <td className="p-4 text-orange-700">Higher</td>
                        <td className="p-4 text-green-700">Lower</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium">NPI / Lab Use</td>
                        <td className="p-4 text-orange-700">Disruptive to production</td>
                        <td className="p-4 text-green-700">Ideal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">The Dual-Mode Option</h2>
                <p className="text-gray-700 mb-4">
                  Some manufacturers don&apos;t have to choose. Dual-mode SPI systems — like the ASC LineMaster DMI — can operate both inline (conveyor-fed, 100% inspection) and offline (manual load for first articles and sampling). This gives you the flexibility of an offline unit without sacrificing inline capability when the line is running production.
                </p>
                <p className="text-gray-700 mb-6">
                  Dual-mode systems are particularly useful for mid-volume manufacturers who run a mix of dedicated high-volume boards and occasional short runs. The inline mode handles the production boards automatically; the offline mode handles NPI work and engineering investigation without pulling a board off the line.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Making the Decision</h2>
                <p className="text-gray-700 mb-4">Start with these questions:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                  <ol className="space-y-4 text-gray-800">
                    <li><strong>1. What is your production volume?</strong> Under 200 boards/shift, offline is usually sufficient. Over 500 boards/shift, inline almost always pays off.</li>
                    <li><strong>2. Do you have closed-loop printer control requirements?</strong> If yes, inline is mandatory.</li>
                    <li><strong>3. What do your quality standards require?</strong> Automotive, medical, and aerospace programs increasingly require 100% inspection with full traceability — inline only.</li>
                    <li><strong>4. How frequently do you change over?</strong> More than 4–5 changeovers per day starts to favor offline or dual-mode flexibility.</li>
                    <li><strong>5. Do you have engineering or NPI inspection needs?</strong> If so, consider whether a separate offline unit for the lab makes sense alongside an inline production system.</li>
                  </ol>
                </div>

                <p className="text-gray-700 mb-8">
                  There&apos;s no universal right answer — but there is usually a clearly better answer once you map your production profile honestly against these factors.
                </p>

                <div className="bg-blue-600 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-3">Need Help Choosing?</h3>
                  <p className="mb-6 text-blue-100">
                    ASC International offers both inline and offline SPI configurations across our LineMaster and VisionPro product lines. Our applications engineers can review your production profile and recommend the right configuration.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Talk to an Applications Engineer
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <ul className="space-y-2">
                    <li><Link href="/blog/spi-buyers-guide-2026" className="text-blue-600 hover:underline">Complete SPI Buyer&apos;s Guide 2026</Link></li>
                    <li><Link href="/blog/closed-loop-spi-printer-feedback" className="text-blue-600 hover:underline">Closed-Loop SPI to Printer Feedback: How Automatic Correction Works</Link></li>
                    <li><Link href="/blog/calculating-inspection-roi" className="text-blue-600 hover:underline">Calculating ROI for Inspection Equipment</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

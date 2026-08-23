import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Stamp Out Rework: How Early Defect Detection Protects Your Margins",
  description: "Rework quietly erodes profit in electronics assembly. Learn what rework really costs, why it starts at the solder paste printer, and a practical plan to stamp it out and improve first-pass yield.",
  keywords: ["stamp out rework", "reduce rework", "rework cost", "first-pass yield", "zero defects", "10X rule", "solder paste printing", "process control", "PCB rework reduction"],
  openGraph: {
    title: "Stamp Out Rework: How Early Defect Detection Protects Your Margins",
    description: "What rework really costs in electronics assembly, and a practical plan to eliminate it by controlling the solder paste printing process.",
    type: "article",
  },
};

export default function StampOutRework() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Stamp Out Rework: How Early Defect Detection Protects Your Margins",
    "description": "A practical guide to eliminating rework in electronics assembly by understanding its true cost, why it originates at solder paste printing, and how early measurement improves first-pass yield and profitability.",
    "author": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": "2025-03-01",
    "dateModified": "2025-03-01"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Stamp Out Rework" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Stamp Out Rework: How Early Defect Detection Protects Your Margins
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Rework is one of the most expensive activities on the assembly floor &mdash; and one of the most avoidable. Here is what it really costs, why it starts at the printer, and how to stamp it out.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2025-03-01">March 1, 2025</time>
                  <span className="mx-2">•</span>
                  <span>10 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  In circuit assembly, production yield is the cleanest measure of quality. A higher first-pass yield means better quality with less rework and less scrap. So the most direct way to improve both quality <em>and</em> profitability is to attack the thing that sits between them: <strong>rework</strong>. Eliminate the rework step and you improve quality and margin at the same time. &ldquo;Stamp Out Rework&rdquo; is not a slogan &mdash; it is a process-control philosophy that says the best defect is the one that never reaches a fully built board.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                  <h3 className="text-lg font-semibold mb-2">What &ldquo;Stamp Out Rework&rdquo; Really Means</h3>
                  <p className="text-gray-800 mb-0">
                    It means designing your process so defects are caught &mdash; or prevented &mdash; at the earliest, cheapest stage possible, instead of being inspected, reworked, and scrapped after value has already been added.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">How Rework Affects Profitability</h2>

                <p className="mb-4">
                  The price you charge for a board is typically the sum of materials, equipment, labor, and profit. In the real world, most manufacturers also bake an <strong>anticipated yield</strong> into that price. When your first-pass yield falls below what you projected, the gap comes straight out of your margin &mdash; you are effectively paying to build boards twice.
                </p>

                <p className="mb-4">
                  That cuts both ways. If your first-pass yield is below projection, a yield-improvement strategy that reduces rework helps you claw back your target margin. And if your process already meets its initial yield and margin estimates, any further reduction in rework drops straight to the bottom line as additional profit.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Why Rework Costs So Much: The 10X Rule</h2>

                <p className="mb-4">
                  The reason rework is so destructive to margins is that its cost compounds. The <strong>10X Rule</strong> estimates that the cost to correct a defect grows roughly tenfold at each stage of assembly. A defect caught at the printer is cheap. The same defect discovered later &mdash; after components, after reflow, after test, after shipping &mdash; carries dramatically more sunk cost.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">The Cost of One Defect, Stage by Stage</h3>
                  <ul className="space-y-2">
                    <li><strong>Print failure at the printer:</strong> ~$0.50 to correct (wash and reprint)</li>
                    <li><strong>Found after reflow:</strong> ~$5.00</li>
                    <li><strong>Found after full population / test:</strong> ~$50.00</li>
                    <li><strong>Failure in the field:</strong> $500.00 or more, plus reputational cost</li>
                  </ul>
                </div>

                <p className="mb-4">
                  Every dollar of rework you avoid early is many dollars you don&apos;t spend later. That is the entire economic argument for stamping out rework at its source rather than catching it downstream.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Where to Begin: Control the Solder Paste Printer</h2>

                <p className="mb-4">
                  If rework compounds downstream, the strategy is obvious: prevent defects upstream, as early in production as possible. For SMT lines, that means the solder paste printer. Most experts agree that <strong>controlling solder paste printing is a key to high-yield production</strong>, with roughly <strong>50% of all soldering defects</strong> traceable to the deposition (printing) process.
                </p>

                <p className="mb-4">
                  The printing process is volatile &mdash; it has approximately <strong>40 variables</strong> that can drift, from squeegee pressure and print speed to paste viscosity and stencil condition. Controlling it requires measuring the characteristics that predict performance, above all paste <strong>volume</strong> and <strong>height</strong>. Solder paste inspection (SPI) gives you that measurement at the exact point where catching a defect is cheapest.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                  <h3 className="text-lg font-semibold mb-2">The Print Decides the Joint</h3>
                  <p className="text-gray-800 mb-0">
                    As a veteran process engineer once put it, even before a solder joint reaches the reflow oven, it has already been formed. Get the print right and you remove the root cause of most rework before a single component is placed.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">A Practical Plan to Stamp Out Rework</h2>

                <p className="mb-4">
                  You don&apos;t eliminate rework with a single purchase &mdash; you build a process that prevents defects. Here is a practical sequence to get started.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2">1. Measure Your Current First-Pass Yield</h3>
                    <p className="mb-0">
                      You cannot stamp out what you do not measure. Establish a true first-pass yield baseline &mdash; the yield before any rework or touch-up &mdash; so you can prove improvement later.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2">2. Quantify What Rework Actually Costs You</h3>
                    <p className="mb-0">
                      Go beyond labor and materials. Rework and scrap ripple into quality systems, procurement, shipments, sales, and customer support. The full cost is almost always higher than the line-item rework number suggests.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2">3. Find Out How Many Defects Are Printing Defects</h3>
                    <p className="mb-0">
                      Shorts and opens are obvious printing defects, but remember that paste tackiness holds components in place before reflow &mdash; so some missing or misoriented components are really caused by insufficient paste. Many lines underestimate how much of their rework is printing-related.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2">4. Put Measurement at the Printer</h3>
                    <p className="mb-0">
                      Add solder paste inspection so volume and height are measured before placement. Set control limits, act on out-of-spec prints by washing and reprinting, and tune the process iteratively using post-reflow defect data.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2">5. Treat Zero Defects as a Direction, Not a Switch</h3>
                    <p className="mb-0">
                      Complete &ldquo;Zero Defects&rdquo; is a long-term goal, not an overnight result. Begin by eliminating soldering defects early, before they ever become bad solder joints, and let first-pass yield climb steadily as the process tightens.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Make the Commitment Visible</h2>

                <p className="mb-4">
                  Stamping out rework is as much a cultural commitment as a technical one. The classic &ldquo;Stamp Out Rework&rdquo; sign on the production floor exists for a reason: it signals to the whole team that the organization is serious about improving product quality and profitability through a yield-improvement process strategy. When operators, engineers, and management all share the goal of catching defects early, the numbers follow.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Rework comes straight out of margin</strong> &mdash; eliminating it improves quality and profit at the same time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>The 10X rule</strong> means a $0.50 defect at the printer becomes $500+ in the field</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Roughly half of soldering defects start at printing</strong> &mdash; control the printer to attack rework at its root</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Zero defects is a direction</strong> &mdash; start by catching defects early and let first-pass yield rise over time</span>
                  </li>
                </ul>

                <div className="bg-blue-600 text-white p-8 rounded-lg mt-12">
                  <h2 className="text-2xl font-bold mb-4">Start Stamping Out Rework</h2>
                  <p className="text-lg mb-6">
                    ASC International&apos;s 3D solder paste inspection systems catch printing defects at the cheapest possible stage &mdash; before placement &mdash; so rework and scrap stop eating your margin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products/3d-solder-paste-inspection" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                      Learn About 3D SPI
                    </Link>
                    <Link href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500 text-center">
                      Contact Our Experts
                    </Link>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/blog/yield-improvement-strategies" className="text-blue-600 hover:underline">
                      → Yield Improvement Strategies
                    </Link>
                    <Link href="/blog/solder-paste-measurement-justification" className="text-blue-600 hover:underline">
                      → Solder Paste Measurement Justification
                    </Link>
                    <Link href="/blog/common-solder-paste-defects" className="text-blue-600 hover:underline">
                      → Common Solder Paste Defects
                    </Link>
                    <Link href="/blog/calculating-inspection-roi" className="text-blue-600 hover:underline">
                      → Calculating SPI ROI
                    </Link>
                  </div>
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

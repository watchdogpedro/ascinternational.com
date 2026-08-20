import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Implementing Closed-Loop Feedback Between SPI and Stencil Printer | Application Note | ASC International",
  description: "Step-by-step technical guide for implementing closed-loop communication between 3D SPI systems and stencil printers. Covers communication protocols, automatic offset correction, squeegee pressure adjustments, and validation procedures.",
  keywords: ["closed-loop feedback", "SPI printer communication", "stencil printer optimization", "automatic offset correction", "process control", "application note", "technical guide"],
  openGraph: {
    title: "Implementing Closed-Loop Feedback Between SPI and Stencil Printer",
    description: "Advanced technical guide for implementing automatic SPI-to-printer correction loops for optimal print quality.",
    type: "article",
  },
};

export default function ClosedLoopSPIPrinterFeedback() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Implementing Closed-Loop Feedback Between SPI and Stencil Printer",
    "description": "Step-by-step technical guide for implementing closed-loop communication between 3D SPI systems and stencil printers",
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
    "datePublished": "2026-01-25",
    "dateModified": "2026-01-25",
    "proficiencyLevel": "Advanced",
    "dependencies": "Understanding of 3D SPI systems, stencil printer operation, and basic SPC concepts",
    "applicationCategory": "Electronics Manufacturing Process Control",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/application-notes/implementing-closed-loop-spi-printer-feedback`
    },
    "articleSection": "Process Optimization",
    "keywords": ["closed-loop feedback", "SPI printer communication", "automatic offset correction", "process control"]
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Application Notes", href: "/application-notes" },
            { name: "Closed-Loop SPI-Printer Feedback" },
          ]}
        />

        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    Process Optimization
                  </span>
                  <span className="text-sm font-semibold text-red-700 bg-red-50 px-3 py-1 rounded">
                    Advanced
                  </span>
                  <span className="text-sm text-gray-500">January 25, 2026</span>
                  <span className="text-sm text-gray-500">22 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Implementing Closed-Loop Feedback Between SPI and Stencil Printer
                </h1>
                <p className="text-xl text-gray-600">
                  A step-by-step technical guide for implementing closed-loop communication between 3D SPI systems and stencil printers, enabling automatic offset correction, squeegee pressure adjustments, and real-time print quality optimization.
                </p>
              </header>

              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                <h2 className="text-lg font-bold mb-3 text-blue-900">Key Takeaways</h2>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Closed-loop SPI-to-printer feedback typically reduces print offset variation by 40&ndash;60% and paste volume variation by 20&ndash;35%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>SMEMA/Hermes (IPC-HERMES-9852) and SECS/GEM are the primary communication standards; protocol selection depends on your equipment generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Correction limits must be set carefully &mdash; excessive automatic corrections can create oscillation and make problems worse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>A phased implementation approach (offset first, then volume feedback) minimizes risk and builds operator confidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Validation requires at minimum 100 consecutive boards with documented correction accuracy</span>
                  </li>
                </ul>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li><a href="#what-is-closed-loop" className="text-blue-600 hover:underline">1. What Is Closed-Loop SPI-Printer Feedback?</a></li>
                  <li><a href="#communication-protocols" className="text-blue-600 hover:underline">2. Communication Protocols and Standards</a></li>
                  <li><a href="#correction-types" className="text-blue-600 hover:underline">3. Types of Automatic Corrections</a></li>
                  <li><a href="#implementation-procedure" className="text-blue-600 hover:underline">4. Step-by-Step Implementation Procedure</a></li>
                  <li><a href="#correction-limits" className="text-blue-600 hover:underline">5. Setting Correction Limits and Damping</a></li>
                  <li><a href="#validation-procedure" className="text-blue-600 hover:underline">6. Validation Procedure</a></li>
                  <li><a href="#troubleshooting" className="text-blue-600 hover:underline">7. Troubleshooting Common Issues</a></li>
                  <li><a href="#advanced-considerations" className="text-blue-600 hover:underline">8. Advanced Considerations</a></li>
                </ol>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 id="what-is-closed-loop" className="text-3xl font-bold mt-8 mb-4">1. What Is Closed-Loop SPI-Printer Feedback?</h2>
                <p>
                  In a conventional SMT line, the stencil printer and SPI system operate independently. When the SPI detects a print offset or volume issue, an operator must manually adjust the printer settings. This manual process is slow, reactive, and prone to over-correction.
                </p>
                <p>
                  Closed-loop feedback creates an automatic communication link between the SPI system and the stencil printer. The SPI measures paste deposit characteristics (position, volume, height) and sends correction data back to the printer, which automatically adjusts its parameters for the next print cycle. This creates a self-correcting system that continuously optimizes print quality without operator intervention.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Benefits of Closed-Loop Operation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Reduced offset variation:</strong> Automatic X-Y-theta correction keeps print alignment within tighter tolerances than manual adjustment</li>
                  <li><strong>Faster response:</strong> Corrections are applied every print cycle, not after an operator notices a trend</li>
                  <li><strong>Consistent quality:</strong> Eliminates operator-to-operator variation in printer adjustment</li>
                  <li><strong>Reduced scrap:</strong> Catching and correcting drift before it produces defective boards</li>
                  <li><strong>Data traceability:</strong> Every correction is logged with timestamps, providing complete process history</li>
                </ul>

                <h2 id="communication-protocols" className="text-3xl font-bold mt-12 mb-4">2. Communication Protocols and Standards</h2>
                <p>
                  The communication between SPI and printer can use several protocols depending on equipment manufacturer and generation:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Protocol</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Standard</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Data Capabilities</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Typical Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">SMEMA</td>
                        <td className="px-4 py-3 border-b">IPC-SMEMA-9851</td>
                        <td className="px-4 py-3 border-b">Board ready/busy signals only</td>
                        <td className="px-4 py-3 border-b">Legacy lines; basic handshaking</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Hermes</td>
                        <td className="px-4 py-3 border-b">IPC-HERMES-9852</td>
                        <td className="px-4 py-3 border-b">Board ID, recipe data, inspection results</td>
                        <td className="px-4 py-3 border-b">Modern lines; recommended for new installations</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">SECS/GEM</td>
                        <td className="px-4 py-3 border-b">SEMI E30/E37</td>
                        <td className="px-4 py-3 border-b">Full equipment control and data exchange</td>
                        <td className="px-4 py-3 border-b">High-volume; semiconductor-influenced lines</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Proprietary</td>
                        <td className="px-4 py-3 border-b">Vendor-specific</td>
                        <td className="px-4 py-3 border-b">Varies; often includes full SPC data</td>
                        <td className="px-4 py-3 border-b">Same-vendor SPI and printer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-6">
                  <p className="font-semibold text-yellow-800">Tip</p>
                  <p className="text-yellow-700 text-sm">IPC-HERMES-9852 is the recommended standard for new implementations. It provides sufficient data bandwidth for closed-loop operation while maintaining multi-vendor interoperability. If both your SPI and printer support Hermes, this should be your first choice.</p>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Network Architecture</h3>
                <p>
                  Closed-loop feedback typically uses a dedicated Ethernet connection between the SPI and printer, separate from the factory network. This ensures low-latency communication and prevents network congestion from delaying correction data.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Direct connection:</strong> Point-to-point Ethernet between SPI and printer (simplest, most reliable)</li>
                  <li><strong>Dedicated switch:</strong> SPI, printer, and optional MES system on an isolated VLAN</li>
                  <li><strong>Factory network:</strong> Possible but not recommended due to latency and reliability concerns</li>
                </ul>

                <h2 id="correction-types" className="text-3xl font-bold mt-12 mb-4">3. Types of Automatic Corrections</h2>
                <p>
                  Closed-loop systems can provide several types of corrections, ranging from simple alignment to complex process parameter adjustments:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Level 1: Print Alignment Correction (X-Y-Theta)</h3>
                <p>
                  The most common and lowest-risk form of closed-loop control. The SPI measures the average paste deposit offset from pad center and sends X, Y, and rotational (theta) correction values to the printer.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>What it corrects:</strong> Board-to-stencil misalignment, fiducial recognition drift, thermal expansion effects</li>
                  <li><strong>Correction speed:</strong> Applied to the next print cycle</li>
                  <li><strong>Risk level:</strong> Low &mdash; alignment corrections are easily reversible</li>
                  <li><strong>Typical improvement:</strong> 40&ndash;60% reduction in offset variation (Cpk improvement from 1.0 to 1.5+)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Level 2: Squeegee Pressure Correction</h3>
                <p>
                  When the SPI detects a systematic trend in paste height (e.g., front-to-back height gradient), it can signal the printer to adjust squeegee pressure or speed.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>What it corrects:</strong> Pressure drift, paste viscosity changes, squeegee blade wear</li>
                  <li><strong>Correction speed:</strong> Applied over multiple print cycles (averaged to prevent oscillation)</li>
                  <li><strong>Risk level:</strong> Medium &mdash; incorrect pressure adjustments can cause bridging or insufficient paste</li>
                  <li><strong>Typical improvement:</strong> 15&ndash;25% reduction in height variation</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Level 3: Cleaning Cycle Triggering</h3>
                <p>
                  The SPI can trigger automatic stencil under-wipe cycles when it detects patterns consistent with aperture clogging (e.g., progressively decreasing volume on specific pads).
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>What it corrects:</strong> Aperture clogging, paste build-up, contamination</li>
                  <li><strong>Trigger criteria:</strong> Volume drop &gt;15% on &ge;3 adjacent pads for &ge;2 consecutive boards</li>
                  <li><strong>Risk level:</strong> Low &mdash; cleaning is always beneficial; only cost is cycle time</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Level 4: Separation Speed Adjustment</h3>
                <p>
                  Advanced systems can adjust the stencil-to-board separation speed based on SPI volume data, optimizing paste release for different aperture sizes across the board.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>What it corrects:</strong> Poor paste release, especially on small apertures and high-aspect-ratio openings</li>
                  <li><strong>Risk level:</strong> Medium-high &mdash; separation speed affects all deposits simultaneously</li>
                  <li><strong>Recommendation:</strong> Implement only after Levels 1&ndash;3 are stable and validated</li>
                </ul>

                <h2 id="implementation-procedure" className="text-3xl font-bold mt-12 mb-4">4. Step-by-Step Implementation Procedure</h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SPI system with closed-loop output capability (verify software version supports your printer)</li>
                  <li>Stencil printer with closed-loop input capability (verify compatible firmware)</li>
                  <li>Ethernet cable(s) and switch if needed</li>
                  <li>Optimized SPI program (see our companion application note on <Link href="/application-notes/optimizing-spi-program-settings" className="text-blue-600 hover:underline">Optimizing SPI Program Settings</Link>)</li>
                  <li>Baseline process capability data (Cpk for offset and volume)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 1: Physical Connection and Communication Setup</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Connect the SPI and printer via dedicated Ethernet. Assign static IP addresses on the same subnet (e.g., SPI: 192.168.1.10, Printer: 192.168.1.20)</li>
                  <li>Configure the communication protocol on both machines (Hermes recommended)</li>
                  <li>Verify connectivity with a ping test from the SPI machine&apos;s diagnostic menu</li>
                  <li>Confirm board-tracking handshake &mdash; verify the SPI correctly identifies which board data corresponds to which print cycle</li>
                  <li>Run 5 boards and confirm the SPI is logging correction values (even before enabling automatic correction)</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 2: Offset Correction (Level 1) Implementation</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Enable offset correction in &ldquo;monitor only&rdquo; mode &mdash; the SPI calculates corrections but does not send them to the printer</li>
                  <li>Run 25 boards and compare SPI-calculated corrections against the printer&apos;s own alignment data</li>
                  <li>Verify correlation: the correction direction and magnitude should match expected behavior</li>
                  <li>Set correction limits (see Section 5) &mdash; typically &plusmn;50&micro;m for X/Y, &plusmn;0.02&deg; for theta</li>
                  <li>Enable automatic correction with damping factor of 0.5 (the printer applies 50% of the calculated correction)</li>
                  <li>Run 25 more boards and verify offset Cpk improvement</li>
                  <li>If results are satisfactory, increase damping to 0.7&ndash;0.8 for faster convergence</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 3: Volume Feedback (Level 2&ndash;3) Implementation</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>After offset correction is stable for at least 1 week of production, proceed to volume feedback</li>
                  <li>Enable cleaning cycle triggering first (Level 3) as it is lowest risk</li>
                  <li>Monitor cleaning frequency for 1 week &mdash; excessive cleaning (&gt;1 per 10 boards) indicates SPI threshold issues, not a printer problem</li>
                  <li>Enable squeegee pressure feedback in monitor mode</li>
                  <li>Validate suggested corrections against manual process engineering judgment for 50 boards</li>
                  <li>Enable automatic pressure correction with conservative limits (&plusmn;5% of nominal pressure)</li>
                </ol>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-6">
                  <p className="font-semibold text-red-800">Warning</p>
                  <p className="text-red-700 text-sm">Never enable all correction levels simultaneously. Always implement in phases, validating each level before adding the next. Combining multiple untested correction loops creates a risk of overcorrection and process instability.</p>
                </div>

                <h2 id="correction-limits" className="text-3xl font-bold mt-12 mb-4">5. Setting Correction Limits and Damping</h2>
                <p>
                  Correction limits and damping factors are the most critical tuning parameters for closed-loop stability. Incorrect settings can cause oscillation, where the system overcorrects in alternating directions.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Correction Limits</h3>
                <p>
                  Correction limits define the maximum adjustment the SPI can request per cycle. Setting these appropriately prevents the system from making dangerously large corrections due to measurement errors or anomalous boards.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Correction Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Conservative Limit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Standard Limit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Aggressive Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b">X offset</td>
                        <td className="px-4 py-3 border-b">&plusmn;25&micro;m/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;50&micro;m/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;100&micro;m/cycle</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b">Y offset</td>
                        <td className="px-4 py-3 border-b">&plusmn;25&micro;m/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;50&micro;m/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;100&micro;m/cycle</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b">Theta (rotation)</td>
                        <td className="px-4 py-3 border-b">&plusmn;0.01&deg;/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;0.02&deg;/cycle</td>
                        <td className="px-4 py-3 border-b">&plusmn;0.05&deg;/cycle</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b">Squeegee pressure</td>
                        <td className="px-4 py-3 border-b">&plusmn;2% of nominal</td>
                        <td className="px-4 py-3 border-b">&plusmn;5% of nominal</td>
                        <td className="px-4 py-3 border-b">&plusmn;10% of nominal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b">Cumulative X/Y limit</td>
                        <td className="px-4 py-3 border-b">&plusmn;75&micro;m total</td>
                        <td className="px-4 py-3 border-b">&plusmn;150&micro;m total</td>
                        <td className="px-4 py-3 border-b">&plusmn;250&micro;m total</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Damping Factor</h3>
                <p>
                  The damping factor (also called gain or correction ratio) determines what fraction of the calculated correction is actually applied. A damping factor of 1.0 means full correction; 0.5 means half the correction is applied.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>0.3&ndash;0.5:</strong> Conservative. Use during initial setup and validation. Slower convergence but very stable.</li>
                  <li><strong>0.5&ndash;0.7:</strong> Standard. Recommended for production after validation. Good balance of speed and stability.</li>
                  <li><strong>0.7&ndash;0.9:</strong> Aggressive. Use only with very low measurement noise and stable process. Risk of oscillation.</li>
                  <li><strong>1.0:</strong> Not recommended. Full correction amplifies any measurement noise and frequently causes oscillation.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-6">
                  <p className="font-semibold text-yellow-800">Tip</p>
                  <p className="text-yellow-700 text-sm">A good starting approach: set the damping factor equal to the SPI measurement Cgk for offset, divided by 2. For example, if your SPI&apos;s offset measurement Cgk is 1.4, start with a damping factor of 0.7. This ensures the correction magnitude is proportional to the measurement system&apos;s capability.</p>
                </div>

                <h2 id="validation-procedure" className="text-3xl font-bold mt-12 mb-4">6. Validation Procedure</h2>
                <p>
                  Proper validation is essential before committing closed-loop correction to full production. The following procedure provides documented evidence that the system is operating correctly.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Validation Test Protocol</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Baseline run (25 boards, open-loop):</strong> Run with closed-loop disabled. Record offset and volume data for all boards. Calculate Cpk for X, Y, theta, and volume.
                  </li>
                  <li>
                    <strong>Closed-loop run (100 boards, corrections active):</strong> Enable offset corrections with validated damping factor. Record all correction values, measured offsets before and after correction, and volume data.
                  </li>
                  <li>
                    <strong>Intentional disturbance test:</strong> Introduce a known offset (e.g., shift a fiducial or stencil) and verify the closed-loop system detects and corrects it within 2&ndash;3 cycles.
                  </li>
                  <li>
                    <strong>Correction limit test:</strong> Introduce a disturbance exceeding the correction limit and verify the system alerts the operator rather than making an excessive correction.
                  </li>
                  <li>
                    <strong>Communication failure test:</strong> Disconnect the Ethernet cable during production and verify both machines handle the failure gracefully (printer should continue with last-known-good settings).
                  </li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Acceptance Criteria</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Offset Cpk improvement of &ge;30% compared to baseline</li>
                  <li>No oscillation observed (corrections should not alternate sign for &gt;3 consecutive boards)</li>
                  <li>All corrections within defined limits for 100% of boards</li>
                  <li>Proper alert generation when limits are exceeded</li>
                  <li>Graceful failure handling with no defective boards produced during communication loss</li>
                </ul>

                <h2 id="troubleshooting" className="text-3xl font-bold mt-12 mb-4">7. Troubleshooting Common Issues</h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Oscillation (Hunting)</h3>
                <p>
                  <strong>Symptom:</strong> Offset corrections alternate between positive and negative values, with increasing magnitude.
                </p>
                <p>
                  <strong>Root causes:</strong> Damping factor too high, measurement noise exceeding correction magnitude, or board-to-board variation (e.g., warped boards) being interpreted as systematic drift.
                </p>
                <p>
                  <strong>Solution:</strong> Reduce damping factor by 0.1 increments. Implement a moving-average filter (use 3&ndash;5 board average instead of single-board correction). Verify SPI measurement Gage R&amp;R.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Corrections Not Taking Effect</h3>
                <p>
                  <strong>Symptom:</strong> SPI sends corrections but printer offsets don&apos;t improve.
                </p>
                <p>
                  <strong>Root causes:</strong> Board tracking mismatch (SPI data for board N being applied to board N+1 or N+2), printer ignoring correction values due to internal limits, or correction direction inverted.
                </p>
                <p>
                  <strong>Solution:</strong> Verify board tracking synchronization. Check printer&apos;s correction log to confirm values are received. Test with an intentional large offset to verify correction direction.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Intermittent Communication Loss</h3>
                <p>
                  <strong>Symptom:</strong> Corrections work sometimes but fail intermittently.
                </p>
                <p>
                  <strong>Root causes:</strong> Network congestion (if using shared factory network), cable quality issues, or timing conflicts between measurement completion and print cycle start.
                </p>
                <p>
                  <strong>Solution:</strong> Move to a dedicated Ethernet connection. Replace cables and test with cable certifier. Adjust SPI data transmission timing to ensure correction data is available before the printer starts its next cycle.
                </p>

                <h2 id="advanced-considerations" className="text-3xl font-bold mt-12 mb-4">8. Advanced Considerations</h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Multi-Board Averaging</h3>
                <p>
                  Instead of correcting based on a single board&apos;s data, use a rolling average of the last 3&ndash;5 boards. This filters out board-to-board variation (warpage, fiducial quality) and produces smoother, more stable corrections.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Zone-Based Corrections</h3>
                <p>
                  Some advanced SPI systems can calculate different offsets for different zones of the board. This is useful for large boards where thermal expansion causes different offsets at the center versus edges, or where board flex creates local misalignment.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Integration with MES</h3>
                <p>
                  Logging all correction data to a Manufacturing Execution System (MES) enables long-term trend analysis. Look for patterns such as progressive offset drift (indicating printer mechanical wear), time-of-day variation (thermal effects), or paste-lot-dependent volume changes.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Industry 4.0 and CFX</h3>
                <p>
                  IPC-CFX (Connected Factory Exchange) is emerging as the next-generation standard for machine-to-machine communication in SMT. While Hermes handles board-level handshaking, CFX provides richer data exchange including process recipes, quality data, and machine state. Consider CFX readiness in your equipment selection for future-proofing.
                </p>

                {/* Related Products */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
                  <h3 className="text-xl font-bold mb-2">Related ASC Products</h3>
                  <p className="text-gray-700 mb-4">
                    ASC International offers 3D SPI systems with built-in closed-loop feedback capabilities compatible with all major stencil printer brands via Hermes, SECS/GEM, and proprietary protocols.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/products/3d-solder-paste-inspection"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View 3D SPI Systems &rarr;
                    </Link>
                    <Link
                      href="/services/technical-support"
                      className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Technical Support &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published by</p>
                    <p className="font-semibold">ASC International Applications Engineering</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last updated: January 25, 2026
                  </div>
                </div>
              </div>

              {/* Related Application Notes */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Related Application Notes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/application-notes/optimizing-spi-program-settings" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Solder Paste Inspection</span>
                      <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">Advanced</span>
                    </div>
                    <h4 className="font-bold mb-2">Optimizing 3D SPI Program Settings for Fine-Pitch Components</h4>
                    <p className="text-gray-600 text-sm">Comprehensive guide to configuring SPI programs for fine-pitch and ultra-fine-pitch components...</p>
                  </Link>
                  <Link href="/application-notes/solder-defect-root-cause-analysis" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Process Optimization</span>
                      <span className="text-xs font-semibold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">Intermediate</span>
                    </div>
                    <h4 className="font-bold mb-2">Solder Defect Root Cause Analysis Using SPI and AOI Data</h4>
                    <p className="text-gray-600 text-sm">Practical methodology for correlating SPI and AOI data to identify root causes...</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Need Help Implementing Closed-Loop Control?</h3>
                <p className="text-blue-100 mb-6">
                  Our applications engineers have implemented closed-loop SPI-printer feedback systems across hundreds of production lines worldwide. We can help you get it right the first time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Contact Our Engineers &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

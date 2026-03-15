import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solder Defect Root Cause Analysis Using SPI and AOI Data | Application Note | ASC International",
  description: "Practical methodology for correlating solder paste inspection and automated optical inspection data to identify root causes of solder defects. Includes defect categorization, fishbone diagrams, data analysis techniques, and corrective action procedures.",
  keywords: ["root cause analysis", "solder defect analysis", "SPI AOI correlation", "defect categorization", "corrective action", "fishbone diagram", "application note", "technical guide"],
  openGraph: {
    title: "Solder Defect Root Cause Analysis Using SPI and AOI Data",
    description: "Practical methodology for using inspection data to identify and eliminate solder defect root causes.",
    type: "article",
  },
};

export default function SolderDefectRootCauseAnalysis() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Solder Defect Root Cause Analysis Using SPI and AOI Data",
    "description": "Practical methodology for correlating SPI and AOI data to identify root causes of solder defects",
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
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18",
    "proficiencyLevel": "Intermediate",
    "dependencies": "Basic understanding of SPI and AOI systems, familiarity with common solder defect types",
    "applicationCategory": "Electronics Manufacturing Quality Control",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://solderpasteinspection.com/application-notes/solder-defect-root-cause-analysis"
    },
    "articleSection": "Process Optimization",
    "keywords": ["root cause analysis", "solder defect analysis", "SPI AOI correlation", "corrective action"]
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
            { name: "Solder Defect Root Cause Analysis" },
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
                  <span className="text-sm font-semibold text-yellow-700 bg-yellow-50 px-3 py-1 rounded">
                    Intermediate
                  </span>
                  <span className="text-sm text-gray-500">January 18, 2026</span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Solder Defect Root Cause Analysis Using SPI and AOI Data
                </h1>
                <p className="text-xl text-gray-600">
                  A practical methodology for correlating solder paste inspection and automated optical inspection data to identify root causes of solder defects, implement corrective actions, and prevent recurrence.
                </p>
              </header>

              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                <h2 className="text-lg font-bold mb-3 text-blue-900">Key Takeaways</h2>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>60&ndash;70% of post-reflow solder defects can be traced back to paste printing issues detectable by SPI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Correlating SPI data (pre-reflow) with AOI data (post-reflow) creates a powerful diagnostic tool for identifying systematic process issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>A structured defect categorization framework prevents misdiagnosis and ensures corrective actions target the true root cause</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>The Pareto principle applies strongly: typically 3&ndash;5 root causes account for 80% of all solder defects</span>
                  </li>
                </ul>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-blue-600 hover:underline">1. Introduction &mdash; The Value of Data-Driven Root Cause Analysis</a></li>
                  <li><a href="#defect-categorization" className="text-blue-600 hover:underline">2. Defect Categorization Framework</a></li>
                  <li><a href="#spi-aoi-correlation" className="text-blue-600 hover:underline">3. Correlating SPI and AOI Data</a></li>
                  <li><a href="#fishbone-analysis" className="text-blue-600 hover:underline">4. Fishbone Diagram Analysis for Common Defects</a></li>
                  <li><a href="#data-analysis-techniques" className="text-blue-600 hover:underline">5. Data Analysis Techniques</a></li>
                  <li><a href="#corrective-actions" className="text-blue-600 hover:underline">6. Corrective Action Procedures</a></li>
                  <li><a href="#prevention" className="text-blue-600 hover:underline">7. Prevention and Continuous Improvement</a></li>
                  <li><a href="#case-examples" className="text-blue-600 hover:underline">8. Worked Examples</a></li>
                </ol>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 id="introduction" className="text-3xl font-bold mt-8 mb-4">1. Introduction &mdash; The Value of Data-Driven Root Cause Analysis</h2>
                <p>
                  When solder defects appear at post-reflow AOI or functional test, the natural reaction is to ask &ldquo;what went wrong?&rdquo; Too often, the answer is based on intuition or incomplete information, leading to corrective actions that don&apos;t address the real problem.
                </p>
                <p>
                  Modern SPI and AOI systems generate rich datasets that, when properly correlated, can pinpoint defect root causes with far greater accuracy than visual observation alone. The key insight is that SPI data captures the state of the process <em>before</em> reflow, while AOI captures the result <em>after</em> reflow. Comparing these two datasets reveals whether a defect originated at printing, placement, or reflow.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">What Is Root Cause Analysis?</h3>
                <p>
                  Root cause analysis (RCA) is a systematic method of identifying the fundamental reason a defect occurred, rather than just treating the symptom. For solder defects in electronics manufacturing, RCA involves:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accurately categorizing the defect type</li>
                  <li>Collecting relevant data from all process stages</li>
                  <li>Analyzing potential contributing factors</li>
                  <li>Identifying the most likely root cause through data correlation</li>
                  <li>Implementing and validating corrective actions</li>
                </ul>

                <h2 id="defect-categorization" className="text-3xl font-bold mt-12 mb-4">2. Defect Categorization Framework</h2>
                <p>
                  Accurate defect categorization is the essential first step. Misclassifying a defect leads to investigating the wrong root cause. Use the following framework to systematically categorize solder defects:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Category 1: Paste Volume Defects</h3>
                <p>These defects relate to the amount of solder paste deposited and are primarily detectable by SPI.</p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Defect</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">SPI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">AOI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Primary Root Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Insufficient solder</td>
                        <td className="px-4 py-3 border-b">Low volume (&lt;60%)</td>
                        <td className="px-4 py-3 border-b">Thin or incomplete fillet</td>
                        <td className="px-4 py-3 border-b">Clogged aperture, worn stencil, low pressure</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Excess solder</td>
                        <td className="px-4 py-3 border-b">High volume (&gt;180%)</td>
                        <td className="px-4 py-3 border-b">Solder balls, tombstoning</td>
                        <td className="px-4 py-3 border-b">Stencil gasketing failure, excess paste on stencil</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">No solder</td>
                        <td className="px-4 py-3 border-b">Zero or near-zero volume</td>
                        <td className="px-4 py-3 border-b">Missing or open joint</td>
                        <td className="px-4 py-3 border-b">Completely clogged aperture, stencil damage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Category 2: Paste Position Defects</h3>
                <p>These defects relate to misalignment between paste deposits and pads.</p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Defect</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">SPI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">AOI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Primary Root Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Offset (global)</td>
                        <td className="px-4 py-3 border-b">Uniform X/Y shift all pads</td>
                        <td className="px-4 py-3 border-b">Component misalignment</td>
                        <td className="px-4 py-3 border-b">Stencil-to-board alignment error</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Offset (local)</td>
                        <td className="px-4 py-3 border-b">Offset in specific area only</td>
                        <td className="px-4 py-3 border-b">Defects in one board zone</td>
                        <td className="px-4 py-3 border-b">Board warpage, local stencil distortion</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Rotation error</td>
                        <td className="px-4 py-3 border-b">Offset increases with distance from center</td>
                        <td className="px-4 py-3 border-b">Corner components affected most</td>
                        <td className="px-4 py-3 border-b">Fiducial recognition error, stencil theta misalignment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Category 3: Bridging Defects</h3>
                <p>These defects involve unintended solder connections between adjacent pads.</p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Defect</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">SPI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">AOI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Primary Root Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Paste bridge</td>
                        <td className="px-4 py-3 border-b">Paste between pads detected</td>
                        <td className="px-4 py-3 border-b">Solder bridge</td>
                        <td className="px-4 py-3 border-b">Paste slump, stencil aperture issues, excess volume</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Solder bridge (no paste bridge)</td>
                        <td className="px-4 py-3 border-b">Normal paste at SPI</td>
                        <td className="px-4 py-3 border-b">Solder bridge detected</td>
                        <td className="px-4 py-3 border-b">Component placement force, reflow profile, pad design</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Category 4: Reflow-Related Defects</h3>
                <p>These defects appear at AOI but have no corresponding SPI anomaly, indicating the defect was introduced after printing.</p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Defect</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">SPI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">AOI Indicator</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Primary Root Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Tombstoning</td>
                        <td className="px-4 py-3 border-b">Imbalanced volume between pads of same component</td>
                        <td className="px-4 py-3 border-b">Component standing on end</td>
                        <td className="px-4 py-3 border-b">Unequal paste volume, unequal pad sizes, reflow profile</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Head-in-pillow</td>
                        <td className="px-4 py-3 border-b">Normal paste deposits</td>
                        <td className="px-4 py-3 border-b">Incomplete wetting on BGA</td>
                        <td className="px-4 py-3 border-b">Board warpage during reflow, oxidation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Voiding</td>
                        <td className="px-4 py-3 border-b">Often normal at SPI</td>
                        <td className="px-4 py-3 border-b">X-ray required for detection</td>
                        <td className="px-4 py-3 border-b">Paste chemistry, reflow profile, pad finish</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="spi-aoi-correlation" className="text-3xl font-bold mt-12 mb-4">3. Correlating SPI and AOI Data</h2>
                <p>
                  The power of root cause analysis comes from comparing data at the same pad location across both inspection stages. This requires board-level traceability.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Prerequisites for Data Correlation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Unique board identification:</strong> Each board must have a unique barcode or serial number read by both SPI and AOI</li>
                  <li><strong>Common coordinate system:</strong> Both systems must use the same pad reference designators (from the same CAD data)</li>
                  <li><strong>Data export format:</strong> Both systems should export to a common format (CSV, XML, or through an MES database)</li>
                  <li><strong>Time synchronization:</strong> Timestamps on both systems should be synchronized for accurate process-time correlation</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Correlation Analysis Method</h3>
                <p>
                  For each AOI defect, look up the corresponding SPI data for the same pad on the same board. Classify the correlation into one of four outcomes:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Outcome</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">SPI Result</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">AOI Result</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Interpretation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold text-green-600">True positive</td>
                        <td className="px-4 py-3 border-b">Defect flagged</td>
                        <td className="px-4 py-3 border-b">Defect confirmed</td>
                        <td className="px-4 py-3 border-b">SPI correctly predicted the defect &mdash; printing root cause</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold text-red-600">SPI escape</td>
                        <td className="px-4 py-3 border-b">No defect flagged</td>
                        <td className="px-4 py-3 border-b">Defect found</td>
                        <td className="px-4 py-3 border-b">Either SPI thresholds need tightening OR defect introduced after SPI</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold text-yellow-600">False call</td>
                        <td className="px-4 py-3 border-b">Defect flagged</td>
                        <td className="px-4 py-3 border-b">No defect</td>
                        <td className="px-4 py-3 border-b">SPI thresholds too tight or measuring artifact &mdash; the reflow process &ldquo;healed&rdquo; the anomaly</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold text-gray-600">True negative</td>
                        <td className="px-4 py-3 border-b">No defect</td>
                        <td className="px-4 py-3 border-b">No defect</td>
                        <td className="px-4 py-3 border-b">Normal &mdash; no action needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg my-6">
                  <p className="font-semibold text-green-800">Key Insight</p>
                  <p className="text-green-700 text-sm">The most valuable root cause information comes from &ldquo;SPI escape&rdquo; cases. When AOI finds a defect that SPI missed, determine whether the SPI data was actually within limits (true escape, requiring threshold adjustment) or whether the defect was introduced after printing (placement or reflow issue, requiring process investigation).</p>
                </div>

                <h2 id="fishbone-analysis" className="text-3xl font-bold mt-12 mb-4">4. Fishbone Diagram Analysis for Common Defects</h2>
                <p>
                  The fishbone (Ishikawa) diagram is a standard tool for organizing potential root causes into categories. For solder defects in SMT, the six standard categories map to:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Six M Categories for Solder Defects</h3>
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold border-b">Factors to Investigate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Machine</td>
                        <td className="px-4 py-3 border-b">Printer alignment accuracy, squeegee condition, SPI calibration, AOI lighting, reflow oven profile uniformity</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Material</td>
                        <td className="px-4 py-3 border-b">Paste age/viscosity, paste lot variation, PCB pad finish (HASL/ENIG/OSP), solder mask quality, stencil condition</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Method</td>
                        <td className="px-4 py-3 border-b">Print parameters (speed, pressure, separation), reflow profile, cleaning frequency, stencil wiping method</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Measurement</td>
                        <td className="px-4 py-3 border-b">SPI thresholds, AOI sensitivity settings, Gage R&amp;R, reference standard validity</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-b font-semibold">Man (People)</td>
                        <td className="px-4 py-3 border-b">Operator training level, shift-to-shift variation, manual handling practices, verification procedures</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border-b font-semibold">Mother Nature (Environment)</td>
                        <td className="px-4 py-3 border-b">Temperature, humidity, vibration, air flow near printer, ESD protection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Example: Fishbone for Insufficient Solder on Fine-Pitch QFN</h3>
                <p>
                  When insufficient solder is detected on QFN peripheral pads, a typical fishbone analysis reveals these high-probability root causes (listed by category):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Machine:</strong> Squeegee blade worn or nicked at the QFN location; printer vision not compensating for local board warp</li>
                  <li><strong>Material:</strong> Stencil apertures partially clogged (check print count since last cleaning); paste viscosity too high (age or temperature)</li>
                  <li><strong>Method:</strong> Separation speed too fast for small aperture aspect ratio; insufficient stencil cleaning frequency</li>
                  <li><strong>Measurement:</strong> SPI volume threshold too loose, not catching gradual volume decline</li>
                </ul>

                <h2 id="data-analysis-techniques" className="text-3xl font-bold mt-12 mb-4">5. Data Analysis Techniques</h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Pareto Analysis</h3>
                <p>
                  Start every root cause investigation with a Pareto chart of defects by type, location, and frequency. The 80/20 rule almost always applies:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Export all AOI defects for the investigation period (minimum 1 week of production)</li>
                  <li>Sort by defect type and count occurrences</li>
                  <li>Create a Pareto chart &mdash; the top 3&ndash;5 defect types typically account for 80%+ of all defects</li>
                  <li>Focus root cause investigation on the top defect types first</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Spatial Analysis (Heat Maps)</h3>
                <p>
                  Plot defect locations on a board map to identify spatial patterns:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Uniform distribution:</strong> Suggests a global process issue (paste viscosity, printer settings)</li>
                  <li><strong>Edge concentration:</strong> Indicates stencil gasketing issues or board support problems</li>
                  <li><strong>Corner concentration:</strong> Points to board warpage or stencil alignment rotation error</li>
                  <li><strong>Single-component clustering:</strong> Suggests component-specific issue (pad design, aperture design, thermal mass)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Trend Analysis</h3>
                <p>
                  Plot SPI volume or offset data over time (by board sequence number) to identify trends:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Gradual decline:</strong> Aperture clogging, squeegee wear, paste aging</li>
                  <li><strong>Step change:</strong> Process parameter change, new paste lot, stencil change</li>
                  <li><strong>Cyclical pattern:</strong> Environmental variation (temperature/humidity cycles), cleaning cycle effects</li>
                  <li><strong>Random variation:</strong> Normal process noise &mdash; may not require action if within limits</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Process Capability Analysis</h3>
                <p>
                  Calculate Cpk for critical SPI measurements to quantify process capability:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cpk &ge; 1.67:</strong> Excellent &mdash; process well-centered and capable</li>
                  <li><strong>1.33 &le; Cpk &lt; 1.67:</strong> Acceptable &mdash; monitor for drift</li>
                  <li><strong>1.0 &le; Cpk &lt; 1.33:</strong> Marginal &mdash; improvement needed, defects likely</li>
                  <li><strong>Cpk &lt; 1.0:</strong> Incapable &mdash; process is producing defects, immediate action required</li>
                </ul>

                <h2 id="corrective-actions" className="text-3xl font-bold mt-12 mb-4">6. Corrective Action Procedures</h2>
                <p>
                  Once the root cause is identified, implement corrective actions using the following structured approach:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Immediate Containment (within hours)</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Tighten SPI thresholds on the affected pad group to prevent further defective boards from proceeding</li>
                  <li>If the defect rate is high (&gt;1%), consider stopping production until the root cause is confirmed</li>
                  <li>Inspect and quarantine any boards produced between the last known good board and defect detection</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Root Cause Correction (within days)</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Implement the fix targeting the identified root cause (e.g., replace damaged stencil, adjust print parameters, increase cleaning frequency)</li>
                  <li>Run a validation lot (minimum 25 boards) and verify defect rate drops to acceptable levels</li>
                  <li>Monitor SPI and AOI data for the next 100 boards to confirm sustained improvement</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Systemic Prevention (within weeks)</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Update preventive maintenance procedures to address the root cause (e.g., more frequent stencil inspection, paste viscosity checks)</li>
                  <li>Adjust SPI program thresholds based on the new process understanding</li>
                  <li>Update operator training materials if the issue was related to handling or setup</li>
                  <li>Consider implementing closed-loop feedback if the root cause was printer drift (see our companion application note on <Link href="/application-notes/implementing-closed-loop-spi-printer-feedback" className="text-blue-600 hover:underline">Closed-Loop SPI-Printer Feedback</Link>)</li>
                </ol>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-6">
                  <p className="font-semibold text-yellow-800">Tip</p>
                  <p className="text-yellow-700 text-sm">Document every root cause investigation and its outcome, even for minor issues. This builds an institutional knowledge base that accelerates future investigations. Over time, your team will recognize patterns and resolve new issues faster.</p>
                </div>

                <h2 id="prevention" className="text-3xl font-bold mt-12 mb-4">7. Prevention and Continuous Improvement</h2>
                <p>
                  The goal of root cause analysis is not just to fix today&apos;s problem but to prevent tomorrow&apos;s. Build these practices into your standard operating procedures:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Daily Monitoring</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Review SPI volume SPC charts at shift start and shift end</li>
                  <li>Check AOI defect Pareto from the previous shift</li>
                  <li>Verify SPI-AOI correlation rate (what percentage of AOI defects were predicted by SPI)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Weekly Review</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Run Pareto analysis on all defects from the past week</li>
                  <li>Compare against previous weeks to identify emerging trends</li>
                  <li>Review any boards that had SPI calls but passed AOI (false call analysis)</li>
                  <li>Update SPI thresholds if process capability has shifted</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Monthly Deep Dive</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full SPI-AOI correlation study on a representative product</li>
                  <li>Cpk analysis on critical components</li>
                  <li>Stencil inspection and aperture measurement on high-volume programs</li>
                  <li>Review and update the root cause investigation log</li>
                </ul>

                <h2 id="case-examples" className="text-3xl font-bold mt-12 mb-4">8. Worked Examples</h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Example 1: Intermittent Insufficient Solder on 0402 Passives</h3>
                <p><strong>Observation:</strong> AOI reports insufficient solder on 0402 resistors, affecting approximately 0.3% of pads. Defects are scattered across the board with no clear spatial pattern.</p>
                <p><strong>SPI correlation:</strong> 80% of affected pads showed SPI volume in the 55&ndash;65% range (borderline low). 20% showed normal volume at SPI but defective joint at AOI.</p>
                <p><strong>Investigation:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trend analysis showed a gradual volume decline over 50 boards, correlating with print count since last stencil cleaning</li>
                  <li>Paste age was 6 hours (within spec but at the upper end of the recommended window)</li>
                  <li>Stencil inspection revealed partial clogging on approximately 5% of 0402 apertures</li>
                </ul>
                <p><strong>Root cause:</strong> Aperture clogging rate was exceeding the cleaning frequency. As paste aged, viscosity increased, accelerating clogging.</p>
                <p><strong>Corrective actions:</strong></p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Increased stencil under-wipe frequency from every 10 prints to every 5 prints</li>
                  <li>Reduced maximum paste age on the stencil from 8 hours to 5 hours</li>
                  <li>Tightened SPI volume threshold for 0402s from &lt;50% to &lt;60%</li>
                  <li>Result: Insufficient solder rate dropped from 0.3% to 0.02%</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Example 2: Solder Bridging on 0.5mm Pitch QFP</h3>
                <p><strong>Observation:</strong> AOI reports solder bridges on QFP pins, always between pins 25&ndash;30 on one specific QFP. Defect occurs on approximately 1 in 20 boards.</p>
                <p><strong>SPI correlation:</strong> SPI showed elevated volume (140&ndash;160%) on the affected pins on all boards, but only flagged boards exceeding the 180% threshold. No paste bridges detected at SPI.</p>
                <p><strong>Investigation:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stencil inspection revealed slight aperture deformation on pins 25&ndash;30 (apertures were 15% wider than design)</li>
                  <li>The excess paste volume was within SPI limits but, combined with component placement force, was sufficient to cause bridging during reflow on some boards</li>
                </ul>
                <p><strong>Root cause:</strong> Stencil damage from handling, creating oversized apertures on specific pins.</p>
                <p><strong>Corrective actions:</strong></p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Replaced the stencil</li>
                  <li>Added a component-specific volume upper limit of 150% for the QFP pins</li>
                  <li>Implemented stencil aperture measurement during incoming inspection</li>
                  <li>Result: Bridging eliminated</li>
                </ol>

                {/* Related Products */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
                  <h3 className="text-xl font-bold mb-2">Related ASC Products</h3>
                  <p className="text-gray-700 mb-4">
                    ASC International offers both 3D SPI and AOI systems with integrated data export capabilities, enabling the SPI-AOI correlation analysis described in this application note.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/products/3d-solder-paste-inspection"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View 3D SPI Systems &rarr;
                    </Link>
                    <Link
                      href="/products/automated-optical-inspection"
                      className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      View AOI Systems &rarr;
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
                    Last updated: January 18, 2026
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
                  <Link href="/application-notes/implementing-closed-loop-spi-printer-feedback" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Process Optimization</span>
                      <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">Advanced</span>
                    </div>
                    <h4 className="font-bold mb-2">Implementing Closed-Loop Feedback Between SPI and Stencil Printer</h4>
                    <p className="text-gray-600 text-sm">Step-by-step guide for implementing automatic SPI-to-printer correction loops...</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Need Help With Defect Analysis?</h3>
                <p className="text-blue-100 mb-6">
                  Our applications engineers can help you set up SPI-AOI data correlation, conduct root cause investigations, and implement corrective actions in your production environment.
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

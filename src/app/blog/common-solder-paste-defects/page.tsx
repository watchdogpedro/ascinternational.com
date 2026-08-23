import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/common-solder-paste-defects' },
  title: "Common Solder Paste Defects: Causes, Detection & Prevention Guide",
  description: "Complete guide to solder paste defects in PCB assembly. Learn to identify, prevent, and fix insufficient paste, bridging, offset, and other printing defects before they cause failures.",
  keywords: ["solder paste defects", "PCB printing defects", "insufficient solder paste", "solder bridging", "paste offset", "SPI defect detection", "printing troubleshooting"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Common Solder Paste Defects: Root Causes and Prevention",
    description: "Comprehensive guide to identifying and preventing the 6 most common solder paste defects in electronics manufacturing.",
    type: "article",
  },
};

export default function SolderPasteDefects() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Common Solder Paste Defects: Root Causes and Prevention Guide",
    "description": "Complete guide to identifying, preventing, and fixing the most common solder paste defects in PCB assembly including insufficient paste, bridging, offset, excessive paste, missing deposits, and shape irregularities.",
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
    "datePublished": "2025-02-06",
    "dateModified": "2025-02-06"
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
            { name: "Common Solder Paste Defects" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Common Solder Paste Defects: Root Causes and Prevention Guide
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Learn to identify, prevent, and fix the 6 most common solder paste printing defects before they become expensive failures downstream.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2025-02-06">February 6, 2025</time>
                  <span className="mx-2">•</span>
                  <span>12 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Solder paste printing defects are the single largest source of quality problems in electronics assembly. Studies consistently show that <strong>60-70% of all manufacturing defects originate at the paste printing stage</strong> - before a single component is placed. Understanding these defects, their root causes, and prevention strategies is critical for any manufacturer serious about quality.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                  <h3 className="text-lg font-semibold mb-2">Why Solder Paste Defects Matter</h3>
                  <p className="text-gray-800 mb-2">
                    Catching defects at the paste stage - using 3D SPI (Solder Paste Inspection) - costs approximately <strong>$0.50 per defect</strong>. Finding the same defect at AOI after placement costs <strong>$50+</strong>. Field failures cost <strong>$500+</strong>. The math is simple: invest in early detection.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">The 6 Most Common Solder Paste Defects</h2>

                <div className="space-y-12">
                  {/* Defect 1: Insufficient Solder Paste */}
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-2xl font-bold mb-4">1. Insufficient Solder Paste (Low Volume/Height)</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Insufficient solder paste occurs when the paste volume or height on a pad is below the acceptable specification. This defect leads to weak solder joints with poor mechanical strength and electrical connectivity. In severe cases, it can cause open circuits or intermittent connections that fail in the field.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Stencil blockage:</strong> Paste dried in apertures, reducing transfer</li>
                      <li><strong>Under-squeegee pressure:</strong> Insufficient force to fill apertures completely</li>
                      <li><strong>Slow print speed:</strong> Paste rolling instead of shearing cleanly</li>
                      <li><strong>Worn stencil:</strong> Apertures enlarged or walls damaged</li>
                      <li><strong>Low paste viscosity:</strong> Paste slumping after print</li>
                      <li><strong>Poor stencil release:</strong> Paste sticking in aperture instead of transferring to pad</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      3D SPI systems measure volume directly and detect low paste with high accuracy (±2-5%). 2D systems calculate volume from area, which is less accurate (±10-15%). Volume is the critical parameter - a deposit might have correct area but insufficient height.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Maintain proper stencil cleaning cycles (typically every 3-5 prints)</li>
                      <li>Optimize squeegee pressure: too low = insufficient transfer, too high = paste pushing</li>
                      <li>Use correct print speed: 25-50 mm/sec for most pastes</li>
                      <li>Monitor paste viscosity and adjust room temperature/humidity</li>
                      <li>Replace worn stencils when aperture size increases beyond tolerance</li>
                      <li>Ensure proper separation speed and height to prevent paste pullback</li>
                    </ul>
                  </div>

                  {/* Defect 2: Excessive Solder Paste */}
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-2xl font-bold mb-4">2. Excessive Solder Paste (High Volume/Height)</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Excessive solder paste deposits more paste than specified on a pad. While this might seem better than insufficient paste, it causes serious problems: solder bridging between adjacent pads (shorts), solder balls during reflow, and poor component standoff that affects reliability.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Excessive squeegee pressure:</strong> Forcing paste into apertures beyond design volume</li>
                      <li><strong>Stencil too thick:</strong> Wrong thickness specification for component types</li>
                      <li><strong>Aperture size too large:</strong> Stencil design error or aperture wear</li>
                      <li><strong>Slow separation speed:</strong> Allowing paste to "peak" as stencil lifts</li>
                      <li><strong>High paste viscosity:</strong> Paste building up and transferring excessively</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      3D SPI detects excessive volume and height with precision. Critical for fine-pitch components where even 10-20% excess can cause bridging. Height measurement is especially important for coplanarity - all pads should be within ±25μm for proper component seating.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Reduce squeegee pressure if consistent high volume across board</li>
                      <li>Verify stencil thickness matches design (typically 100-150μm for standard SMT)</li>
                      <li>Increase separation speed to reduce paste peaking: 1-3 mm/sec typical</li>
                      <li>Check stencil aperture sizes against design specifications</li>
                      <li>Monitor and control paste rheology (viscosity should be 180-220 Pa·s for most pastes)</li>
                    </ul>
                  </div>

                  {/* Defect 3: Bridging */}
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-2xl font-bold mb-4">3. Solder Paste Bridging</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Bridging occurs when solder paste connects two or more adjacent pads that should be electrically isolated. This is a critical defect because it causes electrical shorts. Most bridging becomes evident only after reflow when paste melts and flows, but it often originates from paste printing issues.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Paste slump:</strong> Low viscosity paste spreading after print</li>
                      <li><strong>Excessive paste volume:</strong> Too much paste on fine-pitch pads</li>
                      <li><strong>Stencil aperture too large:</strong> Paste extruding beyond pad boundaries</li>
                      <li><strong>Poor print alignment:</strong> Stencil offset causing paste on solder mask</li>
                      <li><strong>Insufficient aperture separation:</strong> Web between apertures too thin, causing paste merging</li>
                      <li><strong>Contamination:</strong> Paste on underside of stencil transferring between pads</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      3D SPI excels at bridging detection by analyzing the full 3D profile between pads. It detects both actual bridges (paste physically connecting pads) and potential bridges (paste heights that will bridge during reflow). 2D SPI can miss subtle bridging, especially on fine-pitch components.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Use paste with correct slump characteristics for your pitch (Type 3-4 for standard, Type 5-6 for fine pitch)</li>
                      <li>Reduce stencil aperture size 10-20% on fine-pitch components (area reduction, not 1:1 with pad)</li>
                      <li>Ensure stencil alignment accuracy better than ±25μm for fine-pitch assemblies</li>
                      <li>Maintain minimum web thickness of 0.3mm between apertures (0.5mm preferred)</li>
                      <li>Clean stencil underside regularly to prevent paste buildup</li>
                      <li>Use closed-loop SPI feedback to printer to correct alignment drift</li>
                    </ul>
                  </div>

                  {/* Defect 4: Offset/Misalignment */}
                  <div className="border-l-4 border-yellow-600 pl-6">
                    <h3 className="text-2xl font-bold mb-4">4. Solder Paste Offset (X/Y Misalignment)</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Offset defects occur when the solder paste deposit is not centered on the pad - it's shifted in the X and/or Y direction. While small offsets may not prevent assembly, they reduce the effective solder joint area and can cause component self-alignment issues during reflow, potentially leading to tombstoning or component rotation.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Stencil alignment error:</strong> Stencil not properly aligned to board fiducials</li>
                      <li><strong>Board warpage:</strong> PCB not flat, causing local misalignment</li>
                      <li><strong>Tooling holes inaccurate:</strong> Board positioning inconsistent</li>
                      <li><strong>Stencil frame flex:</strong> Large stencils bowing during print</li>
                      <li><strong>Support pins misaligned:</strong> Board moving during separation</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      Both 2D and 3D SPI measure X/Y offset by comparing paste centroid to pad center. Typical specifications: ±25% of pad size for Class 2, ±15% for Class 3. Fine-pitch components require tighter tolerances (±50μm absolute).
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Use automatic vision alignment on printer to ±12.5μm or better</li>
                      <li>Verify fiducial accuracy during board design (position tolerance ±50μm)</li>
                      <li>Support warped boards with pins at critical locations</li>
                      <li>Use rigid stencil frames to prevent flex (minimum 20mm frame width)</li>
                      <li>Implement closed-loop SPI feedback to auto-correct stencil offset</li>
                      <li>Calibrate printer alignment system quarterly</li>
                    </ul>
                  </div>

                  {/* Defect 5: Missing Deposits */}
                  <div className="border-l-4 border-red-700 pl-6">
                    <h3 className="text-2xl font-bold mb-4">5. Missing Solder Paste Deposits</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Missing deposits are pads with no solder paste at all - a complete absence. This is typically a catastrophic defect that will result in component non-wetting, opens, or components falling off during handling. It's often easier to detect than subtle volume variations.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Complete aperture blockage:</strong> Dried paste or debris blocking transfer</li>
                      <li><strong>Damaged stencil:</strong> Aperture torn or missing entirely</li>
                      <li><strong>Paste roll depletion:</strong> No paste available in that area for squeegee to deposit</li>
                      <li><strong>Extreme stencil release failure:</strong> All paste sticks in aperture, none transfers</li>
                      <li><strong>Board contamination:</strong> Resist or coating preventing paste adhesion</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      Both 2D and 3D SPI easily detect missing deposits. Modern systems use area thresholds (typically &lt;10% of expected area = missing). False calls can occur with very low but present paste, so proper threshold setting is important.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Inspect stencil for damaged apertures before production start</li>
                      <li>Maintain consistent paste roll across entire print area</li>
                      <li>Clean apertures immediately if missing deposits detected during production</li>
                      <li>Verify board surface finish and cleanliness (no oxidation, contamination)</li>
                      <li>Replace stencils when aperture damage occurs</li>
                    </ul>
                  </div>

                  {/* Defect 6: Shape Irregularities */}
                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-2xl font-bold mb-4">6. Shape Irregularities (Smearing, Tailing, Scooping)</h3>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">What It Is</h4>
                    <p className="mb-4">
                      Shape defects describe paste deposits that have correct volume but incorrect shape - smearing onto solder mask, tailing in one direction, scooped or crater-like profiles, or ragged edges. These defects indicate process issues and can lead to bridging, poor wetting, or solder balls.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Root Causes</h4>
                    <ul className="mb-4">
                      <li><strong>Smearing:</strong> Stencil underside dirty, dragging paste across board</li>
                      <li><strong>Tailing:</strong> Stencil separation direction causing paste to pull in one direction</li>
                      <li><strong>Scooping:</strong> Center of deposit lower than edges, often from paste settling or poor release</li>
                      <li><strong>Ragged edges:</strong> Paste tearing during stencil release rather than clean separation</li>
                      <li><strong>Paste "strings":</strong> Excessive paste tackiness causing strings between pads</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Detection</h4>
                    <p className="mb-4">
                      3D SPI is far superior for shape defect detection because it captures the complete topography. Shape analysis algorithms detect concavity (scooping), edge definition, and surface smoothness. 2D SPI can detect severe smearing but misses subtle shape issues.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Prevention</h4>
                    <ul className="mb-4">
                      <li>Clean stencil underside every 3-5 prints minimum (wet-vac or wet wipe)</li>
                      <li>Optimize separation speed and angle for clean release (typically perpendicular, 1-3mm/sec)</li>
                      <li>Control paste rheology - proper tackiness prevents stringing but allows release</li>
                      <li>Verify aperture wall smoothness (electropolish stencils for fine pitch)</li>
                      <li>Use nano-coating on stencil for improved release characteristics</li>
                      <li>Maintain proper environmental conditions (20-25°C, 40-60% RH)</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Troubleshooting Flowchart: Quick Diagnosis</h2>

                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Step-by-Step Troubleshooting Process</h3>
                  <ol className="space-y-3">
                    <li><strong>1. Is the defect consistent across the board or localized?</strong>
                      <ul className="ml-6 mt-2">
                        <li>• Consistent: Print process issue (pressure, speed, paste viscosity)</li>
                        <li>• Localized: Stencil issue (blockage, damage) or board issue (warpage, contamination)</li>
                      </ul>
                    </li>
                    <li><strong>2. Does cleaning the stencil resolve it?</strong>
                      <ul className="ml-6 mt-2">
                        <li>• Yes: Increase cleaning frequency or improve cleaning method</li>
                        <li>• No: Proceed to step 3</li>
                      </ul>
                    </li>
                    <li><strong>3. Check SPC trends from SPI data:</strong>
                      <ul className="ml-6 mt-2">
                        <li>• Volume trending down over time: Paste drying, increase cleaning frequency</li>
                        <li>• Offset drifting in one direction: Alignment drift, recalibrate printer</li>
                        <li>• Sudden change: Process change occurred (paste lot, operator, stencil)</li>
                      </ul>
                    </li>
                    <li><strong>4. Verify print parameters against specification:</strong>
                      <ul className="ml-6 mt-2">
                        <li>• Squeegee pressure: 0.3-0.5 kg/cm for metal, 0.2-0.3 for polyurethane</li>
                        <li>• Print speed: 25-50 mm/sec typically</li>
                        <li>• Separation speed: 1-3 mm/sec</li>
                      </ul>
                    </li>
                    <li><strong>5. Inspect stencil under magnification:</strong>
                      <ul className="ml-6 mt-2">
                        <li>• Look for damage, wear, proper aperture size</li>
                        <li>• Measure aperture with microscope if volume consistently off</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Role of 3D SPI in Defect Prevention</h2>

                <p className="mb-4">
                  While this guide focuses on identifying and correcting defects, the best strategy is preventing them from reaching downstream processes. This is where <strong>3D Solder Paste Inspection</strong> becomes invaluable:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Early Detection</h3>
                    <p className="text-gray-700">
                      Catch defects immediately after printing, before expensive components are placed. This reduces fix cost from $50 (at AOI) to $0.50 (at SPI).
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Root Cause Analysis</h3>
                    <p className="text-gray-700">
                      Real-time SPC from SPI shows trends before defects occur. Cpk dropping from 1.67 to 1.33? Time for stencil cleaning or printer adjustment.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Closed-Loop Feedback</h3>
                    <p className="text-gray-700">
                      Automatic correction of printer offset, squeegee pressure, and cleaning cycles based on SPI measurements. Process optimizes itself.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Documentation</h3>
                    <p className="text-gray-700">
                      Complete traceability for ISO 9001, IATF 16949, AS9100. Every board documented with volume, height, offset measurements and images.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>60-70% of defects originate at paste printing</strong> - making it the most critical process to control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>3D SPI catches defects for $0.50</strong> vs $50 at AOI vs $500+ in the field</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Most defects are process-related</strong>, not equipment failures - proper setup and maintenance prevents 90%+ of issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Regular stencil cleaning is critical</strong> - clean every 3-5 prints to prevent 80% of common defects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>SPC trends predict problems</strong> before they become defects - monitor Cpk, volume trends, and offset drift</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Closed-loop feedback</strong> from SPI to printer enables automatic process optimization and correction</span>
                  </li>
                </ul>

                <div className="bg-blue-600 text-white p-8 rounded-lg mt-12">
                  <h2 className="text-2xl font-bold mb-4">Need Help With Solder Paste Defects?</h2>
                  <p className="text-lg mb-6">
                    ASC International's 3D SPI systems detect all six defect types with industry-leading accuracy. Our application engineers can help you optimize your printing process and implement automated defect detection.
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
                    <Link href="/products/3d-solder-paste-inspection" className="text-blue-600 hover:underline">
                      → 3D Solder Paste Inspection Systems
                    </Link>
                    <Link href="/blog/3d-spi-vs-2d-spi-comparison" className="text-blue-600 hover:underline">
                      → 3D SPI vs 2D SPI Comparison
                    </Link>
                    <Link href="/blog/calculating-inspection-roi" className="text-blue-600 hover:underline">
                      → Calculating SPI ROI
                    </Link>
                    <Link href="/faq" className="text-blue-600 hover:underline">
                      → SPI Frequently Asked Questions
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

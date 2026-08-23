import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/multi-reflection-suppression-explained' },
  title: "Multi-Reflection Suppression in SPI",
  description: "How multi-reflection suppression (MRS) works in solder paste inspection, why it matters for accuracy, and how modern SPI handles reflective surfaces.",
  keywords: ["MRS SPI", "reflection suppression", "solder paste inspection accuracy", "multi-reflection suppression", "SPI measurement accuracy"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Understanding Multi-Reflection Suppression in SPI",
    description: "How MRS technology ensures accurate solder paste measurement on reflective surfaces.",
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Understanding Multi-Reflection Suppression in SPI",
    "description": "Technical explanation of multi-reflection suppression in solder paste inspection and its impact on measurement accuracy",
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
    "datePublished": "2026-01-22",
    "dateModified": "2026-01-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/multi-reflection-suppression-explained`
    },
    "articleSection": "Technology",
    "keywords": ["MRS SPI", "reflection suppression", "solder paste inspection accuracy"]
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
            { name: "Multi-Reflection Suppression Explained" },
          ]}
        />

        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    Technology
                  </span>
                  <span className="text-sm text-gray-500">January 22, 2026</span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Understanding Multi-Reflection Suppression in SPI
                </h1>
                <p className="text-xl text-gray-600">
                  Reflective surfaces are the nemesis of accurate solder paste measurement. Multi-reflection suppression (MRS) technology is key to getting reliable 3D measurements. This article explains what MRS is, how it works, when it matters, and what to look for in SPI systems.
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Every 3D SPI system relies on projecting light patterns onto the board surface and measuring the reflected light to reconstruct a 3D profile. This works well on matte surfaces that scatter light uniformly. But solder paste, bare copper pads, and board finishes like ENIG or immersion tin are highly reflective. When light bounces off one surface and reflects onto another before reaching the camera, it creates measurement artifacts that can look like solder paste where there is none, or mask paste deposits that are actually present. Multi-reflection suppression is the collection of techniques used to solve this fundamental optical challenge.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">The Reflection Problem in 3D SPI</h2>
                <p>
                  To understand why MRS matters, you need to understand how 3D measurement works in SPI and where reflections cause problems.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">How 3D SPI Measurement Works</h3>
                <p>
                  Most 3D SPI systems use a technique called phase-shift profilometry. The basic process is:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Pattern projection</strong> - A projector casts a series of sinusoidal fringe patterns (alternating light and dark stripes) onto the board surface</li>
                  <li><strong>Phase shifting</strong> - The pattern is shifted multiple times (typically 4-8 shifts) while capturing images at each position</li>
                  <li><strong>Phase calculation</strong> - Mathematical algorithms compute the phase value at each pixel from the captured images</li>
                  <li><strong>Height conversion</strong> - The phase values are converted to height measurements using calibration data that maps phase to physical height</li>
                </ol>
                <p>
                  This process assumes that the light reaching the camera at each pixel came from the corresponding point on the surface directly below. When this assumption holds, the system produces accurate 3D measurements.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Where the Assumption Breaks Down</h3>
                <p>
                  The assumption fails when specular (mirror-like) reflections come into play. There are several scenarios where this happens:
                </p>

                <h4 className="text-xl font-semibold mt-4 mb-2">Scenario 1: Direct Specular Reflection</h4>
                <p>
                  When the projected light hits a smooth, reflective surface (like a bare ENIG pad or a very smooth paste deposit), it reflects at the angle of incidence rather than scattering. If the reflected beam happens to enter the camera, it creates an extremely bright spot that saturates the sensor. Saturated pixels produce incorrect phase calculations and therefore incorrect height measurements.
                </p>

                <h4 className="text-xl font-semibold mt-4 mb-2">Scenario 2: Inter-Reflection (Multi-Bounce)</h4>
                <p>
                  This is the most insidious problem and the primary target of MRS technology. Light from the projector hits a reflective surface (like a pad), bounces onto a nearby surface (like a solder paste deposit or solder mask), and then reflects into the camera. The camera now sees light at that pixel from two sources: the direct reflection and the inter-reflected light. The resulting phase measurement is a weighted average of the two signals, producing a height value that is incorrect.
                </p>

                <h4 className="text-xl font-semibold mt-4 mb-2">Scenario 3: Subsurface Scattering</h4>
                <p>
                  Solder mask and some board substrates are translucent. Light can penetrate the surface, scatter within the material, and exit at a different location. This creates a blur effect in the phase map that reduces measurement accuracy, particularly for small pads near the solder mask edge.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Impact of Reflections on Measurement Accuracy:</h4>
                  <table className="w-full text-left">
                    <thead className="border-b-2">
                      <tr>
                        <th className="py-2">Reflection Type</th>
                        <th className="py-2 text-center">Typical Error</th>
                        <th className="py-2 text-center">Affected Areas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Specular saturation</td>
                        <td className="py-2 text-center">10-50+ microns</td>
                        <td className="py-2 text-center">Shiny pad surfaces</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Inter-reflection</td>
                        <td className="py-2 text-center">5-30 microns</td>
                        <td className="py-2 text-center">Pad edges, adjacent pads</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Subsurface scatter</td>
                        <td className="py-2 text-center">2-10 microns</td>
                        <td className="py-2 text-center">Solder mask boundaries</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 mt-2">For context, a typical solder paste deposit is 100-150 microns tall. Errors of 10-50 microns represent 7-50% of the total deposit height.</p>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">How Multi-Reflection Suppression Works</h2>
                <p>
                  MRS is not a single technique but a collection of approaches that work together to minimize the impact of reflections. Different SPI vendors use different combinations of these techniques, but the underlying physics is common.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Technique 1: Multi-Angle Illumination</h3>
                <p>
                  Instead of projecting light from a single direction, the system projects patterns from multiple angles. At each angle, the specular reflection goes in a different direction. By analyzing which angles produce valid data at each pixel and which produce saturated or corrupted data, the system can select or combine the best data from each angle.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg my-4">
                  <p className="font-semibold mb-2">How It Helps:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>At least one projection angle typically avoids direct specular reflection at any given point</li>
                    <li>Inter-reflection patterns change with illumination angle, allowing identification and removal</li>
                    <li>Multiple angles provide redundant data for quality assessment</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Technique 2: High Dynamic Range (HDR) Capture</h3>
                <p>
                  The system captures multiple images at different exposure levels. Short exposures prevent saturation on highly reflective surfaces. Long exposures capture adequate signal on dark or diffuse surfaces. The best exposure data is selected or combined for each pixel.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg my-4">
                  <p className="font-semibold mb-2">How It Helps:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Prevents sensor saturation from specular reflections</li>
                    <li>Ensures adequate signal-to-noise ratio on dark areas</li>
                    <li>Provides accurate phase data across a wide range of surface reflectivities</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Technique 3: Binary / Non-Sinusoidal Pattern Analysis</h3>
                <p>
                  In addition to the sinusoidal patterns used for phase measurement, some systems project binary (on/off) stripe patterns. The response to binary patterns can be analyzed to detect areas affected by inter-reflection. Where the binary response does not match the expected behavior, the system flags those pixels as potentially corrupted.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Technique 4: Signal Quality Metrics</h3>
                <p>
                  Advanced SPI systems compute quality metrics for each phase measurement, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Modulation depth</strong> - How strong the fringe pattern signal is at each pixel. Low modulation indicates potential reflection problems</li>
                  <li><strong>Phase consistency</strong> - Whether phase values from different projection angles agree. Disagreement indicates reflection artifacts</li>
                  <li><strong>Residual error</strong> - The difference between the measured data and the expected sinusoidal pattern. Large residuals indicate corrupted data</li>
                </ul>
                <p>
                  Pixels with poor quality metrics are either excluded from the measurement or corrected using data from unaffected angles or exposures.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Technique 5: Algorithmic Compensation</h3>
                <p>
                  Some systems use mathematical models of the inter-reflection process to estimate and subtract the reflected signal. If the system knows the geometry of the surfaces involved and their reflective properties, it can model the expected inter-reflection and correct for it computationally.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">When MRS Matters Most</h2>
                <p>
                  MRS is important for all 3D SPI applications, but certain conditions make it critical:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">High-Reflectivity Board Finishes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ENIG (Electroless Nickel Immersion Gold)</strong> - Highly reflective and increasingly common. Creates strong specular reflections</li>
                  <li><strong>Immersion tin</strong> - Very reflective when fresh</li>
                  <li><strong>OSP (Organic Solderability Preservative) on copper</strong> - Reflective bare copper visible through thin OSP layer</li>
                  <li><strong>Immersion silver</strong> - Extremely reflective surface finish</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Fine-Pitch Components</h3>
                <p>
                  As pad sizes decrease and spacing gets tighter, the impact of inter-reflection grows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Small pads have less area for valid measurement, so even a few corrupted pixels matter</li>
                  <li>Close spacing means adjacent pad reflections are stronger</li>
                  <li>Fine-pitch BGA pads (0.3-0.4mm pitch) are particularly susceptible</li>
                  <li>0201 and 01005 component pads where the entire deposit may be only a few pixels</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Lead-Free Solder Paste</h3>
                <p>
                  Lead-free solder pastes tend to be more reflective than leaded pastes due to their alloy composition. The paste surface can exhibit mirror-like reflections, especially with newer formulations designed for fine-pitch printing.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Mixed-Surface Boards</h3>
                <p>
                  Boards with a mix of highly reflective and diffuse areas present the greatest challenge. The system must handle extreme dynamic range within a single field of view, with some areas requiring very short exposures and adjacent areas requiring long exposures.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Evaluating MRS Capability</h2>
                <p>
                  When evaluating SPI systems, use these approaches to assess MRS performance:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Test 1: Known-Height Standard on Reflective Substrate</h3>
                <p>
                  Place a calibrated step-height standard on a highly reflective surface (like a mirror or an ENIG coupon). Measure the standard height. Compare the measured value to the certified height. A system with good MRS will match the certified value within specification; a system with poor MRS will show significant errors.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Test 2: Your Actual Boards</h3>
                <p>
                  This is the most important test. Run your most challenging boards, particularly those with ENIG finish, fine-pitch components, and high component density. Compare measurements at the same locations using multiple consecutive measurements (gauge R&R). A system with good MRS will show consistent results; poor MRS will show high variation, especially on reflective pads.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Test 3: Empty Pad Measurement</h3>
                <p>
                  Measure an unpopulated board (no paste). All pad measurements should read zero height (within noise). If the system reports significant non-zero heights on bare pads, particularly near board edges or adjacent to solder mask steps, this indicates reflection artifacts.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Test 4: Compare Results Across Surface Finishes</h3>
                <p>
                  If you use multiple board finishes (ENIG, HASL, OSP), measure the same stencil pattern on different finishes. With good MRS, the paste volume measurements should be consistent regardless of the board finish. Significant variation between finishes indicates that reflections are influencing the measurement.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">The Speed-Accuracy Tradeoff</h2>
                <p>
                  MRS techniques generally require additional data capture (more projection angles, more exposure levels, more images), which takes time. This creates a fundamental tradeoff between measurement accuracy and inspection speed:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <table className="w-full text-left">
                    <thead className="border-b-2">
                      <tr>
                        <th className="py-2">MRS Level</th>
                        <th className="py-2 text-center">Images Required</th>
                        <th className="py-2 text-center">Relative Speed</th>
                        <th className="py-2 text-center">Accuracy Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">None / Basic</td>
                        <td className="py-2 text-center">4-8</td>
                        <td className="py-2 text-center">Fastest</td>
                        <td className="py-2 text-center">Poor on reflective surfaces</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Standard MRS</td>
                        <td className="py-2 text-center">12-24</td>
                        <td className="py-2 text-center">Moderate</td>
                        <td className="py-2 text-center">Good for most applications</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Enhanced MRS</td>
                        <td className="py-2 text-center">24-48+</td>
                        <td className="py-2 text-center">Slower</td>
                        <td className="py-2 text-center">Best for challenging surfaces</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The best SPI systems offer configurable MRS levels, allowing you to select the appropriate balance of speed and accuracy for each product. Simple boards with HASL finish may need only basic MRS, while complex boards with ENIG finish and fine-pitch BGAs may require enhanced MRS.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">What to Look For in SPI Systems</h2>
                <p>
                  When evaluating SPI systems for MRS capability, prioritize these features:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Multi-angle projection</strong> - Systems with 4+ projection angles have more data to work with for MRS</li>
                  <li><strong>HDR capability</strong> - Multiple exposure levels are essential for handling mixed-reflectivity boards</li>
                  <li><strong>Per-pixel quality metrics</strong> - The system should be able to identify and flag measurements affected by reflections</li>
                  <li><strong>Configurable MRS levels</strong> - Ability to adjust MRS intensity per program or per board region</li>
                  <li><strong>Consistent accuracy across finishes</strong> - Demonstrate comparable accuracy on ENIG, HASL, and OSP boards</li>
                  <li><strong>Speed with MRS enabled</strong> - Understand the throughput impact of MRS at the level your boards require</li>
                </ol>

                <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>
                  Multi-reflection suppression is a fundamental capability that separates high-quality 3D SPI systems from those that provide unreliable measurements on real-world boards. As board finishes become more reflective and component pitches continue to shrink, MRS capability becomes increasingly critical.
                </p>
                <p>
                  Do not take vendor claims about MRS at face value. Test with your actual boards, on your actual finishes, and verify measurement accuracy independently. The difference between good and poor MRS implementation can mean the difference between actionable process control data and misleading numbers that lead to incorrect decisions.
                </p>
                <p>
                  When evaluating SPI systems, make MRS performance a top-tier evaluation criterion alongside measurement accuracy, throughput, and ease of use. A system that delivers accurate measurements on a demo board but fails on your reflective ENIG boards is not a system you can trust for production process control.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
                  <h3 className="text-xl font-bold mb-2">Want to Test MRS Performance on Your Boards?</h3>
                  <p className="text-gray-700 mb-4">
                    ASC International offers benchmark testing on your actual production boards to demonstrate measurement accuracy across all surface finishes. See real results, not spec-sheet claims.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request a Benchmark Test →
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Written by</p>
                    <p className="font-semibold">ASC International Team</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-gray-600 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/blog/3d-spi-vs-2d-spi-comparison" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">3D SPI vs 2D SPI: Why the Third Dimension Matters</h4>
                    <p className="text-gray-600 text-sm">Learn the differences and when 3D SPI investment makes sense...</p>
                  </Link>
                  <Link href="/blog/spi-buyers-guide-2026" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">Complete SPI Buyer&apos;s Guide 2026</h4>
                    <p className="text-gray-600 text-sm">Everything you need to know before purchasing a solder paste inspection system...</p>
                  </Link>
                  <Link href="/blog/common-solder-paste-defects" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">Common Solder Paste Defects and How to Detect Them</h4>
                    <p className="text-gray-600 text-sm">Visual guide to the most common solder paste printing defects...</p>
                  </Link>
                  <Link href="/blog/spi-preventing-solder-defects" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">The Critical Role of SPI in Preventing Solder Defects</h4>
                    <p className="text-gray-600 text-sm">Understanding why 60-70% of defects originate at paste printing...</p>
                  </Link>
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

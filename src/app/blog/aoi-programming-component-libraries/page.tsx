import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/aoi-programming-component-libraries' },
  title: "AOI Component Library Best Practices",
  description: "How to build AOI component libraries that cut false calls and escapes across product families. Window sizing, threshold tuning, lighting, upkeep.",
  keywords: ["AOI programming", "component library AOI", "AOI false calls", "AOI inspection setup", "automated optical inspection programming", "AOI library"],
  openGraph: {
    images: ['/og-image.png'],
    title: "AOI Programming Best Practices: Building Component Libraries That Hold Up",
    description: "Good AOI programming is the difference between a system that finds real defects and one that your line stops ignoring. Here's how to build libraries that work.",
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AOI Programming Best Practices: Building Component Libraries That Hold Up",
    "description": "Practical guidance on building AOI component libraries that minimize false calls and escaped defects — covering inspection window sizing, threshold tuning, lighting strategy, and library maintenance.",
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
    "datePublished": "2026-03-14",
    "dateModified": "2026-03-14",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/aoi-programming-component-libraries`
    },
    "articleSection": "Best Practices",
    "keywords": ["AOI programming", "component libraries", "false calls", "inspection setup", "quality control"]
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
            { name: "AOI Programming Best Practices" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Best Practices</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AOI Programming Best Practices: Building Component Libraries That Hold Up
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  The quality of your AOI component library determines whether your system finds real defects or drowns operators in false calls. Here&apos;s how to build libraries that work — and keep working.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2026-03-14">March 14, 2026</time>
                  <span className="mx-2">•</span>
                  <span>14 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  An AOI system is only as good as its programming. The best hardware in the world cannot overcome inspection programs built on poorly sized windows, arbitrarily chosen thresholds, and component library entries that were never properly validated. Yet AOI programming is consistently underinvested — treated as a one-time setup task rather than an ongoing engineering discipline.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The consequences are familiar: false call rates so high that operators start overriding AOI decisions without looking carefully, or missed defects that slip through because inspection windows were placed too conservatively. Both failure modes defeat the purpose of having an AOI system at all.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Understanding the False Call / Escape Tradeoff</h2>
                <p className="text-gray-700 mb-4">
                  Every inspection threshold decision is a tradeoff between two types of errors:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>False calls (false positives):</strong> The AOI flags a board as defective when it&apos;s actually acceptable. Wastes operator time at the verification station and erodes confidence in the system.</li>
                  <li><strong>Escaped defects (false negatives):</strong> The AOI passes a board that actually has a defect. The defect proceeds downstream, potentially to the customer.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Tightening thresholds reduces escapes but increases false calls. Loosening thresholds reduces false calls but increases escapes. The goal of good AOI programming is not to find the &quot;correct&quot; threshold — it&apos;s to understand your process capability well enough to set thresholds where the real defect population and the acceptable-but-variable population don&apos;t overlap.
                </p>
                <p className="text-gray-700 mb-6">
                  When the two populations do overlap for a given component or defect type, the answer isn&apos;t to adjust thresholds — it&apos;s to improve the upstream process so they stop overlapping.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                  <h3 className="text-lg font-semibold mb-2">Target False Call Rates by Industry</h3>
                  <ul className="text-gray-800 space-y-2">
                    <li><strong>Consumer electronics:</strong> &lt;2% false call rate acceptable</li>
                    <li><strong>Industrial / commercial:</strong> &lt;1% false call rate target</li>
                    <li><strong>Automotive:</strong> &lt;0.5% false call rate required</li>
                    <li><strong>Medical / aerospace:</strong> &lt;0.3% false call rate, near-zero escapes</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Component Library Fundamentals</h2>

                <h3 className="text-xl font-semibold mt-8 mb-3">Building from Good Reference Boards — Not CAD Data Alone</h3>
                <p className="text-gray-700 mb-4">
                  CAD data gives you the nominal pad positions and component outlines. It does not tell you what acceptable assembly variation actually looks like on your process. Component library entries built from CAD data alone will typically be either too tight (generating false calls against normal process variation) or too loose (missing real defects at the margins).
                </p>
                <p className="text-gray-700 mb-6">
                  The best practice is to build initial library entries from CAD data as a starting point, then run 20–30 known-good boards through the AOI and review every call the system makes. Adjust thresholds and window positions to eliminate false calls on clearly acceptable boards while retaining sensitivity to genuine defects introduced on deliberately faulted boards.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Inspection Window Sizing</h3>
                <p className="text-gray-700 mb-4">
                  Inspection windows define the area the AOI analyzes for each component or solder joint. Getting window size right is critical:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li><strong>Windows too large:</strong> Capture neighboring features (other components, board markings, solder mask edges) that create visual noise and false calls. Also slow down inspection throughput.</li>
                  <li><strong>Windows too small:</strong> Miss the full extent of the solder joint, particularly the toe and heel fillets where many defects originate. May miss tombstoned components that have shifted outside the window.</li>
                  <li><strong>IPC-7711 guideline:</strong> Inspection windows should extend 10–20% beyond the pad geometry in each direction, sized to capture the full solder joint while excluding adjacent features.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Handling Component Polarity and Orientation</h3>
                <p className="text-gray-700 mb-6">
                  Polarized components (capacitors, diodes, ICs) require orientation detection in addition to presence/absence and solder joint inspection. Poor polarity detection is one of the most common sources of escaped defects — the solder joints look fine but the component is reversed.
                </p>
                <p className="text-gray-700 mb-6">
                  Most AOI systems offer multiple polarity detection methods: marking detection (ink dot, band color), body feature detection (chamfer, notch), and pin 1 indicator detection. Use the most reliable method available for each component body style. For BGAs, polarity marking detection on the component body is typically the only option — which makes proper lighting and optics critical for these devices.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Lighting Strategy for Reliable Detection</h2>
                <p className="text-gray-700 mb-4">
                  Modern AOI systems offer multi-angle, multi-color illumination. Using the wrong lighting configuration for a given inspection task is a common cause of poor detection reliability. Key considerations:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-base font-semibold mb-2">Low-Angle Illumination</h3>
                    <p className="text-gray-700 text-sm">Best for detecting lifted leads, tombstoning, and component height anomalies. The grazing angle creates strong shadows that highlight height variations. Not well-suited for coplanar features like pad cleanliness.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-base font-semibold mb-2">High-Angle Illumination</h3>
                    <p className="text-gray-700 text-sm">Best for component presence/absence, marking detection, and polarity verification. Provides even illumination with minimal shadowing. The default for most component body inspections.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-base font-semibold mb-2">Multi-Color Illumination</h3>
                    <p className="text-gray-700 text-sm">Red, green, and blue illumination at different angles creates color-coded height and slope information in a single image capture. Used in 3D AOI systems to separate solder joint geometry from component and board features. Significantly improves solder joint defect detection compared to monochrome imaging.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-base font-semibold mb-2">Coaxial / On-Axis Illumination</h3>
                    <p className="text-gray-700 text-sm">Light directed along the optical axis reduces specular reflection on shiny surfaces. Useful for inspecting solder paste on pads (pre-reflow) and for components with highly reflective surfaces that cause glare with standard illumination.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Common Defect Types and Detection Strategies</h2>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left">Defect Type</th>
                        <th className="p-4 text-left">Best Detection Method</th>
                        <th className="p-4 text-left">Common Programming Mistake</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Missing component</td>
                        <td className="p-4">Presence check, pad area brightness</td>
                        <td className="p-4">Window too small to see full pad</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Wrong component value</td>
                        <td className="p-4">OCR / marking recognition</td>
                        <td className="p-4">Threshold too loose — accepts similar markings</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Reversed polarity</td>
                        <td className="p-4">Polarity mark / band detection</td>
                        <td className="p-4">Only checking presence, not orientation</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Tombstoning</td>
                        <td className="p-4">Low-angle height + solder area check</td>
                        <td className="p-4">Window too small to catch tilted position</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Solder bridging</td>
                        <td className="p-4">Inter-pad brightness / 3D height</td>
                        <td className="p-4">Checking pads only, not space between pads</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Lifted lead</td>
                        <td className="p-4">3D height measurement at each lead</td>
                        <td className="p-4">Relying on 2D only — misses subtle lifts</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 font-medium">Insufficient solder</td>
                        <td className="p-4">3D volume / height at fillet</td>
                        <td className="p-4">2D area check only — misses height deficiency</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Library Maintenance: The Ongoing Work</h2>
                <p className="text-gray-700 mb-4">
                  Component libraries are not a one-time project. They require ongoing maintenance as component suppliers change, solder paste formulations evolve, and production processes drift. Key maintenance triggers:
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Approved Component Substitutions</h3>
                <p className="text-gray-700 mb-6">
                  When procurement substitutes an approved alternate component, the library entry may need updating even if the functional specification is equivalent. Body dimensions, marking formats, lead geometry, and surface finish can all differ between approved alternates — and any of these can affect AOI detection reliability.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">False Call Trending</h3>
                <p className="text-gray-700 mb-6">
                  Track false call rates by component and inspection type. If a particular component starts generating more false calls over time without a product change, it usually means either the component has changed (new lot, new supplier revision) or the process has drifted (paste volume, placement accuracy). The data tells you which — and which library entries to investigate.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">New Product Introduction Review</h3>
                <p className="text-gray-700 mb-6">
                  Every new product brings new components, new layout densities, and potentially new inspection challenges. NPI reviews should include an AOI programming review as a formal step — not an afterthought once the product is already in production. Components that present detection challenges (BGAs, complex QFPs, shielded connectors) should be identified early and programmed with adequate validation time.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Making Libraries Portable Across Products</h2>
                <p className="text-gray-700 mb-4">
                  A well-structured component library is a significant engineering asset. A library entry validated on one product can and should be reused on subsequent products that use the same component. This is only practical if your library is:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Keyed by manufacturer part number (MPN), not by product-specific nickname</li>
                  <li>Version-controlled so changes are tracked and reversible</li>
                  <li>Reviewed and signed off before being promoted from product-specific to library-standard status</li>
                  <li>Associated with validation records — what boards were run, what defects were tested, who approved</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Manufacturers who invest in proper library management report significantly faster programming time for new products — often 30–50% faster than starting from scratch — and lower baseline false call rates because library entries have been validated across multiple production contexts.
                </p>

                <div className="bg-blue-600 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-3">Need Help with AOI Programming Setup?</h3>
                  <p className="mb-6 text-blue-100">
                    ASC International&apos;s application engineers provide programming support and library development training for our AOI systems. We can help you build a solid foundation that reduces false calls from day one.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Contact Applications Engineering
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <ul className="space-y-2">
                    <li><Link href="/blog/reduce-aoi-false-calls" className="text-blue-600 hover:underline">How to Reduce False Calls in Automated Optical Inspection</Link></li>
                    <li><Link href="/blog/aoi-buyers-guide-2026" className="text-blue-600 hover:underline">How to Choose an AOI System in 2026</Link></li>
                    <li><Link href="/blog/ipc-a-610-class-2-vs-class-3" className="text-blue-600 hover:underline">Understanding IPC-A-610 Class 2 vs Class 3 Requirements</Link></li>
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

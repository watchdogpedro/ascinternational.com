import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/ipc-a-610-class-2-vs-class-3' },
  title: "Understanding IPC-A-610 Class 2 vs Class 3 Requirements | ASC Blog",
  description: "Complete guide to IPC-A-610 Class 2 and Class 3 acceptance criteria for electronics assemblies. Learn the differences, when each applies, and inspection implications.",
  keywords: ["IPC-A-610", "Class 2", "Class 3", "acceptance criteria", "workmanship standards", "electronics assembly standards"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Understanding IPC-A-610 Class 2 vs Class 3 Requirements",
    description: "Learn the critical differences between Class 2 and Class 3 acceptance criteria for electronics assemblies.",
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Understanding IPC-A-610 Class 2 vs Class 3 Requirements",
    "description": "Complete guide to IPC-A-610 Class 2 and Class 3 acceptance criteria for electronics assemblies",
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
    "datePublished": "2026-01-10",
    "dateModified": "2026-01-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/ipc-a-610-class-2-vs-class-3`
    },
    "articleSection": "Standards",
    "keywords": ["IPC-A-610", "Class 2", "Class 3", "workmanship standards"]
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
            { name: "IPC-A-610 Class 2 vs Class 3" },
          ]}
        />

        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    Standards
                  </span>
                  <span className="text-sm text-gray-500">January 10, 2026</span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Understanding IPC-A-610 Class 2 vs Class 3 Requirements
                </h1>
                <p className="text-xl text-gray-600">
                  IPC-A-610 defines acceptability standards for electronic assemblies. Understanding the differences between Class 2 and Class 3 is critical for setting inspection criteria and meeting customer requirements.
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  IPC-A-610, "Acceptability of Electronic Assemblies," is the most widely used electronics assembly standard in the world. It provides objective criteria for determining whether an assembled board is acceptable, and it's the bible for quality inspectors, AOI programmers, and manufacturing engineers. But the standard defines three different classes of products, and the differences—particularly between Class 2 and Class 3—have significant implications for your inspection processes, costs, and customer relationships.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">What is IPC-A-610?</h2>
                <p>
                  IPC-A-610 was developed by IPC (Association Connecting Electronics Industries) to establish industry consensus on what constitutes an acceptable electronic assembly. Rather than each company having its own internal standards, IPC-A-610 provides a common language that manufacturers, contract assemblers, and customers can use.
                </p>
                <p>
                  The standard covers virtually every aspect of electronics assembly including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solder joint formation and appearance</li>
                  <li>Component placement and orientation</li>
                  <li>Through-hole assembly requirements</li>
                  <li>Surface mount technology (SMT) assembly</li>
                  <li>Wire and cable assembly</li>
                  <li>Conformal coating application</li>
                  <li>Mechanical assembly features</li>
                  <li>Cleanliness requirements</li>
                </ul>
                <p>
                  The latest version as of 2026 is IPC-A-610H (revision H), which updates criteria for modern components and manufacturing processes.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">The Three Classes Defined</h2>
                <p>
                  IPC-A-610 defines three classes of products based on their end-use application and the level of reliability required:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Class 1: General Electronic Products</h3>
                <p>
                  Class 1 includes products where the major requirement is the function of the completed assembly. These are typically consumer products where cosmetic imperfections are acceptable as long as the product works. Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consumer electronics (most)</li>
                  <li>Toys and games</li>
                  <li>Disposable or low-cost products</li>
                  <li>Products with short expected lifetimes</li>
                </ul>
                <p>
                  Class 1 is rarely specified in contract manufacturing, as most customers prefer at least Class 2 standards.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Class 2: Dedicated Service Electronic Products</h3>
                <p>
                  Class 2 is the most common classification and includes products where continued performance and extended life are required, and where uninterrupted service is desired but not critical. The product must function reliably but some cosmetic imperfections are acceptable. Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Communications equipment</li>
                  <li>Business machines and computers</li>
                  <li>Industrial controls</li>
                  <li>Test equipment</li>
                  <li>Most consumer electronics</li>
                </ul>
                <p>
                  Class 2 represents a balance between quality and cost. It's appropriate for most commercial applications where reliability is important but the consequences of failure are manageable.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Class 3: High Performance/Harsh Environment Electronic Products</h3>
                <p>
                  Class 3 includes products where continued high performance or performance-on-demand is critical, equipment downtime cannot be tolerated, and the product must function when required. Essentially, Class 3 is for applications where failure could result in significant financial loss, injury, or loss of life. Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Medical life support equipment</li>
                  <li>Aerospace and avionics systems</li>
                  <li>Military and defense electronics</li>
                  <li>Automotive safety systems</li>
                  <li>Mission-critical industrial controls</li>
                </ul>
                <p>
                  Class 3 imposes the most stringent requirements and typically results in higher manufacturing costs due to tighter tolerances and more rigorous inspection.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Key Differences: Class 2 vs Class 3</h2>
                <p>
                  While both Class 2 and Class 3 require functional, reliable assemblies, the specific acceptance criteria differ significantly in several areas:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Solder Joint Formation</h3>
                <p>
                  <strong>Class 2:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solder must wet to termination and land</li>
                  <li>Minimum 75% solder coverage on terminations</li>
                  <li>Minor imperfections like small voids or irregularities are acceptable</li>
                  <li>Some exposed termination acceptable</li>
                  <li>Minimum fillet requirements are moderate</li>
                </ul>
                <p>
                  <strong>Class 3:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solder must completely wet terminations and lands</li>
                  <li>95% minimum solder coverage on terminations</li>
                  <li>Minimal imperfections allowed</li>
                  <li>Very little exposed termination allowed</li>
                  <li>Fuller, more robust fillet requirements</li>
                  <li>Stricter void percentage limits in BGA solder balls</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Component Placement</h3>
                <p>
                  <strong>Class 2:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Component body must be within pad boundaries or reasonable overhang acceptable</li>
                  <li>Lead placement tolerance is moderate</li>
                  <li>Some rotation of components acceptable</li>
                  <li>Partial solder joint coverage permitted in some cases</li>
                </ul>
                <p>
                  <strong>Class 3:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Component must be centered on pad with tight tolerances</li>
                  <li>Strict lead placement requirements</li>
                  <li>Minimal component rotation allowed</li>
                  <li>Full solder joint coverage required</li>
                  <li>No lifted leads or coplanarity issues permitted</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Soldering Defects</h3>
                <p>
                  Many defects that are target conditions (repairable but not ideal) in Class 2 become defects (reject conditions) in Class 3:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Solder balls/spheres:</strong> Class 2 allows them in non-critical areas; Class 3 is more restrictive</li>
                  <li><strong>Flux residue:</strong> Class 2 allows visible residue if non-corrosive; Class 3 requires cleaner boards</li>
                  <li><strong>Disturbed solder joints:</strong> More strictly controlled in Class 3</li>
                  <li><strong>Cold solder joints:</strong> Completely unacceptable in Class 3</li>
                  <li><strong>Solder voids:</strong> Tighter limits in Class 3, especially for thermal and power components</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Through-Hole Assembly</h3>
                <p>
                  <strong>Class 2:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimum 75% hole fill with solder</li>
                  <li>Lead does not need to protrude through board</li>
                  <li>Solder fillet on primary side required, secondary side desirable</li>
                </ul>
                <p>
                  <strong>Class 3:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimum 75% hole fill (same as Class 2) but with more stringent barrel wetting</li>
                  <li>Lead should protrude through and have complete solder wetting</li>
                  <li>360-degree fillet required on both sides with specific shape requirements</li>
                  <li>More emphasis on mechanical strength and stress relief</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Process Indicators</h3>
                <p>
                  <strong>Class 2:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process indicators (like minor discoloration) are generally acceptable</li>
                  <li>Some evidence of rework is acceptable if proper procedures followed</li>
                  <li>Cosmetic issues that don't affect function are acceptable</li>
                </ul>
                <p>
                  <strong>Class 3:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stricter limits on discoloration and other process indicators</li>
                  <li>Rework must be nearly invisible</li>
                  <li>Higher cosmetic standards even for non-functional characteristics</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Inspection Implications</h2>
                <p>
                  The choice between Class 2 and Class 3 has major implications for your inspection processes:
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">AOI Programming</h3>
                <p>
                  Class 3 requirements mean:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tighter inspection limits on all measurements</li>
                  <li>More parameters inspected per component</li>
                  <li>Lower tolerance for defects that might pass Class 2</li>
                  <li>Increased inspection time per board</li>
                  <li>Potentially higher false call rates requiring optimization</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">X-Ray Inspection</h3>
                <p>
                  X-ray inspection becomes more critical for Class 3:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Void percentage limits are stricter (often 25% max for Class 3 vs 30%+ for Class 2)</li>
                  <li>More BGA packages require 100% X-ray inspection</li>
                  <li>Through-hole barrel fill must be verified</li>
                  <li>Hidden solder joints under components scrutinized more carefully</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Manual Inspection</h3>
                <p>
                  Class 3 requires:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>More experienced inspectors trained to Class 3 standards</li>
                  <li>Better magnification and lighting equipment</li>
                  <li>More detailed inspection documentation</li>
                  <li>Lower acceptable quality limits (AQL)</li>
                  <li>100% inspection often required vs sampling for Class 2</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Cost Implications</h2>
                <p>
                  Class 3 manufacturing typically costs 15-30% more than Class 2 due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Higher scrap rates</strong> - More boards rejected for defects acceptable in Class 2</li>
                  <li><strong>Increased inspection time</strong> - More thorough inspection at each stage</li>
                  <li><strong>Additional inspection equipment</strong> - X-ray and other advanced inspection may be required</li>
                  <li><strong>More skilled labor</strong> - Operators and inspectors need Class 3 training and certification</li>
                  <li><strong>Process optimization</strong> - Tighter process controls needed to meet Class 3 requirements</li>
                  <li><strong>Documentation</strong> - More extensive quality records and traceability</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Choosing the Right Class</h2>
                <p>
                  How do you decide which class applies to your product?
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Use Class 3 When:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product failure could result in injury or loss of life</li>
                  <li>Equipment downtime is unacceptable (medical, military, critical infrastructure)</li>
                  <li>Operating environment is harsh (extreme temperature, vibration, shock)</li>
                  <li>Product must have extended service life without maintenance</li>
                  <li>Customer specifically requires Class 3</li>
                  <li>Regulatory requirements mandate high reliability</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Use Class 2 When:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reliability is important but failure consequences are manageable</li>
                  <li>Some downtime for repair is acceptable</li>
                  <li>Cost optimization is a priority</li>
                  <li>Operating environment is controlled</li>
                  <li>Standard commercial/industrial application</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Over-specifying Class 3</strong> when Class 2 would suffice, unnecessarily increasing costs</li>
                  <li><strong>Under-specifying Class 2</strong> for products that actually need Class 3 reliability</li>
                  <li><strong>Mixing classes</strong> without clear documentation of which areas require which standard</li>
                  <li><strong>Assuming Class 3</strong> without customer specification or justification</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Training and Certification</h2>
                <p>
                  IPC offers formal training and certification programs for IPC-A-610:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CIS (Certified IPC Specialist)</strong> - Operator/inspector level certification</li>
                  <li><strong>CIT (Certified IPC Trainer)</strong> - Authorized to train and certify others</li>
                  <li><strong>MIT (Master IPC Trainer)</strong> - Highest certification level</li>
                </ul>
                <p>
                  Certifications must be renewed every two years to stay current with standard updates. Many customers require that assembly facilities have IPC-certified personnel, especially for Class 3 work.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Working with the Standard</h2>
                <p>
                  Practical tips for implementing IPC-A-610 in your operation:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Purchase the actual standard</strong> - Don't rely on summaries or hearsay; get the official document</li>
                  <li><strong>Train your team</strong> - Invest in formal IPC certification for key personnel</li>
                  <li><strong>Clarify with customers</strong> - Get written agreement on which class applies</li>
                  <li><strong>Document exceptions</strong> - If customer has specific variations from standard, document them</li>
                  <li><strong>Program inspection systems</strong> - Set AOI and SPI limits consistent with the specified class</li>
                  <li><strong>Update regularly</strong> - IPC-A-610 is revised every few years; stay current</li>
                  <li><strong>Use visual aids</strong> - IPC provides CD-ROMs with example images for training</li>
                </ol>

                <h2 className="text-3xl font-bold mt-8 mb-4">The Bottom Line</h2>
                <p>
                  IPC-A-610 Class 2 and Class 3 represent different levels of quality and reliability appropriate for different applications. Class 2 is suitable for most commercial and industrial products where reliability is important but failure consequences are manageable. Class 3 is essential for high-reliability applications where failure is unacceptable.
                </p>
                <p>
                  Understanding the differences is critical for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Setting appropriate quality standards</li>
                  <li>Programming inspection equipment correctly</li>
                  <li>Managing customer expectations</li>
                  <li>Controlling costs appropriately</li>
                  <li>Meeting regulatory requirements</li>
                </ul>
                <p>
                  When in doubt, consult the actual IPC-A-610 standard document, get customer agreement in writing, and train your team properly. The investment in understanding and implementing the correct class will pay dividends in quality, customer satisfaction, and long-term reliability.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
                  <h3 className="text-xl font-bold mb-2">Need Help Meeting IPC Standards?</h3>
                  <p className="text-gray-700 mb-4">
                    ASC International's inspection systems can be programmed to meet both IPC-A-610 Class 2 and Class 3 requirements. Our applications team can help optimize your inspection processes for your specific quality standards.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact Our Experts →
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
                  <Link href="/blog/reduce-aoi-false-calls" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">How to Reduce False Calls in AOI</h4>
                    <p className="text-gray-600 text-sm">Learn proven strategies to minimize false positives in automated optical inspection...</p>
                  </Link>
                  <Link href="/blog/automotive-zero-defect-inspection" className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2">Automotive Electronics: Zero-Defect Requirements</h4>
                    <p className="text-gray-600 text-sm">Meeting the stringent quality requirements of automotive electronics manufacturing...</p>
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

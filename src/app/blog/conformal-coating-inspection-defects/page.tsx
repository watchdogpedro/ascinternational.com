import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Coating Comes Last: The Real Cost of Conformal Coating Defects | ASC International",
  description: "Conformal coating goes on after every other cost is already in the board, which makes escapes here the expensive kind. What actually goes wrong, why the blacklight booth does not scale, and what automated UV inspection measures.",
  keywords: ["conformal coating inspection", "conformal coating defects", "UV fluorescence inspection", "coating holidays", "coating thickness measurement", "keep-out area coating", "IPC-A-610 conformal coating", "IPC-CC-830", "parylene inspection", "PCB conformal coating"],
  openGraph: {
    title: "Coating Comes Last: The Real Cost of Conformal Coating Defects",
    description: "Coating is one of the last operations before an assembly ships, which makes it the worst place on the line to create a defect nobody catches.",
    type: "article",
  },
};

export default function ConformalCoatingDefects() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Coating Comes Last: The Real Cost of Conformal Coating Defects",
    "description": "Why conformal coating escapes cost more than defects caught earlier in assembly, the defect modes that actually occur, the limits of manual UV booth inspection, and what automated coverage and thickness measurement adds.",
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
    "datePublished": "2026-08-23",
    "dateModified": "2026-08-23"
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
            { name: "The Real Cost of Conformal Coating Defects" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Coating Comes Last: The Real Cost of Conformal Coating Defects
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Coating goes on after every other cost is already in the board. That makes it the worst place on the line to create a defect nobody catches.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2026-08-23">August 23, 2026</time>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  By the time a board reaches the coating booth, you have already paid for everything on it. Bare board, components, paste, placement, reflow, test. All sunk. Coating is one of the last things that happens before an assembly ships, which makes it the worst place on the line to create a defect nobody catches. The coating itself is cheap. The board underneath it is not.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                  <h3 className="text-lg font-semibold mb-2">The Short Version</h3>
                  <p className="text-gray-800 mb-0">
                    A coating escape scraps a fully built, fully tested assembly. Every other inspection step on the line protects a cheaper board than this one does.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">What the Coating Is Actually Doing</h2>

                <p className="mb-4">
                  Conformal coating is a thin polymer film over a populated board. It keeps moisture, dust, salt spray and chemical vapor off the circuitry, and it holds up under temperature cycling and vibration. If you build for automotive, aerospace, medical, or anything that lives outdoors, you already know why it is there.
                </p>

                <p className="mb-4">
                  Five material families cover most of what ships: acrylic, urethane, silicone, epoxy and parylene. They behave differently. Acrylic goes on easily and reworks easily. Urethane is tougher chemically and much harder to remove. Silicone takes heat and stays flexible. Epoxy is hard and close to permanent. Parylene is vapor deposited rather than sprayed, goes on thin and uniform, and reaches places a liquid coating cannot.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Defects That Actually Happen</h2>

                <p className="mb-4">
                  <strong>Holidays</strong> are gaps where there is no coating at all, usually from a spray pattern problem, a masking problem, or surface contamination. <strong>Bubbles and voids</strong> come from trapped air or solvent, often after applying too thick or curing too fast. <strong>Pinholes</strong> break clean through the film. <strong>Orange peel</strong> is uneven surface texture, cosmetic under some specs and a thickness failure under others.
                </p>

                <p className="mb-4">
                  <strong>Delamination and dewetting</strong> mean the coating will not stick, and that is almost always a cleanliness problem upstream. Flux residue is the usual suspect.
                </p>

                <p className="mb-4">
                  Then there is <strong>thickness</strong>, in both directions. Too thin and it is not protecting anything. Too thick and it cracks under thermal cycling and puts stress on components.
                </p>

                <p className="mb-4">
                  The one that causes arguments is <strong>coating where it should not be</strong>: connectors, test points, grounding pads, heat sink contacts. A board with coating on a connector pin is not a cosmetic problem. It is a board that will not mate or will not ground.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Why the Blacklight Booth Does Not Scale</h2>

                <p className="mb-4">
                  Most liquid coatings carry a UV tracer so the film fluoresces under a blacklight. The standard method is an operator in a darkened booth with a UV lamp, turning the board, looking for dark patches.
                </p>

                <p className="mb-4">
                  It works. It is also the least repeatable inspection step in the building.
                </p>

                <p className="mb-4">
                  That operator is reading a low contrast image in the dark for eight hours. Two operators will disagree about the same board. The same operator will disagree with themselves at hour seven. Nothing gets recorded except a pass or a fail, so when a field failure comes back six months later there is nothing to go review.
                </p>

                <p className="mb-4">
                  A blacklight also only tells you coating is present. It does not tell you how thick it is. Those are two different questions and the booth answers one of them.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">What Automated UV Inspection Adds</h2>

                <p className="mb-4">
                  An automated system images the board under controlled UV, compares it against a programmed reference, and flags coating that is missing, thin, pooled, or sitting on a keep-out area. ASC&apos;s <Link href="/products/conformal-coating-inspection" className="text-blue-600 hover:underline">conformal coating inspection systems</Link> handle coverage analysis and thickness measurement in the same pass.
                </p>

                <p className="mb-4">
                  The difference is not that a machine sees better than a person. It is that it sees the same way every time. Same lighting, same threshold, same judgment on the first board of the shift and the four hundredth. You also end up with a record, a measured result per board, which is what an automotive or medical customer asks for during an audit. And thickness comes back as a number instead of an opinion.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Where It Will Not Help You</h2>

                <p className="mb-4">
                  Automated inspection does not fix a coating process. If your masking is wrong, you will get a very consistent report telling you your masking is wrong. Send boards into the booth with flux residue on them and you will get repeatable delamination findings. The inspection tells you what happened. It does not change what happens.
                </p>

                <p className="mb-4">
                  Parylene is its own case. It goes on so thin and so uniformly that UV fluorescence is often not the right tool, and plenty of parylene coatings carry no tracer at all. If you are running parylene, that is a different conversation and worth having before you buy anything.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">What the Standards Ask For</h2>

                <p className="mb-4">
                  IPC-A-610 sets acceptability criteria for coating on assemblies, including coverage and how keep-out areas get treated. IPC-CC-830 qualifies the coating material itself. J-STD-001 covers application requirements. Your customer&apos;s drawing calls out the thickness range for the material you are running, and those ranges differ by family, so a silicone spec and an acrylic spec are not interchangeable.
                </p>

                <p className="mb-4">
                  All three assume you can demonstrate coverage and thickness. A pass or fail from a booth operator is thin evidence in an audit.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Same Argument as SPI, at the Other End of the Line</h2>

                <p className="mb-4">
                  We have written before about <Link href="/blog/stamp-out-rework" className="text-blue-600 hover:underline">the 10X rule</Link>, where the cost of correcting a defect grows roughly tenfold at each stage of assembly. Coating sits at the far end of that curve. A defect caught in the booth costs you a strip and a recoat. The same defect found by your customer costs a returned assembly, an investigation, and a phone call nobody enjoys.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Coating happens after all the cost is already in the board</strong>, so escapes here are the expensive kind</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Manual UV booth inspection is subjective and tiring</strong>, and it leaves no record behind</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>A blacklight shows presence, not thickness.</strong> Those are different questions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Coating on a keep-out area is a functional defect</strong>, not a cosmetic one</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Automated inspection buys consistency and a measured record.</strong> It will not fix a bad coating process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Parylene needs a different conversation</strong> than sprayed liquid coatings</span>
                  </li>
                </ul>

                <div className="bg-blue-600 text-white p-8 rounded-lg mt-12">
                  <h2 className="text-2xl font-bold mb-4">Measure the Coating, Not Just Look at It</h2>
                  <p className="text-lg mb-6">
                    ASC International&apos;s conformal coating inspection systems use UV fluorescence imaging to verify coverage and measure thickness on every board, so you get a number and a record instead of an operator&apos;s opinion at hour seven of a shift.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products/conformal-coating-inspection" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                      Conformal Coating Inspection
                    </Link>
                    <Link href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500 text-center">
                      Contact Our Experts
                    </Link>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/compare/conformal-coating-inspection-methods" className="text-blue-600 hover:underline">
                      → Manual vs UV vs 3D Coating Inspection
                    </Link>
                    <Link href="/blog/stamp-out-rework" className="text-blue-600 hover:underline">
                      → Stamp Out Rework
                    </Link>
                    <Link href="/blog/medical-device-pcb-inspection" className="text-blue-600 hover:underline">
                      → Medical Device PCB Inspection
                    </Link>
                    <Link href="/blog/automotive-zero-defect-inspection" className="text-blue-600 hover:underline">
                      → Automotive Zero-Defect Inspection
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

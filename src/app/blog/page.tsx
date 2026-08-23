import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import BlogCover from "@/components/BlogCover";

export const metadata: Metadata = {
  alternates: { canonical: '/blog' },
  title: "Blog - Electronics Inspection Insights",
  description: "Expert insights on electronics inspection, quality control, SMT manufacturing, and industry best practices from ASC International's team of specialists.",
  keywords: ["inspection blog", "electronics manufacturing", "quality control", "SMT best practices", "inspection technology"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Blog - ASC International",
    description: "Expert insights on electronics inspection and quality control.",
    type: "website",
  },
};

export default function Blog() {
  const blogPosts = [
    {
      title: "Coating Comes Last: The Real Cost of Conformal Coating Defects",
      slug: "conformal-coating-inspection-defects",
      excerpt: "Coating goes on after every other cost is already in the board. What actually goes wrong, why the blacklight booth doesn't scale, and what automated UV inspection measures that an operator can't.",
      category: "Quality Control",
      date: "2026-08-23",
      readTime: "6 min read",
      image: "/blog/conformal-coating-inspection-defects.jpg"
    },
    {
      title: "Solder Paste Measurement Justification: Building the ROI Case for SPI",
      slug: "solder-paste-measurement-justification",
      excerpt: "A capital request for inspection equipment lives or dies on the numbers. Use first-pass yield, the 10X rule, and your own rework data to build a defensible ROI model that proves SPI pays for itself.",
      category: "Business",
      date: "2025-03-01",
      readTime: "11 min read",
      image: "/blog/solder-paste-measurement-justification.jpg"
    },
    {
      title: "Yield Improvement Strategies: Why It Starts at Solder Paste Printing",
      slug: "yield-improvement-strategies",
      excerpt: "Post-solder inspection measures yield; it doesn't improve it. Learn why first-pass yield is built at the printer, how to set paste height and volume control limits, and how to tune your process.",
      category: "Best Practices",
      date: "2025-03-01",
      readTime: "12 min read",
      image: "/blog/yield-improvement-strategies.jpg"
    },
    {
      title: "Stamp Out Rework: How Early Defect Detection Protects Your Margins",
      slug: "stamp-out-rework",
      excerpt: "Rework quietly erodes profit in electronics assembly. Learn what it really costs, why it starts at the solder paste printer, and a practical plan to stamp it out and lift first-pass yield.",
      category: "Business",
      date: "2025-03-01",
      readTime: "10 min read",
      image: "/blog/stamp-out-rework.jpg"
    },
    {
      title: "Billions of Solder Joints: Why PPM Quality Demands Automated Inspection",
      slug: "billions-of-solder-joints",
      excerpt: "Modern lines produce billions of solder joints. At that scale, even a tiny defect rate means thousands of failures. Learn why parts-per-million quality requires automated SPI and AOI.",
      category: "Quality Control",
      date: "2025-03-01",
      readTime: "9 min read",
      image: "/blog/billions-of-solder-joints.jpg"
    },
    {
      title: "Inline vs. Offline SPI: Which Configuration is Right for Your Line?",
      slug: "inline-vs-offline-spi",
      excerpt: "Choosing the wrong SPI configuration costs time and money. Compare inline and offline setups across production volume, closed-loop requirements, traceability needs, and board mix to find the right fit.",
      category: "Buyer's Guide",
      date: "2026-03-18",
      readTime: "11 min read",
      image: "/blog/inline-vs-offline-spi.jpg"
    },
    {
      title: "PCB Stencil Design for Solder Paste Printing: Aperture Ratios, Thickness & Common Mistakes",
      slug: "stencil-design-solder-paste-printing",
      excerpt: "Stencil design is where a solder paste process succeeds or fails. Learn how aperture ratio, foil thickness, and opening geometry determine paste deposit quality — and the most common mistakes to avoid.",
      category: "Technology",
      date: "2026-03-17",
      readTime: "13 min read",
      image: "/blog/stencil-design.jpg"
    },
    {
      title: "Medical Device PCB Inspection: FDA, ISO 13485 & IPC Requirements",
      slug: "medical-device-pcb-inspection",
      excerpt: "What inspection standards actually require for medical device electronics manufacturing. Covers FDA 21 CFR Part 820, ISO 13485, IPC-A-610 Class 3, and how automated inspection satisfies each.",
      category: "Industry",
      date: "2026-03-16",
      readTime: "14 min read",
      image: "/blog/medical-device-inspection.jpg"
    },
    {
      title: "Closed-Loop SPI to Printer Feedback: How Automatic Correction Works",
      slug: "closed-loop-spi-printer-feedback",
      excerpt: "Most SPI systems detect defects. Closed-loop systems prevent them. Learn exactly how automatic printer feedback works, what it can and can't correct, and how to implement it on your line.",
      category: "Technology",
      date: "2026-03-15",
      readTime: "12 min read",
      image: "/blog/closed-loop-spi.jpg"
    },
    {
      title: "AOI Programming Best Practices: Building Component Libraries That Hold Up",
      slug: "aoi-programming-component-libraries",
      excerpt: "Good AOI programming separates systems that find real defects from ones your operators learn to ignore. Learn how to build component libraries that minimize false calls without letting escapes through.",
      category: "Best Practices",
      date: "2026-03-14",
      readTime: "14 min read",
      image: "/blog/aoi-programming.jpg"
    },
    {
      title: "10 Questions to Ask Every SPI Vendor Before You Buy",
      slug: "spi-vendor-questions",
      excerpt: "Most SPI sales presentations avoid difficult topics. These 10 questions surface hidden costs, vendor lock-in risks, real-world performance data, and support commitments vendors won't volunteer.",
      category: "Buyer's Guide",
      date: "2026-03-08",
      readTime: "15 min read",
      image: "/blog/spi-vendor-questions.jpg"
    },
    {
      title: "Complete SPI Buyer's Guide 2026",
      slug: "spi-buyers-guide-2026",
      excerpt: "Everything you need to know to evaluate and select the right 3D SPI system. Covers measurement technologies, key features, budget planning, and vendor evaluation.",
      category: "Buyer's Guide",
      date: "2026-02-15",
      readTime: "20 min read",
      image: "/blog/spi-buyers-guide.jpg"
    },
    {
      title: "How to Choose an AOI System in 2026",
      slug: "aoi-buyers-guide-2026",
      excerpt: "Complete buyer's guide for automated optical inspection systems. Compare 2D vs 3D AOI, evaluate AI claims, and select the right system for your production needs.",
      category: "Buyer's Guide",
      date: "2026-02-10",
      readTime: "18 min read",
      image: "/blog/aoi-buyers-guide.jpg"
    },
    {
      title: "The True Cost of Inspection: What Vendors Don't Tell You",
      slug: "true-cost-of-inspection",
      excerpt: "Hidden costs can double your inspection investment over 7 years. Learn about software licensing traps, service contract escalation, and how to calculate real TCO.",
      category: "Business",
      date: "2026-02-05",
      readTime: "15 min read",
      image: "/blog/true-cost.jpg"
    },
    {
      title: "AI in Inspection: What Actually Works vs. Marketing Hype",
      slug: "ai-in-inspection-demystified",
      excerpt: "Cut through the AI marketing noise. Learn which AI features deliver real value in production inspection and which are just buzzwords on a spec sheet.",
      category: "Technology",
      date: "2026-01-28",
      readTime: "14 min read",
      image: "/blog/ai-inspection.jpg"
    },
    {
      title: "Understanding Multi-Reflection Suppression in SPI",
      slug: "multi-reflection-suppression-explained",
      excerpt: "How MRS technology works, when it matters, and what it means for your solder paste measurement accuracy. A technical deep dive for process engineers.",
      category: "Technology",
      date: "2026-01-22",
      readTime: "12 min read",
      image: "/blog/mrs-explained.jpg"
    },
    {
      title: "3D SPI vs 2D SPI: Why the Third Dimension Matters",
      slug: "3d-spi-vs-2d-spi-comparison",
      excerpt: "Discover why 3D solder paste inspection provides superior defect detection compared to 2D systems, and when the investment makes sense for your operation.",
      category: "Technology",
      date: "2026-01-20",
      readTime: "8 min read",
      image: "/blog/spi-comparison.jpg"
    },
    {
      title: "Avoiding Vendor Lock-In When Choosing Inspection Equipment",
      slug: "vendor-lock-in-inspection-equipment",
      excerpt: "Proprietary data formats and closed ecosystems can trap you. Learn to identify lock-in risks and choose open architecture systems that protect your investment.",
      category: "Business",
      date: "2026-01-18",
      readTime: "13 min read",
      image: "/blog/vendor-lock-in.jpg"
    },
    {
      title: "How to Reduce False Calls in Automated Optical Inspection",
      slug: "reduce-aoi-false-calls",
      excerpt: "False calls waste production time and reduce confidence in AOI systems. Learn proven strategies to minimize false positives while maintaining defect detection.",
      category: "Best Practices",
      date: "2026-01-15",
      readTime: "10 min read",
      image: "/blog/aoi-false-calls.jpg"
    },
    {
      title: "The Complete Guide to Inspection Integration in Industry 4.0",
      slug: "inspection-integration-industry-4-0",
      excerpt: "How to connect your inspection systems to MES, printers, and analytics platforms using IPC-CFX, OPC-UA, and REST APIs for true smart factory connectivity.",
      category: "Technology",
      date: "2026-01-12",
      readTime: "16 min read",
      image: "/blog/industry-4-0.jpg"
    },
    {
      title: "Understanding IPC-A-610 Class 2 vs Class 3 Requirements",
      slug: "ipc-a-610-class-2-vs-class-3",
      excerpt: "IPC-A-610 defines acceptability standards for electronic assemblies. Understanding the differences between Class 2 and Class 3 is critical for setting inspection criteria.",
      category: "Standards",
      date: "2026-01-10",
      readTime: "12 min read",
      image: "/blog/ipc-standards.jpg"
    },
    {
      title: "Calculating ROI for Inspection Equipment: A Complete Guide",
      slug: "calculating-inspection-roi",
      excerpt: "Inspection systems require significant investment. Learn how to calculate expected ROI including hard and soft costs, and typical payback periods.",
      category: "Business",
      date: "2026-01-05",
      readTime: "15 min read",
      image: "/blog/roi-calculation.jpg"
    },
    {
      title: "The Critical Role of SPI in Preventing Solder Defects",
      slug: "spi-preventing-solder-defects",
      excerpt: "Studies show 60-70% of solder defects originate at the paste printing stage. Discover how 3D SPI catches these defects early when they're easiest to fix.",
      category: "Quality Control",
      date: "2025-12-28",
      readTime: "9 min read",
      image: "/blog/solder-defects.jpg"
    },
    {
      title: "Automotive Electronics: Meeting Zero-Defect Requirements",
      slug: "automotive-zero-defect-inspection",
      excerpt: "Automotive OEMs demand PPM defect rates in single digits. Learn about inspection strategies and documentation required for automotive electronics manufacturing.",
      category: "Industry",
      date: "2025-12-20",
      readTime: "11 min read",
      image: "/blog/automotive-quality.jpg"
    }
  ];

  const categories = ["All", "Technology", "Best Practices", "Standards", "Business", "Buyer's Guide", "Quality Control", "Industry"];

  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspection Insights Blog</h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert articles on electronics inspection, quality control, and manufacturing best practices
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      cat === "All"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                  >
                    <BlogCover
                      category={post.category}
                      slug={post.slug}
                      className="aspect-video w-full"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <span className="text-blue-600 font-semibold group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-600 mb-8">
                Subscribe to receive the latest articles, industry insights, and inspection best practices
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

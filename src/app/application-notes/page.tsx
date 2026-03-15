import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Application Notes | ASC International",
  description: "In-depth technical application notes covering solder paste inspection optimization, closed-loop process control, defect analysis, and electronics manufacturing best practices.",
  keywords: ["application notes", "technical guide", "SPI optimization", "process control", "solder defect analysis", "electronics inspection"],
  openGraph: {
    title: "Technical Application Notes | ASC International",
    description: "Deep technical resources for electronics inspection engineers and quality professionals.",
    type: "website",
  },
};

interface ApplicationNote {
  title: string;
  slug: string;
  abstract: string;
  category: string;
  categorySlug: string;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const applicationNotes: ApplicationNote[] = [
  {
    title: "Optimizing 3D SPI Program Settings for Fine-Pitch Components",
    slug: "optimizing-spi-program-settings",
    abstract: "A comprehensive guide to configuring 3D solder paste inspection programs for fine-pitch and ultra-fine-pitch components. Covers threshold optimization, algorithm selection, measurement region configuration, and systematic approaches to reducing false calls while maintaining defect detection sensitivity.",
    category: "Solder Paste Inspection",
    categorySlug: "solder-paste-inspection",
    complexity: "Advanced",
    date: "2026-02-01",
    readTime: "25 min read",
    tags: ["SPI", "fine-pitch", "program optimization", "false call reduction", "threshold settings"],
    featured: true,
  },
  {
    title: "Implementing Closed-Loop Feedback Between SPI and Stencil Printer",
    slug: "implementing-closed-loop-spi-printer-feedback",
    abstract: "Step-by-step technical guide for implementing closed-loop communication between 3D SPI systems and stencil printers. Covers communication protocols, automatic offset correction, squeegee pressure adjustments, and validation procedures for maintaining optimal print quality.",
    category: "Process Optimization",
    categorySlug: "process-optimization",
    complexity: "Advanced",
    date: "2026-01-25",
    readTime: "22 min read",
    tags: ["closed-loop", "stencil printer", "process control", "automatic correction", "SPC"],
    featured: true,
  },
  {
    title: "Solder Defect Root Cause Analysis Using SPI and AOI Data",
    slug: "solder-defect-root-cause-analysis",
    abstract: "A practical methodology for correlating solder paste inspection and automated optical inspection data to identify root causes of solder defects. Includes defect categorization frameworks, data analysis techniques, fishbone diagrams, and corrective action procedures.",
    category: "Process Optimization",
    categorySlug: "process-optimization",
    complexity: "Intermediate",
    date: "2026-01-18",
    readTime: "20 min read",
    tags: ["root cause analysis", "defect analysis", "SPI data", "AOI data", "corrective action"],
    featured: false,
  },
];

const categories = [
  { name: "All", slug: "all" },
  { name: "Solder Paste Inspection", slug: "solder-paste-inspection" },
  { name: "Process Optimization", slug: "process-optimization" },
];

function getComplexityColor(complexity: string) {
  switch (complexity) {
    case "Beginner":
      return "bg-green-50 text-green-700";
    case "Intermediate":
      return "bg-yellow-50 text-yellow-700";
    case "Advanced":
      return "bg-red-50 text-red-700";
    default:
      return "bg-gray-50 text-gray-700";
  }
}

export default function ApplicationNotes() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Application Notes" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Application Notes</h1>
              <p className="text-xl text-blue-100 mb-4">
                In-depth technical resources for electronics inspection engineers and quality professionals
              </p>
              <p className="text-blue-200">
                Detailed procedures, optimization strategies, and implementation guides drawn from 34+ years of field experience
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Tabs */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      cat.slug === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Notes Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applicationNotes.map((note) => (
                  <Link
                    key={note.slug}
                    href={`/application-notes/${note.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group flex flex-col"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-700 relative overflow-hidden flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      {note.featured && (
                        <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {note.category}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${getComplexityColor(note.complexity)}`}>
                          {note.complexity}
                        </span>
                        <span className="text-xs text-gray-500 ml-auto">{note.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {note.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{note.abstract}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {note.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">{note.date}</span>
                        <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                          Read Application Note &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Application Notes Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Deep Technical Knowledge</h3>
                  <p className="text-gray-600 text-sm">Go beyond surface-level overviews with detailed implementation guidance from domain experts</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Process Optimization</h3>
                  <p className="text-gray-600 text-sm">Proven methodologies to improve yield, reduce defects, and optimize inspection processes</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Quality & Compliance</h3>
                  <p className="text-gray-600 text-sm">Meet automotive, medical, and aerospace quality standards with documented procedures</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Best Practices</h3>
                  <p className="text-gray-600 text-sm">Industry-proven techniques refined through thousands of real-world implementations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Guidance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our applications engineering team can help you implement these techniques in your specific production environment.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Contact Our Engineers &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LineMaster Fusion 3D | Inline 3D SPI | ASC International",
  description: "High-speed inline 3D solder paste inspection. The LineMaster Fusion 3D delivers fully automatic measurement, outstanding repeatability, and closed-loop printer feedback at an affordable price point.",
  keywords: ["LineMaster Fusion 3D", "inline SPI", "3D solder paste inspection", "inline 3D SPI system"],
};

const highlights = [
  "High-speed inline 3D measurement",
  "Fully automatic — no operator intervention",
  "Closed-loop solder paste printer feedback",
  "Inspects paste pads, BGAs, and PCB features",
  "Outstanding measurement repeatability",
  "Intuitive Windows user interface",
  "SMEMA conveyor compatible",
  "Affordable inline SPI entry point",
];

export default function LinemasterFusion3D() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "LineMaster Fusion 3D" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,217,255,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image Frame */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg" style={{ height: "420px" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <Image src="/images/products/linemaster-fusion-3d.png" alt="LineMaster Fusion 3D Inline SPI System" width={380} height={320} className="object-contain max-h-full w-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }} />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">Inline 3D SPI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Solder Paste Inspection</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LineMaster Fusion 3D</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  High-speed inline 3D solder paste inspection system with an intuitive Windows user interface. Performs fully automatic 3D measurements of solder paste deposits, BGAs, and other PCB features — eliminating operator errors while maintaining outstanding repeatability.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Designed for production line integration, the LineMaster Fusion 3D couples SMEMA conveyor compatibility with closed-loop feedback to your solder paste printer, catching drift before it becomes a defect — all at an affordable price point that makes inline SPI accessible for any operation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm text-gray-300">{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">
                    Request a Quote
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Full Specifications</h2>
            <p className="text-gray-400 mb-6">Detailed technical specifications, measurement ranges, and configuration options are available upon request. Contact our application engineers for a complete datasheet.</p>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">
              Request Datasheet
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { documentForProduct, formatBytes } from "@/lib/documents";

export const metadata: Metadata = {
  alternates: { canonical: '/products/laservision-sp3d-mini' },
  title: "LaserVision SP3D Mini | Benchtop SPI",
  description: "Affordable laser-based 3D SPI with the same measurement capability as the VisionPro SP3D on a cost-optimized platform. Customer-supplied PC option.",
  keywords: ["LaserVision SP3D Mini", "budget SPI", "affordable SPI", "benchtop laser SPI"],
};

const highlights = [
  "Same measurement capability as VisionPro SP3D",
  "Cost-optimized laser-based platform",
  "Customer-supplied PC option",
  "Laser-based 3D height measurement",
  "Area and volume calculation",
  "Lower cost of entry for 3D SPI",
  "Ideal for budget-conscious operations",
  "Standard for accurate budget SPI",
];

const datasheet = documentForProduct("laservision-sp3d-mini");

export default function LaserVisionSP3DMini() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "LaserVision SP3D Mini" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(0,217,255,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg mx-auto w-fit">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-1 left-1 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-1 right-1 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-1 left-1 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-1 right-1 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 flex items-center justify-center p-2">
                    <Image src="/images/products/laservision-sp3d-mini.png" alt="LaserVision SP3D Mini Budget Benchtop SPI" width={300} height={350} className="object-contain h-[300px] sm:h-[460px] w-auto max-w-full rounded-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">Benchtop Laser SPI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Budget Friendly</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LaserVision SP3D Mini</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  Affordable laser-based 3D SPI system offering the same overall measurement capabilities as the VisionPro SP3D on a lower-cost platform.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The LaserVision SP3D Mini makes accurate 3D solder paste inspection accessible without the premium price. Customers can supply their own PC, further reducing total cost of ownership. It has become the standard entry point for operations looking for reliable, accurate 3D SPI within a tight budget.
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
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">Request a Quote</Link>
                  <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">Schedule a Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Full Specifications</h2>
            <p className="text-gray-400 mb-6">The datasheet covers dimensions, throughput and measurement specifications. Configuration options are quoted against your line.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {datasheet && (
                <a
                  href={datasheet.path}
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Download Datasheet{" "}
                  <span className="font-normal opacity-75">(PDF, {formatBytes(datasheet.bytes)})</span>
                </a>
              )}
              <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">Request Full Specs</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

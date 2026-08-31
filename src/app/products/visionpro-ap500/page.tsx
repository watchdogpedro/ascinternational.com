import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { documentForProduct, formatBytes } from "@/lib/documents";

export const metadata: Metadata = {
  alternates: { canonical: '/products/visionpro-ap500' },
  title: "VisionPro AP500 | Offline 3D SPI",
  description: "Our most popular offline 3D SPI. The VisionPro AP500 measures solder paste fully automatically in a rugged benchtop and needs little operator training.",
  keywords: ["VisionPro AP500", "offline SPI", "benchtop SPI", "3D solder paste inspection"],
};

const highlights = [
  "Most popular VisionPro AP model",
  "Rugged benchtop enclosure",
  "Fully automatic measurement process",
  "Accurate 3D paste pad and BGA measurement",
  "Excellent measurement repeatability",
  "Minimal operator training required",
  "Windows user interface",
  "Production floor proven",
];

const datasheet = documentForProduct("visionpro-ap500");

export default function VisionProAP500() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "VisionPro AP500" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(0,217,255,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg aspect-square">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-12">
                    <Image src="/images/products/visionpro-ap500.jpg" alt="VisionPro AP500 Offline 3D SPI System" width={380} height={320} className="object-contain max-h-full w-auto rounded-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }} />
                </div>
                <div className="mt-4 flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg px-4 py-2">
                  <svg className="w-4 h-4 text-accent-cyan flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-accent-cyan text-sm font-semibold">Most Popular VisionPro AP Model</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">Offline 3D SPI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Best Seller</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">VisionPro AP500</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  The most popular model in ASC International's VisionPro AP family — a sophisticated 3D solder paste measurement system in a rugged benchtop enclosure built for the production floor.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  With only a few minutes of training, an operator can perform accurate 3D measurements of solder paste pads, BGAs, and PCB features. The VisionPro AP500's completely automatic measurement process eliminates operator errors and delivers excellent repeatability across every inspection cycle.
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

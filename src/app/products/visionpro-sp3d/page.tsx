import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { documentForProduct, formatBytes } from "@/lib/documents";

export const metadata: Metadata = {
  alternates: { canonical: '/products/visionpro-sp3d' },
  title: "VisionPro SP3D | Benchtop Laser SPI",
  description: "Laser-based benchtop 3D SPI with reliable height, area, and volume measurement. ASCan Ultra software with onboard SPC charting and Gerber import.",
  keywords: ["VisionPro SP3D", "laser SPI", "benchtop SPI", "3D solder paste inspection"],
};

const highlights = [
  "Laser-based 3D measurement technology",
  "Reliable height, area, and volume measurement",
  "Gerber import for template design",
  "ASCan Ultra software package",
  "Onboard SPC charting",
  "Custom data reports",
  "Windows 10/11 Pro OS",
  "Easy-to-use familiar interface",
];

const datasheet = documentForProduct("visionpro-sp3d");

export default function VisionProSP3D() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "VisionPro SP3D" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-purple/30 bg-dark-bg mx-auto w-fit">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(124,58,237,0.18) 0%, rgba(0,217,255,0.07) 45%, transparent 72%)" }} />
                  <div className="absolute top-1 left-1 w-7 h-7 border-t-2 border-l-2 border-accent-purple/60" />
                  <div className="absolute top-1 right-1 w-7 h-7 border-t-2 border-r-2 border-accent-purple/60" />
                  <div className="absolute bottom-1 left-1 w-7 h-7 border-b-2 border-l-2 border-accent-purple/30" />
                  <div className="absolute bottom-1 right-1 w-7 h-7 border-b-2 border-r-2 border-accent-purple/30" />
                  <div className="relative z-10 flex items-center justify-center p-2">
                    <Image src="/images/products/visionpro-sp3d.png" alt="VisionPro SP3D Benchtop Laser SPI" width={300} height={340} className="object-contain h-[300px] sm:h-[460px] w-auto max-w-full rounded-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-purple/15 text-purple-400 border border-accent-purple/30 text-xs font-semibold px-3 py-1 rounded-full">Benchtop Laser SPI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">ASCan Ultra Software</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">VisionPro SP3D</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  Laser-based benchtop SPI system offering accurate and reliable height, area, and volume measurements with Gerber import support for template design.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The ASCan Ultra software drives a whole new user experience — simple to operate, with onboard SPC charting, custom data reports, and a familiar Windows 10/11 Pro interface. The VisionPro SP3D is an easy choice for accurate and reliable 3D solder paste inspection in a benchtop format.
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

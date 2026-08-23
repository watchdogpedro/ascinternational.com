import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/tools/roi-calculator' },
  title: "Inspection ROI Calculator",
  description: "Estimate the ROI of adding automated inspection to your SMT line. Model defect escape costs, rework savings, and payback period for SPI and AOI.",
  keywords: ["inspection ROI calculator", "SPI ROI", "AOI ROI", "SMT inspection payback", "defect cost calculator", "yield improvement ROI"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Inspection ROI Calculator - ASC International",
    description: "Model the payback of automated SPI and AOI inspection: defect escape costs, rework savings, and time to ROI.",
    type: "website",
  },
};

export default function RoiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

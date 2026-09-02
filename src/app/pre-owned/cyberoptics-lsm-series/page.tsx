import type { Metadata } from "next";
import PreOwnedFamilyPage from "@/components/PreOwnedFamilyPage";
import type { PreOwnedSystem } from "@/components/PreOwnedSystemCard";

export const metadata: Metadata = {
  alternates: { canonical: "/pre-owned/cyberoptics-lsm-series" },
  title: "CyberOptics LSM Series | Pre-Owned Offline SPI",
  description:
    "Pre-owned CyberOptics LSM, LSM 2 and LSM 300 offline solder paste inspection. Refurbished and supported by ASC International for low-volume, high-mix work.",
  keywords: [
    "CyberOptics LSM",
    "CyberOptics LSM 2",
    "CyberOptics LSM 300",
    "used offline SPI",
    "pre-owned solder paste inspection",
    "laser section microscope",
    "benchtop SPI",
  ],
  openGraph: {
    images: ["/og-image.png"],
    title: "Pre-Owned CyberOptics LSM Series Offline SPI — ASC International",
    description:
      "LSM, LSM 2 and LSM 300 offline solder paste inspection, refurbished and supported by the engineers who know the platform.",
    type: "website",
  },
};

const systems: PreOwnedSystem[] = [
  {
    model: "CyberOptics LSM 300",
    type: "Offline SPI",
    badge: "Available",
    doc: "cyberoptics-lsm300",
    legacyDoc: true,
    highlights: [
      "Semi-automatic offline inspection",
      "3D paste height and volume",
      "Suits low-volume, high-mix runs",
      "Benchtop footprint",
    ],
  },
  {
    model: "CyberOptics LSM 2",
    type: "Offline SPI",
    badge: "Available",
    doc: "cyberoptics-lsm2",
    highlights: [
      "Automated in-process inspection",
      "The most widely deployed LSM",
      "Straightforward operator workflow",
      "Well-supported spares position",
    ],
  },
  {
    model: "CyberOptics LSM",
    type: "Offline SPI",
    badge: "Available",
    doc: "cyberoptics-lsm",
    legacyDoc: true,
    highlights: [
      "The original laser section microscope",
      "Manual inspection workflow",
      "Lowest cost of entry",
      "Matches long-running installations",
    ],
  },
];

export default function CyberOpticsLSMSeriesPreOwned() {
  return (
    <PreOwnedFamilyPage
      family="CyberOptics LSM Series"
      slug="cyberoptics-lsm-series"
      kicker="Solder Paste Inspection"
      headline="Pre-Owned Offline SPI"
      intro="Benchtop and offline solder paste inspection for shops where an inline machine cannot be justified, or where the work is short runs of many different boards."
      detail="An offline LSM sits at the bench rather than in the line. You pull a board after printing, measure the deposits that matter, and adjust the printer from what you see. It is slower than inline SPI by design, and for high-mix work that is the point: no line stoppage, no program change on every job, and a measurement good enough to settle an argument about whether the print or the placement caused a defect."
      stats={[
        { value: "3", label: "Models Stocked" },
        { value: "Offline", label: "Benchtop Format" },
        { value: "30–50%", label: "Below New Cost" },
        { value: "Warranty", label: "Included" },
      ]}
      systems={systems}
      systemsHeading="LSM Series Models"
      systemsIntro="Click a model for its brochure. Availability moves, and the exact software and fixturing on a given unit varies, so confirm with us before you build a plan around one."
      systemsColumns="3"
      fitFor={[
        "You run short jobs across many different boards and an inline SPI would spend its life being reprogrammed.",
        "You need paste measurement in the quality lab rather than on the line.",
        "An LSM already runs in your shop and you want a second, or a spare, that your operators already know.",
        "You want documented paste measurement for a customer audit without an inline capital purchase.",
      ]}
      newAlternative={{
        rationale:
          "The LSM family is the oldest kit ASC handles, and for some shops that is fine — the measurement still holds up and the price is hard to argue with. But if you are buying offline SPI to keep for the next decade rather than to match a machine you already run, a current benchtop platform will be supported for longer and will not tie you to hardware from the Windows 98 era.",
        systems: [
          {
            name: "VisionPro AP500",
            href: "/products/visionpro-ap500",
            desc: "ASC's most popular offline SPI, current platform",
          },
          {
            name: "LaserVision SP3D Mini",
            href: "/products/laservision-sp3d-mini",
            desc: "Budget benchtop laser SPI, new",
          },
        ],
      }}
      caveat="Be clear-eyed about the age of this family. The LSM and LSM 300 brochures linked above are archive material — the LSM literature shows a CRT monitor and RS-232 output, and the LSM 300 documentation describes a Windows 98 machine. ASC refurbishes and supports these systems, and for the right shop they are still good value, but they are not current products and the literature should not be read as a current spec. Ask us what the unit on the floor actually runs."
    />
  );
}

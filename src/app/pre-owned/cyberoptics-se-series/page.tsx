import type { Metadata } from "next";
import PreOwnedFamilyPage from "@/components/PreOwnedFamilyPage";
import type { PreOwnedSystem } from "@/components/PreOwnedSystemCard";

export const metadata: Metadata = {
  alternates: { canonical: "/pre-owned/cyberoptics-se-series" },
  title: "CyberOptics SE Series | Pre-Owned Inline 3D SPI",
  description:
    "Pre-owned CyberOptics SE Series inline 3D SPI: SE600, SE500, SE 300 Ultra and SE200. Refurbished and warranted by ASC International. Spec sheets on each model.",
  keywords: [
    "CyberOptics SE Series",
    "pre-owned SPI",
    "used CyberOptics SE600",
    "CyberOptics SE500",
    "SE 300 Ultra",
    "inline 3D SPI",
    "CyberPrint OPTIMIZER",
  ],
  openGraph: {
    images: ["/og-image.png"],
    title: "Pre-Owned CyberOptics SE Series Inline 3D SPI — ASC International",
    description:
      "SE600, SE500, SE 300 Ultra and SE200 inline solder paste inspection, refurbished to factory spec and backed by warranty.",
    type: "website",
  },
};

const systems: PreOwnedSystem[] = [
  {
    model: "CyberOptics SE600",
    type: "High Speed Inline SPI",
    badge: "Available",
    doc: "cyberoptics-se600",
    highlights: [
      "Flagship of the SE line",
      "High-speed 3D paste measurement",
      "Closed-loop printer feedback",
      "SMEMA conveyor integration",
    ],
  },
  {
    model: "CyberOptics SE500",
    type: "High Speed Inline SPI",
    badge: "Available",
    doc: "cyberoptics-se500",
    highlights: [
      "Phase-shift measurement technology",
      "Height, area and volume per deposit",
      "Real-time SPC output",
      "Smaller line footprint",
    ],
  },
  {
    model: "CyberOptics SE 300 Ultra",
    type: "High Speed Inline SPI",
    badge: "Available",
    doc: "cyberoptics-se300-ultra",
    highlights: [
      "Proven earlier inline platform",
      "Full 3D volume and height",
      "Automated program generation",
      "Compact cabinet",
    ],
  },
  {
    model: "CyberOptics SE200",
    type: "Inline SPI",
    badge: "Enquire",
    doc: "cyberoptics-se200",
    highlights: [
      "Entry point into the SE line",
      "Inline paste inspection",
      "Matches older SE installations",
      "Availability varies",
    ],
  },
];

export default function CyberOpticsSESeriesPreOwned() {
  return (
    <PreOwnedFamilyPage
      family="CyberOptics SE Series"
      slug="cyberoptics-se-series"
      kicker="Solder Paste Inspection"
      headline="Pre-Owned Inline 3D SPI"
      intro="Inline 3D solder paste inspection from the manufacturer with more than 3,000 SPI systems installed worldwide, refurbished and warranted by ASC."
      detail="The SE Series sits in the line after the printer and measures every paste deposit for height, area and volume. Feed those measurements back through CyberPrint OPTIMIZER and the printer corrects itself before a bad board reaches placement. Buying the platform pre-owned is the usual route to matching an SE that is already running on your floor, or to getting inline SPI without new-equipment budget."
      stats={[
        { value: "3,000+", label: "SE Systems Installed" },
        { value: "4", label: "Models Stocked" },
        { value: "30–50%", label: "Below New Cost" },
        { value: "Warranty", label: "Included" },
      ]}
      systems={systems}
      systemsHeading="SE Series Models"
      systemsIntro="Click any model for its brochure. Configuration, conveyor width and software version are quoted against your line, so confirm current stock before you plan around a specific unit."
      systemsColumns="4"
      fitFor={[
        "You already run an SE on one line and want a second that programs and behaves identically.",
        "You need inline SPI rather than offline, and new-equipment pricing has stalled the project.",
        "Your printer is the bottleneck on yield and you want closed-loop correction rather than after-the-fact reporting.",
        "You are replacing a failed SE and need the same footprint and SMEMA handoff.",
      ]}
      image={{
        src: "/images/products/cyberoptics-se-series.png",
        alt: "CyberOptics SE Series inline 3D solder paste inspection system",
      }}
      newAlternative={{
        rationale:
          "A used SE makes sense when you are matching an existing installation or working to a fixed budget. It makes less sense when you are putting inline SPI on a line for the first time, because you inherit someone else's service history and the software stops where the platform stopped. If this is a new line rather than a second one, look at what ASC builds now.",
        systems: [
          {
            name: "LineMaster Fusion 3D",
            href: "/products/linemaster-fusion-3d",
            desc: "High-speed inline 3D SPI, current platform, full warranty",
          },
          {
            name: "LineMaster DMI",
            href: "/products/linemaster-dmi",
            desc: "Dual mode — 3D SPI and AOI in one offline system",
          },
        ],
      }}
    />
  );
}

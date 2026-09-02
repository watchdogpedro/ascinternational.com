import type { Metadata } from "next";
import PreOwnedFamilyPage from "@/components/PreOwnedFamilyPage";
import type { PreOwnedSystem } from "@/components/PreOwnedSystemCard";

export const metadata: Metadata = {
  alternates: { canonical: "/pre-owned/cyberoptics-qx-series" },
  title: "CyberOptics QX Series | Pre-Owned 2D AOI",
  description:
    "Pre-owned CyberOptics QX600, QX500 and QX150i automated optical inspection. Refurbished, calibrated and warranted by ASC International. Spec sheet on each model.",
  keywords: [
    "CyberOptics QX600",
    "CyberOptics QX500",
    "CyberOptics QX150i",
    "used AOI",
    "pre-owned AOI",
    "refurbished automated optical inspection",
    "2D AOI system",
  ],
  openGraph: {
    images: ["/og-image.png"],
    title: "Pre-Owned CyberOptics QX Series AOI — ASC International",
    description:
      "QX600, QX500 and QX150i post-reflow AOI, refurbished to factory spec and backed by warranty.",
    type: "website",
  },
};

const systems: PreOwnedSystem[] = [
  {
    model: "CyberOptics QX600",
    type: "High Resolution 2D AOI",
    badge: "Available",
    doc: "cyberoptics-qx600",
    highlights: [
      "Highest resolution in the QX line",
      "Full board coverage",
      "Low false-call rate",
      "Inline capable",
    ],
  },
  {
    model: "CyberOptics QX500",
    type: "2D AOI",
    badge: "Available",
    doc: "cyberoptics-qx500",
    highlights: [
      "Proven mainstream QX platform",
      "Component presence and polarity",
      "Solder joint inspection",
      "Broad installed base",
    ],
  },
  {
    model: "CyberOptics QX150i",
    type: "High Resolution 2D AOI",
    badge: "Available",
    doc: "cyberoptics-qx150i",
    highlights: [
      "High-resolution imaging",
      "Compact inline cabinet",
      "Fast programming",
      "SMEMA compatible",
    ],
  },
];

export default function CyberOpticsQXSeriesPreOwned() {
  return (
    <PreOwnedFamilyPage
      family="CyberOptics QX Series"
      slug="cyberoptics-qx-series"
      kicker="Automated Optical Inspection"
      headline="Pre-Owned 2D AOI"
      intro="Post-reflow optical inspection that catches what a paste measurement cannot: the part that is missing, backwards, or soldered badly."
      detail="A QX images the finished board and compares what it sees against a programmed library. It picks up missing and misplaced components, wrong polarity, tombstones and bad joints, and it does it on every board rather than on whatever a person has time to look at. The QX line runs either inline after reflow or as a standalone station, and false-call rate is the number that decides whether operators keep trusting it — which is why programming matters more than the camera."
      stats={[
        { value: "3", label: "Models Stocked" },
        { value: "Post-Reflow", label: "Inspection Point" },
        { value: "30–50%", label: "Below New Cost" },
        { value: "Warranty", label: "Included" },
      ]}
      systems={systems}
      systemsHeading="QX Series Models"
      systemsIntro="Click a model for its spec sheet. Lighting, conveyor and software configuration differ unit to unit, so check what is actually in stock before committing to a model number."
      systemsColumns="3"
      fitFor={[
        "Your operators are doing final visual inspection by eye and escapes are still getting to the customer.",
        "You already run SPI and want to close the loop on the placement and reflow side too.",
        "A QX is running on another line and matching it saves you a second programming skillset.",
        "You need documented post-reflow inspection for IPC-A-610 Class 2 or Class 3 work.",
      ]}
    />
  );
}

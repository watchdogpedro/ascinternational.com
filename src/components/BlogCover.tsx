/**
 * Generated cover art for blog cards.
 *
 * No image files. Each post gets a deterministic cover built from the
 * inspection visual language the rest of the site already uses: a
 * measurement grid, corner registration marks, and a topic glyph, tinted
 * by the post's category.
 *
 * Adding a post needs no artwork. The glyph is derived from the slug, so
 * it stays the same across builds. Override it in SLUG_GLYPHS when a
 * specific glyph is obviously right for the subject.
 */

type BlogCoverProps = {
  category: string;
  slug: string;
  className?: string;
};

const CATEGORY_ACCENTS: Record<string, string> = {
  "Quality Control": "#00d9ff",
  Technology: "#0ea5e9",
  Business: "#f59e0b",
  "Buyer's Guide": "#10b981",
  Standards: "#94a3b8",
  Industry: "#f97316",
  "Best Practices": "#2dd4bf",
};

const FALLBACK_ACCENT = "#0ea5e9";

// 24x24 stroke paths, drawn from measurement and electronics vocabulary
const GLYPHS: Record<string, string> = {
  droplet: "M12 3.5c3.5 4 5.5 6.5 5.5 9a5.5 5.5 0 1 1-11 0c0-2.5 2-5 5.5-9z",
  grid: "M4 4h16v16H4z M4 9.33h16 M4 14.67h16 M9.33 4v16 M14.67 4v16",
  crosshair: "M12 3v18 M3 12h18 M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
  chart: "M2 20h20 M5 20V11 M10.5 20V5 M16 20v-6 M21 20v-9",
  shield: "M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z M9 12l2 2 4-4",
  chip: "M8 8h8v8H8z M4 10h4 M4 14h4 M16 10h4 M16 14h4 M10 4v4 M14 4v4 M10 16v4 M14 16v4",
  lens: "M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z",
  layers: "M12 3l9 5-9 5-9-5 9-5z M3 13l9 5 9-5",
  caliper: "M3 7h18 M3 7v4.5 M21 7v4.5 M8 7v3 M13 7v3 M18 7v3 M3 17.5h18",
  link: "M9.5 12h5 M9 8a4 4 0 0 0 0 8h1 M15 8a4 4 0 0 1 0 8h-1",
};

const GLYPH_ORDER = Object.keys(GLYPHS);

// Explicit choices where the subject has an obvious glyph
const SLUG_GLYPHS: Record<string, string> = {
  "conformal-coating-inspection-defects": "droplet",
  "common-solder-paste-defects": "droplet",
  "spi-preventing-solder-defects": "droplet",
  "stencil-design-solder-paste-printing": "grid",
  "solder-paste-measurement-justification": "caliper",
  "calculating-inspection-roi": "chart",
  "true-cost-of-inspection": "chart",
  "yield-improvement-strategies": "chart",
  "stamp-out-rework": "chart",
  "3d-spi-vs-2d-spi-comparison": "layers",
  "inline-vs-offline-spi": "crosshair",
  "multi-reflection-suppression-explained": "lens",
  "reduce-aoi-false-calls": "lens",
  "aoi-programming-component-libraries": "chip",
  "ipc-a-610-class-2-vs-class-3": "shield",
  "medical-device-pcb-inspection": "shield",
  "automotive-zero-defect-inspection": "shield",
  "aerospace-as9100-compliance": "shield",
  "billions-of-solder-joints": "chip",
  "ai-in-inspection-demystified": "chip",
  "spi-buyers-guide-2026": "caliper",
  "aoi-buyers-guide-2026": "caliper",
  "spi-vendor-questions": "crosshair",
  "inspection-integration-industry-4-0": "link",
  "closed-loop-spi-printer-feedback": "link",
  "vendor-lock-in-inspection-equipment": "link",
};

function glyphFor(slug: string): string {
  const explicit = SLUG_GLYPHS[slug];
  if (explicit && GLYPHS[explicit]) return GLYPHS[explicit];

  // Stable fallback so a new post always renders the same glyph
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return GLYPHS[GLYPH_ORDER[hash % GLYPH_ORDER.length]];
}

export default function BlogCover({ category, slug, className = "" }: BlogCoverProps) {
  const accent = CATEGORY_ACCENTS[category] ?? FALLBACK_ACCENT;
  const glyph = glyphFor(slug);
  const gridId = `cover-grid-${slug}`;

  return (
    <div
      className={`relative overflow-hidden bg-[#0a0e27] ${className}`}
      aria-hidden="true"
    >
      {/* measurement grid */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M28 0H0V28"
              fill="none"
              stroke={accent}
              strokeOpacity="0.16"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
      </svg>

      {/* accent wash, sitting off-centre rather than filling the card */}
      <div
        className="absolute -right-8 -top-10 h-40 w-40 rounded-full blur-2xl"
        style={{ backgroundColor: accent, opacity: 0.18 }}
      />

      {/* registration marks on a diagonal, the way fiducials sit on a real board,
          which also keeps the bottom-left corner clear for the category label */}
      {["left-3 top-3", "right-3 top-3", "right-3 bottom-3"].map((pos) => (
        <svg
          key={pos}
          className={`absolute ${pos} h-3.5 w-3.5`}
          viewBox="0 0 14 14"
          fill="none"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.75"
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="4" />
          <path d="M7 0v3.5 M7 10.5V14 M0 7h3.5 M10.5 7H14" />
        </svg>
      ))}

      {/* topic glyph, pushed right of centre so the cards do not read as a row of badges */}
      <svg
        className="absolute right-[18%] top-1/2 h-16 w-16 -translate-y-1/2 sm:h-20 sm:w-20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={glyph} />
      </svg>

      {/* category label */}
      <span
        className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em]"
        style={{ color: accent }}
      >
        {category}
      </span>

      {/* accent rule along the bottom edge */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-full"
        style={{ backgroundColor: accent, opacity: 0.8 }}
      />
    </div>
  );
}

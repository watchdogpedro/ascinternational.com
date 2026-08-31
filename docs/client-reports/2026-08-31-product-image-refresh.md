# ASC International — Product Page Image Refresh

**Prepared for:** ASC International
**Prepared by:** Winfield Technologies Inc.
**Date:** August 31, 2026
**Site:** ascinternational.com

---

## What we did

Replaced the product photography on nine product pages with new equipment
renders, and reworked the image frame those photos sit in so they display
consistently across every product page. Each image was resized and compressed
for fast loading. All changes are live.

## Product photos updated

| Product | Page |
|---|---|
| VisionPro HSi | /products/visionpro-hsi |
| LineMaster Fusion 3D | /products/linemaster-fusion-3d |
| LineMaster DMI | /products/linemaster-dmi |
| VisionPro AP500 | /products/visionpro-ap500 |
| VisionPro SP3D | /products/visionpro-sp3d |
| VisionPro M500 | /products/visionpro-m500 |
| LineMaster Falcon Plus | /products/linemaster-falcon-plus |
| LineMaster Falcon | /products/linemaster-falcon |
| MSS 130 DVI | /products/mss-130-dvi |

Two pairs currently share a render: VisionPro M500 uses the SP3D image, and
LineMaster Falcon uses the Falcon Plus image. Each has its own image file, so
either can be given a distinct photo later without touching the other.

## Image frame improvements

These apply to all 16 product pages, so future photo swaps drop in cleanly.

- **Frame fit.** The new photos have full backgrounds, unlike the older cutout
  shots. We changed the frame so the photo sits neatly inside the corner
  brackets instead of crowding or overlapping them, with the photo corners
  rounded.
- **Frame spacing.** After a few passes we settled the gap between the corner
  brackets and the photo at about 19 pixels per side — close, but not touching.
- **Label placement.** On the Fusion 3D page, the blue "PSI 1500 Technology"
  badge was sitting on top of the machine. It now sits above the frame, clear
  of the photo.

## Performance

Each new render arrived at 2–2.6 MB. We resized every one to roughly 1280 pixels
and recompressed it, bringing them down to about 200–330 KB — a 6× to 10×
reduction in page weight, which keeps the product pages fast on mobile.

## How the work is tracked

Every change is committed to the site's GitHub repository
(`watchdogpedro/ascinternational.com`) and deploys automatically to production
on push. The commits behind this report:

| Commit | Change |
|---|---|
| `2061bff` | VisionPro HSi + Fusion 3D photos |
| `01b6e66` | Frame: clear corner brackets, move Fusion badge out |
| `5bef680` | Frame: square aspect ratio, fit whole photo |
| `3a653aa` | Frame: shrink to hug the photo |
| `1d868e6` | Frame: tighten further |
| `c5447bd` | Frame: back off ~10px to final spacing |
| `6143407` | LineMaster DMI photo |
| `86f81be` | VisionPro AP500 photo |
| `244cfd1` | VisionPro SP3D photo |
| `87a968a` | VisionPro M500 photo (SP3D render) |
| `a5a4673` | LineMaster Falcon Plus photo |
| `28dec97` | LineMaster Falcon photo (Falcon Plus render) |
| `e99845f` | MSS 130 DVI photo |

## Recommendation

The new images are stylized renders. They read well as product shots, but the
on-screen software and some machine labels contain generated text that is not
legible up close. When real product photography is available, we can swap it in
the same way — the frame and page layout are already set up for it.

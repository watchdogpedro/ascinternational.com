# Video Assets Guide for Hero Section

## Where to Place Video Files

Place your hero background video in the `/public/videos/` directory:

```
/public/videos/hero-inspection.mp4
```

Place a poster image (fallback/thumbnail) in the `/public/images/` directory:

```
/public/images/hero-poster.jpg
```

## Recommended Video Specifications

### Format & Codec
- **Format:** MP4 (H.264)
- **Codec:** H.264 with AAC audio (muted, but include for compatibility)
- **Alternative formats:** Also consider WebM for better compression

### Technical Specs
- **Resolution:** 1920x1080 (Full HD) minimum
- **Aspect Ratio:** 16:9
- **Frame Rate:** 24-30 fps
- **Bitrate:** 5-8 Mbps (balance between quality and file size)
- **Duration:** 15-30 seconds (will loop seamlessly)
- **File Size:** Aim for under 5MB for fast loading

### Content Recommendations

**Best footage for the hero section:**

1. **3D SPI in action** - Close-up of solder paste being measured
2. **AOI inspection** - PCB moving through optical inspection with overlay graphics
3. **X-ray system** - BGA inspection with cross-section view
4. **Production line** - Wide shot of inspection equipment integrated in SMT line
5. **Before/after** - Split screen of defect detection

**Pro tips:**
- Show the equipment in a clean, well-lit facility
- Include some motion (PCB moving, scanning, etc.) but not too fast
- Avoid shaky footage - use tripod or stabilization
- Good lighting is critical for professional look
- Consider adding subtle data overlays in post-production

## Video Optimization

### Compress Video
Use tools like HandBrake or FFmpeg to optimize:

```bash
# FFmpeg compression example
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -vf scale=1920:1080 -c:a aac -b:a 128k hero-inspection.mp4
```

### Create Poster Image
Extract a frame from the video:

```bash
# Extract frame at 3 seconds
ffmpeg -i hero-inspection.mp4 -ss 00:00:03 -vframes 1 -q:v 2 hero-poster.jpg
```

## Enabling the Video

Currently, the video element is commented out in `/src/components/VideoHero.tsx` (lines 22-31).

Once you have your video file ready:

1. Place video at `/public/videos/hero-inspection.mp4`
2. Place poster at `/public/images/hero-poster.jpg`
3. Uncomment the video element in VideoHero.tsx
4. Remove or comment out the placeholder grid pattern (lines 33-43)

## Alternative: Stock Footage

If you don't have your own footage yet, consider:

**Stock Video Sites:**
- Shutterstock - Search "PCB inspection", "SMT assembly", "electronics manufacturing"
- Adobe Stock
- Pond5
- Storyblocks

**Search Terms:**
- "PCB inspection"
- "solder paste inspection"
- "SMT assembly line"
- "electronics manufacturing"
- "circuit board production"
- "automated optical inspection"
- "quality control electronics"

## Testing

After adding video:

1. Test on different browsers (Chrome, Firefox, Safari, Edge)
2. Check mobile performance (video should gracefully degrade)
3. Verify autoplay works (some browsers block autoplay with sound)
4. Ensure overlay text remains readable
5. Test loading time (use browser DevTools Network tab)

## Fallback Strategy

The component is designed with progressive enhancement:

1. **No video:** Shows blue gradient background with animated grid
2. **Video loading:** Shows poster image
3. **Video ready:** Plays video seamlessly
4. **Mobile:** Falls back to gradient (video can be resource-intensive)

This ensures the page looks good in all scenarios.

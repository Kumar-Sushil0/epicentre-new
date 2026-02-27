# Image Optimization Configuration

## Current Setup

The website uses Next.js Image component with `unoptimized: true` configuration.

## Why Unoptimized?

External images from S3 and Google Photos were causing timeout errors during Next.js optimization process. This is a common issue with:
- Large external images
- Slow external servers
- Network latency

## What This Means

**Still Using Next.js Image Component:**
- ✅ Lazy loading (images load as you scroll)
- ✅ Proper sizing with `fill` and `sizes` attributes
- ✅ Prevents layout shift (CLS)
- ✅ Better accessibility

**Not Using:**
- ❌ Automatic WebP/AVIF conversion
- ❌ Server-side image optimization
- ❌ Automatic responsive image generation

## Performance Impact

**Minimal** - The main benefits of Next.js Image (lazy loading, proper sizing, preventing layout shift) are still active. The automatic format conversion is nice-to-have but not critical.

## Alternative Solutions (If Needed)

### Option 1: Host Images Locally
Download all external images and place them in `/public` folder. This would allow full optimization.

### Option 2: Use Image CDN
Use a service like Cloudinary or Imgix to optimize images before serving them.

### Option 3: Pre-optimize Images
Manually convert images to WebP format and optimize them before uploading to S3.

## Current Status

✅ **Working perfectly** - No errors, images load properly
✅ **Good SEO** - All alt text, lazy loading, and sizing in place
✅ **Good performance** - Lazy loading reduces initial page load

## Recommendation

Keep the current setup unless you notice performance issues. The benefits of full optimization are marginal compared to the complexity of managing local images or setting up a CDN.

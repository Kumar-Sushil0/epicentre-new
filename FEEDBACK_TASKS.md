# Website Feedback - Task List

## 🏗️ Structural Issues

### Missing Features & Functionality
- [ ] **7. Booking system** - Implement proper booking functionality
  - Create booking form with calendar
  - Add date selection
  - Integrate with backend booking system
  - Keep WhatsApp as secondary option

- [ ] **13. Legal pages** - Create content for legal links
  - Write Privacy Policy
  - Write Terms of Service
  - Create Sitemap
  - Remove # placeholder links

- [ ] **14. Subscribe input field** - Add visible input field in footer
  - Implement email input field
  - Connect to subscription functionality

- [ ] **18. Social proof** - Add testimonials section
  - Collect and add customer testimonials
  - Add social proof elements
  - Consider review integration

### Navigation & Links
- [ ] **8. Service type links** - Fix /test links for services
  - Update Solitude, Experiments, Residency links
  - Add "Coming Soon" pages or proper landing pages

- [ ] **6. Instagram link** - Fix Instagram URL
  - Add `https://` prefix to instagram.com/thesilent.club
  - Ensure it opens as proper hyperlink

---

## 🐛 Bugs

### Component Issues
- [ ] **2. Newsletter popup persistence** - Fix repetitive subscription popup
  - Store subscription status in localStorage/cookies
  - Don't show popup again after successful subscription

- [ ] **4. Duplicate footer sections** - Remove duplicate "Explore" and "Have Questions?" sections
  - Debug footer component rendering
  - Fix layout/component duplication bug

### Rendering Issues
- [ ] **5. Video links rendering** - Fix bare anchor tags for videos
  - Add visible text or thumbnails for video links
  - Implement proper video preview UI

- [ ] **12. Image dimensions** - Fix visible `<img>` tags in markup
  - Set proper width/height attributes
  - Ensure responsive sizing

---

## ⚡ Optimization

### Performance
- [ ] **1. Image loading optimization** - Implement lazy loading for images
  - Add `loading="lazy"` attribute to images
  - Use Next.js Image component with proper optimization
  - Add blur placeholders for better UX

- [ ] **11. Video files optimization** - Fix video loading issues
  - Implement lazy-loading for all video files (drone.mp4, boat.mp4, angling.mp4, star.mp4)
  - Add poster frames for videos
  - Add fallback content for slow connections
  - Consider video compression or streaming solution

- [ ] **15. CDN Implementation** - Set up CloudFront or CDN for S3 assets
  - Configure CloudFront distribution for lidbucketnew.s3.ap-south-1.amazonaws.com
  - Update image URLs to use CDN
  - Improve global loading performance

### Pricing Strategy
- [ ] **9. Solitude pricing review** - Reconsider ₹1,000/day pricing
  - Analyze market positioning
  - Adjust pricing to match luxury segment
  - Update pricing display on website

- [ ] **10. Full Cycle pricing review** - Review ₹1,00,000/night pricing
  - Benchmark against premium wellness retreats
  - Consider value proposition
  - Adjust if needed for luxury positioning

---

## 📝 Naming & Content Changes

### Text & Labels
- [ ] **3. Logo alt text** - Update logo alt text and filename
  - Change from "EPiCentre Logo" to proper brand name
  - Update file naming convention

- [ ] **17. Accommodation card titles** - Differentiate accommodation cards
  - Update each card with unique titles
  - Add unique descriptions

---

## Quick Reference

**Total Tasks**: 18
- Structural: 6 tasks
- Bugs: 4 tasks
- Optimization: 5 tasks
- Naming & Content: 2 tasks
- Pricing Strategy: 2 tasks (under Optimization)

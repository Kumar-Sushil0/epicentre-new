# Landing Page Components

This directory contains all components for the `/landing` route.

## Components Overview

### 1. LandingHero.tsx
- Hero section with video background
- Title: "The Silent Club Bhigwan Estate"
- Subtitle about protecting attention
- Matches homepage Hero design with gradient overlays

### 2. LandingPhilosophy.tsx
- Gold background section
- Main message: "Most people do not lack answers. They lack uninterrupted attention."
- Explains the purpose of removing interference

### 3. LandingBetweenChapters.tsx
- Dark earth background
- Title: "THE MOMENT BETWEEN CHAPTERS"
- Content about completion vs failure, the in-between chapter

### 4. LandingFullImage.tsx
- Full-width image section
- Placeholder for estate/wildlife/lake/architecture photos
- Gradient overlay for visual consistency

### 5. LandingWhySilence.tsx
- Dark background
- Title: "WHY SILENCE MATTERS"
- Two-column layout explaining silence as infrastructure

### 6. LandingEstate.tsx
- Dark background
- Title: "THE ESTATE"
- Explains "Silence as infrastructure" principle

### 7. LandingFiveYearCycle.tsx
- Timeline layout with 5 years (2026-2030)
- Each year features a different cohort
- Matches AboutAttentionCycle design

### 8. LandingAccessProtocol.tsx
- Gold background
- Title: "ACCESS PROTOCOL"
- Explains no networking, no content creation rules

### 9. LandingCustodian.tsx
- Dark background with centered layout
- Features D.D. (Liberation Designer)
- Explains custodian role

### 10. LandingInvitationProcess.tsx
- Three-step process layout
- Steps: Request invitation → Exploration Call → Schedule Visit
- Card-based design with step numbers

### 11. LandingCTA.tsx
- Prominent call-to-action section
- "REQUEST INVITATION" button
- Links to /contact page
- Includes 2026 cohort details

## Design System

### Colors
- **Earth tones**: earth-950, earth-900, earth-800, earth-300, earth-100
- **Gold accents**: gold-500, gold-400
- **Backgrounds**: Alternating between dark earth and gold sections

### Typography
- **Font**: Outfit (headings), Quicksand (body)
- **Headings**: text-2xl to text-5xl, font-normal
- **Body**: text-base to text-xl, font-body

### Spacing
- **Section padding**: py-16 md:py-24 (standard), py-20 md:py-32 (CTA)
- **Horizontal padding**: px-4 md:px-16
- **Max widths**: max-w-3xl to max-w-6xl mx-auto

### Responsive Design
- Mobile-first approach
- Breakpoints: md: (768px+)
- Grid layouts: grid-cols-1 md:grid-cols-2/3/5

## Usage

Import in `/landing/page.tsx`:

```tsx
import LandingHero from "../components/landing/LandingHero";
// ... other imports

export default function LandingPage() {
  return (
    <main>
      <Header />
      <LandingHero />
      {/* ... other components */}
      <Footer />
    </main>
  );
}
```

## Notes

- All components follow the existing design system
- Responsive and accessible
- SEO metadata included in page.tsx
- Video/image assets use S3 bucket URLs (update as needed)

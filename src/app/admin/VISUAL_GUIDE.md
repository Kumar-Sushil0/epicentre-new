# Admin Dashboard - Visual Guide & Design Language

This guide outlines the visual language and core UI components developed for the EPiCentre Resort Admin Dashboard.

## 🎨 Color Palette

The dashboard uses a curated "Earthy Gold" theme that reflects the premium and natural essence of the resort.

| Color | Usage |
|-------|-------|
| ![#0C0A09](https://via.placeholder.com/15/0C0A09/0C0A09?text=+) `earth-950` | Primary background color |
| ![#1C1917](https://via.placeholder.com/15/1C1917/1C1917?text=+) `earth-900` | Section backgrounds, card containers |
| ![#C5A065](https://via.placeholder.com/15/C5A065/C5A065?text=+) `gold-500` | Primary accents, buttons, icons |
| ![#A8864B](https://via.placeholder.com/15/A8864B/A8864B?text=+) `gold-600` | Hover states, gradients |
| ![#10B981](https://via.placeholder.com/15/10B981/10B981?text=+) `emerald-500` | Success status, confirmed bookings |
| ![#3B82F6](https://via.placeholder.com/15/3B82F6/3B82F6?text=+) `blue-500` | Info, ongoing activities |
| ![#EF4444](https://via.placeholder.com/15/EF4444/EF4444?text=+) `red-500` | Warnings, cancellations, errors |

---

## 🏗 Key UI Components

### 1. The Glassmorphic Sidebar
The navigation uses a high-blur backdrop with gold-tinted active states.
- **Visuals**: `backdrop-blur-xl`, `bg-earth-950/80`, `border-r border-gold-500/10`.
- **Interaction**: Elegant hover effects that shift the gold intensity.

### 2. Stat Cards
Large, high-impact data visualization cards used in Dashboards and Analytics.
- **Design**: Gradient icon backdrops and large font weights for primary data.
- **Rhythms**: 4-column grid layout for desktop, single column for mobile.

### 3. Interactive Data Tables
Modern tables with row-level hover states.
- **Visuals**: `hover:bg-earth-800/30`, `border-gold-500/10`.
- **Status Badges**: Pill-shaped badges with semi-transparent background tints (e.g., `bg-emerald-500/20 text-emerald-500`).

### 4. Room & Activity Cards
Immersive cards with high-quality thumbnails.
- **Features**: 
  - Image scaling on hover (`group-hover:scale-110`).
  - Overlay gradients for text readability.
  - Floating status badges and ratings.

### 5. Management Modals
Clean, focused overlays for creating and editing content.
- **Anatomy**: Fixed headers, scrollable content areas, and sticky footers with primary "Save/Create" actions.

---

## 🖋 Typography & Iconography

- **Headers**: `Outfit, sans-serif` - used for its modern, clean, yet sophisticated luxury feel.
- **Body**: Standard sans-serif for high readability.
- **Mono**: `font-mono` - used for transaction IDs, dates, and quantitative values to provide a "technical ledger" feel.
- **Icons**: `Material Symbols Outlined` - customized with `gold-500` coloring.

## 🔄 Interaction Principles

1. **Hover Response**: Every interactive element (buttons, cards, table rows) has a distinct visual response, usually involving border-color shifts or subtle scaling.
2. **Loading States**: Integrated loading spinners in primary action buttons.
3. **Responsive Flow**: Seamless transition from multi-column grid layouts to vertical stacks for tablets and mobile devices.

---

## 📸 Component Screenshots (Reference)

*Note: Since this is a markdown file, screenshots are represented by their section descriptions.*

1. **The Hero Header**: Features the page title and primary CTA (e.g., "Add New Room") in a gold gradient button.
2. **The Stats Bar**: A horizontal row of 4-5 cards showing immediate KPIs.
3. **The Content Grid**: A responsive layout of cards or a dense table depending on the module.
4. **The Filter Bar**: A persistent row of search inputs and dropdowns for data refining.

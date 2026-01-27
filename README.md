p align="center">
  <h1 align="center">XAI Intelligence Workspace</h1>
  <p align="center">
    Data → Intelligence · Motion-Driven Interactive Experience
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14%2B-black" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-blue" />
  <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-green" />
  <img src="https://img.shields.io/badge/Framer%20Motion-UI-purple" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-cyan" />
</p>

---

## 🧠 Overview — *Data → Intelligence*

**XAI Intelligence Workspace** is a motion-driven, interactive web experience built with **Next.js 13+**, focused on transforming raw data into meaningful intelligence through **purposeful animation, geometry, and interaction**.

Rather than treating animation as decoration, this project treats **motion as a system** — a way to communicate transformation, structure, and intent.

🚫 No stock illustrations  
🚫 No Lottie files  
✅ Custom-built geometry, timelines, and interactions

---

## 🧩 Concept

This project explores how **data evolves into intelligence** using motion, structure, and interaction — not pre-made visuals.

The experience emphasizes:
- Intentional motion over decoration
- Geometry-based visuals
- Scroll-driven storytelling
- Product-level UI realism

Every animation serves meaning.

---

## ✨ Key Sections

### 1. Hero Section — *Data → Intelligence*

**Goal:**  
Visually represent the transformation from raw, unstructured data into organized intelligence.

**Features:**
- Minimal headline and subtext
- Centerpiece animated visual using abstract geometry or particles
- Smooth transformation from chaos → structure (grids, nodes, panels)
- Motion responds to scroll position and cursor movement

**Implementation:**
- Three.js (`@react-three/fiber`) for geometry and particles
- GSAP + ScrollTrigger for scroll-linked timelines
- Framer Motion for UI text and layout choreography

---

### 2. Interactive Insight Flow

**Goal:**  
Explain the intelligence pipeline through motion-driven storytelling.

**Stages:**
1. Ingest Data  
2. Analyze with AI  
3. Generate Insight  

**Behavior:**
- Sections animate in and out based on scroll
- Geometry-based transitions (lines, masks, transforms)
- Micro-interactions on hover and focus
- Smooth, timeline-controlled stage transitions

**Implementation:**
- GSAP timelines with ScrollTrigger
- SVG / Canvas geometry animation
- Framer Motion for layout and text animation

---

### 3. Intelligence Dashboard Preview

**Goal:**  
Present a realistic product interface — not marketing cards.

**Includes:**
- Sidebar navigation
- Main content panel
- Charts, tables, and KPI components (static data)

**Interactions:**
- Subtle entrance animations
- Hover feedback and elevation
- State-driven transitions (tab switching, panel changes)

**Design Focus:**
- Clear visual hierarchy
- Consistent spacing system
- Calm, professional typography

---

### 4. Signature Interaction (WOW Moment)

**Goal:**  
Deliver one deliberate interaction that demonstrates mastery of motion, math, and intent.

**Examples:**
- Scroll-reactive 3D Intelligence Core
- Geometry morph triggered by user action
- Data clusters reorganizing into insight groups
- Depth-based parallax system

This interaction is focused, restrained, and memorable.

---

## 🏗 Architecture

The project separates **layout, motion logic, and rendering** for performance and clarity.

## ⚙️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Animation Engine:** GSAP + ScrollTrigger
- **UI Motion:** Framer Motion
- **3D / Visuals:** Three.js (`@react-three/fiber`, `drei`)
- **Styling:** Tailwind CSS / CSS Variables
- **State Management:** Local state / Zustand
- **Performance:** requestAnimationFrame, dynamic imports, instancing

---

## 📂 Key Files & Structure

- `app/` — Next.js App Router layouts and routes
- `src/components/animations/IntelligenceCore.tsx`  
  — Three.js interactive Intelligence Core
- `src/components/animations/ScrollReveal.tsx`  
  — Scroll reveals, parallax, and stagger helpers (GSAP)
- `src/components/ui/`  
  — UI primitives (Button, Card, Navbar, Sidebar)
- `src/lib/`  
  — Helpers, mock data, and Three.js utilities

---

## 🚀 Quickstart

**Prerequisites:** Node.js 18+ (or compatible LTS), npm / yarn / pnpm

### Install dependencies
```bash
npm install
Run the dev server
npm run dev

# Project Guidelines — Rita Ndubi Portfolio & Brand

## Project Overview
Personal brand portfolio and RevOps showcase for **Rita Ndubi** (Business Systems, AI Automation & RevOps Specialist). Demonstrates real enterprise system builds, conversational AI agents, and customer journey architectures.

## Technology Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS (Canva / Nate Herk bright white aesthetic: `bg-white`, slate-900 typography, emerald accents)
- **Icons**: Lucide React
- **Hosting / Edge**: Cloudflare Pages (`wrangler.toml`)
- **Source of Data**: `src/data/portfolioData.js`

## Core Brand & Invariants
- **Core Title**: Business Systems, AI Automation & RevOps Specialist
- **Signature Framework**: The Revenue-to-Operations (RevOps) Engine:
  - 01 · Attract & Capture
  - 02 · Follow Up & Nurture
  - 03 · Convert & Contract
  - 04 · Onboard & Retain
  - 05 · Operations Engine
- **Enterprise Discretion Policy (Option 1)**:
  - Approved client names (*Klock Aviation*, *Sydia Realty*, *VivaLife Clinic*, *Mapenzi Connect*, *Unicorn Dental*, *DiaspoCare LLC*) may be displayed for authority.
  - **NEVER** expose proprietary internal numbers, private customer lists, confidential commission percentages, or internal handover sheets.
- **AI Tone**: Authentic, professional, and practical. Avoid AI fluff or excessive jargon. Highlight business outcomes, before/after metrics, and human-in-the-loop operational design.

## Development Commands
- Start dev server: `npm run dev` (serves at `http://localhost:3000`)
- Production build: `npm run build`
- Deploy to Cloudflare: `npx wrangler pages deploy dist`

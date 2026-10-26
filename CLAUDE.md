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
- **Core Title** (chosen by Rita 2026-10-26): Business Systems & AI Automation Strategist | CRM, Customer Journey & RevOps. Job-application CVs may use the target role's title (e.g. "Specialist") for ATS matching.
- **Testimonials**: only the verbatim LinkedIn recommendations in `portfolioData.js` (screenshots in `docs/brand/`). Never edit their wording or invent new ones.
- **Numbers**: never invent metrics. Rita confirmed past project numbers were not tracked; use qualitative before/after.
- **Signature Method** (chosen by Rita 2026-10-26, replaces "Revenue-to-Operations Engine"): The CLEAR Method:
  - C · Chart the whole business
  - L · Link the systems
  - E · Eliminate manual work
  - A · Add AI with guardrails
  - R · Run, review & refine
  - Case-study workflowSteps still use the 5 customer journey stages (Attract & Capture ... Operations Engine); that is the journey, not the method.
- **Enterprise Discretion Policy (Option 1)**:
  - Approved client names (*Klock Aviation*, *Sydia Realty*, *VivaLife Clinic*, *Mapenzi Connect*, *Unicorn Dental*, *DiaspoCare LLC*, *CCC Business Directory / Connect Circle Community* (client project, not Rita's own venture)) may be displayed for authority.
  - **NEVER** expose proprietary internal numbers, private customer lists, confidential commission percentages, or internal handover sheets.
- **AI Tone**: Authentic, professional, and practical. Avoid AI fluff or excessive jargon. Highlight business outcomes, before/after metrics, and human-in-the-loop operational design.

## Development Commands
- Start dev server: `npm run dev` (serves at `http://localhost:3000`)
- Production build: `npm run build`
- Deploy to Cloudflare: `npx wrangler pages deploy dist`

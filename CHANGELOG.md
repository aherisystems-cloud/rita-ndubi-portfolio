# Changelog

All notable changes to the Rita Ndubi personal website, portfolio, and brand assets are documented in this file.

## [2026-10-28] - Personal Brand Reposition, Walkthrough, Code Samples

### Added
- `MissionSection.jsx` (photo, story, focus list, mission/vision/approach), `Testimonials.jsx` with verbatim LinkedIn quotes.
- CLEAR Method (Chart, Link, Eliminate, Add AI, Run) in `FrameworkSection`, data in `operatingFramework`.
- `public/walkthrough/index.html`: animated system walkthrough (Klock, Biashara Pros, WowGlamDecor) for Loom demos.
- Public repo `aherisystems-cloud/automation-samples`: 10 production code samples with READMEs and self-checks.

### Changed
- Title: Business Systems & AI Automation Strategist | CRM, Customer Journey & RevOps.
- Brand palette to RN logo orange (`brand-*`), Fraunces display font, new favicon and meta.
- All copy rewritten as personal brand; phrases "AI-native builder and strategist" and "stop revenue leakage" woven in.
- Klock case study widened to full scope; CCC marked as a client project; "payment gateway" replaces Paystack.
- WowGlamDecor health check corrected from 31 rules to 56 checks (site and walkthrough).

### Removed
- All invented metrics (replaced with qualitative before/after), Retail AI case (unconfirmed), ATS copy button, dead Calendly link.

### Decisions
- Rejected: "Revenue-to-Operations Engine" name (Rita disliked it), job-seeking goal on site, naming Paystack only.
- Application materials stay in git-ignored `docs/applications/` because the repo is public.

## [2026-10-19] - Framework Integration & 10-Project Portfolio Expansion

### Added
- **`src/components/FrameworkSection.jsx`**:
  - Implemented the **Revenue-to-Operations Engine** framework based on `aherisystems.com`.
  - Added the 4 core brand positioning question cards: *What do you do?*, *Who do you help?*, *How do you help them?*, and *What is your process?*.
  - Added an interactive 5-stage stepper for the customer lifecycle: *01 Attract & Capture*, *02 Follow Up & Nurture*, *03 Convert & Contract*, *04 Onboard & Retain*, and *05 Operations Engine*.
- **Comprehensive 10-Project Portfolio**:
  - Added all 10 verified client projects to `src/data/portfolioData.js`:
    1. Klock Aviation (Private Charter & Aviation Services)
    2. Retail AI Sales Agent (Retail & E-Commerce Brands)
    3. VivaLife Pediatric Clinic (Healthcare & Pediatric Care)
    4. Mapenzi Connect (Relationship & Community Platform)
    5. Sydia Realty (Property Investment & Real Estate)
    6. Unicorn Dental Clinic (Healthcare & Dental Practice)
    7. DiaspoCare LLC (Healthcare FinTech & Cross-Border Care)
    8. BiasharaPros (MSME Business Platform & Regulatory Tools)
    9. WowGlamDecor.com (AI-Engineered E-Commerce Platform)
    10. CCC Business Directory (Regional Enterprise Platform)
  - Added category filtering system (`All`, `AI & Agentic Workflows`, `Enterprise CRM & RevOps`, `Healthcare & Clinics`, `Web Platforms & Cloud`) in `src/components/CaseStudies.jsx`.
- **Positioning Summary Matrix in Hero**:
  - Added a 3-card positioning strip (`Who I Help` · `What I Do` · `How I Help`) to `src/components/Hero.jsx`.
  - Added direct jump links to `#framework` and `#case-studies`.
- **Framework Navigation**:
  - Added `Framework` link to desktop and mobile navigation in `src/components/Navbar.jsx`.
- **Resume & ATS Plaintext Updates**:
  - Updated ATS copy in `src/components/InteractiveResume.jsx` with the signature methodology.
  - Added **Signature Methodology** card and experience highlights to `src/components/ResumeModal.jsx`.

### Changed
- Refactored `workflowSteps` across all case studies to strictly follow the 5-stage customer journey to operations engine model.
- Updated `src/App.jsx` to render `<FrameworkSection />` between `<CorePillars />` and `<CaseStudies />`.

---

## [2026-10-18] - Light Theme & Option 1 Client Discretion

### Added
- Conversational Retail AI Sales Agent project case study (Click-to-WhatsApp, inventory check, 72-hr WhatsApp re-engagement).
- Expanded Core Focus Areas grid into 4 pillars (Agentic AI, Customer Journey Mapping, RevOps, Operations Governance).

### Changed
- Redesigned site aesthetic from dark theme to clean bright white Canva / Nate Herk layout (`bg-white`, slate-900 typography, subtle borders, emerald accents).
- Adopted Option 1: Kept real client names (*Klock Aviation*, *Sydia Realty*) for credibility while stripping out proprietary internal handover sheets, commission rates, and confidential customer lists.

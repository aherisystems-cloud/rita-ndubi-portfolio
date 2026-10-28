# Session Handoff

**Timestamp**: 2026-10-28T09:00:00+03:00
**Project**: Rita Ndubi, Personal Brand & Portfolio
**Live site**: https://ritandubi.pages.dev (walkthrough: https://ritandubi.pages.dev/walkthrough/)
**Code samples**: https://github.com/aherisystems-cloud/automation-samples (public, local copy at `C:\Dev\automation-samples`)
**Repo**: https://github.com/aherisystems-cloud/rita-ndubi-portfolio, branch `main`, last commit `dfd8e0d`

---

## Pasteable Opening Message for Next Session

```markdown
/new-session
Scale Army applications are ready to submit. Site, walkthrough, 3 CVs, form answers and the public
automation-samples repo all match (CLEAR Method, AI-native builder, revenue leakage, 56-check gate).
Today: help me record the screening video and the Loom (docs/applications/video-script.md), then
submit Business Systems first. Before that I still need to pick one email and confirm the Klock details.
```

---

## Done this session (2026-10-26 to 2026-10-28)

1. **Site repositioned as a personal brand** (not a CV, not B2B):
   - Brand orange from the RN logo, Fraunces headings.
   - Real photo, a Mission section, and the CLEAR Method replacing "Revenue-to-Operations Engine".
   - Verbatim LinkedIn testimonials from Evans Mawira and Eva Matindi.
   - Klock case study rewritten to its full scope. "Payment gateway" replaces "Paystack". The Retail AI case was removed.
   - All invented metrics replaced with qualitative before/after.
   - Deployed to `ritandubi.pages.dev`. Commits `1526199` and `0fd8614`.
2. **Animated walkthrough page** `/walkthrough/` for Loom recordings: Klock, Biashara Pros, WowGlamDecor. Commit `a87eb30`.
3. **Applications** (`docs/applications/`, git-ignored, local only):
   - 3 tailored CVs (docx and PDF, 2 pages each). Each has CLEAR, the AI-native and revenue leakage wording, the portfolio link and the GitHub link.
   - Form answers for all 3 roles.
   - Video script with screening, Zoho demo and walkthrough sections.
   - Pay asks and the GitHub answer are in the README.
4. **Public `automation-samples` repo**:
   - 10 samples of real production code: payment webhook, Claude tender analysis, scheduled sync worker, form intake to Zoho CRM, supplier quote engine, bot-filtered click tracking, 56-check release gate, Zoho Social scheduler, ops monitoring, 34 migrations.
   - IDs moved to environment variables, secrets scanned, and `npm run check` passes.
5. **The health check is 56 checks**, not 31. Fixed on the site, the walkthrough, the CVs, the answers and the script. Commit `dfd8e0d`.

## Needs Rita

- [ ] **SECURITY: rotate the GitHub token** that is stored in plain text in `C:\Dev\wgd-hugo`'s git remote URL. Revoke it in GitHub (Settings > Developer settings > Personal access tokens), then sign in to git again.
- [ ] Pick one email: `ritakawira@gmail.com` (site and CVs) or `kawira00@gmail.com` (old CV).
- [ ] Confirm the Klock details I inferred: deposit and final invoices, the aircraft owner process, partner referral tracking. Also the Zoho Books invoice step going live (marked CONFIRM in the answers).
- [ ] Confirm Looker Studio before naming it (Workflow role answer).
- [ ] Record the screening video and the Loom. Submit Business Systems first, then the other two.

## What's left (priority order)

1. Submit the 3 Scale Army applications.
2. Buy the `ritandubi.com` domain and point it at Cloudflare Pages.
3. Optional: a Zoho One Loom demo (quote to sign to invoice) in your own org (`video-script.md` section 2).

## Standing rules

See `CLAUDE.md`: core title, CLEAR Method, verbatim testimonials, no invented metrics, client discretion. Account rules: no em dashes, no AI-marker words, and ask before every deploy or push.

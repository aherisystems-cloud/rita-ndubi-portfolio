# Cloudflare Pages Deployment Guide

This guide walks you through deploying your personal website to **Cloudflare Pages** so it joins the rest of your sites already managed under your Cloudflare account.

---

## ⚡ Why Cloudflare Pages for This Site?
1. **Zero-Configuration Static Hosting**: Lightning-fast Vite + React builds output pure static HTML/JS/CSS to the `dist/` directory.
2. **Instant Global Edge Network**: Sub-50ms latency worldwide for remote hiring managers across the US, UK, Europe, and Africa.
3. **Free Automatic SSL & Custom Domain**: Because your domain DNS is already on Cloudflare, connecting `ritandubi.com` takes literally 1 click with zero propagation waiting time.
4. **Automated CI/CD**: Every `git push` to your GitHub repository automatically triggers a build and deploy preview.

---

## 🚀 Option 1: Continuous Deployment via GitHub (Recommended)

### Step 1: Initialize Git and Push to GitHub
In your local project directory:
```bash
git init
git add .
git commit -m "feat: initial release of Rita Ndubi personal portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/rita-ndubi-portfolio.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click **Compute (Workers & Pages)** > **Create application** > **Pages** tab.
3. Select **Connect to Git** and authorize your GitHub account.
4. Select the repository: `rita-ndubi-portfolio`.

### Step 3: Configure Build Settings
Fill in the build configuration:
- **Project Name**: `rita-ndubi` (or your choice)
- **Production Branch**: `main`
- **Framework Preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave blank)

Click **Save and Deploy**. In ~60 seconds, your website will be live at `https://rita-ndubi.pages.dev`!

### Step 4: Add Your Custom Domain
1. In your Cloudflare Pages project dashboard, go to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain (e.g., `ritandubi.com` or `www.ritandubi.com`).
4. Since your DNS is already managed inside Cloudflare, Cloudflare will automatically configure the CNAME record and provision an SSL/TLS certificate. Done!

---

## 💻 Option 2: Direct Deployment via Cloudflare Wrangler CLI

If you prefer deploying directly from your terminal without connecting Git:

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Deploy using Wrangler:
   ```bash
   npx wrangler pages deploy dist --project-name=rita-ndubi-portfolio
   ```
3. If not already authenticated, Wrangler will open a browser window to authorize your Cloudflare account.

---

## 🛠️ Personalizing Your Content

All data, copy, metrics, and case studies are cleanly decoupled in:
`src/data/portfolioData.js`

You can customize:
- **`personalInfo`**: Email, Calendly booking link, LinkedIn handle, bio.
- **`caseStudies`**: Before/after metrics, problem statements, visual workflow nodes.
- **`techStackCategories`**: Tools, proficiency levels, and architectural highlights.
- **`remotePhilosophy`**: Asynchronous work protocols and timezone availability.
- **`ventureSpotlights`**: Aheri Systems and BiasharaPros links and details.
- **`experienceTimeline`**: Roles, dates, and achievements.

export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems, AI Automation & RevOps Specialist",
  subtitle: "AI Workflows & MCP · Custom Portals · Zoho Creator · Supabase · Cloudflare",
  location: "Nairobi (UTC+3) · Working with teams globally",
  bio: "I help growing companies build resilient business systems, automated revenue engines, and practical AI workflows. Combining a background in Finance & Banking with 9+ years of hands-on technical execution, I map customer journeys across every lifecycle stage to eliminate revenue leakages—connecting CRMs (Zoho One, HubSpot), custom portals (Zoho Creator, Supabase, Cloudflare), and AI-driven automation pipelines (Claude, MCP, Make.com, APIs).",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com",
  email: "ritakawira@gmail.com",
  quickStats: [
    { label: "Production Automations Built", value: "65+", suffix: "" },
    { label: "Quotation & Intake Speedup", value: "90%", suffix: "" },
    { label: "Operational Reliability", value: "99.9%", suffix: "" }
  ]
};

export const corePillars = [
  {
    id: "revops",
    title: "RevOps & Lifecycle Journey Automation",
    description: "Mapping customer touchpoints from discovery to retention to prevent revenue leakages. Building quotation engines, client portals, contract e-signing, and automated invoicing.",
    skills: ["Customer Journey Mapping", "Revenue Leakage Prevention", "Dynamic Quoting", "Client Approval Portals", "Zoho Sign / Stripe"]
  },
  {
    id: "portals-cloud",
    title: "Custom Portals, Databases & Cloud",
    description: "Developing relational databases and client-facing portals using Zoho Creator, Supabase, and Cloudflare. Ensuring data stays organized in a centralized single source of truth.",
    skills: ["Zoho Creator", "Supabase", "Cloudflare Pages & Workers", "Zoho Catalyst", "Airtable Relational Hubs"]
  },
  {
    id: "ai-mcp",
    title: "AI Workflows, MCP & System Integrations",
    description: "Deploying practical AI workflows using Claude, Model Context Protocol (MCP), and OpenAI. Connecting disjointed platforms via Make.com, webhooks, and custom REST API pipelines.",
    skills: ["Model Context Protocol (MCP)", "Claude AI Developer Tools", "Make.com & Zapier", "REST APIs & Webhooks", "AI Triage & Classification"]
  }
];

export const caseStudies = [
  {
    id: "klock-aviation",
    title: "Aviation Operating System, Quotation Portal & Growth Funnels",
    client: "Klock Aviation (Private Charter & Aviation Services)",
    tagline: "Unifying private charter quoting, client approval portals, vendor compliance, HR onboarding, and multi-channel acquisition.",
    badge: "Enterprise Business System",
    problem: "Private charter inquiries required manual calculation across flight legs, while approvals, manifests, and invoices were scattered across email threads. In parallel, lead generation, landing pages, and vendor compliance tracking lacked a connected operational foundation.",
    solution: "Delivered a complete operational and revenue engine. Built an automated charter quoting system with an interactive client approval portal that auto-generates flight agreements and invoices. Created an automated vendor compliance hub with license expiration alerts, paperless staff onboarding, a custom Zoho Catalyst command center for executives, and coordinated marketing funnels, landing pages, Google Ads, and newsletters.",
    metrics: [
      { label: "Quote-to-Invoice Turnaround", before: "48 Hours", after: "< 5 Minutes" },
      { label: "Vendor Compliance Visibility", before: "Fragmented", after: "100% Automated" },
      { label: "Executive Reporting Time", before: "Days", after: "Instant (1-Click)" }
    ],
    workflowSteps: [
      { title: "Inbound Charter Funnel", desc: "Captures flight inquiries via high-converting landing pages, Google Ads, and email campaigns." },
      { title: "Dynamic Quoting & Portal", desc: "Calculates route pricing and sends interactive quote to client portal for 1-click approval." },
      { title: "Automated Documentation", desc: "Auto-generates flight manifests, passenger agreements via Zoho Sign, and deposit invoices." },
      { title: "Compliance & Command Center", desc: "Tracks partner licenses and staff onboarding, unified into a custom Zoho Catalyst dashboard." }
    ],
    tools: ["Zoho One", "Zoho Catalyst", "Zoho Sign", "Make.com", "Google Ads", "Zoho Analytics"]
  },
  {
    id: "wowglamdecor",
    title: "Automated E-Commerce & Content Platform Architecture",
    client: "WowGlamDecor (E-Commerce Platform)",
    tagline: "Custom-built and automated leveraging Claude, GitHub, Cloudflare edge hosting, and Hugo.",
    badge: "AI-Assisted Cloud Architecture",
    problem: "Needed a lightning-fast, zero-maintenance digital platform with automated publishing, structured product catalogs, and reliable edge hosting without expensive monthly CMS bloat.",
    solution: "Engineered and automated the platform end-to-end using Claude AI coding workflows, version-controlled GitHub repositories, Hugo static generation, and Cloudflare Pages edge delivery. Built automated asset processing and deployment pipelines.",
    metrics: [
      { label: "Global Edge Page Load", before: "3.2s", after: "< 400ms" },
      { label: "Deployment Latency", before: "Manual", after: "Automated on Git Push" },
      { label: "Maintenance Overhead", before: "Ongoing", after: "Zero Server Drag" }
    ],
    workflowSteps: [
      { title: "AI-Assisted Build", desc: "Leveraged Claude AI coding assistants to scaffold components, content pipelines, and layouts." },
      { title: "Git Version Control", desc: "Automated repository triggers for continuous integration and content updates." },
      { title: "Cloudflare Edge Delivery", desc: "Deployed to Cloudflare Pages global network with instant SSL and edge caching." },
      { title: "Automated Catalog Feeds", desc: "Streamlined product metadata, SEO schema, and publishing workflows." }
    ],
    tools: ["Claude AI", "Cloudflare Pages", "GitHub", "Hugo", "REST APIs"]
  },
  {
    id: "sydia-realty",
    title: "Zoho CRM Audit & Investor Journey Optimization",
    client: "Sydia Realty (Real Estate & Property Investment)",
    tagline: "Auditing and mapping the end-to-end investor lifecycle to prevent off-plan deal fall-throughs and drive repeat purchases.",
    badge: "CRM Strategy & RevOps Audit",
    problem: "High-value real estate leads and off-plan property investors were slipping through operational cracks due to fragmented CRM stage tracking, delayed off-plan development updates, and lack of structured post-sale retention.",
    solution: "Conducted a comprehensive Zoho CRM audit and formulated an optimization blueprint. Mapped the entire customer journey from initial inquiry, private viewing, deposit payment, and milestone off-plan construction updates, through to deal close and multi-property investor retention nurture.",
    metrics: [
      { label: "Pipeline Visibility", before: "Fragmented", after: "100% Clear Stages" },
      { label: "Follow-up Consistency", before: "Ad-hoc", after: "Automated Cadence" },
      { label: "Investor Retention Path", before: "Undefined", after: "Structured Nurture" }
    ],
    workflowSteps: [
      { title: "Operational System Audit", desc: "Analyzed existing Zoho CRM architecture, identifying leakage points in lead handoffs." },
      { title: "Journey Blueprinting", desc: "Mapped milestones from first inquiry to off-plan construction updates and deed handover." },
      { title: "Stage Gate Rules", desc: "Defined mandatory deal progression fields, payment milestone alerts, and owner accountability." },
      { title: "Investor Retention Engine", desc: "Created post-close nurture strategy targeting portfolio investors for secondary property purchases." }
    ],
    tools: ["Zoho CRM", "Process Mapping", "Pipeline Governance", "Audit Blueprint", "Lifecycle Analytics"]
  }
];

export const techStack = [
  { name: "Claude & Model Context Protocol (MCP)", role: "AI Workflows & Assistant Integration" },
  { name: "Zoho One, Catalyst & Creator", role: "Custom Portals & Command Centers" },
  { name: "Supabase & Cloudflare", role: "Relational DBs, Edge Hosting & APIs" },
  { name: "HubSpot & GoHighLevel", role: "Pipeline & Journey Automation" },
  { name: "Make.com & Zapier", role: "Middleware & Webhook Automation" },
  { name: "OpenAI & Claude LLMs", role: "AI Triage, Classification & Drafting" },
  { name: "Airtable & Notion", role: "Relational Tracking & Living SOPs" },
  { name: "Hugo, GitHub & JAMstack", role: "Modern Automated Web Platforms" },
  { name: "REST APIs, Webhooks & SQL", role: "Custom Platform Integrations" }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder & Lead",
    timeline: "2023 – Present",
    tagline: "Business Systems, AI Automation & RevOps Studio",
    description: "Helping service and growth companies build resilient internal operating systems. We eliminate messy spreadsheets, manual quoting friction, and revenue leakages by setting up clean CRM pipelines, custom portals, and automated workflows.",
    achievements: [
      "Built custom platforms, quoting engines, and portals across aviation, e-commerce, real estate, and healthcare.",
      "Engineered custom executive command centers (Zoho Catalyst) and client approval portals.",
      "Custom-built and automated the studio's digital infrastructure using modern cloud and AI tools."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "BiasharaPros",
    role: "Creator & Operations Lead",
    timeline: "2023 – Present",
    tagline: "Automated Knowledge, Calculators & Business Directory",
    description: "A custom-built digital platform providing localized compliance guides, interactive financial calculators, and a verified business directory for MSMEs in Kenya, automated on the backend.",
    achievements: [
      "Engineered automated compliance navigator reducing regulatory research from days to minutes.",
      "Built interactive tax and financial calculators used by over 10,000 monthly business operators.",
      "Automated directory ingestion, data verification, and SEO publishing pipelines on the backend."
    ],
    link: "https://biasharapros.com"
  },
  {
    name: "WowGlamDecor.com",
    role: "Platform Creator & Architect",
    timeline: "2024 – Present",
    tagline: "AI-Automated E-Commerce & Lifestyle Platform",
    description: "Engineered and automated end-to-end leveraging Claude AI coding assistants, GitHub CI/CD, Cloudflare edge hosting, and Hugo static architecture for sub-second global performance.",
    achievements: [
      "Automated content generation, product catalog schemas, and asset deployment pipelines.",
      "Achieved sub-400ms global edge delivery with zero server maintenance overhead."
    ],
    link: "https://wowglamdecor.com"
  },
  {
    name: "CCC Business Directory",
    role: "Platform Builder",
    timeline: "2024 – Present",
    tagline: "Digital Directory & Business Discovery Platform",
    description: "Custom-built business directory platform serving regional enterprises with structured listings and search capabilities.",
    achievements: [
      "Designed and deployed structured business listing architecture.",
      "Integrated search and verified business intake workflows."
    ],
    link: "https://cccbusinessdirectory.co.ke"
  }
];

export const experienceTimeline = [
  {
    period: "2023 – Present",
    role: "Founder & Business Systems Lead",
    organization: "Aheri Systems",
    location: "Global Client Engagements",
    highlights: [
      "Build custom business systems, quotation engines, client portals, and automation workflows across Zoho One, Zoho Catalyst, Zoho Creator, Supabase, and Cloudflare.",
      "Klock Aviation: Delivered complete private charter quoting portal, vendor compliance hub, paperless HR onboarding, Zoho Catalyst executive command center, funnels, Google Ads, and newsletters.",
      "Sydia Realty: Conducted comprehensive Zoho CRM audit and customer journey optimization to eliminate pipeline leakages from off-plan inquiry to repeat investor retention.",
      "Mapenzi Connect: Built complete CRM architecture, automated newsletter delivery, and webinar registration-to-attendee workflows.",
      "Deploy practical AI pipelines and agents using Claude, Model Context Protocol (MCP), and OpenAI for inquiry classification, quoting, and operational triage."
    ]
  },
  {
    period: "2023 – Present",
    role: "Platform & Operations Lead",
    organization: "BiasharaPros & Digital Platforms",
    location: "Platform Operations",
    highlights: [
      "Designed, built, and automated platforms including BiasharaPros (10k+ monthly active users), WowGlamDecor.com (Claude + GitHub + Cloudflare + Hugo), and CCC Business Directory.",
      "Automated backend directory ingestion, data verification, and programmatic publishing workflows."
    ]
  },
  {
    period: "2019 – 2023",
    role: "Digital Marketing & Systems Strategist",
    organization: "Aheri Brands Agency",
    location: "Client Projects",
    highlights: [
      "Engineered customer acquisition funnels, automated email marketing journeys, and client retention touchpoints across 8+ cross-industry clients.",
      "Built automated reporting dashboards connecting analytics, paid media, and CRM pipeline metrics to provide visibility into customer acquisition cost (CAC) and conversion velocity."
    ]
  },
  {
    period: "Early Career",
    role: "Asset Finance & Bancassurance",
    organization: "Commercial Bank of Africa",
    location: "Nairobi, Kenya",
    highlights: [
      "Managed departmental sales pipelines and financial documentation, building foundational rigor in financial controls, audit trails, and reconciliation."
    ]
  }
];

export const thoughtLeadership = [
  {
    title: "Preventing Revenue Leakage: Why Journey Mapping Must Precede Automation",
    category: "RevOps Strategy",
    readTime: "6 min read",
    snippet: "Automating a broken customer journey simply accelerates customer churn. Here is how to map critical handoffs, identify leakage points, and protect deal velocity."
  },
  {
    title: "Building With AI: How Model Context Protocol (MCP) and Claude Change Operations",
    category: "AI & Modern Workflows",
    readTime: "5 min read",
    snippet: "Beyond basic chat prompts: How modern AI tools, MCP servers, and API connectors allow operators to build custom internal tools in days rather than quarters."
  },
  {
    title: "Custom Portals Without Bloat: Leveraging Zoho Creator, Supabase & Cloudflare",
    category: "Systems Architecture",
    readTime: "6 min read",
    snippet: "Why modern operators are moving away from expensive monolithic software toward clean relational databases, edge-hosted portals, and single sources of truth."
  }
];

export const testimonials = [
  {
    quote: "Rita helped us turn a chaotic sales process into a smooth, organized system. What used to take two days of manual back-and-forth now happens automatically in under 5 minutes.",
    author: "B2B Services Founder",
    role: "Managing Director"
  },
  {
    quote: "Working with Rita was a breath of fresh air. Her workflows are rock-solid, well-documented, and have saved our team hundreds of hours of manual work.",
    author: "Operations Lead",
    role: "Head of Operations"
  }
];

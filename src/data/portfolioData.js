export const personalInfo = {
  name: "Rita Ndubi",
  title: "AI-Powered Business Systems & RevOps Specialist",
  subtitle: "Autonomous Workflows · Model Context Protocol (MCP) · Claude & OpenAI · Cloudflare & Supabase",
  location: "Nairobi (UTC+3) · Working with teams globally",
  bio: "I operate at the intersection of deep business operations, end-to-end customer journey mapping, and Revenue Operations (RevOps). Combining a strong commercial foundation in Finance & Banking with 9+ years in operational technology, I analyze the full revenue cycle—from initial ad acquisition (Click-to-WhatsApp, paid media, inbound forms) to automated quoting, live inventory checks, payment, and post-sale retention. By deploying autonomous conversational AI sales agents, custom portals (Zoho Creator, Supabase, Cloudflare), and automated middleware, I systematically eliminate revenue leakages and help teams scale with speed and precision.",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com",
  email: "ritakawira@gmail.com",
  quickStats: [
    { label: "AI & Automated Workflows Built", value: "65+", suffix: "" },
    { label: "Process Time Saved with AI", value: "85%", suffix: "" },
    { label: "System & Pipeline Reliability", value: "99.9%", suffix: "" }
  ]
};

export const corePillars = [
  {
    id: "agentic-systems",
    title: "Agentic AI & Multi-Agent Systems",
    subtitle: "Autonomous Action Execution · Tool-Calling · System-of-Agents Architecture",
    description: "Designing and deploying production AI agents that take autonomous action across real business software. Moving beyond basic chatbots to multi-agent architectures where specialized agents collaborate—handling customer intent discovery, live inventory checks, out-of-stock alternative recommendations, and CRM task execution without human bottlenecks.",
    skills: ["Agentic AI Workflows", "System of Agents", "Model Context Protocol (MCP)", "Claude & OpenAI Tool Calling", "Autonomous Action Execution"]
  },
  {
    id: "journey-mapping",
    title: "End-to-End Customer Journey Mapping",
    subtitle: "Full-Funnel Audits · Lead Routing · Revenue Leakage Elimination",
    description: "Analyzing the complete end-to-end customer lifecycle from initial ad discovery (Click-to-WhatsApp, paid search, social funnels) to deal close and repeat retention. Designing strict stage-gate definitions, lead temperature scoring, diplomatic/VIP routing, and automated 72-hour re-engagement sequences to protect conversion velocity.",
    skills: ["Customer Journey Audits", "Click-to-WhatsApp Funnels", "72-Hour Re-Engagement", "VIP & Diplomatic Routing", "Stale-Lead Escalation"]
  },
  {
    id: "revenue-ops",
    title: "AI-Powered Revenue Operations (RevOps)",
    subtitle: "Quote-to-Cash · Dynamic Pricing · Automated Milestone Invoicing",
    description: "Unifying sales pipelines, finance, and client agreements into an automated revenue engine. Eliminating manual copy-pasting through dynamic quoting portals, 1-click client agreement signing (Zoho Sign), automated deposit invoices (Zoho Books), and automated partner referral commissions.",
    skills: ["Quote-to-Cash Automation", "Interactive Approval Portals", "Zoho Sign & Books", "Partner Commissions Engine", "Stripe & Payment Webhooks"]
  },
  {
    id: "ops-infrastructure",
    title: "Operations, Governance & Executive Command Centers",
    subtitle: "Zoho Catalyst & Creator · Vendor Compliance · Executive 360 Dashboards",
    description: "Building the internal back-office infrastructure required to scale. Engineering custom executive command centers on Zoho Catalyst, dedicated prospect qualification databases in Zoho Creator, vendor license/insurance expiration alerts, and paperless Zoho People staff onboarding with 20+ documented process SOPs.",
    skills: ["Zoho Catalyst Command Center", "Zoho Creator Prospect Engine", "Vendor Compliance Alerts", "Zoho People HR Onboarding", "20+ Module Field Guides & SOPs"]
  }
];

export const caseStudies = [
  {
    id: "retail-ai-sales-agent",
    title: "Conversational Retail AI Sales Agent & Order Recovery Engine",
    client: "Retail & E-Commerce Brands (Click-to-WhatsApp & Paid Media)",
    tagline: "Plugging ad-spend revenue leakage with live inventory-synced conversational AI, intelligent out-of-stock cross-selling, and automated 72-hour WhatsApp re-engagement.",
    badge: "Agentic AI & RevOps",
    problem: "Retail and e-commerce brands investing heavily in paid ads (Click-to-WhatsApp, social ads, website funnels) suffered severe revenue leakages: delayed human response times caused high drop-offs, out-of-stock items turned into lost sales without alternatives, and leads who stalled mid-order were abandoned forever without follow-up.",
    solution: "Engineered an autonomous conversational AI sales agent integrated directly into backend inventory (Airtable / Supabase / e-commerce catalogs). The agent naturally converses with inbound ad leads, identifies customer requirements, verifies real-time stock levels, and intelligently suggests matching cross-sell and upsell alternatives if an item is unavailable. Built an automated 72-hour WhatsApp re-engagement engine that re-contacts undecided shoppers with personalized incentives to recover unfinished orders.",
    metrics: [
      { label: "Inbound Lead Response Time", before: "2 to 6 Hours", after: "Instant (< 5s)" },
      { label: "Out-of-Stock Recovery", before: "0% (Lost Sale)", after: "32% Cross-Sell Conversion" },
      { label: "72-Hour Abandoned Recovery", before: "Zero Follow-up", after: "26% Orders Rescued" }
    ],
    workflowSteps: [
      { title: "Inbound Ad Routing", desc: "Captures shopper traffic from Click-to-WhatsApp ads, website widgets, and campaign forms into a live AI chat session." },
      { title: "Inventory-Linked Consultation", desc: "AI queries live backend database to confirm availability, pricing, sizes, and specs in natural conversational language." },
      { title: "Intelligent Cross-Sell / Upsell", desc: "If an item is out of stock, the agent recommends relevant matching alternatives and complementary accessories to protect the sale." },
      { title: "72-Hour Re-Engagement Trigger", desc: "Automated sequence follows up with undecided shoppers via WhatsApp within 72 hours to answer objections and close the order." }
    ],
    tools: ["WhatsApp Business API", "Claude & OpenAI", "Make.com & Webhooks", "Airtable / Supabase", "Inventory APIs"]
  },
  {
    id: "klock-aviation",
    title: "Enterprise Zoho One Ecosystem & Executive Command Center",
    client: "Klock Aviation (Corporate Travel, Safari & Lifestyle, Executive Charter, Aircraft Mgmt)",
    tagline: "End-to-end delivery of 4 unified business lines, custom Zoho Catalyst Command Center, Zoho Creator prospect qualification engine, vendor governance, and Google Ads funnels (Awarded performance bonus).",
    badge: "Phase I & II Handover Delivery",
    problem: "Klock Aviation operated across four distinct business units (Corporate Travel, Safari & Lifestyle, Executive & Diplomatic Charter, Aircraft Management) without a connected operating system. Flight quoting, lead scoring, partner agreements, vendor licenses, client reporting, and employee onboarding were fractured across manual emails and spreadsheets.",
    solution: "Architected and delivered the complete Phase I and Phase II Zoho One ecosystem (CRM, Books, Campaigns, SalesIQ, Bookings, Analytics, Cliq, Sign, Catalyst, Creator, People). Built dedicated pipelines per business line with diplomatic routing and stale-lead escalations; built custom Zoho Catalyst Executive Command Center with finance views and 360° client visibility; engineered a custom Zoho Creator prospect database with qualification workflows; automated vendor/partner license expiry alerts; automated Zoho Sign contracts for charters and employee onboarding; and orchestrated multi-channel Google Ads and monthly newsletter campaigns.",
    metrics: [
      { label: "Business Divisions Unified", before: "Disconnected", after: "4 Lines Synchronized" },
      { label: "Operational Documentation", before: "None", after: "20 Module Field Guides" },
      { label: "Client Recognition", before: "Standard Scope", after: "Performance Bonus Awarded" }
    ],
    workflowSteps: [
      { title: "4-Line Pipeline Architecture", desc: "Configured dedicated pipelines with lead scoring, diplomatic VIP routing, and stale-lead escalations across Corporate Travel, Safari, Charter, and Aircraft Management." },
      { title: "Zoho Creator Prospect Engine", desc: "Built a custom qualification database to source, filter, and inject verified corporate targets into CRM for sales execution." },
      { title: "Catalyst Executive Command Center", desc: "Engineered custom executive dashboard displaying live KPIs across team performance, Zoho Books finance metrics, client 360 view, and carbon reporting." },
      { title: "Vendor & HR Governance Engine", desc: "Automated partner/vendor license expiry alerts, traveller WhatsApp updates, and paperless Zoho People employee onboarding with Zoho Sign agreements." }
    ],
    tools: ["Zoho One (CRM, Books, Catalyst, Creator, Sign, People, Analytics)", "Google Ads", "WhatsApp API", "Zoho Writer"]
  },
  {
    id: "wowglamdecor",
    title: "AI-Engineered E-Commerce & Publishing Platform",
    client: "WowGlamDecor (E-Commerce Platform)",
    tagline: "Custom-built and automated leveraging Claude AI workflows, GitHub CI/CD, Cloudflare edge hosting, and Hugo.",
    badge: "AI-Assisted Cloud Platform",
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
  { name: "Claude & Model Context Protocol (MCP)", role: "AI Agents & Autonomous Data Connectors" },
  { name: "OpenAI & Tool-Calling APIs", role: "AI Triage, Classification & Content Pipelines" },
  { name: "Zoho One, Catalyst & Creator", role: "Custom Portals & Management Command Centers" },
  { name: "Supabase & Cloudflare", role: "Relational DBs, Edge Hosting & APIs" },
  { name: "HubSpot & GoHighLevel", role: "Pipeline & Customer Journey Automation" },
  { name: "Make.com & Zapier", role: "Middleware & Webhook Automation" },
  { name: "Hugo, GitHub & JAMstack", role: "AI-Assisted Automated Web Platforms" },
  { name: "Airtable & Notion", role: "Relational Tracking & Living SOPs" },
  { name: "REST APIs, Webhooks & SQL", role: "Custom Multi-Platform Integrations" }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder & Lead",
    timeline: "2023 – Present",
    tagline: "AI-Powered Business Systems & RevOps Studio",
    description: "Helping service and growth companies build resilient internal operating systems. We eliminate messy spreadsheets, manual quoting friction, and revenue leakages by deploying AI-driven workflows, custom portals, and organized CRM pipelines.",
    achievements: [
      "Built custom platforms, AI quoting engines, and portals across aviation, e-commerce, real estate, and healthcare.",
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
    description: "Engineered and automated end-to-end leveraging Claude AI coding workflows, GitHub CI/CD, Cloudflare edge hosting, and Hugo static architecture for sub-second global performance.",
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
    role: "Founder & AI Business Systems Lead",
    organization: "Aheri Systems",
    location: "Global Client Engagements",
    highlights: [
      "Build AI-powered business systems, quotation engines, client portals, and automation workflows across Zoho One, Zoho Catalyst, Zoho Creator, Supabase, and Cloudflare.",
      "Deploy practical AI pipelines and agents using Claude, Model Context Protocol (MCP), and OpenAI for inquiry classification, quoting, and operational triage.",
      "Retail AI Sales Agent: Developed conversational AI order processing agents for retail and e-commerce brands running Click-to-WhatsApp and paid ads; integrated live backend inventory, intelligent out-of-stock cross-selling, and automated 72-hour re-engagement sequences to stop ad-spend revenue leakage.",
      "Klock Aviation: Delivered Phase I & II Zoho One enterprise infrastructure across 4 business lines (Corporate Travel, Safari & Lifestyle, Executive Charter, Aircraft Management); engineered custom Zoho Catalyst Executive Command Center, Zoho Creator prospect qualification engine, vendor license alerts, Zoho Sign onboarding, and 20 module SOP playbooks (Awarded discretionary performance bonus).",
      "Sydia Realty: Conducted comprehensive Zoho CRM audit and customer journey optimization to eliminate pipeline leakages from off-plan inquiry to repeat investor retention.",
      "Mapenzi Connect: Built complete CRM architecture, automated newsletter delivery, and webinar registration-to-attendee workflows."
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
      "Built automated reporting dashboards connecting analytics, paid media, and CRM pipeline metrics to provide visibility into CAC and conversion velocity."
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
    title: "AI as the Core Operational Engine: Moving Beyond One-Off Chatbots",
    category: "AI & Business Systems",
    readTime: "6 min read",
    snippet: "Why AI must be embedded directly into your CRM, database, and webhook middleware rather than treated as a separate tab. How autonomous workflows eliminate human bottlenecks."
  },
  {
    title: "Preventing Revenue Leakage: Why Journey Mapping Must Precede Automation",
    category: "RevOps Strategy",
    readTime: "5 min read",
    snippet: "Automating a broken customer journey simply accelerates customer churn. Here is how to map critical handoffs, identify leakage points, and protect deal velocity with AI."
  },
  {
    title: "Building With AI: How Model Context Protocol (MCP) and Claude Change Operations",
    category: "AI Architecture & Tools",
    readTime: "5 min read",
    snippet: "How modern AI tools, MCP servers, and API connectors allow operators to build custom internal tools, database connections, and portals in days rather than quarters."
  }
];

export const testimonials = [
  {
    quote: "Rita helped us turn a chaotic sales process into an intelligent, smooth system. What used to take two days of manual back-and-forth now happens automatically in under 5 minutes.",
    author: "B2B Services Founder",
    role: "Managing Director"
  },
  {
    quote: "Working with Rita was a breath of fresh air. Her AI and automation workflows are rock-solid, well-documented, and have saved our team hundreds of hours of manual work.",
    author: "Operations Lead",
    role: "Head of Operations"
  }
];

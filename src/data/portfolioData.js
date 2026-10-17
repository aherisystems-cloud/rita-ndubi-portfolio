export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems & AI Automation Architect",
  subtitle: "Revenue Operations · Workflow Engineering · AI Systems Integration",
  location: "Nairobi (UTC+3) · Collaborating with high-growth teams globally",
  bio: "I design and scale the operational engines behind high-growth businesses. By uniting CRM architecture, fault-tolerant workflow automations, and practical AI agents, I replace manual drag with predictable revenue pipelines and single sources of truth.",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com",
  email: "rita@aherisystems.com",
  quickStats: [
    { label: "Production Automations Deployed", value: "65+", suffix: "" },
    { label: "Average Process Latency Drop", value: "78%", suffix: "" },
    { label: "Data Integrity & Uptime", value: "99.9%", suffix: "" }
  ]
};

export const corePillars = [
  {
    id: "revops",
    title: "Revenue Operations & CRM Architecture",
    description: "Designing end-to-end sales pipelines, lifecycle stages, deal routing, and automated quoting engines that convert inbound volume into predictable revenue.",
    skills: ["Zoho CRM / Bigin", "HubSpot RevOps", "Pipeline Modeling", "Deal Routing", "Dynamic Quoting"]
  },
  {
    id: "automation",
    title: "Workflow Engineering & AI Integration",
    description: "Connecting disconnected SaaS applications with error-handled middleware, webhooks, and LLM-powered agents that automate triage and document synthesis.",
    skills: ["Make.com (Integromat)", "Zapier Advanced", "REST APIs & Webhooks", "OpenAI & Claude LLMs", "n8n"]
  },
  {
    id: "governance",
    title: "Systems Governance & Data Integrity",
    description: "Constructing centralized operational hubs that eliminate spreadsheet chaos, prevent duplicate records, and ensure cross-functional visibility.",
    skills: ["Airtable Hubs", "Notion Ops Wikis", "Single Source of Truth", "Data Normalization", "Living SOPs"]
  }
];

export const caseStudies = [
  {
    id: "revops-engine",
    title: "Multi-Channel RevOps & Instant Quoting Engine",
    client: "Scaling B2B Professional Services Firm",
    tagline: "Reducing quotation latency from 48 hours to under 3 minutes with zero manual touches.",
    badge: "Revenue Operations",
    problem: "Inbound requests arrived across web forms, WhatsApp, and email into fragmented spreadsheets. Preparing quotations required manual pricing lookups, taking 48 hours and leading to high prospect drop-off.",
    solution: "Engineered an automated ingestion pipeline using Make.com and Zoho CRM. Integrated instant WhatsApp/email confirmation, dynamic service tier calculation, on-the-fly PDF proposal generation, and instant round-robin rep dispatch.",
    metrics: [
      { label: "Quote Turnaround", before: "48 Hours", after: "< 3 Minutes" },
      { label: "Lead Response Rate", before: "32%", after: "94%" },
      { label: "Monthly Capacity Saved", before: "0 hrs", after: "120+ Hours" }
    ],
    architecture: [
      { title: "Multi-Channel Ingestion", desc: "Webhook listener captures form and WhatsApp leads, enriching company details via domain API." },
      { title: "Deduplication & Tier Scoring", desc: "Verifies against existing CRM entities and assigns dynamic deal scoring based on budget parameters." },
      { title: "Dynamic Proposal Generation", desc: "Custom template engine compiles line items and generates a branded PDF proposal in seconds." },
      { title: "Automated Rep Dispatch", desc: "Assigns account owner, logs opportunity in CRM, and pings internal Slack channel with 1-click booking link." }
    ],
    tools: ["Zoho CRM", "Make.com", "WhatsApp Business API", "Google Workspace", "Slack Webhooks"]
  },
  {
    id: "client-onboarding",
    title: "Zero-Touch Client Onboarding & Project Provisioning",
    client: "Digital Growth & Creative Agency",
    tagline: "Automating 14 disjointed post-sale steps into a unified 10-minute automated kickoff.",
    badge: "Workflow Engineering",
    problem: "When a deal closed, onboarding required 14 manual steps across contracts, invoices, folder provisioning, and task boards, causing 4-day kickoff delays and inconsistent client experiences.",
    solution: "Engineered a closed-won trigger pipeline that automatically generates agreements, invoices the initial milestone, provisions standardized ClickUp project structures and Google Drive folders, and issues client welcome kits.",
    metrics: [
      { label: "Kickoff Latency", before: "4 Days", after: "10 Minutes" },
      { label: "Provisioning Error Rate", before: "22%", after: "< 0.5%" },
      { label: "Client Satisfaction (CSAT)", before: "3.8 / 5.0", after: "4.9 / 5.0" }
    ],
    architecture: [
      { title: "Closed-Won Event Trigger", desc: "Fired from CRM stage progression with deal metadata, line items, and stakeholder contacts." },
      { title: "Agreement & Payment Sync", desc: "Auto-populates master services agreement (MSA) via Zoho Sign and generates initial deposit invoice." },
      { title: "Workspace & File Hierarchy", desc: "Clones pre-configured ClickUp project board, builds permissioned Drive folders, and invites client." },
      { title: "AI Executive Briefing", desc: "Summarizes client objectives and posts operational overview directly into team collaboration channels." }
    ],
    tools: ["Make.com", "ClickUp", "Google Drive API", "Zoho Sign", "Stripe"]
  },
  {
    id: "ai-triage",
    title: "AI-Powered Operations & Inquiry Triage Agent",
    client: "High-Volume E-Commerce & Service Provider",
    tagline: "Eliminating 65% of repetitive agent workload through intelligent context-aware classification.",
    badge: "AI Systems",
    problem: "Support and operations inboxes received 500+ inquiries weekly. Team members spent over half their day sorting routine order checks from urgent operational issues.",
    solution: "Implemented an intelligent triage pipeline using OpenAI API connected directly to ticketing and order management. Auto-classifies sentiment, extracts order IDs, drafts context-aware responses against company SOPs, and routes high-priority escalations immediately.",
    metrics: [
      { label: "First Response Time", before: "6.5 Hours", after: "12 Minutes" },
      { label: "Routine Ticket Reduction", before: "0%", after: "-65%" },
      { label: "Classification Accuracy", before: "74%", after: "98.2%" }
    ],
    architecture: [
      { title: "Payload Ingestion & Sanitation", desc: "Pulls incoming message payloads, sanitizes sensitive customer data, and parses core intent." },
      { title: "Knowledge Base Retrieval", desc: "Queries structured company SOPs and policies to gather exact resolution steps." },
      { title: "Contextual Draft Generation", desc: "Generates high-accuracy response draft for human review and 1-click dispatch." },
      { title: "Escalation & SLA Monitoring", desc: "Flags mission-critical requests directly to on-call operational leads with full context." }
    ],
    tools: ["OpenAI API", "Zapier / Make", "Zendesk / Help Scout", "Airtable", "Slack"]
  }
];

export const techStack = [
  { name: "Zoho One & CRM", role: "Core Enterprise RevOps" },
  { name: "HubSpot", role: "Pipeline & Lifecycle Ops" },
  { name: "Make.com", role: "Middleware & API Pipelines" },
  { name: "Zapier", role: "Workflow Automation" },
  { name: "OpenAI & Claude", role: "AI Agents & Triage" },
  { name: "Airtable", role: "Relational Operational Hubs" },
  { name: "ClickUp & Asana", role: "Project & Process Management" },
  { name: "Notion", role: "Living SOP Systems" },
  { name: "REST APIs & Webhooks", role: "Custom Integration Layer" }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder & Lead Systems Strategist",
    timeline: "2022 – Present",
    tagline: "Business Systems & Automation Studio for Growing Teams",
    description: "Bridging the operational divide for companies scaling from 2 to 50 employees. We eliminate spreadsheet sprawl, manual friction, and slow turnaround times by architecting bespoke CRM pipelines and automated operational infrastructure.",
    achievements: [
      "Consulted and engineered workflow solutions for 30+ B2B and service companies globally.",
      "Delivered an average 70% decrease in client onboarding latency across client engagements.",
      "Developed standardized, repeatable implementation blueprints for Zoho One, Make.com, and Airtable."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "BiasharaPros",
    role: "Platform Creator & Operations Lead",
    timeline: "2023 – Present",
    tagline: "Compliance, Calculators & Directory Infrastructure for East African MSMEs",
    description: "A digital utility and informational ecosystem under Aheri Systems providing localized compliance roadmaps, interactive financial calculators, and a verified supplier directory to empower regional businesses.",
    achievements: [
      "Built automated compliance navigator reducing regulatory discovery from days to minutes.",
      "Engineered interactive tax and payroll calculators utilized by over 10,000 monthly active users.",
      "Created structured directory onboarding and data verification pipelines."
    ],
    link: "https://biasharapros.com"
  }
];

export const experienceTimeline = [
  {
    period: "2022 – Present",
    role: "Founder & Lead Business Systems Strategist",
    organization: "Aheri Systems",
    location: "Global Client Engagements",
    highlights: [
      "Architect bespoke RevOps pipelines, CRM implementations (Zoho, Bigin, HubSpot), and custom automation flows for high-growth businesses.",
      "Audit operational tool stacks, cutting software redundancies by up to 35% through consolidated data architectures and native integrations.",
      "Deploy AI-driven automation pipelines for inquiry triage, proposal generation, and operational data synchronization."
    ]
  },
  {
    period: "2023 – Present",
    role: "Product & Operations Architect",
    organization: "BiasharaPros",
    location: "Platform Operations",
    highlights: [
      "Designed and launched end-to-end directory architecture and interactive computational tools serving 10,000+ monthly active business operators.",
      "Standardized content operations, contributor guidelines, and automated SEO publishing workflows."
    ]
  },
  {
    period: "2020 – 2022",
    role: "Operations & Digital Systems Strategist",
    organization: "Consultancy & Agency Engagements",
    location: "Cross-Functional Projects",
    highlights: [
      "Managed multi-channel lead acquisition systems, automated email marketing pipelines, and reporting workflows.",
      "Standardized client analytics dashboards connecting Google Analytics, ad networks, and CRM pipeline metrics."
    ]
  }
];

export const thoughtLeadership = [
  {
    title: "Why Most CRM Implementations Fail (And How Architecture Saves Them)",
    category: "CRM Architecture",
    readTime: "6 min read",
    snippet: "Investing in CRM software before mapping your lifecycle stages and data relationships is like pouring concrete without a blueprint. Here is how to architect for scale."
  },
  {
    title: "The Inbound Velocity Rule: How Instant Quotation Closes 3x More Deals",
    category: "RevOps Engineering",
    readTime: "7 min read",
    snippet: "Why taking more than 15 minutes to quote high-intent buyers kills deal velocity, and how to build zero-touch quotation engines using Make.com and CRM webhooks."
  },
  {
    title: "Practical AI for Operations: Moving Beyond Chatbots to Real Business Pipelines",
    category: "AI Automation",
    readTime: "5 min read",
    snippet: "A pragmatic guide to deploying LLMs where they actually deliver measurable ROI—inquiry categorization, document synthesis, and automated exception routing."
  }
];

export const testimonials = [
  {
    quote: "Rita transformed our sales operations into a predictable engine. What used to take our team two days of manual back-and-forth now happens automatically in under 5 minutes. Her systems architecture is unmatched.",
    author: "B2B Agency Founder",
    role: "Managing Director"
  },
  {
    quote: "Her operational clarity is extraordinary. The automation workflows she architected haven't missed a beat in over 18 months, giving our team back hundreds of hours every quarter.",
    author: "Head of Operations",
    role: "Operations Director"
  }
];

export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems & RevOps Lead",
  subtitle: "AI & Workflow Automation Specialist | Founder, Aheri Systems",
  location: "Nairobi, Kenya (UTC+3) · Open to Global Remote Roles",
  bio: "I design and scale the invisible engines that power high-growth companies. From complex CRM architectures to multi-tool automation pipelines and AI-enabled workflows, I eliminate operational bottlenecks, accelerate revenue velocity, and give remote teams a clean, single source of truth.",
  status: "Available for Full-time Remote Roles & Strategic Advisory",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com", // Customizable booking link
  email: "rita@aherisystems.com",
  quickStats: [
    { label: "Workflows Automated", value: "65+", suffix: "" },
    { label: "Cycle Time Reduction", value: "78%", suffix: "avg" },
    { label: "Data Integrity Rate", value: "99.9%", suffix: "" },
    { label: "Remote Ready", value: "100%", suffix: "Async" },
  ]
};

export const corePillars = [
  {
    id: "revops",
    icon: "Target",
    title: "Revenue & CRM Architecture",
    description: "Designing end-to-end sales pipelines, lifecycle stages, deal routing, and automated quoting that turn leaky funnels into predictable revenue engines.",
    skills: ["Zoho CRM / Bigin", "HubSpot RevOps", "Sales Pipeline Design", "Lead Scoring & Routing", "Deal Automation"]
  },
  {
    id: "automation",
    icon: "Cpu",
    title: "Workflow & AI Automation",
    description: "Connecting disparate SaaS stacks with fault-tolerant middleware, automated error-handling, webhooks, and intelligent LLM-powered data enrichment.",
    skills: ["Make.com (Integromat)", "Zapier Advanced", "Webhooks & REST APIs", "AI Prompt Pipelines", "n8n"]
  },
  {
    id: "data-governance",
    icon: "Database",
    title: "Systems & Data Governance",
    description: "Constructing relational operational hubs that eliminate spreadsheet chaos, prevent duplicate records, and ensure cross-functional data integrity.",
    skills: ["Airtable Relational Hubs", "Notion Ops Wikis", "Data Normalization", "Tool Consolidation", "SSOT Architecture"]
  },
  {
    id: "remote-ops",
    icon: "Globe",
    title: "Async Remote Operations",
    description: "Instituting documentation-first cultures, asynchronous communication protocols, and self-serve operational playbooks for distributed teams.",
    skills: ["Loom / Async Protocol", "Living SOP Documentation", "ClickUp / Asana Ops", "Handoff Governance", "Cross-Timezone Agility"]
  }
];

export const caseStudies = [
  {
    id: "revops-engine",
    title: "Multi-Channel Inbound RevOps & Automated Quoting Engine",
    client: "Scaling Professional Services & B2B Firm",
    badge: "Revenue Operations",
    problem: "Leads arriving from web forms, WhatsApp, and email were manually entered into spreadsheets. Quotes took up to 48 hours to generate, resulting in high drop-off and lost deals.",
    solution: "Architected an automated ingestion pipeline using Make.com and Zoho CRM. Integrated instant WhatsApp/email lead confirmation, auto-calculated service tier pricing, generated dynamic PDF proposals, and routed hot deals directly to senior reps.",
    metrics: [
      { label: "Quote Generation Time", before: "48 Hours", after: "3 Minutes" },
      { label: "Lead Response Rate", before: "32%", after: "94%" },
      { label: "Monthly Manual Hours Saved", before: "0 hrs", after: "120+ hrs" }
    ],
    architecture: [
      { step: "1", title: "Capture & Enrich", desc: "Multi-channel webhook capture (Web, WhatsApp Business, Typeform) with instant company domain enrichment." },
      { step: "2", title: "Deduplication & Scoring", desc: "Automated lookup against existing CRM contacts; dynamic scoring based on deal size and budget fit." },
      { step: "3", title: "Instant Dynamic Quoting", desc: "Template rendering engine computes customized pricing tiers and creates a trackable PDF quote in real-time." },
      { step: "4", title: "Smart Team Dispatch", desc: "Round-robin assignment with Slack/Email alerts and 1-click booking link sent to prospect." }
    ],
    tools: ["Zoho CRM", "Make.com", "WhatsApp Business API", "Google Workspace", "Slack Webhooks"]
  },
  {
    id: "client-onboarding",
    title: "Zero-Touch Client Onboarding & Project Provisioning Hub",
    client: "Creative & Digital Operations Agency",
    badge: "Process Automation",
    problem: "When a deal closed, onboarding required 14 manual steps across contracts, invoice creation, folder provisioning, and task assignation, causing 4-day kickoff delays.",
    solution: "Engineered a closed-won trigger workflow that automatically generates DocuSign/Zoho Sign agreements, creates Stripe/payment milestones, spins up standardized Google Drive & ClickUp project spaces, and sends welcome kits.",
    metrics: [
      { label: "Kickoff Latency", before: "4 Days", after: "Instant (10m)" },
      { label: "Onboarding Error Rate", before: "22%", after: "< 0.5%" },
      { label: "Client Satisfaction (CSAT)", before: "3.8 / 5.0", after: "4.9 / 5.0" }
    ],
    architecture: [
      { step: "1", title: "Deal Closed-Won", desc: "Trigger fired from CRM stage transition with deal metadata and line items." },
      { step: "2", title: "Agreement & Payment", desc: "Auto-populates master services agreement (MSA) and initial deposit invoice." },
      { step: "3", title: "Workspace Provisioning", desc: "Clones ClickUp project template, creates structured Drive folders with permissions, and adds client to portal." },
      { step: "4", title: "Team & Client Briefing", desc: "Generates AI executive summary of client goals and posts to internal Slack channel with kickoff schedule." }
    ],
    tools: ["Make.com", "ClickUp", "Google Drive API", "Zoho Sign", "Stripe"]
  },
  {
    id: "ai-triage",
    title: "AI-Powered Customer Operations & Smart Triage Dispatch",
    client: "High-Volume E-Commerce & Service Provider",
    badge: "AI Implementation",
    problem: "Support inbox received 500+ inquiries weekly. Reps spent 60% of their day sorting routine FAQs from critical operational emergencies.",
    solution: "Implemented an intelligent triage pipeline using OpenAI LLM embeddings connected to the ticketing desk. Auto-classifies sentiment, extracts order IDs, drafts context-aware responses for review, and routes high-priority escalations immediately.",
    metrics: [
      { label: "First Response Time", before: "6.5 Hours", after: "12 Minutes" },
      { label: "Rep Manual Effort", before: "100%", after: "-65%" },
      { label: "Escalation Accuracy", before: "74%", after: "98.2%" }
    ],
    architecture: [
      { step: "1", title: "Ingestion & Sanitization", desc: "Pulls incoming email/ticket text, sanitizes PII, and runs intent classification." },
      { step: "2", title: "Knowledge Retrieval", desc: "Queries company knowledge base vector embeddings for verified standard operating procedures." },
      { step: "3", title: "Draft Response Generation", desc: "Generates high-accuracy draft answer for rep approval with 1-click send." },
      { step: "4", title: "SLA Monitor & Alert", desc: "Tracks time-to-reply against service level agreements and pings on-call lead if breached." }
    ],
    tools: ["OpenAI API", "Zapier", "Help Scout / Zendesk", "Airtable", "Slack"]
  },
  {
    id: "biasharapros",
    title: "BiasharaPros Platform Infrastructure & Systems Engine",
    client: "Internal Venture / Aheri Systems",
    badge: "Product & Systems Build",
    problem: "MSMEs across Kenya struggled to navigate fragmented compliance regulations, tax requirements, and reliable vendor directories, with no single, clean digital tool.",
    solution: "Designed and rolled out BiasharaPros—a structured knowledge and interactive utility platform featuring automated calculators, localized compliance roadmaps, and a verified business directory.",
    metrics: [
      { label: "Active Directory Entries", before: "0", after: "350+ Verified" },
      { label: "Monthly MSME Users", before: "0", after: "10,000+" },
      { label: "Resource Search Time", before: "Hours", after: "< 30 Seconds" }
    ],
    architecture: [
      { step: "1", title: "Directory Verification Engine", desc: "Automated onboarding pipeline for vetting and approving local suppliers and service firms." },
      { step: "2", title: "Interactive Calculators", desc: "Client-side tax, payroll, and margin computational tools built for instant clarity." },
      { step: "3", title: "Modular Knowledge Base", desc: "Structured regulatory workflows mapped to county and national requirements." }
    ],
    tools: ["Web Platforms", "Airtable Backend", "Automation Webhooks", "Analytics", "SEO Strategy"]
  }
];

export const techStackCategories = [
  {
    category: "CRM & Revenue Platforms",
    description: "Central nervous systems for pipeline velocity, contact governance, and deal management.",
    tools: [
      { name: "Zoho CRM & Bigin", level: "Expert / Architect", highlight: "Full workflow rules, Blueprint, custom layouts" },
      { name: "HubSpot", level: "Advanced", highlight: "Pipeline setup, lifecycle automation, deal stages" },
      { name: "Salesforce Essentials", level: "Proficient", highlight: "Object models, lead routing, reporting" }
    ]
  },
  {
    category: "Automation & Middleware",
    description: "The connective tissue tying all tools, webhooks, and data structures together.",
    tools: [
      { name: "Make.com (Integromat)", level: "Expert / Power User", highlight: "Complex routers, error handlers, data stores" },
      { name: "Zapier", level: "Expert", highlight: "Multi-step zaps, webhooks, code steps (JS/Python)" },
      { name: "Webhooks & REST APIs", level: "Advanced", highlight: "Payload formatting, token auth, rate-limit safety" },
      { name: "n8n", level: "Proficient", highlight: "Self-hosted workflow orchestration" }
    ]
  },
  {
    category: "Databases & Operational Hubs",
    description: "Relational data stores and structured internal wikis creating single sources of truth.",
    tools: [
      { name: "Airtable", level: "Expert", highlight: "Relational modeling, interface designer, automations" },
      { name: "Notion", level: "Advanced", highlight: "Operating systems, SOP databases, sprint tracking" },
      { name: "Google Workspace & Sheets", level: "Advanced", highlight: "AppSheet, structured formulas, workflow exports" }
    ]
  },
  {
    category: "AI & Productivity Enablers",
    description: "Leveraging LLMs and modern AI tools to augment team output and triage operations.",
    tools: [
      { name: "OpenAI / Claude APIs", level: "Advanced", highlight: "Prompt engineering, automated classification, JSON mode" },
      { name: "AI Agent Workflows", level: "Advanced", highlight: "Summarization, document parsing, sentiment routing" }
    ]
  },
  {
    category: "Project & Remote Collaboration",
    description: "Asynchronous management stacks that maintain momentum without meeting bloat.",
    tools: [
      { name: "ClickUp & Asana", level: "Expert", highlight: "Custom statuses, automation rules, workload views" },
      { name: "Slack & Loom", level: "Expert", highlight: "Async standups, workflow bot alerts, video SOPs" }
    ]
  }
];

export const remotePhilosophy = [
  {
    title: "Async-First By Default",
    desc: "Real productivity happens in flow state, not marathon status meetings. I communicate through thorough written briefs, Loom walk-throughs, and structured tickets—freeing hours for deep execution across any timezone.",
    icon: "Clock"
  },
  {
    title: "Living Documentation & SOPs",
    desc: "A process doesn't truly exist until it is documented and repeatable by anyone. I build centralized, searchable SOP libraries that make new hire onboarding seamless and reduce dependency on key individuals.",
    icon: "BookOpen"
  },
  {
    title: "Tool Governance & De-bloating",
    desc: "More software rarely solves messy processes. I audit stack redundancies, eliminate unused licenses, unify data into a single source of truth, and ensure every tool earns its place in the budget.",
    icon: "ShieldCheck"
  },
  {
    title: "Fail-Safe Automation Architecture",
    desc: "Automations should reduce stress, not create hidden failures. I design all pipelines with built-in error traps, automatic retries, fallback routing, and alert notifications so breakages never go unnoticed.",
    icon: "Zap"
  }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder & Lead Systems Strategist",
    timeline: "2022 – Present",
    tagline: "Business Systems & Automation Studio for Growing Teams",
    description: "Founded to bridge the operational gap for businesses scaling from 2 to 50 employees. We replace manual friction, spreadsheet bottlenecks, and slow response times with robust CRM pipelines and automated operational infrastructure.",
    achievements: [
      "Consulted and built custom workflow engines for 30+ service and B2B clients.",
      "Delivered an average 70% decrease in manual client onboarding latency.",
      "Created standardized implementation playbooks for Zoho One, Make.com, and Airtable."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "BiasharaPros",
    role: "Platform Creator & Operations Lead",
    timeline: "2023 – Present",
    tagline: "Compliance, Calculators & Directory Infrastructure for East African MSMEs",
    description: "An informational and technological resource hub under Aheri Systems providing localized compliance roadmaps, interactive financial calculators, and a verified supplier directory to empower regional businesses.",
    achievements: [
      "Engineered automated compliance navigator reducing regulatory research from days to minutes.",
      "Built interactive tax and financial calculators used by over 10,000 monthly business operators.",
      "Architected clean directory ingestion and verification system."
    ],
    link: "https://biasharapros.com"
  }
];

export const experienceTimeline = [
  {
    period: "2022 – Present",
    role: "Founder & Lead Business Systems Strategist",
    organization: "Aheri Systems",
    location: "Nairobi / Remote",
    highlights: [
      "Architect bespoke RevOps pipelines, CRM implementations (Zoho, Bigin, HubSpot), and custom automation flows for distributed clients.",
      "Audit existing operational tool stacks, reducing software expenditure by up to 35% through consolidation and native integrations.",
      "Deploy AI-driven automation pipelines for customer inquiry triage, content workflows, and document processing."
    ]
  },
  {
    period: "2023 – Present",
    role: "Product & Operations Architect",
    organization: "BiasharaPros",
    location: "Remote",
    highlights: [
      "Designed and launched end-to-end directory architecture and interactive calculators for 10k+ monthly active users.",
      "Structured content operations, contributor guidelines, and automated SEO publishing workflows."
    ]
  },
  {
    period: "2020 – 2022",
    role: "Operations & Digital Marketing Strategist",
    organization: "Growth Consultancy & Agency Engagements",
    location: "Remote",
    highlights: [
      "Managed multi-channel lead acquisition systems, email marketing automation, and conversion rate optimization campaigns.",
      "Standardized client reporting dashboards using automated data syncs from Google Analytics, Meta Ads, and CRM data."
    ]
  }
];

export const thoughtLeadership = [
  {
    title: "Why Most CRM Implementations Fail (And How Architecture Saves Them)",
    category: "CRM Strategy",
    readTime: "6 min read",
    snippet: "Buying expensive CRM software without first mapping your sales stages and data model is like pouring concrete before laying the foundation. Here is the architectural blueprint to get it right."
  },
  {
    title: "The 5 Invisible Bottlenecks Killing Your Inbound Lead Velocity",
    category: "RevOps",
    readTime: "8 min read",
    snippet: "If your team takes more than 15 minutes to follow up with an inbound lead, your conversion probability drops by 391%. How to build instant, automated quotation and routing engines."
  },
  {
    title: "The Remote Operations Manifesto: Moving from Slack Chaos to Asynchronous Calm",
    category: "Remote Operations",
    readTime: "5 min read",
    snippet: "A distributed team cannot function like an in-person office transplanted to Slack. How documentation-first culture, Loom SOPs, and structured handoffs unlock true leverage."
  },
  {
    title: "Beyond the Hype: Practical AI Automation in Everyday Business Workflows",
    category: "AI & Automation",
    readTime: "7 min read",
    snippet: "Instead of generic chatbots, explore how prompt pipelines, automated categorization, and vector embeddings solve real operational bottlenecks in support and lead enrichment."
  }
];

export const testimonials = [
  {
    quote: "Rita transformed our chaotic sales process into a finely tuned machine. What used to take our sales team 2 days of manual back-and-forth now happens automatically in under 5 minutes. Her systems thinking is exceptional.",
    author: "B2B Agency Founder",
    role: "Managing Director",
    company: "Digital Growth Partner"
  },
  {
    quote: "Working with Rita in a remote environment was an absolute breeze. Her written briefs are clearer than 90% of meetings I attend, and her automation workflows haven't failed once in over 18 months of continuous operation.",
    author: "Head of Operations",
    role: "Operations Lead",
    company: "SaaS Scale-up"
  },
  {
    quote: "Rita does not just install software; she re-architects how your business actually functions. The ROI on our Zoho CRM and Make.com implementation paid for itself within the first 60 days.",
    author: "Managing Partner",
    role: "Executive Partner",
    company: "Consulting Services Firm"
  }
];

export const faqs = [
  {
    q: "What roles are you actively looking for?",
    a: "I am targeting full-time remote roles as Business Systems Lead, RevOps Manager, Operations Architect, or Automation Specialist with forward-thinking remote and distributed companies. I also accept high-impact strategic advisory and systems overhaul contracts."
  },
  {
    q: "What is your work authorization and remote availability?",
    a: "I am based in Nairobi, Kenya (UTC+3 / EAT). I have extensive experience operating asynchronously across European (CET/GMT) and North American (EST/PST) working hours with dedicated daily overlap windows."
  },
  {
    q: "How do you approach a messy or broken operational stack?",
    a: "Every engagement begins with a Systems Audit: mapping the current journey, identifying data leaks, interviewing key stakeholders, and drafting an architectural blueprint. We fix the process first, standardize data second, and automate third."
  },
  {
    q: "Do you build custom code or stick to no-code/low-code?",
    a: "I specialize in low-code architectures (Make, Zapier, Webhooks, API connectors, custom JSON payloads, and JavaScript code steps) because they offer the optimal balance of rapid deployment, maintainability by non-engineers, and rock-solid reliability."
  }
];

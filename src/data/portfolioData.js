export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems & RevOps Specialist",
  subtitle: "AI & Workflow Automation · Zoho Catalyst · Make.com",
  location: "Nairobi (UTC+3) · Working with teams globally",
  bio: "I help growing companies get their internal tools, CRM pipelines, and operations running smoothly. Combining a background in Finance & Banking with 9+ years in systems setup, I build end-to-end operational engines—from quotation portals and vendor compliance to automated billing and custom executive dashboards.",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com",
  email: "rita@aherisystems.com",
  quickStats: [
    { label: "Production Workflows Built", value: "65+", suffix: "" },
    { label: "Quotation & Intake Speedup", value: "90%", suffix: "" },
    { label: "Operational Reliability", value: "99.9%", suffix: "" }
  ]
};

export const corePillars = [
  {
    id: "revops",
    title: "RevOps & Quotation-to-Cash",
    description: "Designing end-to-end quotation workflows, client approval portals, automated agreement signing, and invoice generation so revenue flows without manual friction.",
    skills: ["Zoho CRM & Catalyst", "Dynamic Quoting", "Client Portals", "Zoho Sign / Stripe", "Pipeline Tracking"]
  },
  {
    id: "operations",
    title: "Vendor, HR & Process Operations",
    description: "Building automated onboarding engines for employees and external vendors. Tracking compliance, active licenses, renewal dates, and cross-team task handoffs.",
    skills: ["Vendor Compliance Hubs", "Paperless HR Onboarding", "License Expiry Tracking", "Living SOPs", "ClickUp / Asana"]
  },
  {
    id: "automation",
    title: "Workflow Automation & AI Triage",
    description: "Connecting your everyday tools using Make.com, APIs, and practical AI models to eliminate repetitive data entry, triage customer requests, and sync data reliably.",
    skills: ["Make.com (Integromat)", "Zapier", "REST APIs & Webhooks", "OpenAI & Claude Tools", "Airtable Hubs"]
  }
];

export const caseStudies = [
  {
    id: "klock-aviation",
    title: "End-to-End Business Operating System & Quotation Portal",
    client: "Klock Aviation (Private Charter & Aviation Services)",
    tagline: "Unifying charter quoting, client approval portals, vendor compliance, HR onboarding, and an executive command center.",
    badge: "Enterprise Business System",
    problem: "Private charter quote requests required manual back-and-forth calculations across flight legs. Client approvals, passenger agreements, and invoices were tracked across disjointed emails, while vendor licenses (hotels, charter partners) and staff onboarding lacked centralized tracking.",
    solution: "Built a complete business operating engine on Zoho One and Zoho Catalyst. Engineered an end-to-end quotation workflow with an interactive client approval portal that automatically generates agreements and invoices. Added an automated vendor compliance tracker with license expiry reminders, paperless employee onboarding, and a custom executive command center for management.",
    metrics: [
      { label: "Quote-to-Invoice Turnaround", before: "48 Hours", after: "< 5 Minutes" },
      { label: "Vendor Compliance Visibility", before: "Fragmented", after: "100% Automated" },
      { label: "Executive Reporting Time", before: "Days", after: "Instant (1-Click)" }
    ],
    workflowSteps: [
      { title: "Charter Quote Request", desc: "Captures flight requirements, calculates route pricing, and generates a dynamic proposal." },
      { title: "Client Approval Portal", desc: "Client reviews quote in an interactive portal; 1-click approval converts deal to invoice." },
      { title: "Agreements & Invoicing", desc: "Auto-generates flight documentation, passenger agreements via Zoho Sign, and deposit invoices." },
      { title: "Catalyst Command Center", desc: "Custom management dashboard consolidates flights, revenue, vendors, and team activity." }
    ],
    tools: ["Zoho CRM", "Zoho Catalyst", "Zoho Sign", "Make.com", "Zoho Analytics", "Google Workspace"]
  },
  {
    id: "client-onboarding",
    title: "Zero-Touch Client Onboarding & Project Provisioning",
    client: "Digital Growth & Creative Agency",
    tagline: "Replaced 14 manual post-sale steps with a 10-minute automated kickoff workflow.",
    badge: "Process Automation",
    problem: "Closing a deal required 14 manual steps—drafting contracts, generating deposit invoices, setting up Google Drive folders, and creating task boards. Kickoffs routinely dragged out for 4 days.",
    solution: "Created an automated trigger when a deal is marked 'Closed-Won'. The system generates the agreement, issues the deposit invoice, creates pre-structured ClickUp project boards and Google Drive folders, and sends the welcome packet.",
    metrics: [
      { label: "Kickoff Delay", before: "4 Days", after: "10 Minutes" },
      { label: "Setup Errors", before: "22%", after: "< 0.5%" },
      { label: "Client Satisfaction", before: "3.8 / 5.0", after: "4.9 / 5.0" }
    ],
    workflowSteps: [
      { title: "Deal Closed-Won", desc: "Trigger fired directly from CRM stage update with client metadata." },
      { title: "Agreements & Invoicing", desc: "Pre-fills agreement via Zoho Sign and generates initial invoice." },
      { title: "Folder & Board Setup", desc: "Clones template ClickUp space, sets up Drive folders, and adds permissions." },
      { title: "Welcome & Briefing", desc: "Summarizes client objectives and sends welcome email with kickoff schedule." }
    ],
    tools: ["Make.com", "ClickUp", "Google Drive", "Zoho Sign", "Stripe"]
  },
  {
    id: "ai-triage",
    title: "AI Customer Inquiry Triage & Automated Dispatch",
    client: "High-Volume E-Commerce & Service Team",
    tagline: "Cut routine support workload by 65% by automatically classifying and drafting responses.",
    badge: "AI Implementation",
    problem: "The team was flooded with 500+ messages a week. Staff spent over half their day sorting routine order status requests from urgent customer issues.",
    solution: "Set up an AI triage workflow connected to the customer support inbox. The system categorizes incoming inquiries, looks up order status, drafts helpful replies based on internal documentation, and immediately flags urgent issues to managers.",
    metrics: [
      { label: "First Response Time", before: "6.5 Hours", after: "12 Minutes" },
      { label: "Repetitive Tickets Cut", before: "0%", after: "-65%" },
      { label: "Routing Accuracy", before: "74%", after: "98.2%" }
    ],
    workflowSteps: [
      { title: "Message Ingestion", desc: "Captures incoming ticket and extracts order numbers and core question." },
      { title: "Knowledge Retrieval", desc: "Matches inquiry against company policies and shipping data." },
      { title: "Draft Generation", desc: "Drafts a helpful, context-aware reply for representative approval." },
      { title: "Escalation Flag", desc: "Alerts senior lead immediately if an order has urgent issues." }
    ],
    tools: ["OpenAI API", "Make.com", "Help Desk / Zendesk", "Airtable", "Slack"]
  }
];

export const techStack = [
  { name: "Zoho One & Catalyst", role: "Custom Command Centers & CRM" },
  { name: "HubSpot", role: "Pipeline & Customer Tracking" },
  { name: "Make.com", role: "Workflow Automation & Integrations" },
  { name: "Zapier", role: "App Connections & Triggers" },
  { name: "OpenAI & Claude", role: "AI Triage & Classification" },
  { name: "Airtable", role: "Relational Tracking & Hubs" },
  { name: "ClickUp & Asana", role: "Project & Task Management" },
  { name: "Notion", role: "Team SOPs & Process Docs" },
  { name: "REST APIs & Webhooks", role: "Custom Platform Integrations" }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder & Lead",
    timeline: "2023 – Present",
    tagline: "Business Systems & Automation Studio",
    description: "Helping service businesses set up and run their marketing, sales, and operations systems. We replace messy spreadsheets, manual quoting bottlenecks, and scattered data with organized CRM pipelines and clean automations.",
    achievements: [
      "Delivered full operating system implementations for clients in aviation, real estate, and healthcare.",
      "Built custom executive dashboards (Zoho Catalyst) unifying sales, vendors, and revenue.",
      "Delivered an average 70% decrease in manual client onboarding and quote generation time."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "BiasharaPros",
    role: "Creator & Operations Lead",
    timeline: "2023 – Present",
    tagline: "Automated Knowledge, Calculators & Business Directory",
    description: "An automated digital platform providing localized compliance guides, interactive financial calculators, and a verified business directory for MSMEs in Kenya.",
    achievements: [
      "Engineered automated compliance navigator reducing regulatory research from days to minutes.",
      "Built interactive tax and financial calculators used by over 10,000 monthly business operators.",
      "Automated directory ingestion, data verification, and SEO publishing pipelines on the backend."
    ],
    link: "https://biasharapros.com"
  }
];

export const experienceTimeline = [
  {
    period: "2023 – Present",
    role: "Founder & Business Systems Lead",
    organization: "Aheri Systems",
    location: "Global Client Engagements",
    highlights: [
      "Architect and implement comprehensive business operating systems across CRM, quoting, vendor management, HR onboarding, and executive dashboards (Zoho One, Catalyst, HubSpot).",
      "Engineered end-to-end private charter quotation engine with interactive client approval portals and automated invoice generation for aviation client.",
      "Built automated vendor tracking system monitoring licensing, certifications, and compliance expiration alerts.",
      "Automated employee recruitment and paperless onboarding workflows with digital contract signing."
    ]
  },
  {
    period: "2023 – Present",
    role: "Platform & Operations Lead",
    organization: "BiasharaPros",
    location: "Platform Operations",
    highlights: [
      "Designed and launched automated business platform featuring interactive tax/payroll calculators serving 10,000+ monthly active business operators.",
      "Architected backend automated directory ingestion, vendor verification, and programmatic publishing workflows."
    ]
  },
  {
    period: "2019 – 2023",
    role: "Operations & Digital Systems Strategist",
    organization: "Aheri Brands Agency",
    location: "Client Projects",
    highlights: [
      "Managed lead generation pipelines, email marketing automation, and customer journey touchpoints across multiple client industries.",
      "Built automated reporting dashboards connecting analytics, advertising channels, and CRM pipeline metrics."
    ]
  },
  {
    period: "Early Career",
    role: "Asset Finance & Bancassurance",
    organization: "Commercial Bank of Africa",
    location: "Nairobi, Kenya",
    highlights: [
      "Managed departmental sales pipelines and financial reporting, building foundational rigor in financial controls, audit trails, and reconciliation."
    ]
  }
];

export const thoughtLeadership = [
  {
    title: "Why Most CRM Implementations Fail (And How Good Process Saves Them)",
    category: "CRM Strategy",
    readTime: "6 min read",
    snippet: "Buying software before mapping your sales stages and customer handoffs leads to messy data. Here is how to organize your process before touching software."
  },
  {
    title: "The Speed-to-Quote Advantage: How Instant Quotation Wins Deals",
    category: "Sales Operations",
    readTime: "5 min read",
    snippet: "Why waiting days to send a proposal loses high-intent clients, and how to build zero-touch quotation workflows using Make.com and CRM webhooks."
  },
  {
    title: "Practical AI for Operations: Moving Beyond Chatbots to Real Workflows",
    category: "AI Automation",
    readTime: "5 min read",
    snippet: "A straightforward guide to using AI where it actually saves time—sorting incoming emails, summarizing long documents, and eliminating repetitive data entry."
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

export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems & Automation Specialist",
  subtitle: "CRM Systems · Workflow Automation · AI Operations",
  location: "Nairobi (UTC+3) · Working with teams globally",
  bio: "I help growing companies get their internal tools, CRM platforms, and daily workflows running smoothly. Combining a background in Finance & Banking with 9+ years of hands-on systems work, I eliminate manual data entry, automate repetitive tasks, and build reliable operational foundations so teams can focus on growth.",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  calendlyUrl: "https://calendly.com",
  email: "rita@aherisystems.com",
  quickStats: [
    { label: "Production Automations Built", value: "65+", suffix: "" },
    { label: "Average Process Time Saved", value: "78%", suffix: "" },
    { label: "Workflow Reliability", value: "99.9%", suffix: "" }
  ]
};

export const corePillars = [
  {
    id: "crm",
    title: "CRM Setup & Revenue Operations",
    description: "Setting up clean sales pipelines, customer lifecycle stages, deal tracking, and automated quotation systems so sales and delivery teams stay organized.",
    skills: ["Zoho One / CRM", "HubSpot", "GoHighLevel", "Pipeline Tracking", "Automated Quoting"]
  },
  {
    id: "automation",
    title: "Workflow Automation & AI Tools",
    description: "Connecting your everyday tools using Make.com, Zapier, and practical AI models to handle repetitive data movement, message drafting, and task assignments.",
    skills: ["Make.com (Integromat)", "Zapier", "REST APIs & Webhooks", "OpenAI & Claude Tools", "n8n"]
  },
  {
    id: "operations",
    title: "Data Cleanliness & Clear SOPs",
    description: "Creating a reliable single source of truth across Airtable, Notion, and spreadsheets. Documenting every process so your team can run smoothly without confusion.",
    skills: ["Airtable Hubs", "Notion Workspaces", "Data Deduplication", "Living SOPs", "ClickUp & Asana"]
  }
];

export const caseStudies = [
  {
    id: "revops-engine",
    title: "Multi-Channel Inbound Intake & Automated Quoting",
    client: "Growing B2B Services Company",
    tagline: "Reduced quotation turnaround from 48 hours to under 3 minutes with zero manual copy-pasting.",
    badge: "Quotation Automation",
    problem: "Incoming inquiries from web forms, WhatsApp, and emails were manually copied into spreadsheets. Preparing quotes took up to 48 hours, causing lost deals and frustrated prospective clients.",
    solution: "Built an automated intake pipeline using Make.com and Zoho CRM. Inquiries now automatically trigger an instant confirmation, calculate accurate tier pricing, generate a branded PDF quote, and notify the right team member immediately.",
    metrics: [
      { label: "Quote Turnaround", before: "48 Hours", after: "< 3 Minutes" },
      { label: "Inquiry Response Rate", before: "32%", after: "94%" },
      { label: "Monthly Time Saved", before: "0 hrs", after: "120+ Hours" }
    ],
    workflowSteps: [
      { title: "Inquiry Intake", desc: "Captures lead details from forms or WhatsApp and validates company domain." },
      { title: "CRM Lookup & Scoring", desc: "Checks for existing contacts in Zoho CRM and applies pricing rules." },
      { title: "Dynamic Quote Generation", desc: "Automatically generates and sends a clean PDF proposal in real time." },
      { title: "Team Notification", desc: "Assigns the account owner and posts an alert in Slack with booking details." }
    ],
    tools: ["Zoho CRM", "Make.com", "WhatsApp Business API", "Google Workspace", "Slack"]
  },
  {
    id: "client-onboarding",
    title: "Streamlined Client Onboarding & Project Setup",
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
    title: "AI-Powered Customer Inquiry Triage & Ticket Routing",
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
  { name: "Zoho One & CRM", role: "Sales & Operations Hub" },
  { name: "HubSpot", role: "Pipeline & Customer Tracking" },
  { name: "Make.com", role: "Workflow Automation & Integrations" },
  { name: "Zapier", role: "App Connections & Triggers" },
  { name: "OpenAI & Claude", role: "Practical AI & Message Triage" },
  { name: "Airtable", role: "Relational Databases & Tracking" },
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
    description: "Helping growing businesses set up and run their marketing, sales, and operations systems. We replace messy spreadsheets, manual follow-ups, and slow response times with organized CRM pipelines and clean automations.",
    achievements: [
      "Built and implemented custom CRM and workflow systems for 30+ service and B2B clients.",
      "Delivered an average 70% decrease in manual client onboarding time.",
      "Standardized implementation playbooks across Zoho One, Make.com, and Airtable."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "BiasharaPros",
    role: "Creator & Operations Lead",
    timeline: "2023 – Present",
    tagline: "Compliance Guides, Calculators & Business Directory",
    description: "A practical platform providing localized compliance roadmaps, interactive tax and financial calculators, and a verified business directory for small businesses in Kenya.",
    achievements: [
      "Built automated compliance guides helping business owners find requirements in minutes.",
      "Engineered financial and tax calculators used by over 10,000 monthly business operators.",
      "Created clean directory onboarding and supplier verification processes."
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
      "Set up and manage CRM systems (Zoho One, HubSpot, GoHighLevel) and automated workflows for growing businesses.",
      "Audit existing software stacks, cutting unnecessary subscription costs by up to 35% through clean integrations.",
      "Build practical AI and automation pipelines for inquiry triage, instant quote generation, and operational data synchronization."
    ]
  },
  {
    period: "2023 – Present",
    role: "Platform & Operations Lead",
    organization: "BiasharaPros",
    location: "Platform Operations",
    highlights: [
      "Designed and launched business directory and interactive calculators serving 10,000+ monthly active business operators.",
      "Built streamlined content operations and automated publishing workflows."
    ]
  },
  {
    period: "2019 – 2023",
    role: "Digital Marketing & Systems Strategist",
    organization: "Aheri Brands Agency",
    location: "Client Projects",
    highlights: [
      "Managed lead generation systems, automated email workflows, and client retention campaigns.",
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

// Site copy. Rule: every claim here must be true and defensible in an interview.
// No invented metrics. Before/after values describe what changed, not made-up numbers.

export const personalInfo = {
  name: "Rita Ndubi",
  title: "Business Systems & AI Automation Strategist | CRM, Customer Journey & RevOps",
  subtitle: "Zoho One · CRM & Workflow Automation · APIs & Webhooks · AI Agents (Claude, OpenAI, MCP)",
  location: "Nairobi, Kenya · Working with teams worldwide",
  bio: "I build the systems that carry a customer from first inquiry to paid invoice: CRM pipelines, quote and approval flows, e-signature, invoicing, automated follow-up and management dashboards. I start by mapping how the work is really done, then remove the re-typing, the handoffs nobody owns and the status questions customers keep asking. My background is 9+ years across banking operations at Commercial Bank of Africa, digital marketing and CRM automation, and AI implementation. I work in Zoho One, HubSpot and GoHighLevel, Make and Zapier, REST APIs and webhooks, SQL databases (Supabase, Cloudflare D1), and AI agents built on Claude and OpenAI.",
  linkedinUrl: "https://www.linkedin.com/in/rita-ndubi",
  email: "ritakawira@gmail.com",
  quickStats: [
    { label: "Projects on This Site (7 Client, 2 Own Platforms)", value: "9", suffix: "" },
    { label: "Years in Operations, CRM & Automation", value: "9+", suffix: "" },
    { label: "Stages in My Customer-to-Operations Framework", value: "5", suffix: "" }
  ]
};

export const operatingFramework = {
  name: "The CLEAR Method",
  tagline: "From scattered tools to AI-ready systems",
  summary: "Chart the whole business, Link the systems, Eliminate manual work, Add AI with guardrails, then Run, review and refine.",
  coreQuestions: [
    {
      id: "what",
      number: "01",
      question: "What do you do?",
      shortAnswer: "I design and build the systems your organization runs on, and put AI and automation to work inside them.",
      details: "In most organizations, marketing, sales, operations and finance each run on their own tools, held together by email, spreadsheets and people re-typing data. I connect them into one system so revenue stops leaking between teams, automate the repetitive work, and add AI where it gives your team real time back."
    },
    {
      id: "who",
      number: "02",
      question: "Who do you work with?",
      shortAnswer: "Leadership and operations teams who are ready to run on systems and AI, not spreadsheets and memory.",
      details: "Founders and leadership teams planning AI adoption, operations, sales and finance owners who want their processes connected, and IT teams with more requests than people. I have done this across aviation, real estate, healthcare, community platforms and e-commerce."
    },
    {
      id: "how",
      number: "03",
      question: "How do you do it?",
      shortAnswer: "I map how your organization really works, then build the system and the AI around it.",
      details: "I map every function and every relationship (customers, vendors, partners, assets), connect your CRM, finance and operations tools, automate the routine steps, and add AI agents with clear rules and a human approval step wherever money, a customer promise or a policy is involved."
    },
    {
      id: "process",
      number: "04",
      question: "What does a project look like?",
      shortAnswer: "The CLEAR Method: Chart, Link, Eliminate, Add AI, Run and refine.",
      details: "We start with how the work is done today and agree what success looks like. I fix the biggest bottleneck first, test with real past cases, document every workflow, and train the team so they own the system after go-live."
    }
  ],
  stages: [
    {
      step: "01",
      letter: "C",
      name: "Chart the Whole Business",
      tagline: "See every function and relationship before changing anything",
      problem: "Most system projects start with a tool. The result is software that matches nobody's real work, and gaps between marketing, sales, operations and finance that nobody owns.",
      solution: "I map every function and every relationship: how customers, vendors, partners and assets move through the business today, where data is re-typed, where requests wait, and where revenue is quietly bleeding out between teams. Then we agree what success looks like.",
      aiRole: "AI helps turn interviews, documents and data exports into a clear map of how the business runs today.",
      metric: "A shared map of how the business really runs"
    },
    {
      step: "02",
      letter: "L",
      name: "Link the Systems",
      tagline: "One connected platform, data entered once",
      problem: "Each team runs its own tools. The same customer lives in five places, and every report means exporting and reconciling.",
      solution: "I connect CRM, marketing, operations, finance and reporting into one platform, whether that is Zoho One, HubSpot or your existing stack, using native integrations, APIs and webhooks, so a record created once reaches every team that needs it.",
      aiRole: "AI agents connect to the same systems through APIs and MCP, so they work with live data rather than copies.",
      metric: "One source of truth across every team"
    },
    {
      step: "03",
      letter: "E",
      name: "Eliminate Manual Work",
      tagline: "Rules carry the routine",
      problem: "Skilled people spend hours on copy-paste, follow-up reminders, status updates and invoice entry.",
      solution: "Workflow automation for the repetitive steps: routing, follow-ups, quote and approval flows, e-signature, invoicing, reminders and alerts, built with workflow rules, Make, Zapier or custom functions.",
      aiRole: "Plain automation comes first here: fixed rules are cheaper, testable and do the same thing every time.",
      metric: "Routine work runs without anyone touching it"
    },
    {
      step: "04",
      letter: "A",
      name: "Add AI With Guardrails",
      tagline: "AI where the input is messy, people where it matters",
      problem: "Teams try AI tools on their own, with no connection to company data and no rules about what AI is allowed to do.",
      solution: "AI goes where information arrives as free text or documents: reading and sorting inquiries, extracting details, drafting replies and summaries, and answering routine questions from approved information. Every AI step has a defined scope, a log, and a human approval point for money, promises and policy.",
      aiRole: "Claude and OpenAI models, tool calling, and agents connected through MCP, with human review built in.",
      metric: "AI inside real workflows, with a person in control"
    },
    {
      step: "05",
      letter: "R",
      name: "Run, Review & Refine",
      tagline: "Owned by the team, improved over time",
      problem: "Systems decay after go-live when nobody understands them, nothing is documented and nobody looks at the numbers.",
      solution: "Live dashboards for leadership, written SOPs for every module, team training, and a regular review of what is working, what is not, and what to automate next.",
      aiRole: "Scheduled AI reports explain changes in the numbers; the numbers themselves always come from the system.",
      metric: "A system the team trusts and keeps improving"
    }
  ]
};

export const corePillars = [
  {
    id: "agentic-systems",
    title: "AI Agents & AI-Assisted Workflows",
    subtitle: "Claude & OpenAI · Model Context Protocol (MCP) · Human approval built in",
    description: "I use AI where the input is messy: reading free-text inquiries, extracting details into CRM fields, sorting what needs a person, and drafting replies for approval. I connect AI agents to live tools (Zoho CRM, Zoho Social, databases, analytics) through MCP to run recurring work such as daily outreach and weekly reports, with every action logged.",
    skills: ["Claude & OpenAI", "Tool Calling", "Model Context Protocol (MCP)", "Claude Code", "Human-in-the-Loop Review"]
  },
  {
    id: "journey-mapping",
    title: "Process & Customer Journey Mapping",
    subtitle: "Discovery · Bottleneck analysis · Requirements · Prioritisation",
    description: "Before building anything, I walk through real recent cases with the people doing the work and map every step, tool, handoff and wait. That shows where time goes. I rank fixes by hours saved, error risk and build effort, and write each requirement as trigger, inputs, rules, output and owner.",
    skills: ["Process Mapping", "Customer Journey Audits", "Requirements Writing", "Prioritisation", "SOP Documentation"]
  },
  {
    id: "revenue-ops",
    title: "Quote-to-Cash & Revenue Operations",
    subtitle: "Quotes · Approvals · E-signature · Invoicing · Payments",
    description: "I stop revenue leakage between a request and a paid invoice by connecting every step: quote builders fed from the CRM record, approval steps, Zoho Sign contracts that update the deal when signed, Zoho Books invoices created automatically, and payment gateway webhooks that confirm payment without anyone checking by hand.",
    skills: ["Quote-to-Cash", "Zoho Sign & Zoho Books", "Approval Workflows", "Payment Webhooks", "Pipeline Design"]
  },
  {
    id: "ops-infrastructure",
    title: "Integrations, Data & Reporting",
    subtitle: "REST APIs · Webhooks · SQL · Dashboards",
    description: "I connect systems so data moves without manual exports: CRM to invoicing to dashboards, databases to websites, analytics APIs to automated weekly reports. I work with Make and Zapier, Cloudflare Workers and Pages Functions, SQL databases (Supabase, Cloudflare D1), Zoho Analytics and Zoho Catalyst, and GitHub Actions.",
    skills: ["REST APIs & Webhooks", "Make & Zapier", "Supabase & Cloudflare D1", "Zoho Analytics & Catalyst", "GitHub Actions"]
  }
];

export const caseStudyCategories = [
  { id: "all", label: "All Projects" },
  { id: "enterprise-crm", label: "CRM & Business Systems" },
  { id: "healthcare", label: "Healthcare & Growth" },
  { id: "platforms", label: "Digital Platforms" }
];

export const caseStudies = [
  {
    id: "klock-aviation",
    category: "enterprise-crm",
    title: "End-to-End Zoho One Operating System for an Aviation Group",
    client: "Klock Aviation (charter, aviation services and aircraft asset management)",
    tagline: "Marketing, sales, operations and finance connected across every division, with a dedicated process for customers, vendors, partners and aircraft owners.",
    badge: "Full Zoho One Implementation",
    problem: "Klock runs several aviation business lines, including charter services and an Asset Management & Solutions division that manages aircraft and related services for their owners. Every line deals with four different groups: current and prospective customers, vendors, partners and aircraft owners. Each group had its own way of working spread across email, WhatsApp, spreadsheets and separate tools, so marketing, sales, operations and accounting never shared one view of any customer, supplier or asset.",
    solution: "I designed and implemented Zoho One as the company's operating system: one connected platform where every function and every relationship has its own defined process, and information entered once flows through to sales, operations, finance and management reporting.",
    scope: [
      { area: "Marketing", desc: "Lead generation and outreach system for prospective clients, segmented campaigns by division, and re-engagement campaigns that bring past and dormant clients back." },
      { area: "Sales", desc: "A pipeline per division with routing and priority rules, quotes built from the CRM record, internal approval, and client signature in Zoho Sign that updates the deal automatically." },
      { area: "Operations", desc: "Booking and service delivery workflows, client updates through the job, and document tracking for every trip and service." },
      { area: "Finance", desc: "Deposit and final invoices raised in Zoho Books from signed deals, so sales and accounting work from the same figures." },
      { area: "Vendors", desc: "Vendor onboarding, document collection, and alerts before any licence, certificate or insurance expires." },
      { area: "Partners", desc: "Partner records, referral tracking and structured follow-up so every partnership has an owner and a next step." },
      { area: "Aircraft Owners", desc: "For Asset Management & Solutions: owner and aircraft records with their own onboarding, service and communication process." },
      { area: "Leadership", desc: "A management dashboard on Zoho Catalyst showing pipeline, operations and finance across all divisions." }
    ],
    metrics: [
      { label: "Relationships", before: "Spread across tools", after: "Customers, vendors, partners, owners in one system" },
      { label: "Quote to Invoice", before: "Re-typed at each step", after: "One connected record" },
      { label: "Management View", before: "Manual exports", after: "Live cross-division dashboard" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Outreach & Intake", desc: "Lead generation outreach and campaigns per division, with every inquiry landing in the right pipeline, tagged by source." },
      { stage: "02 · Follow Up & Nurture", title: "Routing & Re-engagement", desc: "Rules assign an owner and flag priority clients; re-engagement campaigns keep past and dormant clients warm." },
      { stage: "03 · Convert & Contract", title: "Quote, Sign, Invoice", desc: "Quote built from the CRM record, approved internally, signed in Zoho Sign, and invoiced in Zoho Books." },
      { stage: "04 · Onboard & Retain", title: "Delivery & Relationships", desc: "Service delivery workflows for clients, plus defined onboarding and communication for vendors, partners and aircraft owners." },
      { stage: "05 · Operations Engine", title: "Compliance & Dashboard", desc: "Vendor document expiry alerts, written SOPs per module, and a Zoho Catalyst dashboard across all divisions." }
    ],
    tools: ["Zoho CRM", "Zoho Campaigns", "Zoho Sign", "Zoho Books", "Zoho Creator", "Zoho Catalyst"]
  },
  {
    id: "mapenzi-connect",
    category: "enterprise-crm",
    title: "Zoho One System & Webinar Automation",
    client: "Mapenzi Connect (relationship and community platform)",
    tagline: "Member, event and newsletter operations moved from spreadsheets into one Zoho One system.",
    badge: "Full Zoho One Implementation",
    problem: "Members, webinar registrants and newsletter subscribers lived in separate spreadsheets. Reminders were sent by hand, and there was no record of who registered versus who attended.",
    solution: "Built the full Zoho One system across sales, marketing and member operations: registration pages feeding Zoho CRM, multi-step email and SMS reminder sequences, attendance written back to each contact, post-event offers, and automated newsletters.",
    metrics: [
      { label: "Webinar Journey", before: "Spreadsheets", after: "Registration to attendance in CRM" },
      { label: "Event Reminders", before: "Sent by hand", after: "Automatic email & SMS sequence" },
      { label: "Member Nurture", before: "Manual emails", after: "Automated cadence" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Registration Pages", desc: "Event pages and social campaigns send registrants straight into Zoho CRM." },
      { stage: "02 · Follow Up & Nurture", title: "Reminder Sequence", desc: "Email and SMS reminders with the agenda and a calendar invite go out automatically before each event." },
      { stage: "03 · Convert & Contract", title: "Attendance & Offers", desc: "Attendance is recorded against each contact, and attendees receive the follow-up offer and materials." },
      { stage: "04 · Onboard & Retain", title: "Member Onboarding", desc: "New members get an onboarding sequence introducing the community and upcoming sessions." },
      { stage: "05 · Operations Engine", title: "Member CRM & Newsletters", desc: "One member database with engagement history and scheduled newsletter sends." }
    ],
    tools: ["Zoho CRM", "Zoho Campaigns", "Zoho One", "Webhooks"]
  },
  {
    id: "sydia-realty",
    category: "enterprise-crm",
    title: "Zoho CRM Audit & Investor Journey Redesign",
    client: "Sydia Realty (property investment and real estate)",
    tagline: "A stage-by-stage plan to stop high-value property deals slipping between handoffs.",
    badge: "CRM Audit & Journey Mapping",
    problem: "High-value property leads moved through the CRM without clear stage rules, so deals stalled between viewing, reservation and payment, and buyers who had already purchased were not followed up for the next one.",
    solution: "Audited the Zoho CRM setup and mapped the full investor journey: inquiry, qualification, viewing, reservation, milestone payments, handover and repeat investment. Delivered stage definitions, required fields per stage, follow-up rules and a retention path for past buyers.",
    metrics: [
      { label: "Pipeline Stages", before: "Loosely defined", after: "Clear stage rules" },
      { label: "Follow-Up", before: "Ad hoc", after: "Defined cadence" },
      { label: "Past Buyers", before: "No follow-up", after: "Retention path" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Investor Inquiries", desc: "Leads from ads, landing pages and referral networks captured with their source." },
      { stage: "02 · Follow Up & Nurture", title: "Qualification", desc: "Budget and timeline captured early, with viewing invitations and timed follow-up." },
      { stage: "03 · Convert & Contract", title: "Reservation & Milestones", desc: "Unit reservation, purchase agreement and milestone payment stages defined in the pipeline." },
      { stage: "04 · Onboard & Retain", title: "Handover & Repeat Purchase", desc: "Construction updates, handover tracking and alerts for buyers' next investment." },
      { stage: "05 · Operations Engine", title: "Stage Rules", desc: "Required fields per stage so deals cannot move forward with missing information." }
    ],
    tools: ["Zoho CRM", "Process Mapping", "Pipeline Design"]
  },
  {
    id: "vivalife-clinic",
    category: "healthcare",
    title: "Digital Patient Intake & WhatsApp Reminders",
    client: "VivaLife Pediatric Clinic (paediatric healthcare)",
    tagline: "Paper intake and phone reminders replaced with digital forms, automated WhatsApp and email reminders, and feedback requests after every visit.",
    badge: "Clinic Automation",
    problem: "Parents filled in paper forms at reception, the team phoned families to remind them of appointments, and feedback after visits was rarely collected.",
    solution: "Set up Zoho CRM with mobile-friendly digital intake forms, automatic appointment reminders by WhatsApp Business API and email, and a feedback request after each consultation. Configured Zoho Analytics and Google Analytics for patient volume and channel reporting, and Zoho Social for content.",
    metrics: [
      { label: "Patient Intake", before: "Paper forms", after: "Digital form into CRM" },
      { label: "Appointment Reminders", before: "Manual phone calls", after: "Automatic WhatsApp & email" },
      { label: "Patient Feedback", before: "Rarely asked", after: "Requested after every visit" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Booking Requests", desc: "Parent inquiries from search and social captured in Zoho CRM." },
      { stage: "02 · Follow Up & Nurture", title: "Confirmations", desc: "WhatsApp confirmations with directions and a link to the pre-visit form." },
      { stage: "03 · Convert & Contract", title: "Digital Registration", desc: "Parents register online before arriving, so details are already in the system." },
      { stage: "04 · Onboard & Retain", title: "Reminders & Feedback", desc: "Automatic reminders before each appointment and a feedback request after the visit." },
      { stage: "05 · Operations Engine", title: "Patient Records & Reports", desc: "One patient history in Zoho CRM and clinic activity reports in Zoho Analytics." }
    ],
    tools: ["Zoho CRM", "WhatsApp Business API", "Zoho Analytics", "Google Analytics", "Zoho Social"]
  },
  {
    id: "unicorn-dental",
    category: "healthcare",
    title: "Clinic Website, Online Booking & Triage Chatbot",
    client: "Unicorn Dental Clinic (dental practice)",
    tagline: "A new clinic website with local SEO, 24/7 self-service booking and a chatbot for treatment questions.",
    badge: "Website & Booking System",
    problem: "The clinic had no website, so patients searching online could not find it, and every booking and routine question came in by phone to the front desk.",
    solution: "Designed and built the clinic website with patient-focused copy and local SEO, connected Calendly so patients can choose a dentist and book a slot themselves, and added a chatbot that answers routine treatment questions.",
    metrics: [
      { label: "Online Presence", before: "No website", after: "SEO site with booking" },
      { label: "Scheduling", before: "Phone calls only", after: "Self-service booking 24/7" },
      { label: "Treatment Questions", before: "Front desk", after: "Triage chatbot" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Local SEO", desc: "Treatment pages written for patients searching locally." },
      { stage: "02 · Follow Up & Nurture", title: "Triage Chatbot", desc: "Instant answers to routine questions about procedures and what to expect." },
      { stage: "03 · Convert & Contract", title: "Self-Service Booking", desc: "Patients pick a dentist and a time through Calendly, day or night." },
      { stage: "04 · Onboard & Retain", title: "Confirmations & Reminders", desc: "Automatic booking confirmations and appointment reminders." },
      { stage: "05 · Operations Engine", title: "Calendar Sync", desc: "Bookings land directly in the dentists' calendars." }
    ],
    tools: ["Website Build", "Calendly", "Chatbot", "Local SEO", "Google Analytics"]
  },
  {
    id: "diaspocare",
    category: "healthcare",
    title: "Lead Capture & Nurture Automation in GoHighLevel",
    client: "DiaspoCare LLC (healthcare fintech, via Aheri Brands Agency)",
    tagline: "Landing pages, conversion tracking, paid campaigns and automated email nurture for a cross-border healthcare payments service.",
    badge: "Growth Funnels & Tracking",
    problem: "Diaspora visitors arrived from several ad channels to disconnected landing pages, and there was no reliable tracking of which campaigns produced sign-ups or any automated follow-up.",
    solution: "Wrote and optimised the landing pages, set up Google Analytics with conversion events and ad pixels, ran campaigns on Meta, LinkedIn and Google, and built lead capture and email nurture sequences in GoHighLevel. Managed social content through Zoho Social.",
    metrics: [
      { label: "Landing Pages", before: "Disconnected", after: "Rebuilt for conversion" },
      { label: "Attribution", before: "Estimated", after: "GA4 conversion events" },
      { label: "Lead Follow-Up", before: "Manual", after: "Automated nurture sequence" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Paid Campaigns", desc: "Google, Meta and LinkedIn campaigns sending traffic to dedicated landing pages." },
      { stage: "02 · Follow Up & Nurture", title: "GoHighLevel Nurture", desc: "Email sequences explaining how the service works for families back home." },
      { stage: "03 · Convert & Contract", title: "Sign-Up Path", desc: "A single path from landing page to app install and first transaction." },
      { stage: "04 · Onboard & Retain", title: "Milestone Messages", desc: "Follow-up messages after sign-up and first transaction." },
      { stage: "05 · Operations Engine", title: "Tracking & Reporting", desc: "GA4 conversion events and pixels so each channel's results are visible." }
    ],
    tools: ["GoHighLevel", "Google Analytics 4", "Meta, LinkedIn & Google Ads", "Zoho Social"]
  },
  {
    id: "biasharapros",
    category: "platforms",
    title: "Business Discovery Platform with Supplier Sourcing & Payments",
    client: "Biashara Pros (my own platform for Kenyan businesses)",
    tagline: "A business directory, buyer-to-supplier sourcing requests, online payments and free business calculators, built on Astro and Cloudflare.",
    badge: "Own Platform",
    problem: "Kenyan buyers struggle to find trusted suppliers and service providers, and small business owners need quick answers on tax, payroll and compliance.",
    solution: "Built an Astro site with a backend on Cloudflare Pages Functions and a D1 SQL database: listing intake with validation and spam filtering, a sourcing flow where suppliers respond to buyer requests through their own link, and a payment gateway checkout with a verified payment webhook. Added free tools (PAYE, VAT, loan and employee cost calculators, an invoice generator and a compliance calendar). A scheduled AI routine connected to Zoho CRM runs daily business outreach and reports against a daily target.",
    metrics: [
      { label: "Supplier Sourcing", before: "Word of mouth", after: "Buyer requests, supplier responses" },
      { label: "Payments", before: "Checked by hand", after: "Payment gateway webhook" },
      { label: "Outreach", before: "Manual", after: "Daily AI routine via Zoho CRM" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Search & Free Tools", desc: "Guides and calculators bring business owners and buyers in from search." },
      { stage: "02 · Follow Up & Nurture", title: "CRM Outreach", desc: "A daily routine finds businesses, logs them in Zoho CRM, and sends first and second emails." },
      { stage: "03 · Convert & Contract", title: "Listings & Payments", desc: "Validated listing submissions and payment gateway checkout with webhook confirmation." },
      { stage: "04 · Onboard & Retain", title: "Supplier Responses", desc: "Suppliers receive buyer requests and reply through their own link." },
      { stage: "05 · Operations Engine", title: "SQL Backend", desc: "All records in Cloudflare D1, the single source of truth for every flow." }
    ],
    tools: ["Astro", "Cloudflare Pages Functions", "Cloudflare D1 (SQL)", "Payment Gateway", "Zoho CRM", "Claude"]
  },
  {
    id: "wowglamdecor",
    category: "platforms",
    title: "Automated E-Commerce Publishing Pipeline",
    client: "WowGlamDecor (my own home decor e-commerce publisher)",
    tagline: "A 367-product catalog in a SQL database, published daily to a Hugo site, with scheduled social posts through the Zoho Social API.",
    badge: "Own Platform",
    problem: "Running a large product catalog across a website and social channels by hand means stale prices, broken images and posts that silently fail.",
    solution: "The catalog lives in Cloudflare D1 and is updated with SQL batch scripts. A daily GitHub Actions build publishes the Hugo site to Cloudflare Pages, Cloudflare Workers handle click tracking and image delivery, and Node.js scripts schedule social posts through the Zoho Social API with every response logged. A 31-rule health check must pass with zero errors before each release.",
    metrics: [
      { label: "Catalog", before: "Manual edits", after: "367 products in a SQL database" },
      { label: "Publishing", before: "Manual", after: "Daily automated build" },
      { label: "Click Data", before: "Inflated by bots", after: "6,471 bot rows purged, filters added" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Search Content", desc: "Buying guides and product pages built from the catalog data." },
      { stage: "02 · Follow Up & Nurture", title: "Scheduled Social Posts", desc: "Pinterest and other posts scheduled through the Zoho Social API from scripts." },
      { stage: "03 · Convert & Contract", title: "Retailer Links", desc: "Each product links to the retailer, with clicks tracked by a Cloudflare Worker." },
      { stage: "04 · Onboard & Retain", title: "Newsletter", desc: "Email newsletters to subscribers." },
      { stage: "05 · Operations Engine", title: "Health Check & Daily Build", desc: "31 automated checks before release and a daily GitHub Actions build." }
    ],
    tools: ["Hugo", "Cloudflare D1, Workers & Pages", "GitHub Actions", "Zoho Social API", "Claude Code"]
  },
  {
    id: "ccc-directory",
    category: "platforms",
    title: "Business Directory Platform & Listing Intake",
    client: "CCC Business Directory (Connect Circle Community, client project)",
    tagline: "A searchable directory of regional businesses with online listing submission and admin verification.",
    badge: "Directory Platform",
    problem: "Regional businesses had no central, searchable directory, and listings were collected on paper.",
    solution: "Designed and built a directory with categorised business profiles, search by sector, an online listing submission form and an admin step to verify listings before publishing.",
    metrics: [
      { label: "Listing Submission", before: "Paper forms", after: "Online intake form" },
      { label: "Finding a Business", before: "No central index", after: "Search by category" },
      { label: "Verification", before: "Paperwork", after: "Admin review before publishing" }
    ],
    workflowSteps: [
      { stage: "01 · Attract & Capture", title: "Business Outreach", desc: "Businesses invited to add or claim their profile." },
      { stage: "02 · Follow Up & Nurture", title: "Profile Completion", desc: "Reminders to complete profile details." },
      { stage: "03 · Convert & Contract", title: "Listing Submission", desc: "Online submission with listing tier selection." },
      { stage: "04 · Onboard & Retain", title: "Publication", desc: "Confirmation when the listing goes live." },
      { stage: "05 · Operations Engine", title: "Admin Verification", desc: "Admins review and approve listings before publishing." }
    ],
    tools: ["Directory Build", "Intake Forms", "Database", "SEO"]
  }
];

export const techStack = [
  { name: "Zoho One", role: "CRM, Books, Sign, Creator, Catalyst, Analytics, Social" },
  { name: "HubSpot & GoHighLevel", role: "CRM pipelines and email automation" },
  { name: "Make & Zapier", role: "Workflow automation between apps" },
  { name: "REST APIs & Webhooks", role: "Custom integrations and payment confirmations" },
  { name: "Supabase & Cloudflare D1", role: "SQL databases" },
  { name: "Cloudflare Pages & Workers", role: "Hosting, serverless functions, edge logic" },
  { name: "Astro, Hugo & GitHub Actions", role: "Websites and automated daily builds" },
  { name: "Claude, OpenAI & MCP", role: "AI agents connected to business tools" },
  { name: "WhatsApp Business API & Payment Gateways", role: "Customer messaging, checkout and payment confirmation" }
];

export const ventureSpotlights = [
  {
    name: "Aheri Systems",
    role: "Founder",
    timeline: "2023 - Present",
    tagline: "Business systems and automation studio",
    description: "My consultancy. I design and build CRM, quote-to-invoice and automation systems for service businesses, from process mapping to go-live and handover.",
    achievements: [
      "Delivered Zoho One implementations for Klock Aviation and Mapenzi Connect.",
      "Built clinic intake and reminder systems for VivaLife Pediatric Clinic and the Unicorn Dental Clinic website and booking flow.",
      "Audited Zoho CRM and redesigned the investor journey for Sydia Realty.",
      "Built the CCC Business Directory platform for Connect Circle Community."
    ],
    link: "https://aherisystems.com"
  },
  {
    name: "Biashara Pros",
    role: "Founder & Builder",
    timeline: "2023 - Present",
    tagline: "Business discovery platform for Kenya",
    description: "A directory and sourcing platform where buyers find trusted Kenyan businesses, plus free tools for business owners. Built on Astro, Cloudflare and a D1 SQL database.",
    achievements: [
      "Built a supplier sourcing flow and a payment gateway checkout with payment webhooks.",
      "Built free PAYE, VAT, loan and employee cost calculators, an invoice generator and a compliance calendar.",
      "Runs a daily AI outreach routine connected to Zoho CRM."
    ],
    link: "https://biasharapros.com"
  },
  {
    name: "WowGlamDecor.com",
    role: "Founder & Builder",
    timeline: "2024 - Present",
    tagline: "Home decor e-commerce publisher",
    description: "A 367-product catalog in Cloudflare D1, published daily as a Hugo site through GitHub Actions, with social posts scheduled through the Zoho Social API.",
    achievements: [
      "31-rule health check must pass with zero errors before every release.",
      "Traced inflated click data to bots, purged 6,471 bad rows and added filters at the source."
    ],
    link: "https://wowglamdecor.com"
  }

];

export const experienceTimeline = [
  {
    period: "2023 - Present",
    role: "Founder & Business Systems Lead",
    organization: "Aheri Systems",
    location: "Remote",
    highlights: [
      "Klock Aviation (charter, aviation services and aircraft asset management): implemented Zoho One as the operating system across marketing, sales, operations and finance, with a defined process for customers, vendors, partners and aircraft owners. Built lead generation outreach and re-engagement campaigns, division pipelines, quote approval and Zoho Sign contracts, Zoho Books invoicing, vendor document expiry alerts, and a Zoho Catalyst management dashboard.",
      "Mapenzi Connect: built the full Zoho One system across sales, marketing and member operations, including webinar registration to attendance tracking, email and SMS reminders, and automated newsletters.",
      "VivaLife Pediatric Clinic: set up Zoho CRM with digital patient intake, WhatsApp Business API and email appointment reminders, and post-visit feedback requests; configured Zoho Analytics and GA4.",
      "Sydia Realty: audited Zoho CRM and mapped the investor journey from inquiry to milestone payments and repeat purchase, with stage rules to stop deals slipping between handoffs.",
      "Unicorn Dental Clinic: built the clinic website with local SEO, Calendly self-service booking and a triage chatbot."
    ]
  },
  {
    period: "2023 - Present",
    role: "Founder & Builder, Digital Platforms",
    organization: "Biashara Pros and WowGlamDecor",
    location: "Remote",
    highlights: [
      "Biashara Pros: built an Astro site and Cloudflare backend (Pages Functions, D1 SQL) with validated listing intake, a supplier sourcing flow and a payment gateway webhook; a daily AI routine runs outreach through Zoho CRM.",
      "WowGlamDecor: run a 367-product catalog in Cloudflare D1, published daily as a Hugo site via GitHub Actions; social posts scheduled through the Zoho Social API with every response logged.",
      "AI agents connected to Zoho CRM, Zoho Social, databases and analytics through MCP run recurring outreach, weekly GA4 and Search Console reports and site audits, with every action logged."
    ]
  },
  {
    period: "2019 - 2023",
    role: "Digital Marketing & Automation Strategist",
    organization: "Aheri Brands Agency",
    location: "Nairobi",
    highlights: [
      "DiaspoCare LLC: built lead capture and email nurture automation in GoHighLevel, landing pages, GA4 conversion events and pixel tracking, and paid campaigns on Meta, LinkedIn and Google.",
      "Destiny Life Coaching: ran lead generation and social media, from content and campaigns to capturing and following up enquiries.",
      "Caroline Gaithuma: designed and built the website.",
      "Nairobi cleaning company: ran lead generation campaigns to bring in and qualify service enquiries.",
      "Mapped customer journeys and built automated email touchpoints for 8+ clients in healthcare, professional services and e-commerce."
    ]
  },
  {
    period: "2017 - 2019",
    role: "Copywriter & Content Specialist",
    organization: "Freelance",
    location: "Remote",
    highlights: [
      "Wrote email sequences, web and sales copy for clients across several industries."
    ]
  },
  {
    period: "2014 - 2017",
    role: "Asset Finance Administrative Assistant; Bancassurance Sales Representative",
    organization: "Commercial Bank of Africa",
    location: "Nairobi",
    highlights: [
      "Managed asset finance documentation and department sales and financial reporting, where accuracy and audit trails were required on every file.",
      "Built and managed a bancassurance sales pipeline, prepared policy renewals and cross-sold across the product range."
    ]
  }
];

export const certifications = [
  "HubSpot Academy: Inbound Marketing (2025), Email Marketing (2023)",
  "LinkedIn Skill Assessments: Google Analytics, Google Ads, SEO, WordPress (2022)"
];

// Not rendered on the live site (ThoughtLeadership is not mounted in App.jsx).
export const thoughtLeadership = [];

// Verbatim LinkedIn recommendations (screenshots: docs/brand/testimonial-*.png). Never edit the wording.
export const testimonials = [
  {
    author: "Evans Mawira",
    role: "Business Development & Strategic Partnerships, Klock Aviation Group",
    relation: "Client · LinkedIn recommendation, August 14, 2026",
    quote: [
      "I had the pleasure of working with Rita on a comprehensive transformation of our organization\u2019s operating systems across multiple business lines.",
      "Rita went far beyond simply implementing technology. She took the time to understand how our organization operated, how our different business lines connected, and where we could improve our processes, workflows, lead generation, marketing, and revenue generation. She then helped us build and connect systems that brought these areas together into a more structured and efficient operation.",
      "What particularly stood out was Rita\u2019s ability to combine technical expertise with strong business and strategic thinking. She consistently looked at the bigger picture \u2014 not just how to automate a process, but how the systems, people, processes, and customer journey could work together to save time, reduce inefficiencies, improve lead management, and ultimately support revenue growth.",
      "She also provided valuable strategic input around our marketing and lead-generation efforts, helping us think more effectively about how to structure our digital operations and turn technology into a genuine business growth engine.",
      "Rita is highly knowledgeable, proactive, solutions-oriented, and genuinely invested in creating systems that make businesses work better. I would highly recommend Rita and Aheri Systems to any organization looking to streamline operations, leverage automation, and build scalable systems that support growth."
    ]
  },
  {
    author: "Eva Matindi",
    role: "Connect Circle Community · CCC Business Directory · Mature Singles · Mapenzi Connect",
    relation: "Client · LinkedIn recommendation, February 14, 2026",
    quote: [
      "Rita has been instrumental in helping me organise my business operations through Zoho CRM. She clearly explained how the different Zoho apps work together and guided me on how to structure them in a way that makes practical sense for my business.",
      "Through her support, I am now able to capture leads, track conversations, automate communication, and monitor payments within one organised system. She is patient, knowledgeable, and always available to answer questions, which makes the learning process smooth and empowering.",
      "I highly recommend Rita to any business owner looking to streamline operations and use Zoho effectively."
    ]
  }
];

// Mission, vision and goal. Drafted from Rita's brand docs and direction; confirm wording with Rita.
export const brandStory = {
  eyebrow: "About Me",
  headline: "I turn recurring business challenges into connected, AI-ready systems.",
  story: [
    "My foundation is in banking operations at Commercial Bank of Africa, where accuracy and audit trails were non-negotiable. From there I moved into digital marketing and CRM automation, and for the last few years I have built business systems and digital platforms with AI as a daily working tool: Zoho One implementations for clients, and my own platforms built with Claude Code on Cloudflare and Supabase. I am an AI-native builder and strategist: I design with AI, build with AI, and help teams run their work with it.",
    "I am particularly interested in turning recurring business challenges into solutions that are structured, repeatable and easier to implement, not simply adding more software to the stack. I believe technology creates the most value when it solves a real business problem, fits the way people work and produces measurable outcomes."
  ],
  focusIntro: "Through my work, I explore how to:",
  focus: [
    "Connect marketing, sales, CRM and operational workflows.",
    "Identify and reduce revenue leakage across the customer lifecycle.",
    "Apply AI and automation to recurring business processes.",
    "Design customer journeys that support conversion, onboarding and retention.",
    "Turn repeatable business problems into practical, documented systems."
  ],
  mission: "To help businesses move beyond disconnected tools and manual processes toward connected systems that improve how they attract customers, manage relationships, deliver services and operate.",
  vision: "Organizations of every size, starting with those across Africa, running on AI-ready systems and digital platforms, so people spend their time on judgment, relationships and growth while systems carry the routine work.",
  approach: "I work with leadership teams and with the people who own operations, sales and finance, either embedded in the team or on a defined project. I start with how your business really runs, then build the system around it.",
  principles: [
    { title: "Systems before AI", text: "AI is only as good as the process and data under it. I map and fix the workflow first, then add AI where it removes real work." },
    { title: "People decide, AI assists", text: "AI reads, drafts, sorts and checks. A person approves anything that touches money, a customer promise or a policy." },
    { title: "Built to be owned", text: "Every system is documented and explained, so the team can run it, change it and trust it long after go-live." }
  ]
};

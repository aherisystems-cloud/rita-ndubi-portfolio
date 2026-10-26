import React from 'react';
import { personalInfo, experienceTimeline, corePillars, certifications } from '../data/portfolioData';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Action Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-900">
              Resume / CV: Rita Ndubi
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-800 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-base sm:text-lg font-bold text-brand-700 mt-1">
              {personalInfo.title}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-mono mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                {personalInfo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-brand-700"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-brand-600" />
                linkedin.com/in/rita-ndubi
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Signature Operating Model */}
          <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/80">
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-900 font-bold mb-1.5">
              Signature Method: The CLEAR Method
            </h2>
            <div className="text-xs text-slate-700 leading-relaxed mb-3">
              Five steps, used on every project: <strong>C</strong>hart the whole business (every function and relationship), <strong>L</strong>ink the systems (data entered once), <strong>E</strong>liminate manual work (rules carry the routine), <strong>A</strong>dd AI with guardrails (people approve what matters), <strong>R</strong>un, review and refine (dashboards, SOPs, team ownership).
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-brand-950 font-medium">
              <div className="p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-400 block text-[9px]">WHO I HELP</span>
                Service Businesses
              </div>
              <div className="p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-400 block text-[9px]">WHAT I DO</span>
                Connected Workflows
              </div>
              <div className="p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-400 block text-[9px]">HOW I HELP</span>
                CRM, Integrations & AI
              </div>
              <div className="p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-400 block text-[9px]">PROCESS</span>
                The CLEAR Method
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-3">
              Core Skills & Systems Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {corePillars.map(p => (
                <div key={p.title} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">{p.title}</div>
                  <div className="text-slate-600 leading-relaxed">{p.skills.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceTimeline.map((exp, i) => (
                <div key={i} className="border-l-2 border-brand-500 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-slate-900 text-base">
                      {exp.role} <span className="text-brand-700 font-medium">| {exp.organization}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-500">
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-600 font-mono font-bold mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Financial Background */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-3">
              Education & Background
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <div className="font-bold text-slate-900 text-sm">
                Bachelor of Business Management (Finance & Banking)
              </div>
              <div className="text-slate-600 font-medium">
                Moi University · Second Class Upper Division
              </div>
              <div className="text-slate-500 text-[11px] pt-1 leading-relaxed">
                The finance grounding I bring to quotation, invoicing and revenue workflows.
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-3">
              Certifications
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-brand-600 font-mono font-bold mt-0.5">›</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-3">
              Key Platforms & Software
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {["Zoho One (CRM, Books, Sign, Creator, Catalyst, Analytics)", "HubSpot", "GoHighLevel", "Make", "Zapier", "REST APIs & Webhooks", "Supabase", "Cloudflare D1, Workers & Pages", "Astro", "Hugo", "GitHub Actions", "Claude, OpenAI & MCP", "WhatsApp Business API", "Payment Gateways"].map(tool => (
                <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { personalInfo, experienceTimeline, corePillars, techStack } from '../data/portfolioData';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Action Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-white">
              Resume / CV — Rita Ndubi
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#070b16] text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-base sm:text-lg font-semibold text-emerald-400 mt-1">
              {personalInfo.title}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 font-mono mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-300"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-emerald-400" />
                linkedin.com/in/rita-ndubi
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Core Skills & Systems Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {corePillars.map(p => (
                <div key={p.title} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-semibold text-white mb-1">{p.title}</div>
                  <div className="text-slate-400 leading-relaxed">{p.skills.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceTimeline.map((exp, i) => (
                <div key={i} className="border-l-2 border-emerald-500/30 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-white text-base">
                      {exp.role} <span className="text-emerald-400 font-normal">| {exp.organization}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono mt-0.5">›</span>
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Education & Background
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-xs">
              <div className="font-bold text-white text-sm">
                Bachelor of Business Management (Finance & Banking)
              </div>
              <div className="text-slate-400">
                Moi University · Second Class Upper Division
              </div>
              <div className="text-slate-500 text-[11px] pt-1">
                Provides the financial literacy and commercial process rigor applied across all CRM, quotation, and revenue operations workflows.
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Key Platforms & Software
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {["Zoho One & CRM", "Make.com (Integromat)", "Zapier", "HubSpot", "GoHighLevel", "Airtable", "Notion", "ClickUp", "OpenAI & Claude Tools", "REST Webhooks", "Google Workspace"].map(tool => (
                <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
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

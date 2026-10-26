import React, { useState } from 'react';
import { experienceTimeline, personalInfo } from '../data/portfolioData';
import { Copy, Check, FileText } from 'lucide-react';

export default function InteractiveResume({ onOpenModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyTextResume = () => {
    const resumeText = `RITA NDUBI
${personalInfo.title}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedinUrl}
Email: ${personalInfo.email}

PROFESSIONAL SUMMARY
${personalInfo.bio}

SIGNATURE METHOD: The CLEAR Method
- What I do: turn manual sales and back-office work into connected, automated workflows
- Who I help: service businesses with complex quotes, busy inboxes and too many spreadsheets
- How: CRM pipelines, quote-to-invoice automation, integrations, and AI where the input is messy
- Method: Chart the whole business, Link the systems, Eliminate manual work, Add AI with guardrails, Run, review and refine

EXPERIENCE
${experienceTimeline.map(exp => `
${exp.role}, ${exp.organization} (${exp.period})
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-700 font-semibold mb-3">
              Experience
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Work Experience & Background
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From banking operations to marketing automation to building business systems and AI-powered platforms: nine years of making the way organizations work faster, clearer and more connected.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={onOpenModal}
              className="px-4 py-2 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>

        {/* Clean, spacious timeline */}
        <div className="space-y-6 max-w-3xl">
          {experienceTimeline.map((item) => (
            <div
              key={item.role + item.organization}
              className="lit-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-brand-700 font-semibold">
                    {item.organization} · {item.location}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 font-medium">
                  {item.period}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="text-brand-600 font-mono font-bold mt-0.5">›</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

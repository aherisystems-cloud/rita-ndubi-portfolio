import React, { useState } from 'react';
import { experienceTimeline, personalInfo } from '../data/portfolioData';
import { Copy, Check, FileText } from 'lucide-react';

export default function InteractiveResume({ onOpenModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyTextResume = () => {
    const resumeText = `RITA NDUBI
Business Systems & Automation Specialist
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedinUrl}
Email: ${personalInfo.email}

PROFESSIONAL SUMMARY
${personalInfo.bio}

CORE EXPERIENCE
${experienceTimeline.map(exp => `
${exp.role} — ${exp.organization} (${exp.period})
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              Experience
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              Work Experience & Background
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Proven experience setting up CRM systems, automating everyday business tasks, and helping cross-functional teams run with clarity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyTextResume}
              className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? "Copied ATS Text" : "Copy Plaintext ATS"}</span>
            </button>

            <button
              onClick={onOpenModal}
              className="px-4 py-2 rounded-xl font-semibold text-slate-950 bg-white hover:bg-slate-100 text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Interactive CV</span>
            </button>
          </div>
        </div>

        {/* Clean, spacious timeline */}
        <div className="space-y-8 max-w-3xl">
          {experienceTimeline.map((item) => (
            <div
              key={item.role + item.organization}
              className="lit-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400">
                    {item.organization} · {item.location}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  {item.period}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-mono mt-0.5">›</span>
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

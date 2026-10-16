import React, { useState } from 'react';
import { experienceTimeline, personalInfo } from '../data/portfolioData';
import { Briefcase, Download, Copy, Check, Calendar, MapPin, ChevronRight, FileText } from 'lucide-react';

export default function InteractiveResume({ onOpenModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyTextResume = () => {
    const resumeText = `RITA NDUBI
Business Systems & RevOps Lead | AI & Automation Strategist
Location: Nairobi, Kenya (UTC+3) · Open for Global Remote Roles
LinkedIn: ${personalInfo.linkedinUrl}
Email: ${personalInfo.email}

PROFESSIONAL SUMMARY
${personalInfo.bio}

CORE EXPERIENCE
${experienceTimeline.map(exp => `
${exp.role} — ${exp.organization} (${exp.period})
Location: ${exp.location}
Key Achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 border-t border-slate-900 bg-[#070b16]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
              <span>// CAREER TRAJECTORY & IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Experience & Qualifications
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A track record of building operational efficiency, designing resilient data pipelines, and unlocking capacity for scaling teams.
            </p>
          </div>

          {/* Quick Actions for Recruiters */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyTextResume}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono flex items-center gap-2 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? "Copied ATS Text!" : "Copy Clean ATS Text"}</span>
            </button>

            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 text-xs font-mono flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Full Interactive CV</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12 max-w-4xl mx-auto">
          {experienceTimeline.map((item, idx) => (
            <div key={item.role + item.organization} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mx-auto mt-0.5" />
              </div>

              <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-7 group-hover:border-slate-700 transition-all glow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-emerald-400 font-mono text-sm font-semibold">
                      {item.organization}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="text-emerald-400 font-mono mt-0.5">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

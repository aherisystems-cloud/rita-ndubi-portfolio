import React from 'react';
import { corePillars } from '../data/portfolioData';
import { Bot, GitBranch, TrendingUp, LayoutDashboard } from 'lucide-react';

const iconMap = {
  'agentic-systems': Bot,
  'journey-mapping': GitBranch,
  'revenue-ops': TrendingUp,
  'ops-infrastructure': LayoutDashboard,
};

export default function CorePillars() {
  return (
    <section id="systems" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-3">
            Core Focus Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4" style={{ color: '#090d16' }}>
            Systems, AI Agents & Operations
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Growing companies need more than isolated chatbots and messy spreadsheets. I map the full customer journey, build autonomous agentic systems, and connect sales pipelines with back-office operations to eliminate revenue leakage.
          </p>
        </div>

        {/* 4 Expansive Pillars (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || Bot;
            return (
              <div
                key={pillar.id}
                className="lit-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-100 font-semibold">
                      Core Discipline
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-1" style={{ color: '#090d16' }}>
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-mono text-emerald-700 font-semibold mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-medium">
                    Key Capabilities & Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200/80 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { corePillars } from '../data/portfolioData';
import { Target, Cpu, Database } from 'lucide-react';

const iconMap = {
  crm: Target,
  automation: Cpu,
  operations: Database,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Systems I Build & Manage
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Growing companies don't need bloated tech stacks. They need clean, reliable setups that connect customer inquiries, sales pipelines, and daily fulfillment without manual drag.
          </p>
        </div>

        {/* 3 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || Target;
            return (
              <div
                key={pillar.id}
                className="lit-card rounded-2xl p-7 flex flex-col justify-between bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-medium">
                    Tools & Methods:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200/80"
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

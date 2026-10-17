import React from 'react';
import { corePillars } from '../data/portfolioData';
import { Target, Cpu, Database, ArrowUpRight } from 'lucide-react';

const iconMap = {
  revops: Target,
  automation: Cpu,
  governance: Database,
};

export default function CorePillars() {
  return (
    <section id="architecture" className="py-24 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Core Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            How I Engineer Operational Leverage
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            High-output companies do not rely on brute force. They run on decoupled, resilient architectures that connect lead acquisition, data hygiene, and automated delivery.
          </p>
        </div>

        {/* 3 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, i) => {
            const Icon = iconMap[pillar.id] || Target;
            return (
              <div
                key={pillar.id}
                className="lit-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2.5">
                    Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
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

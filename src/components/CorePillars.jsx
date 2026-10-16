import React from 'react';
import { corePillars } from '../data/portfolioData';
import { Target, Cpu, Database, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Target: Target,
  Cpu: Cpu,
  Database: Database,
  Globe: Globe,
};

export default function CorePillars() {
  return (
    <section id="pillars" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <span>// ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How I Build Operational Leverage
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-performing remote teams don't just work harder; they operate on resilient, self-healing systems that connect revenue, data, and daily execution.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {corePillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Target;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 hover:border-emerald-500/40 transition-all glow-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400/70 transition-colors">
                      0{corePillars.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Arsenal:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
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

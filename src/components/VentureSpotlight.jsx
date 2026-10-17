import React from 'react';
import { ventureSpotlights } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function VentureSpotlight() {
  return (
    <section id="ventures" className="py-24 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Ventures
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
            Ventures I Build & Run
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Beyond client work, I build and operate platforms that solve practical operational and workflow challenges for growing teams and regional businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventureSpotlights.map((v) => (
            <div
              key={v.name}
              className="lit-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {v.name}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">
                      {v.role} · {v.timeline}
                    </div>
                  </div>

                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs font-semibold text-slate-200 mb-3">
                  {v.tagline}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {v.description}
                </p>

                <div className="space-y-2 mb-6">
                  {v.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-mono">›</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                Live Platform
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

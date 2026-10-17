import React from 'react';
import { ventureSpotlights } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function VentureSpotlight() {
  return (
    <section id="ventures" className="py-24 md:py-32 border-t border-slate-200/80 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-3">
            Ventures
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Ventures I Build & Run
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Beyond client work, I build and operate platforms that solve practical operational and workflow challenges for growing teams and regional businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventureSpotlights.map((v) => (
            <div
              key={v.name}
              className="lit-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {v.name}
                    </h3>
                    <div className="text-xs font-mono text-emerald-700 mt-0.5 font-semibold">
                      {v.role} · {v.timeline}
                    </div>
                  </div>

                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs font-bold text-slate-800 mb-3">
                  {v.tagline}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {v.description}
                </p>

                <div className="space-y-2 mb-6">
                  {v.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-emerald-600 font-mono font-bold">›</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 font-medium">
                Live Platform
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

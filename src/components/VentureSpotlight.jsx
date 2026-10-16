import React from 'react';
import { ventureSpotlights } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Building2, Rocket, ArrowUpRight } from 'lucide-react';

export default function VentureSpotlight() {
  return (
    <section id="ventures" className="py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>// ENTREPRENEURIAL INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ventures & Built Platforms
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Beyond consulting, I design, launch, and operate ventures that solve real business problems through systems thinking, localized tech, and automation.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventureSpotlights.map((venture, idx) => (
            <div
              key={venture.name}
              className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between glow-card relative overflow-hidden group"
            >
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      {idx === 0 ? <Building2 className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {venture.name}
                      </h3>
                      <div className="text-xs font-mono text-slate-400">
                        {venture.role} · {venture.timeline}
                      </div>
                    </div>
                  </div>

                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-1 text-xs font-mono"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="text-xs font-semibold text-emerald-400 font-mono mb-3 uppercase tracking-wider">
                  {venture.tagline}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {venture.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Outcomes & Milestones:
                  </div>
                  {venture.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Architecture: Low-Code + Custom APIs</span>
                <span className="text-emerald-400 font-medium">Live & Scaled</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { techStack } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-3">
            Platforms & Tools
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Tools & Software I Work With
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tools are only useful when they talk to each other cleanly. Here are the core platforms I set up, connect, and manage for teams.
          </p>
        </div>

        {/* Clean 3-col minimal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {techStack.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl lit-card flex items-center justify-between bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-500/40 hover:shadow-xs transition-all"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  {tool.name}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  {tool.role}
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

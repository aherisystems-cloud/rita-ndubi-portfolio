import React from 'react';
import { techStack } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Platforms & Tools
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
            Tools & Software I Work With
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tools are only useful when they talk to each other cleanly. Here are the core platforms I set up, connect, and manage for teams.
          </p>
        </div>

        {/* Clean 3-col minimal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {techStack.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl lit-card flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-white text-sm">
                  {tool.name}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {tool.role}
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

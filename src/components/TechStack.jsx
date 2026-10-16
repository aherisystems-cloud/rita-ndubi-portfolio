import React, { useState } from 'react';
import { techStackCategories } from '../data/portfolioData';
import { Wrench, CheckCircle, Sparkles, Layers, Cpu } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...techStackCategories.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? techStackCategories
    : techStackCategories.filter(c => c.category === activeCategory);

  return (
    <section id="stack" className="py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>// ARCHITECTURE & TOOLING ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical Stack & Ecosystem Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tools are only as good as the architecture behind them. Here is the battle-tested software ecosystem I leverage to build reliable business infrastructure.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex overflow-x-auto pb-4 justify-start lg:justify-center gap-2 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {catGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {catGroup.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400/80 self-start sm:self-center bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {catGroup.tools.length} Core Systems
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/30 transition-all glow-card"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-200 text-sm">
                        {tool.name}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-emerald-400 border border-slate-800">
                        {tool.level}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <span className="text-emerald-500">›</span>
                      <span>{tool.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

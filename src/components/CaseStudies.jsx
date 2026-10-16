import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, AlertTriangle, Workflow, Clock, Sparkles, TrendingUp, Layers } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);

  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="case-studies" className="py-24 border-t border-slate-900 bg-[#070b16]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>// PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered Systems & Case Studies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real workflows designed for scale. Explore the exact bottlenecks, architectural blueprints, and quantifiable ROI delivered across operational ecosystems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-4 gap-2.5 sm:gap-3 mb-10 no-scrollbar">
          {caseStudies.map((study) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Workflow className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{study.title.split(' ')[0]} {study.title.split(' ')[1]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isSelected ? 'bg-emerald-400/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                }`}>
                  {study.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {activeCase.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Client: {activeCase.client}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeCase.title}
              </h3>
            </div>
            
            {/* Tools Used Chips */}
            <div className="flex flex-wrap gap-1.5 lg:justify-end">
              {activeCase.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 sm:p-6 rounded-2xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>The Operational Bottleneck</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineered System Solution</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Quantified Impact / Metrics */}
          <div className="mb-10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Quantified Business Impact & ROI</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCase.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="text-xs font-medium text-slate-400 mb-2">
                    {metric.label}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-xs text-slate-500 line-through font-mono">
                      {metric.before}
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">
                      {metric.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture Flow */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>System Data Flow & Execution Stages</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeCase.architecture.map((node) => (
                <div
                  key={node.step}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition-all relative group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                    {node.step}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1.5">
                    {node.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

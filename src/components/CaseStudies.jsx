import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { ArrowRight, Workflow, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);

  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="case-studies" className="py-24 md:py-36 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Selected Work & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Production Systems & Quantified Impact
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real systems engineered for scale. Explore the exact bottlenecks, automated middleware, and measurable business ROI delivered in live environments.
          </p>
        </div>

        {/* Clean Pill Selector */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {caseStudies.map((study) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-950 border-white shadow-sm font-semibold'
                    : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {study.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Editorial Case Study Card */}
        <div className="lit-card rounded-3xl p-6 sm:p-10 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-8 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400">
                <span>{activeCase.badge}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{activeCase.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {activeCase.title}
              </h3>
              <p className="text-sm text-slate-300 font-normal">
                {activeCase.tagline}
              </p>
            </div>

            {/* Tools list */}
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {activeCase.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution: Calm & Refined */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium">
                The Bottleneck
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-medium">
                The Engineered System
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Quantified Metrics: Calm & High Contrast */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Measurable Business ROI</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCase.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="text-xs text-slate-400 mb-2">{m.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-500 line-through font-mono">{m.before}</span>
                    <span className="text-xs text-slate-600">→</span>
                    <span className="text-xl font-bold text-white font-mono">{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>System Flow & Execution Stages</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeCase.architecture.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-2xl bg-white/[0.015] border border-white/[0.05] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400/80 mb-2">
                      Stage 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-white mb-1.5">
                      {step.title}
                    </div>
                    <p className="text-[12px] text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

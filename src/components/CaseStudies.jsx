import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { ArrowRight, TrendingUp, Layers } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);

  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="case-studies" className="py-24 md:py-36 border-t border-slate-200/80 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-3">
            Selected Client Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Systems Built & Measurable Results
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Real projects with practical outcomes. Here is how I identified the bottlenecks, connected the right tools, and eliminated hours of repetitive manual work.
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
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm font-semibold'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-200/80'
                }`}
              >
                {study.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Editorial Case Study Card */}
        <div className="lit-card rounded-3xl p-6 sm:p-10 space-y-10 bg-white border border-slate-200/90 shadow-sm">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-700 font-medium">
                <span>{activeCase.badge}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">{activeCase.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                {activeCase.title}
              </h3>
              <p className="text-sm text-slate-600 font-normal">
                {activeCase.tagline}
              </p>
            </div>

            {/* Tools list */}
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {activeCase.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-2 font-bold">
                The Bottleneck
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2 font-bold">
                The Solution
              </div>
              <p className="text-sm text-slate-800 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Quantified Metrics */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Measurable Results & Time Saved</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCase.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="text-xs text-slate-500 mb-2">{m.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-400 line-through font-mono">{m.before}</span>
                    <span className="text-xs text-slate-400">→</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Steps Flow */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2 font-medium">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Step-by-Step Workflow</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(activeCase.workflowSteps || []).map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-emerald-700 mb-2 font-bold">
                      Step 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1.5">
                      {step.title}
                    </div>
                    <p className="text-[12px] text-slate-600 leading-relaxed">
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

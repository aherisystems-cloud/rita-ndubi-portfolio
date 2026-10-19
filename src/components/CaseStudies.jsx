import React, { useState } from 'react';
import { caseStudies, caseStudyCategories } from '../data/portfolioData';
import { ArrowRight, TrendingUp, Layers, CheckCircle2, Sparkles } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);

  // Filter projects based on active category
  const filteredCases = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.category === selectedCategory);

  // Fallback to first available case if currently selected is not in filtered list
  const activeCase = filteredCases.find((c) => c.id === selectedCaseId) || filteredCases[0] || caseStudies[0];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const newFiltered = catId === 'all' 
      ? caseStudies 
      : caseStudies.filter((c) => c.category === catId);
    if (newFiltered.length > 0) {
      setSelectedCaseId(newFiltered[0].id);
    }
  };

  return (
    <section id="case-studies" className="py-24 md:py-36 border-t border-slate-200/80 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Portfolio · 10 Client Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Real Systems Built & Measurable Impact
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every project below was built and deployed to solve real operational bottlenecks—from private aviation command centers and retail AI agents to healthcare practice automation and cloud platforms.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All 10 projects mapped to Aheri Systems Framework</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-6 no-scrollbar">
          {caseStudyCategories.map((cat) => {
            const count = cat.id === 'all' 
              ? caseStudies.length 
              : caseStudies.filter(c => c.category === cat.id).length;
            const isCatActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer flex items-center gap-2 ${
                  isCatActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isCatActive ? 'bg-slate-700 text-emerald-300' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Selector Pills */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {filteredCases.map((study) => {
            const isSelected = study.id === activeCase.id;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-500/60 shadow-xs ring-1 ring-emerald-500 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>{study.title.split('&')[0].split('—')[0].trim()}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {study.badge.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="lit-card rounded-3xl p-6 sm:p-10 space-y-10 bg-white border border-slate-200/90 shadow-sm">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-8 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-emerald-700 font-semibold">
                <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{activeCase.badge}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">{activeCase.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                {activeCase.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {activeCase.tagline}
              </p>
            </div>

            {/* Tools list */}
            <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0 max-w-sm">
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
                The Operational Bottleneck / Revenue Leakage
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2 font-bold">
                The Delivered Solution & System Architecture
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

          {/* Workflow Steps Flow - Aheri Systems Framework */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-2 font-medium">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>Customer Capture to Operations Engine Flow</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-semibold">
                Aheri Systems Framework
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {(activeCase.workflowSteps || []).map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-emerald-700 mb-2 font-bold flex items-center justify-between">
                      <span>{step.stage || `Stage 0${idx + 1}`}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1.5">
                      {step.title}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
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

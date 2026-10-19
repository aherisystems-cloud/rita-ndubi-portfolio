import React, { useState } from 'react';
import { operatingFramework } from '../data/portfolioData';
import { 
  Compass, 
  Target, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export default function FrameworkSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = operatingFramework.stages[activeStageIndex];

  const questionIcons = [
    <Workflow className="w-5 h-5 text-emerald-600" />,
    <Target className="w-5 h-5 text-blue-600" />,
    <Cpu className="w-5 h-5 text-purple-600" />,
    <Compass className="w-5 h-5 text-amber-600" />
  ];

  return (
    <section id="framework" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Personal Brand & Operating Model
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Revenue-to-Operations <span className="text-emerald-700">Engine</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            When business leaders ask me what I do, who I help, and how my process works—this is the foundational framework I deploy to stop revenue leakages and build systems that scale.
          </p>
        </div>

        {/* 4 Core Brand Positioning Cards (The "Pitch Matrix") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {operatingFramework.coreQuestions.map((item, idx) => (
            <div
              key={item.id}
              className="lit-card p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center">
                      {questionIcons[idx]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Question {item.number}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100">
                    Core Anchor
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.question}
                </h3>

                <p className="text-sm font-semibold text-emerald-900 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100/80 mb-3 leading-snug">
                  "{item.shortAnswer}"
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified in 10+ real-world implementations</span>
              </div>
            </div>
          ))}
        </div>

        {/* The 5-Stage Process Walkthrough */}
        <div className="lit-card rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-1.5">
                <Layers className="w-4 h-4" />
                <span>The 5-Stage Customer Journey Flow</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                From First Inquiry to Back-Office Governance
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Interactive Walkthrough · Click each stage to inspect
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {operatingFramework.stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500/30'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                      Stage {stage.step}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                  </div>
                  <div className="text-xs sm:text-sm font-bold truncate">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 transition-all">
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Stage {activeStage.step} of 05
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {activeStage.name}
                </h4>
                <p className="text-sm font-medium text-slate-600">
                  {activeStage.tagline}
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-800 flex items-center gap-2 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>{activeStage.metric}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Problem / Bottleneck */}
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-2 flex items-center gap-1.5">
                  <span>The Revenue Leakage / Bottleneck</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeStage.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>The Systems & RevOps Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {activeStage.solution}
                </p>
              </div>

            </div>

            {/* Role of AI & Automation */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Autonomous AI & Middleware Role
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">
                    {activeStage.aiRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                <span>Phase Status: Deployed & Active</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </div>

          </div>

          {/* Section Footer Call-to-Action */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
              Applied across all client engagements at <strong className="text-slate-900">Aheri Systems</strong>.
            </div>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>See Real Implementations Across All 10 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

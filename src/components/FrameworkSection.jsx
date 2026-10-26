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
    <Workflow className="w-5 h-5 text-brand-600" />,
    <Target className="w-5 h-5 text-blue-600" />,
    <Cpu className="w-5 h-5 text-purple-600" />,
    <Compass className="w-5 h-5 text-amber-600" />
  ];

  return (
    <section id="framework" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-brand-800 bg-brand-50 border border-brand-200 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            How I Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The <span className="text-brand-700">CLEAR</span> Method
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            My method for taking an organization from scattered tools to AI-ready systems. It sits behind every project on this site, and it is how I decide what to fix first and explain the plan to a team.
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
                  <span className="text-xs font-mono text-brand-700 font-semibold px-2 py-0.5 rounded bg-brand-50 border border-brand-100">
                    Short Answer
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.question}
                </h3>

                <p className="text-sm font-semibold text-brand-900 bg-brand-50/60 p-3 rounded-xl border border-brand-100/80 mb-3 leading-snug">
                  "{item.shortAnswer}"
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* The 5-Stage Process Walkthrough */}
        <div className="lit-card rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-700 uppercase tracking-wider mb-1.5">
                <Layers className="w-4 h-4" />
                <span>The Five Steps</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Chart · Link · Eliminate · Add AI · Run & Refine
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Click a step to see the problem and the fix
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
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand-500/30'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-brand-400' : 'text-slate-400'}`}>
                      {stage.letter} · Step {stage.step}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>}
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
                <span className="text-[10px] font-mono font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                  {activeStage.letter} · Step {activeStage.step} of 05
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {activeStage.name}
                </h4>
                <p className="text-sm font-medium text-slate-600">
                  {activeStage.tagline}
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-800 flex items-center gap-2 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
                <span>{activeStage.metric}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Problem / Bottleneck */}
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-2 flex items-center gap-1.5">
                  <span>The Usual Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeStage.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-brand-50/70 border border-brand-200/80">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-900 font-bold mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>What I Build</span>
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
                    Where AI Helps
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">
                    {activeStage.aiRole}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Section Footer Call-to-Action */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
              Used on every client engagement at <strong className="text-slate-900">Aheri Systems</strong> and on my own platforms.
            </div>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-700 hover:text-brand-800 transition-colors"
            >
              <span>See the 9 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

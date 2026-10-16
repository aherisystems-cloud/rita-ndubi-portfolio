import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download, Calendar, CheckCircle2, Cpu, Zap, Database, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume, onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    { label: "1. Multi-Channel Webhook", tool: "Make.com", status: "Active" },
    { label: "2. AI Scoring & Deduplication", tool: "OpenAI + Zoho CRM", status: "Verified" },
    { label: "3. Dynamic Quote PDF Gen", tool: "Render Engine", status: "< 3 min" },
    { label: "4. Provisioning & Slack Sync", tool: "ClickUp + Slack", status: "Triggered" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-inner shadow-emerald-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Business Systems Strategist & RevOps Architect</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Remote Operations</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architecting <span className="gradient-text">Predictable Revenue</span> & Scalable Business Systems
          </h1>

          {/* Value Proposition Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            I help high-growth remote companies and scaling businesses replace manual chaos with automated operational engines. From bespoke <strong className="text-white font-semibold">CRM workflows</strong> and <strong className="text-white font-semibold">Make/Zapier pipelines</strong> to <strong className="text-white font-semibold">AI-augmented operations</strong>, I build systems that scale cleanly without hiring bloat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#case-studies"
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center gap-2 group text-sm sm:text-base"
            >
              Explore Systems & Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-sm sm:text-base backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              Download Executive CV
            </button>

            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/60 border border-slate-800 transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 text-teal-400" />
              Book Discovery Call
            </a>
          </div>

          {/* Interactive Live Systems Simulation Bar */}
          <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md mb-14 text-left">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-slate-200 font-semibold">Live Architecture Flow Simulation:</span>
                <span className="text-emerald-400 hidden sm:inline">Lead-to-Cash Automation Engine</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400/80 font-mono text-[11px]">
                <Cpu className="w-3.5 h-3.5" />
                <span>Zero Manual Touches</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.label}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer p-2.5 sm:p-3 rounded-xl border transition-all text-left ${
                      isActive
                        ? 'bg-emerald-500/10 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1 font-mono text-slate-400">
                      <span className={isActive ? 'text-emerald-300 font-bold' : ''}>STEP 0{idx + 1}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        isActive ? 'bg-emerald-400 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.status}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-1">
                      {step.label}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      via {step.tool}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Quantified Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {personalInfo.quickStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all text-center glow-card"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                  <span className="gradient-text">{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-xs sm:text-sm text-emerald-400/80 font-mono font-normal">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-medium mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Business Systems & RevOps Specialist</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">Working with Teams Globally</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8 max-w-4xl mx-auto">
          Building the Systems & Automations That Make Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">Run Like Clockwork</span>
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          I connect your sales pipelines, quoting portals, vendor management, and internal tools—eliminating manual copy-pasting so your business runs on one smooth, dependable engine.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#case-studies"
            className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-sm transition-all flex items-center gap-2 text-sm"
          >
            View Case Studies & Results
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all flex items-center gap-2 text-sm cursor-pointer"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            Executive Resume
          </button>
        </div>

        {/* Real System Architecture Preview (Klock Aviation Flow) */}
        <div className="lit-card rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto text-left mb-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-white font-medium">Real-World Implementation:</span>
              <span className="text-slate-400 hidden sm:inline">Klock Aviation Complete Operating Engine</span>
            </div>
            <div className="text-emerald-400/90 text-[11px]">
              Zoho One + Catalyst + Sign
            </div>
          </div>

          {/* 4 Connected Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: "Charter Quote Request", sub: "Route & Pricing Engine", tag: "Quoting" },
              { title: "Client Approval Portal", sub: "1-Click Agreement & Invoice", tag: "Client Portal" },
              { title: "Vendor Compliance Hub", sub: "Licenses & Expiry Alerts", tag: "Operations" },
              { title: "Catalyst Command Center", sub: "Executive Live Dashboard", tag: "Management" },
            ].map((node, i) => (
              <div
                key={node.title}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Stage 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400/80 px-1.5 py-0.5 rounded bg-emerald-500/10">
                    {node.tag}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">
                  {node.title}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {node.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4 border-t border-white/[0.06]">
          {personalInfo.quickStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

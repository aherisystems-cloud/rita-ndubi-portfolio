import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
      
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium mb-8 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
          <span className="font-semibold text-slate-800">Business Systems · AI Automation · AI Adoption</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-600">Nairobi · Working with teams worldwide</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 max-w-4xl mx-auto">
          Business Systems and Digital Platforms, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-600 to-brand-600">Built With AI and Automation</span>
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          I help organizations move AI from experiment to everyday operations. I design the business systems, connect the tools, build the automations and digital platforms, and put AI agents to work where they add real value, with people in control of the decisions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#case-studies"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all flex items-center gap-2 text-sm"
          >
            See the Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#framework"
            className="px-6 py-3 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 text-sm"
          >
            How I Work
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all flex items-center gap-2 text-sm"
          >
            About Me
          </a>
        </div>

        {/* Quick Positioning Matrix Strip (Who I Help · What I Do · How I Help) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-14 text-left">
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-400/40 transition-all">
            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-700 font-bold mb-1">
              AI Adoption
            </div>
            <div className="text-xs font-bold text-slate-900 mb-0.5">
              From Pilots to Practice
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Find where AI genuinely helps, set the guardrails, and roll it into real workflows the team trusts and uses.
            </div>
          </div>
          
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-400/40 transition-all">
            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-700 font-bold mb-1">
              Business Systems
            </div>
            <div className="text-xs font-bold text-slate-900 mb-0.5">
              CRM, Integrations & Automation
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Zoho One, HubSpot, Make, APIs and webhooks, connected so data moves from inquiry to invoice to report on its own.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-400/40 transition-all">
            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-700 font-bold mb-1">
              Digital Platforms
            </div>
            <div className="text-xs font-bold text-slate-900 mb-0.5">
              Built With AI, Run on the Edge
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Websites, portals and SQL-backed platforms built with Claude Code on Cloudflare and Supabase, live and maintained.
            </div>
          </div>
        </div>

        {/* Real System Architecture Preview (Enterprise Flow) */}
        <div className="lit-card rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto text-left mb-14 shadow-sm border border-slate-200/90 bg-white">
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs font-mono text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span className="text-slate-900 font-semibold">Example build:</span>
              <span className="text-slate-600 hidden sm:inline">Klock Aviation, inquiry to invoice on Zoho One</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-[11px] font-mono hidden md:inline">5-stage framework</span>
              <div className="text-brand-700 bg-brand-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-brand-100">
                Zoho CRM · Sign · Books · Catalyst
              </div>
            </div>
          </div>

          {/* 5 Connected Stages: Customer Capture to Operations Engine */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { 
                stage: "01 · Attract & Capture", 
                title: "One Intake per Division", 
                sub: "Web, referral and campaign requests land in the right CRM pipeline", 
                tag: "Capture" 
              },
              { 
                stage: "02 · Follow Up & Nurture", 
                title: "Routing & Priority", 
                sub: "Rules assign an owner and flag priority clients", 
                tag: "Nurture" 
              },
              { 
                stage: "03 · Convert & Contract", 
                title: "Quote, Sign, Invoice", 
                sub: "Quote from the record, Zoho Sign, deposit invoice in Zoho Books", 
                tag: "Convert" 
              },
              { 
                stage: "04 · Onboard & Retain", 
                title: "Client Updates", 
                sub: "Booking updates and post-trip follow-up", 
                tag: "Retain" 
              },
              { 
                stage: "05 · Operations Engine", 
                title: "Compliance & Dashboard", 
                sub: "Document expiry alerts and a live Zoho Catalyst dashboard", 
                tag: "Ops Engine" 
              },
            ].map((node) => (
              <div
                key={node.title}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-500/40 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      {node.stage}
                    </span>
                    <span className="text-[10px] font-mono text-brand-700 px-1.5 py-0.5 rounded bg-brand-50 border border-brand-100 font-semibold">
                      {node.tag}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    {node.title}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 leading-snug mt-2">
                  {node.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 border-t border-slate-200">
          {personalInfo.quickStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

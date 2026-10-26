import React from 'react';
import { thoughtLeadership } from '../data/portfolioData';
import { BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ThoughtLeadership() {
  return (
    <section className="py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-brand-400 mb-3">
            <span>// PLAYBOOKS & THOUGHT LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Systems Playbooks & Frameworks
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Documented thinking on CRM architecture, remote operations, lead velocity, and the reality of deploying practical AI into business workflows.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {thoughtLeadership.map((article) => (
            <div
              key={article.title}
              className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-500/30 transition-all glow-card group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {article.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-brand-400 group-hover:translate-x-1 transition-transform">
                <span className="font-semibold">Read System Framework</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

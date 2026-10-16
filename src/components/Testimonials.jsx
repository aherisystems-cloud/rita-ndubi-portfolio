import React from 'react';
import { testimonials } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-slate-900 bg-[#060a15]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>// REPUTATION & VALIDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Remote Founders & Operators
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            What leaders and cross-functional teams say about the reliability, clarity, and architectural ROI I bring to their businesses.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between glow-card relative"
            >
              <div>
                <Quote className="w-8 h-8 text-emerald-400/40 mb-4" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

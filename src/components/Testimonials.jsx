import React from 'react';
import { testimonials, personalInfo } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-700 font-semibold mb-3">
            Client Recommendations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            In My Clients' Words
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Shared as written by clients on{' '}
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline underline-offset-2 hover:text-brand-800">
              LinkedIn
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="lit-card rounded-3xl p-6 sm:p-8 bg-white flex flex-col justify-between">
              <blockquote>
                <Quote className="w-7 h-7 text-brand-300 mb-4" />
                {t.quote.map((p) => (
                  <p key={p.slice(0, 24)} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </blockquote>
              <figcaption className="pt-4 mt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                <div className="text-[11px] font-mono text-brand-700 mt-1">{t.relation}</div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

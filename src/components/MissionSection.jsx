import React from 'react';
import { brandStory } from '../data/portfolioData';
import { Compass, Eye, Target } from 'lucide-react';

export default function MissionSection() {
  const pillars = [
    { icon: Target, label: 'Mission', text: brandStory.mission },
    { icon: Eye, label: 'Vision', text: brandStory.vision },
    { icon: Compass, label: 'How I Work With Teams', text: brandStory.approach },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-slate-200/80 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-14">
          <div className="md:col-span-4">
            <img
              src="/rita-ndubi.jpg"
              alt="Rita Ndubi"
              width="400"
              height="400"
              loading="lazy"
              className="w-full max-w-xs aspect-square object-cover rounded-3xl border border-slate-200 shadow-sm"
            />
            <div className="mt-4">
              <div className="font-bold text-slate-900">Rita Ndubi</div>
              <div className="text-sm text-slate-500">Business Systems & AI Automation Strategist</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Nairobi, Kenya</div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-700 font-semibold mb-3">
              {brandStory.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {brandStory.headline}
            </h2>
            {brandStory.story.map((p) => (
              <p key={p.slice(0, 20)} className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-sm font-semibold text-slate-900 mb-3">{brandStory.focusIntro}</div>
              <ol className="space-y-2">
                {brandStory.focus.map((f, i) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="font-mono text-brand-700 font-bold">0{i + 1}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {pillars.map(({ icon: Icon, label, text }) => (
            <div key={label} className="lit-card rounded-2xl p-6 bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-brand-700 font-bold mb-2">
                {label}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200">
          {brandStory.principles.map((p, i) => (
            <div key={p.title}>
              <div className="text-xs font-mono text-slate-400 mb-1">0{i + 1}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cloud, Heart, ArrowUp, Mail } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#03060c] py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
              RN
            </div>
            <div>
              <div className="text-white font-bold text-sm">Rita Ndubi</div>
              <div className="text-slate-500 text-[11px]">Business Systems & RevOps Lead</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#pillars" className="hover:text-emerald-400 transition-colors">Pillars</a>
            <a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Tool Stack</a>
            <a href="#remote" className="hover:text-emerald-400 transition-colors">Remote</a>
            <a href="#ventures" className="hover:text-emerald-400 transition-colors">Ventures</a>
            <a href="#resume" className="hover:text-emerald-400 transition-colors">Resume</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Rita Ndubi. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <Cloud className="w-3.5 h-3.5 text-orange-400" />
            <span>Optimized for Cloudflare Pages Global Edge Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 py-12 text-slate-500 text-xs font-mono bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-900 text-xs">
              RN
            </div>
            <div className="text-slate-900 font-bold text-sm">
              Rita Ndubi <span className="text-slate-400 font-normal">· Business Systems & Automation</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-slate-600">
            <a href="#systems" className="hover:text-slate-950 transition-colors">Systems</a>
            <a href="#case-studies" className="hover:text-slate-950 transition-colors">Case Studies</a>
            <a href="#stack" className="hover:text-slate-950 transition-colors">Stack</a>
            <a href="#ventures" className="hover:text-slate-950 transition-colors">Ventures</a>
            <a href="#experience" className="hover:text-slate-950 transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Rita Ndubi. All rights reserved.
          </div>
          <div>
            Built with React & Vite · Hosted on Cloudflare Pages
          </div>
        </div>
      </div>
    </footer>
  );
}

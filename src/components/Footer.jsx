import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] py-12 text-slate-500 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center font-semibold text-white text-xs">
              RN
            </div>
            <div className="text-white font-medium text-sm">
              Rita Ndubi <span className="text-slate-500 font-normal">· Business Systems & Automation</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-slate-400">
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#ventures" className="hover:text-white transition-colors">Ventures</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px]">
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

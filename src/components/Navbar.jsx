import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Stack', href: '#stack' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#070a12]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center font-semibold text-white text-sm tracking-tight group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
              RN
            </div>
            <div>
              <div className="font-semibold text-white tracking-tight text-base flex items-center gap-2">
                Rita Ndubi
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Business Systems & AI Architect
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume / CV</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-white/[0.08] px-6 py-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-slate-200 bg-white/[0.05] rounded-xl border border-white/[0.08]"
            >
              View Full CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-950 bg-white rounded-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

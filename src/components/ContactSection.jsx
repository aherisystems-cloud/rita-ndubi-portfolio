import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Calendar, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Whether you are hiring for a business systems & automation role, looking to streamline client intake, or cleaning up your daily workflows, I'd be glad to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="lit-card rounded-2xl p-6 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email</div>
                <div className="text-sm font-semibold text-white mt-0.5">{personalInfo.email}</div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lit-card rounded-2xl p-6 flex items-center justify-between hover:border-white/[0.15] transition-all group"
            >
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">
                  linkedin.com/in/rita-ndubi
                </div>
              </div>
              <LinkedInIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>

            <a
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lit-card rounded-2xl p-6 flex items-center justify-between hover:border-white/[0.15] transition-all group"
            >
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Booking</div>
                <div className="text-sm font-semibold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">
                  Schedule a 30-Min Systems Call
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Nairobi (UTC+3) · Collaborating with teams globally
            </div>
          </div>

          {/* Clean Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="lit-card rounded-3xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Received</h4>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I review inbound inquiries daily and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your team, what you're looking to automate, or the role you're hiring for..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

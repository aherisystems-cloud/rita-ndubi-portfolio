import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Copy, Check, Send } from 'lucide-react';
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

  // No backend: opens the visitor's email app with the message filled in, addressed to Rita.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`;
    const body = `${formData.message}

${formData.name}
${formData.email}${formData.company ? `
${formData.company}` : ''}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-slate-200/80 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-700 font-semibold mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Let's Put AI to Work in Your Systems
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Planning an AI adoption, systems or platform project, or building a team around one? Tell me what you are working on and I will reply within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="lit-card rounded-2xl p-6 flex items-center justify-between bg-white border border-slate-200/80 shadow-2xs">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Direct Email</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{personalInfo.email}</div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-brand-600 font-bold" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lit-card rounded-2xl p-6 flex items-center justify-between hover:border-brand-500/40 hover:shadow-xs transition-all group bg-white border border-slate-200/80 shadow-2xs"
            >
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">LinkedIn Profile</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5 group-hover:text-brand-700 transition-colors">
                  linkedin.com/in/rita-ndubi
                </div>
              </div>
              <LinkedInIcon className="w-4 h-4 text-slate-500 group-hover:text-slate-900" />
            </a>


            <div className="pt-2 text-xs font-mono text-slate-500">
              Nairobi, Kenya (UTC+3) · Remote across time zones, including U.S. hours
            </div>
          </div>

          {/* Clean Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="lit-card rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Your email app should now be open</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Press send there to deliver your message. If nothing opened, email me directly at {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="The role you are hiring for, or the process you want to fix"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>Write Email</span>
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

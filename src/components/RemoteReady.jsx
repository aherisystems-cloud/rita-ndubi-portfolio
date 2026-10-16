import React, { useState, useEffect } from 'react';
import { remotePhilosophy } from '../data/portfolioData';
import { Clock, BookOpen, ShieldCheck, Zap, Globe, MessageSquare, CheckCircle, Radio } from 'lucide-react';

const iconMap = {
  Clock: Clock,
  BookOpen: BookOpen,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export default function RemoteReady() {
  const [currentTimeEAT, setCurrentTimeEAT] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeEAT(now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timezones = [
    { city: "Nairobi (Base)", zone: "EAT (UTC+3)", overlap: "Home Hub", active: true },
    { city: "London", zone: "GMT / BST", overlap: "6–7 hrs direct daily overlap", active: true },
    { city: "Berlin / Paris", zone: "CET / CEST", overlap: "6–7 hrs direct daily overlap", active: true },
    { city: "New York", zone: "EST / EDT", overlap: "4 hrs core afternoon overlap", active: true },
    { city: "San Francisco", zone: "PST / PDT", overlap: "2 hrs scheduled handover window", active: true },
  ];

  return (
    <section id="remote" className="py-24 border-t border-slate-900 bg-[#060a15]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>// ASYNCHRONOUS EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Remote-Ready Work Philosophy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-output remote execution isn't just about logging in from a different desk. It demands structured communication, documented processes, and intentional asynchronous collaboration.
          </p>
        </div>

        {/* 4 Pillars of Remote Execution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {remotePhilosophy.map((item, idx) => {
            const Icon = iconMap[item.icon] || Clock;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all glow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">Protocol 0{idx + 1}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Timezone Agility & Real-Time Sync Hub */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <Globe className="w-4 h-4" />
                <span>GLOBAL TIMEZONE COVERAGE</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Distributed Team Synergy & Handover Windows
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Strategically positioned in East Africa Time (UTC+3), bridging European and American timezones effortlessly with dependable overlap.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800/90 self-start lg:self-center">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Current Time in Nairobi (EAT)</div>
                <div className="text-lg font-mono font-bold text-emerald-300 tracking-wider">
                  {currentTimeEAT || "12:55 PM"}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {timezones.map((tz) => (
              <div
                key={tz.city}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-sm text-slate-200">{tz.city}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-2">
                    {tz.zone}
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  {tz.overlap}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Async Toolkit: Slack Threads · Loom Video Briefs · Linear / ClickUp · Notion Wikis</span>
            </div>
            <div className="text-emerald-400 font-medium">
              ✓ Ready for 100% remote asynchronous contracts & roles
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

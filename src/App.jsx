import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CorePillars from './components/CorePillars';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import RemoteReady from './components/RemoteReady';
import VentureSpotlight from './components/VentureSpotlight';
import InteractiveResume from './components/InteractiveResume';
import ThoughtLeadership from './components/ThoughtLeadership';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <CorePillars />
        <CaseStudies />
        <TechStack />
        <RemoteReady />
        <VentureSpotlight />
        <InteractiveResume
          onOpenModal={() => setIsResumeOpen(true)}
        />
        <ThoughtLeadership />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

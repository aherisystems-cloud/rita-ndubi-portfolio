import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CorePillars from './components/CorePillars';
import FrameworkSection from './components/FrameworkSection';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import VentureSpotlight from './components/VentureSpotlight';
import InteractiveResume from './components/InteractiveResume';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Sleek Floating Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections with Generous Breathing Room */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <CorePillars />
        <FrameworkSection />
        <CaseStudies />
        <TechStack />
        <VentureSpotlight />
        <InteractiveResume
          onOpenModal={() => setIsResumeOpen(true)}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

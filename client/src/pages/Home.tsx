import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { HighlightsSection } from "../components/HighlightsSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { TechnicalExpertiseSection } from "../components/TechnicalExpertiseSection";
import { SoftwareEngineeringSDLCSection } from "../components/SoftwareEngineeringSDLCSection";
import { ITBeyondCodeSection } from "../components/ITBeyondCodeSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContinuousLearningSection } from "../components/ContinuousLearningSection";
import { EngineeringPrinciplesSection } from "../components/EngineeringPrinciplesSection";
import { DigitalInnovationPurposeSection } from "../components/DigitalInnovationPurposeSection";
import { ProfessionalJourneyTimelineSection } from "../components/ProfessionalJourneyTimelineSection";
import { ProfessionalQualitiesSection } from "../components/ProfessionalQualitiesSection";
import { GallerySection } from "../components/GallerySection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* 4 Professional Pillar Highlights */}
        <HighlightsSection />

        {/* About Narrative & Academic Connection */}
        <AboutSection />

        {/* Technical Expertise 6-Pillar Grid with Editable Badges */}
        <TechnicalExpertiseSection />

        {/* Education Timeline (JKUAT & Strathmore University Master's in IT) */}
        <EducationSection />

        {/* Software Engineering Lifecycle: From Idea to Software */}
        <SoftwareEngineeringSDLCSection />

        {/* Information Technology Beyond Code */}
        <ITBeyondCodeSection />

        {/* Selected Projects with Interactive Filter & Case Study Modals */}
        <ProjectsSection />

        {/* Professional Experience Timeline with Editable Placeholders */}
        <ExperienceSection />

        {/* Continuous Learning & Professional Development */}
        <ContinuousLearningSection />

        {/* How I Approach Software Engineering (Principles) */}
        <EngineeringPrinciplesSection />

        {/* Full-width Digital Innovation Quote & Purpose */}
        <DigitalInnovationPurposeSection />

        {/* Professional Journey Milestone Road */}
        <ProfessionalJourneyTimelineSection />

        {/* What Drives My Work (Qualities) */}
        <ProfessionalQualitiesSection />

        {/* Professional Journey Gallery Placeholders */}
        <GallerySection />

        {/* Interactive Validated Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

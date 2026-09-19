import React from "react";
import { Quote, CheckCircle2, Award, BookOpen, Compass, Lightbulb, Users, Target } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            01 • Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Jackline Eboso
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Bridging software engineering precision with strategic information technology leadership.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-medium leading-relaxed">
              Jackline Eboso is a <span className="text-blue-400 font-semibold">Software Engineer and Information Technology professional</span> with a strong academic foundation and a passion for developing technology-driven solutions.
            </p>

            <p>
              Her academic journey began at <strong className="text-white">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</strong>, where she developed an essential foundation in technology and computing principles. She later advanced her academic journey by completing a <strong className="text-white">Master's degree in Information Technology at Strathmore University</strong>.
            </p>

            <p>
              Her professional interests span software development, information systems, digital transformation, technology innovation, and the design of solutions that address real-world challenges.
            </p>

            <p>
              Jackline combines technical thinking with an appreciation for how technology can improve organizations, processes, and everyday experiences.
            </p>

            {/* Blockquote callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-transparent border-l-4 border-blue-500 my-8 shadow-sm">
              <Quote className="w-6 h-6 text-blue-400 mb-2 opacity-80" />
              <blockquote className="text-lg sm:text-xl font-semibold text-white tracking-tight italic">
                “Technology becomes powerful when it solves a problem that matters.”
              </blockquote>
              <p className="mt-2 text-xs font-mono text-blue-300">
                — Guiding Engineering Principle
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Analytical Problem Decomposition</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scalable System Design Thinking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise Information Governance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous Technical Mastery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Core Professional Drivers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                Core Professional Identity
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-mono text-white uppercase">Dual Foundation</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Rigorous computing background from JKUAT enriched by an advanced Master's in IT from Strathmore University.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <Lightbulb className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-mono text-white uppercase">Purposeful Engineering</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Prioritizing reliability, simplicity, and tangible outcomes over superficial complexity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-mono text-white uppercase">Systems-Level Vision</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Understanding how digital software interfaces with people, operational workflows, and data infrastructures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-mono text-white uppercase">Collaborative Execution</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Communicating effectively with engineers, executive leadership, and end users to ensure alignment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified academic badge note */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Academic Record: Confirmed</span>
                <span className="text-blue-400">JKUAT • Strathmore</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

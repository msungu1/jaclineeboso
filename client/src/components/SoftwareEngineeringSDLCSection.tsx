import React, { useState } from "react";
import { Search, Layout, Code2, CheckCircle2, Rocket, RefreshCw, ArrowRight } from "lucide-react";

export const SoftwareEngineeringSDLCSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      name: "Discover",
      summary: "Understand the problem and requirements.",
      icon: Search,
      details:
        "Rigorous problem decomposition, stakeholder alignment, user story specification, and functional boundary definition before writing any code.",
      artifacts: ["Requirement specifications", "User persona flows", "Constraint matrix"],
    },
    {
      step: "02",
      name: "Design",
      summary: "Design architecture, user experience and technical solutions.",
      icon: Layout,
      details:
        "High-level and low-level system design, data modeling, schema definition, API contract design, and component-driven UI mockups.",
      artifacts: ["Architecture diagrams", "Data entity models", "API contract schemas"],
    },
    {
      step: "03",
      name: "Develop",
      summary: "Build clean, maintainable and scalable software.",
      icon: Code2,
      details:
        "Engineering modular codebases using established design patterns, strict typing, clean separation of concerns, and clean commit histories.",
      artifacts: ["Modular components", "Integrated backend APIs", "Robust business logic"],
    },
    {
      step: "04",
      name: "Test",
      summary: "Validate functionality, performance and reliability.",
      icon: CheckCircle2,
      details:
        "Verifying edge conditions, executing unit and integration tests, ensuring responsive rendering, and confirming API security posture.",
      artifacts: ["Unit & integration suites", "Cross-browser testing", "Performance profiles"],
    },
    {
      step: "05",
      name: "Deploy",
      summary: "Move the solution into a usable environment.",
      icon: Rocket,
      details:
        "Automated deployment workflows, environment configuration management, cloud asset provisioning, and DNS/SSL verification.",
      artifacts: ["Production builds", "Continuous delivery triggers", "Cloud environment setup"],
    },
    {
      step: "06",
      name: "Improve",
      summary: "Monitor, maintain and continuously improve the product.",
      icon: RefreshCw,
      details:
        "Analyzing telemetry, user feedback loops, optimizing queries, refactoring debt, and iteratively delivering new feature increments.",
      artifacts: ["Telemetry logs", "Refactoring roadmap", "Feature iteration releases"],
    },
  ];

  return (
    <section id="lifecycle" className="py-24 bg-slate-950/80 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            04 • Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Idea to Software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A disciplined, end-to-end software development lifecycle (SDLC) ensuring predictable delivery, high reliability, and sustainable maintainability.
          </p>
        </div>

        {/* Desktop/Tablet Interactive Stages Flow */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {stages.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-950/60 border-blue-500 shadow-lg shadow-blue-500/20 text-white"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {st.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-slate-500"}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {st.name}
                  </h4>
                </div>
                <p className="text-[11px] mt-2 line-clamp-2 text-slate-400">
                  {st.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                {React.createElement(stages[activeStage].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block">
                  Stage {stages[activeStage].step} in Focus
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {stages[activeStage].name}: {stages[activeStage].summary}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-mono text-white hover:bg-blue-500 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            <div className="md:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Engineering Focus
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stages[activeStage].details}
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                Typical Deliverables
              </h4>
              <div className="space-y-1.5">
                {stages[activeStage].artifacts.map((art, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

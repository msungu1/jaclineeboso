import React from "react";
import { GraduationCap, Code2, Award, Laptop, Sparkles, Compass, CheckCircle2 } from "lucide-react";

export const ProfessionalJourneyTimelineSection: React.FC = () => {
  const milestones = [
    {
      step: "01",
      title: "JKUAT",
      subtitle: "Academic Foundation",
      description:
        "Building core computational thinking, algorithmic analysis, and structured software foundations at Jomo Kenyatta University of Agriculture and Technology.",
      icon: GraduationCap,
      status: "Confirmed Milestone",
      accent: "border-blue-500 text-blue-400",
    },
    {
      step: "02",
      title: "Software & Technology Development",
      subtitle: "Technical Growth",
      description:
        "Applying programming concepts, software development lifecycles, and hands-on system building to real-world engineering problems.",
      icon: Code2,
      status: "Continuous Growth",
      accent: "border-cyan-500 text-cyan-400",
    },
    {
      step: "03",
      title: "Strathmore University",
      subtitle: "Master's in Information Technology",
      description:
        "Advanced postgraduate mastery spanning enterprise information systems, digital architecture, data strategy, and organizational transformation.",
      icon: Award,
      status: "Completed Degree",
      accent: "border-indigo-500 text-indigo-400",
    },
    {
      step: "04",
      title: "Software Engineering",
      subtitle: "Professional Development",
      description:
        "Architecting resilient systems, optimizing user-facing applications, integrating robust APIs, and practicing disciplined code quality.",
      icon: Laptop,
      status: "Active Discipline",
      accent: "border-purple-500 text-purple-400",
    },
    {
      step: "05",
      title: "Digital Innovation",
      subtitle: "Technology Solutions",
      description:
        "Designing purpose-built digital initiatives that streamline operational processes and unlock meaningful value for institutions.",
      icon: Sparkles,
      status: "Active Practice",
      accent: "border-emerald-500 text-emerald-400",
    },
    {
      step: "06",
      title: "Future",
      subtitle: "Advanced Software & IT Leadership",
      description:
        "Scaling digital impact through engineering leadership, complex system orchestration, and innovative digital product delivery.",
      icon: Compass,
      status: "Vision & Trajectory",
      accent: "border-sky-500 text-sky-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            10 • Career & Academic Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Journey & Milestones
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            The narrative arc: From JKUAT computing roots to a completed Strathmore Master's in IT, onward to modern software engineering and digital leadership.
          </p>
        </div>

        {/* Timeline Horizontal/Vertical Layout */}
        <div className="relative">
          {/* Central connecting line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-slate-800" />

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((ms, idx) => {
              const Icon = ms.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={ms.step}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full lg:w-1/2">
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-blue-400 font-bold">
                          Phase {ms.step}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {ms.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {ms.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-300/90 mb-2">
                        {ms.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {ms.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-blue-500/50 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Empty spacer for balance */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

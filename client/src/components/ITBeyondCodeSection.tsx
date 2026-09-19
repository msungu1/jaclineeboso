import React from "react";
import { Server, Cpu, Database, Compass, CheckCircle2, ArrowRight } from "lucide-react";

export const ITBeyondCodeSection: React.FC = () => {
  const cards = [
    {
      title: "Information Systems",
      subtitle: "Understanding how organizations use technology and information.",
      description:
        "Analyzing operational workflows, user journeys, data flow topologies, and organizational dynamics to ensure software fits institutional objectives.",
      icon: Server,
      gradient: "from-blue-600/20 to-transparent",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Digital Transformation",
      subtitle: "Using technology to improve processes and services.",
      description:
        "Modernizing legacy routines into streamlined digital experiences, reducing overhead, and enhancing agility across distributed teams.",
      icon: Cpu,
      gradient: "from-cyan-600/20 to-transparent",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Data & Information",
      subtitle: "Managing information as a valuable organizational resource.",
      description:
        "Data governance, lifecycle management, schema consistency, compliance handling, and turning operational metrics into decision-grade insights.",
      icon: Database,
      gradient: "from-indigo-600/20 to-transparent",
      borderColor: "border-indigo-500/30",
    },
    {
      title: "Technology Strategy",
      subtitle: "Connecting technology decisions to real-world organizational needs.",
      description:
        "Evaluating trade-offs between speed, cost, maintainability, and scalability to make sound technical recommendations.",
      icon: Compass,
      gradient: "from-emerald-600/20 to-transparent",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            05 • Enterprise IT Dimension
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Information Technology Beyond Code
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Software is only one part of modern technology. Effective digital solutions require an understanding of people, processes, information, infrastructure and systems.
          </p>
        </div>

        {/* 4 Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/50 border ${c.borderColor} hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-slate-800 text-blue-400 border border-slate-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {c.title}
                      </h3>
                      <span className="text-xs font-mono text-blue-300">
                        Strategic IT Capability
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-200 mb-2">
                    {c.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Scope: Enterprise Impact</span>
                  <span className="text-blue-400">Systems Alignment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

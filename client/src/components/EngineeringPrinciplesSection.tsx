import React from "react";
import { CheckCircle, ShieldCheck, Zap, Users, Code, ArrowRight } from "lucide-react";

export const EngineeringPrinciplesSection: React.FC = () => {
  const principles = [
    {
      title: "Simplicity",
      subtitle: "Build solutions that are understandable and maintainable.",
      description:
        "Avoiding unnecessary abstractions, optimizing for developer ergonomics, and ensuring that software can be easily audited, enhanced, and handed over.",
      icon: Code,
      accent: "text-blue-400",
      border: "hover:border-blue-500/40",
    },
    {
      title: "Reliability",
      subtitle: "Create software users and organizations can depend on.",
      description:
        "Rigorous error boundary handling, graceful failure degradation, resilient data management, and deterministic behavioral execution under stress.",
      icon: ShieldCheck,
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40",
    },
    {
      title: "Scalability",
      subtitle: "Design systems with future growth in mind.",
      description:
        "Decoupled components, efficient database indexing, asynchronous messaging patterns, and stateless service design ready for horizontal expansion.",
      icon: Zap,
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/40",
    },
    {
      title: "User-Centered Thinking",
      subtitle: "Technology should solve real problems for real people.",
      description:
        "Grounding engineering choices in genuine human needs, minimizing interface friction, and ensuring high accessibility across all user demographics.",
      icon: Users,
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/40",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            09 • Philosophy & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Approach Software Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Four core tenets that govern design choices, architectural trade-offs, and implementation decisions.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-slate-900/60 border border-slate-800 ${pr.border} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                    <Icon className={`w-6 h-6 ${pr.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mb-3">
                    {pr.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Tenet 0{idx + 1}</span>
                  <span className="text-slate-400">Core Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

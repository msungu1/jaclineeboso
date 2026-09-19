import React from "react";
import { Code, Database, Network, Sparkles, ArrowUpRight } from "lucide-react";

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      title: "SOFTWARE ENGINEERING",
      subtitle: "Designing and developing modern software solutions.",
      description:
        "Building modular, scalable, and maintainable software systems guided by clean code practices, clear architectural patterns, and practical execution.",
      icon: Code,
      accent: "from-blue-500 to-indigo-500",
      glow: "hover:shadow-blue-500/10",
      borderColor: "hover:border-blue-500/40",
    },
    {
      title: "INFORMATION TECHNOLOGY",
      subtitle: "Advanced academic understanding of IT systems and digital technologies.",
      description:
        "Backed by a completed Master's degree in IT from Strathmore University, connecting technical architecture with organizational systems and information infrastructure.",
      icon: Database,
      accent: "from-indigo-500 to-purple-500",
      glow: "hover:shadow-indigo-500/10",
      borderColor: "hover:border-indigo-500/40",
    },
    {
      title: "SYSTEMS THINKING",
      subtitle: "Understanding how applications, infrastructure, users and data work together.",
      description:
        "Holistic perspective analyzing dependencies, business processes, security safeguards, and interoperability between disparate enterprise components.",
      icon: Network,
      accent: "from-cyan-500 to-blue-500",
      glow: "hover:shadow-cyan-500/10",
      borderColor: "hover:border-cyan-500/40",
    },
    {
      title: "DIGITAL INNOVATION",
      subtitle: "Using technology to improve processes and solve practical problems.",
      description:
        "Turning concepts into tangible digital applications that streamline operations, elevate user convenience, and generate measurable impact.",
      icon: Sparkles,
      accent: "from-emerald-500 to-cyan-500",
      glow: "hover:shadow-emerald-500/10",
      borderColor: "hover:border-emerald-500/40",
    },
  ];

  return (
    <section className="py-16 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Core Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Rigor & Technological Insight
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A comprehensive foundation blending rigorous computing practices with advanced enterprise IT competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${item.glow} ${item.borderColor}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" />
                </div>
                <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-300/90 mb-3 leading-snug">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

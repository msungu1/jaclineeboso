import React from "react";
import { Brain, Sparkles, Users, RefreshCw, CheckCircle, TrendingUp } from "lucide-react";

export const ProfessionalQualitiesSection: React.FC = () => {
  const qualities = [
    {
      title: "Analytical Thinking",
      subtitle: "Breaking complex problems into practical technical solutions.",
      description:
        "Isolating system constraints, evaluating trade-offs methodically, and translating ambiguous business problems into structured software architectures.",
      icon: Brain,
      accent: "text-blue-400",
    },
    {
      title: "Innovation",
      subtitle: "Exploring better ways to use technology.",
      description:
        "Adopting modern engineering practices, cloud services, and automation paradigms to elevate productivity and software performance.",
      icon: Sparkles,
      accent: "text-cyan-400",
    },
    {
      title: "Collaboration",
      subtitle: "Working effectively with technical and non-technical teams.",
      description:
        "Fostering clear technical communication, active listening, cross-disciplinary empathy, and constructive code reviews.",
      icon: Users,
      accent: "text-indigo-400",
    },
    {
      title: "Adaptability",
      subtitle: "Continuously learning in a rapidly changing technology environment.",
      description:
        "Rapidly mastering new programming paradigms, runtime environments, and emerging industry frameworks with ease.",
      icon: RefreshCw,
      accent: "text-emerald-400",
    },
    {
      title: "Attention to Detail",
      subtitle: "Building reliable and maintainable solutions.",
      description:
        "Upholding rigorous standards in boundary testing, type safety, documentation clarity, and consistent code formatting.",
      icon: CheckCircle,
      accent: "text-purple-400",
    },
    {
      title: "Continuous Growth",
      subtitle: "Keeping knowledge and technical skills current.",
      description:
        "Engaging with academic literature, developer communities, conferences, and technical workshops to stay at the cutting edge.",
      icon: TrendingUp,
      accent: "text-sky-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            11 • Work Philosophy & Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Drives My Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A combination of analytical discipline, collaborative spirit, and an enduring drive for technical mastery.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q, idx) => {
            const Icon = q.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-5">
                    <Icon className={`w-6 h-6 ${q.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-1">
                    {q.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mb-3">
                    {q.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {q.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-slate-400">Professional Value</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

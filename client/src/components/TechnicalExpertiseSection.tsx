import React, { useState } from "react";
import { initialTechBadges } from "../data/portfolioData";
import { EditableBadge } from "./EditableBadge";
import { Code, Globe, Database, Network, Cloud, Shield, Cpu, Plus, Layers } from "lucide-react";

export const TechnicalExpertiseSection: React.FC = () => {
  const [techBadges, setTechBadges] = useState(initialTechBadges);

  const handleUpdateBadge = (
    category: keyof typeof initialTechBadges,
    index: number,
    newValue: string
  ) => {
    setTechBadges((prev) => {
      const updated = { ...prev };
      const arr = [...updated[category]];
      arr[index] = newValue;
      updated[category] = arr;
      return updated;
    });
  };

  const handleAddBadge = (category: keyof typeof initialTechBadges) => {
    setTechBadges((prev) => {
      const updated = { ...prev };
      updated[category] = [...updated[category], "[Add Technology]"];
      return updated;
    });
  };

  const categories = [
    {
      key: "programming" as const,
      title: "Software Development",
      icon: Code,
      description: "Core programming languages, application structure, and algorithmic problem-solving.",
      competencies: [
        "Application development",
        "Software architecture",
        "API integration",
        "Application testing",
        "Software maintenance",
      ],
      color: "border-blue-500/30 text-blue-400",
    },
    {
      key: "frontend" as const,
      title: "Web Technologies",
      icon: Globe,
      description: "Modern interactive web architectures, client-server communications, and responsive user interfaces.",
      competencies: [
        "Frontend development",
        "Backend development",
        "Responsive web applications",
        "Web APIs",
        "Modern web architecture",
      ],
      color: "border-cyan-500/30 text-cyan-400",
    },
    {
      key: "databases" as const,
      title: "Databases & Storage",
      icon: Database,
      description: "Relational data modeling, query optimization, ACID transactions, and persistent stores.",
      competencies: [
        "Database design",
        "Data management",
        "SQL concepts",
        "Database integration",
        "Data-driven applications",
      ],
      color: "border-indigo-500/30 text-indigo-400",
    },
    {
      key: "backend" as const,
      title: "Information Systems",
      icon: Network,
      description: "Enterprise system design, business process analysis, and inter-system data interchange.",
      competencies: [
        "Systems analysis",
        "Business process understanding",
        "Information management",
        "Digital systems",
        "Technology integration",
      ],
      color: "border-purple-500/30 text-purple-400",
    },
    {
      key: "cloud" as const,
      title: "Cloud & Modern Infrastructure",
      icon: Cloud,
      description: "Cloud deployment paradigms, container concepts, virtualization, and resilient systems.",
      competencies: [
        "Cloud computing concepts",
        "Application deployment",
        "Scalable systems",
        "Cloud-based applications",
        "Digital infrastructure",
      ],
      color: "border-sky-500/30 text-sky-400",
    },
    {
      key: "tools" as const,
      title: "Software Engineering Practices",
      icon: Shield,
      description: "Engineering rigor, continuous delivery concepts, version control, and team collaboration.",
      competencies: [
        "Version control & Git workflows",
        "Testing & verification",
        "Documentation & system specs",
        "Debugging & diagnostic profiling",
        "Code quality & reviews",
        "Agile development concepts",
      ],
      color: "border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            03 • Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Expertise & Disciplines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Structured domains of professional capability. Technology badges can be edited directly to reflect Jackline's exact stack as it grows.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const badges = techBadges[cat.key] || [];

            return (
              <div
                key={cat.key}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase text-slate-400">
                        Professional Domain
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Competencies list */}
                  <div className="space-y-1.5 mb-6">
                    {cat.competencies.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editable Technology Badges Area */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Technologies (Click to Edit)
                    </span>
                    <button
                      onClick={() => handleAddBadge(cat.key)}
                      className="text-[10px] font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                      title="Add another technology badge"
                    >
                      <Plus className="w-3 h-3" /> Add Tech
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {badges.map((badge, bIdx) => (
                      <EditableBadge
                        key={bIdx}
                        value={badge}
                        onSave={(val) => handleUpdateBadge(cat.key, bIdx, val)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from "react";
import { ExperienceItem, initialExperienceData } from "../data/portfolioData";
import { Briefcase, Calendar, Building2, CheckCircle2, Edit3, Plus, AlertCircle } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(initialExperienceData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdate = (id: string, field: keyof ExperienceItem, value: any) => {
    setExperiences((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: "[Add Position Title]",
      organization: "[Add Company / Institution]",
      period: "[Year – Present]",
      description: "[Add concise description of key responsibilities and impact.]",
      responsibilities: [
        "[Add core achievement / responsibility]",
        "[Add core achievement / responsibility]",
      ],
      isPlaceholder: true,
    };
    setExperiences([...experiences, newItem]);
    setEditingId(newItem.id);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              07 • Professional Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Professional practice across software engineering, information systems, and technology solutions. All entries are clearly labeled and easily editable without fabricating unverified employers.
            </p>
          </div>

          <button
            onClick={handleAddExperience}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-700 hover:border-blue-500 text-blue-400 hover:text-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Experience Entry</span>
          </button>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => {
            const isEditing = editingId === exp.id;

            return (
              <div
                key={exp.id}
                className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 border border-slate-700">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      {isEditing ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) => handleUpdate(exp.id, "role", e.target.value)}
                            className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-sm text-white font-bold"
                            placeholder="Role / Title"
                          />
                          <input
                            type="text"
                            value={exp.organization}
                            onChange={(e) => handleUpdate(exp.id, "organization", e.target.value)}
                            className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-slate-300"
                            placeholder="Organization"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="text-lg font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <p className="text-xs font-mono text-blue-400 flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{exp.organization}</span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {isEditing ? (
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => handleUpdate(exp.id, "period", e.target.value)}
                        className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-slate-300"
                      />
                    ) : (
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {exp.period}
                      </span>
                    )}

                    <button
                      onClick={() => setEditingId(isEditing ? null : exp.id)}
                      className="p-1.5 text-slate-400 hover:text-blue-300 rounded-lg hover:bg-slate-800 transition-colors"
                      title="Edit this entry"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="mt-4 space-y-3">
                    <textarea
                      rows={3}
                      value={exp.description}
                      onChange={(e) => handleUpdate(exp.id, "description", e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                      placeholder="Add summary description"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-slate-300 leading-relaxed mt-2">
                    {exp.description}
                  </p>
                )}

                {/* Key responsibilities */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                    Core Focus & Deliverables
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {exp.isPlaceholder && (
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-amber-400/80 bg-amber-950/20 px-2.5 py-1 rounded-md border border-amber-500/20 w-fit">
                    <AlertCircle className="w-3 h-3" />
                    <span>Editable placeholder: Ready for Jackline's verified role details</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

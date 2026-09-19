import React, { useState } from "react";
import { EducationItem, initialEducationData } from "../data/portfolioData";
import { GraduationCap, Award, BookOpen, CheckCircle, Edit3, Calendar, Building, Sparkles } from "lucide-react";

export const EducationSection: React.FC = () => {
  const [educationList, setEducationList] = useState<EducationItem[]>(initialEducationData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdate = (id: string, field: keyof EducationItem, value: any) => {
    setEducationList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <section id="education" className="py-24 bg-slate-950/70 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            02 • Verified Academic Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Foundation & Excellence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Confirmed academic milestones from leading Kenyan institutions that ground Jackline's software engineering and IT capabilities.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {educationList.map((item) => {
            const isEditing = editingId === item.id;
            const isStrathmore = item.id === "strathmore";

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isStrathmore
                    ? "bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-900/90 border-2 border-blue-500/40 shadow-xl shadow-blue-500/10"
                    : "bg-slate-900/70 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Top Status & Edit Trigger */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                        isStrathmore
                          ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                          : "bg-slate-800 text-slate-300 border border-slate-700"
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.status}</span>
                    </span>
                    {isStrathmore && (
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Master's Degree
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setEditingId(isEditing ? null : item.id)}
                    className="p-1.5 text-slate-400 hover:text-blue-300 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Edit placeholder fields"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>

                {/* Institution & Degree */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-2xl ${
                        isStrathmore
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                          : "bg-slate-800 text-blue-400 border border-slate-700"
                      }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.institution}
                      </h3>
                      
                      {isEditing ? (
                        <div className="mt-2 space-y-2">
                          <div>
                            <label className="text-[11px] font-mono text-slate-400 block">Degree / Program</label>
                            <input
                              type="text"
                              value={item.degree}
                              onChange={(e) => handleUpdate(item.id, "degree", e.target.value)}
                              className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-mono text-slate-400 block">Year</label>
                            <input
                              type="text"
                              value={item.year}
                              onChange={(e) => handleUpdate(item.id, "year", e.target.value)}
                              className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1">
                          <p className={`text-sm font-semibold ${isStrathmore ? "text-blue-400" : "text-slate-300"}`}>
                            {item.degree}
                          </p>
                          <p className="text-xs font-mono text-slate-500 mt-0.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Year: {item.year}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Academic Core
                    </span>
                    {item.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Verified Institution: Kenya</span>
                  <span className="text-slate-400">{isStrathmore ? "Master of Science in IT" : "Computing Foundation"}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

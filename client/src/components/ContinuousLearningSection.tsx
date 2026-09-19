import React, { useState } from "react";
import { CertificationItem, initialCertificationsData } from "../data/portfolioData";
import { Award, BookOpen, Users, Compass, Plus, Edit3, CheckCircle, ExternalLink } from "lucide-react";

export const ContinuousLearningSection: React.FC = () => {
  const [certifications, setCertifications] = useState<CertificationItem[]>(initialCertificationsData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdate = (id: string, field: keyof CertificationItem, value: any) => {
    setCertifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAdd = () => {
    const newItem: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: "[Add Certification / Workshop Name]",
      institution: "[Add Issuing Organization]",
      year: "[Add Year]",
      category: "Certification",
      isPlaceholder: true,
    };
    setCertifications([...certifications, newItem]);
    setEditingId(newItem.id);
  };

  return (
    <section className="py-24 bg-slate-950/70 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              08 • Continuous Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Development & Learning
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Modern software engineering requires continuous evolution of technical and professional knowledge. This section is structured for official certifications, workshops, and technical training.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-700 hover:border-blue-500 text-blue-400 hover:text-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Credential / Workshop</span>
          </button>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item) => {
            const isEditing = editingId === item.id;

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-500/30">
                      {item.category}
                    </span>
                    <button
                      onClick={() => setEditingId(isEditing ? null : item.id)}
                      className="text-slate-500 hover:text-slate-300 transition-colors"
                      title="Edit this credential"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleUpdate(item.id, "name", e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={item.institution}
                        onChange={(e) => handleUpdate(item.id, "institution", e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-slate-300"
                        placeholder="Institution"
                      />
                      <input
                        type="text"
                        value={item.year}
                        onChange={(e) => handleUpdate(item.id, "year", e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-slate-400"
                        placeholder="Year"
                      />
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {item.institution}
                      </p>
                      <p className="text-[11px] font-mono text-blue-400 mt-2">
                        {item.year}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Verified Field</span>
                  <span className="text-slate-400">Continuous Mastery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

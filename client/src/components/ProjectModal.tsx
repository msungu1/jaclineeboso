import React, { useState } from "react";
import { ProjectItem } from "../data/portfolioData";
import { X, ExternalLink, Github, Edit3, Check, Layers, AlertCircle, CheckCircle2, Cpu } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onUpdateProject?: (updated: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onUpdateProject,
}) => {
  if (!project) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProjectItem>({ ...project });

  const handleSave = () => {
    setIsEditing(false);
    if (onUpdateProject) {
      onUpdateProject(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-950 border border-blue-500/30 text-blue-300 font-mono">
              {formData.categoryLabel}
            </span>
            {formData.isPlaceholder && (
              <span className="text-xs text-amber-400/90 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Editable Case Study
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-blue-500/60 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Done Editing
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-blue-400" /> Edit Details
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Project Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Role / Responsibility</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Executive Summary</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">The Problem</label>
                  <textarea
                    rows={3}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">The Solution</label>
                  <textarea
                    rows={3}
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Technologies (Comma separated)
                </label>
                <input
                  type="text"
                  value={formData.technologies.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      technologies: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Measured Results & Impact</label>
                <textarea
                  rows={2}
                  value={formData.results}
                  onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">GitHub Repository Link</label>
                  <input
                    type="text"
                    value={formData.githubUrl || ""}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Live Demo / Documentation Link</label>
                  <input
                    type="text"
                    value={formData.demoUrl || ""}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" /> Save Changes
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Title & Role */}
              <div>
                <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-white mb-1">
                  {formData.title}
                </h3>
                <p className="text-sm text-blue-400 font-mono">Role: {formData.role}</p>
                <p className="mt-3 text-slate-300 leading-relaxed text-sm">{formData.description}</p>
              </div>

              {/* Technologies Badges */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" /> Technologies & Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formData.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 border border-slate-700 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> The Problem & Requirements
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{formData.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Engineered Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{formData.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" /> Key Engineered Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  {formData.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold mb-1">
                  Business & Technical Impact
                </h4>
                <p className="text-sm text-slate-200">{formData.results}</p>
              </div>

              {/* Actions & Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  {formData.githubUrl ? (
                    <a
                      href={formData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  ) : null}
                  {formData.demoUrl ? (
                    <a
                      href={formData.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

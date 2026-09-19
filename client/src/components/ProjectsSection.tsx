import React, { useState } from "react";
import { ProjectItem, initialProjectsData } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { Layers, ExternalLink, ArrowRight, Edit3, Filter, Code2, Plus } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjectsData);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = ["All", "Web", "Mobile", "Systems", "IT", "Other"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const handleUpdateProject = (updated: ProjectItem) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setActiveModalProject(updated);
  };

  const handleAddNewProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      category: selectedFilter === "All" ? "Web" : (selectedFilter as any),
      categoryLabel: `${selectedFilter === "All" ? "Web" : selectedFilter} Application`,
      title: "[New Project Title]",
      description: "[Add a concise summary of the project purpose and architectural design.]",
      technologies: ["[Add Tech 1]", "[Add Tech 2]", "[Add Tech 3]"],
      problem: "[Add problem statement]",
      solution: "[Add engineered solution]",
      role: "[Add your role]",
      keyFeatures: ["[Add key capability]", "[Add key capability]"],
      challenges: ["[Add key challenge solved]"],
      results: "[Add outcome and impact]",
      isPlaceholder: true,
    };
    setProjects([newProj, ...projects]);
    setActiveModalProject(newProj);
  };

  return (
    <section id="projects" className="py-24 bg-slate-950/90 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              06 • Portfolio Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Engineered solution templates spanning web, mobile, enterprise systems, and IT transformations. Each project card opens an interactive case study modal and is fully customizable.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddNewProject}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-700 hover:border-blue-500 text-blue-400 hover:text-white transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Project</span>
            </button>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-150 ${
                selectedFilter === f
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-3xl p-6 bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-blue-300">
                    {p.categoryLabel}
                  </span>
                  {p.isPlaceholder && (
                    <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/30 border border-amber-500/30 px-2 py-0.5 rounded">
                      Editable
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-400 px-1 py-0.5">
                      +{p.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Project Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(p)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveModalProject(p)}
                  className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                  title="Open details"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onUpdateProject={handleUpdateProject}
        />
      )}
    </section>
  );
};

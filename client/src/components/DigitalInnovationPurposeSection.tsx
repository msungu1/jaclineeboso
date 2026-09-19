import React from "react";
import { Sparkles, Network, Database, Cloud, Terminal, Cpu } from "lucide-react";

export const DigitalInnovationPurposeSection: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-slate-950 text-white border-y border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Innovation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technology With Purpose
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            “Great software is not simply about writing code. It is about understanding problems, designing thoughtful solutions and creating technology that delivers meaningful value.”
          </p>

          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Jackline's approach combines software engineering, information technology and problem-solving to create practical digital solutions that scale responsibly.
          </p>

          {/* Interactive animated system node indicators */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <Network className="w-4 h-4 text-blue-400" />
              <span>API Interconnections</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <Database className="w-4 h-4 text-indigo-400" />
              <span>Data Pipelines</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <Cloud className="w-4 h-4 text-cyan-400" />
              <span>Cloud Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Modern Compute</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

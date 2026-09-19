import React from "react";
import { ArrowRight, Code2, Database, Cloud, Network, Smartphone, Globe, Cpu, GraduationCap, ShieldCheck } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-bg">
      {/* Glow gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Monospace Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SOFTWARE ENGINEER • INFORMATION TECHNOLOGY PROFESSIONAL</span>
            </div>

            {/* Main Heading & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Jackline Eboso
              </h1>
              <p className="mt-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Building Software. Solving Problems. Transforming Ideas Into Technology.
              </p>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Software Engineer and Information Technology professional with a strong academic foundation from{" "}
              <strong className="text-white font-semibold">JKUAT</strong> and a completed{" "}
              <strong className="text-white font-semibold">Master's degree in Information Technology from Strathmore University</strong>.
              Passionate about building practical digital solutions, understanding complex systems, and using technology to solve real-world problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 transition-all duration-200 hover:border-slate-600 active:scale-[0.98]"
              >
                <span>Professional Journey</span>
              </button>
            </div>

            {/* Fast Stats / Credentials */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block">Education 01</span>
                <span className="text-sm font-semibold text-white">JKUAT</span>
                <span className="text-[11px] text-blue-400 block">Technology Foundation</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block">Education 02</span>
                <span className="text-sm font-semibold text-white">Strathmore Univ.</span>
                <span className="text-[11px] text-indigo-400 block">Master's in IT Completed</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-xs font-mono text-slate-400 block">Location</span>
                <span className="text-sm font-semibold text-white">Kenya</span>
                <span className="text-[11px] text-cyan-400 block">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technology Environment & Portrait Placeholder */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Subtle Animated Background Elements */}
              <div className="absolute inset-0 subtle-circuit-bg opacity-30 pointer-events-none" />
              
              {/* Decorative Floating Technology Nodes */}
              <div className="absolute -top-3 -right-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl flex items-center gap-2 animate-bounce [animation-duration:4s]">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-mono text-cyan-200">Cloud Architecture</span>
              </div>

              <div className="absolute -bottom-3 -left-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl flex items-center gap-2 animate-bounce [animation-duration:5s]">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="text-[11px] font-mono text-indigo-200">Data & SQL Systems</span>
              </div>

              {/* Portrait Placeholder Box */}
              <div className="relative z-10 w-full flex-1 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 p-6 flex flex-col items-center justify-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 shadow-inner mb-4 group-hover:scale-105 transition-transform">
                  <Cpu className="w-10 h-10 text-blue-400 animate-pulse" />
                </div>
                
                <h3 className="text-lg font-bold text-white tracking-tight">Jackline Eboso</h3>
                <p className="text-xs font-mono text-blue-400 mt-1">Professional Portrait Space</p>
                <div className="mt-3 px-3 py-1 rounded-md bg-slate-800/80 border border-dashed border-slate-600 text-[11px] text-slate-300 font-mono">
                  [Replace with verified photo]
                </div>

                {/* Micro tech pills */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
                    <Code2 className="w-2.5 h-2.5 text-blue-400" /> Code
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
                    <Network className="w-2.5 h-2.5 text-cyan-400" /> API
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
                    <Smartphone className="w-2.5 h-2.5 text-indigo-400" /> Mobile
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
                    <Globe className="w-2.5 h-2.5 text-emerald-400" /> Web
                  </span>
                </div>
              </div>

              {/* Floating Key Verified Academic Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/90 border border-blue-500/30 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block">
                      Confirmed Education
                    </span>
                    <span className="text-xs font-bold text-white block">
                      JKUAT • Strathmore University
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Master's in IT Completed
                    </span>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

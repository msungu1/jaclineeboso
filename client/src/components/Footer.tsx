import React from "react";
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Education", href: "#education" },
    { label: "SDLC", href: "#lifecycle" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md">
                <span className="font-mono text-sm font-black">JE</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Jackline Eboso
                </h3>
                <p className="text-xs font-mono text-blue-400">
                  Software Engineer • Information Technology Professional
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md italic">
              “Engineering ideas into digital solutions.”
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Academic foundation: JKUAT • Master's in IT: Strathmore University</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
                Location & Reach
              </h4>
              <p className="text-xs text-slate-400 mb-2">
                Based in Kenya • Available for software engineering, systems consulting, and enterprise digital solutions.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  [Add Social Links]
                </span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Jackline Eboso. All Rights Reserved.</p>
          <p>Software Engineering • Information Technology • Kenya</p>
        </div>

      </div>
    </footer>
  );
};

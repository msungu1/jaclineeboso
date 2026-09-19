import React, { useState } from "react";
import { Image, Upload, AlertCircle, Camera, Check } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [placeholders, setPlaceholders] = useState([
    {
      id: "gal-portrait",
      title: "Professional Portrait",
      description: "Official executive headshot space",
      category: "Profile",
      status: "Placeholder Ready",
    },
    {
      id: "gal-jkuat",
      title: "JKUAT Academic Journey",
      description: "Technology & Computing campus milestone",
      category: "Foundation",
      status: "Placeholder Ready",
    },
    {
      id: "gal-strathmore",
      title: "Strathmore University",
      description: "Master's Degree in Information Technology milestone",
      category: "Postgraduate",
      status: "Placeholder Ready",
    },
    {
      id: "gal-grad",
      title: "Master's Graduation",
      description: "Conferment of Master's Degree in IT",
      category: "Academic",
      status: "Placeholder Ready",
    },
    {
      id: "gal-dev",
      title: "Software Development",
      description: "Engineering workspace & architecture session",
      category: "Engineering",
      status: "Placeholder Ready",
    },
    {
      id: "gal-events",
      title: "Technology Events & Summits",
      description: "Industry forums & developer meetups in Kenya",
      category: "Community",
      status: "Placeholder Ready",
    },
    {
      id: "gal-conf",
      title: "Conferences",
      description: "Regional and global technology symposiums",
      category: "Industry",
      status: "Placeholder Ready",
    },
    {
      id: "gal-activities",
      title: "Professional Activities",
      description: "Consultations and digital transformation workshops",
      category: "Leadership",
      status: "Placeholder Ready",
    },
  ]);

  const [activeUploadId, setActiveUploadId] = useState<string | null>(null);

  const handleSimulateUpload = (id: string) => {
    setActiveUploadId(id);
    setTimeout(() => {
      setPlaceholders((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: "Photo Attached" } : item
        )
      );
      setActiveUploadId(null);
    }, 1200);
  };

  return (
    <section className="py-24 bg-slate-950/70 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            12 • Visual Journey & Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Journey Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Dedicated photo placeholders for Jackline's verified academic ceremonies, engineering sessions, and conference engagements. No fabricated photos are used.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholders.map((item) => {
            const isUploading = activeUploadId === item.id;
            const isAttached = item.status === "Photo Attached";

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Frame */}
                  <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-4 flex flex-col items-center justify-center text-center overflow-hidden mb-4 group-hover:border-blue-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-blue-400 mb-2">
                      <Camera className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                      [{item.title}]
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 mt-1">
                      Drop or replace image
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.description}
                  </p>
                </div>

                {/* Upload action */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.status}
                  </span>
                  <button
                    onClick={() => handleSimulateUpload(item.id)}
                    disabled={isUploading}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    {isUploading ? (
                      <span>Attaching...</span>
                    ) : isAttached ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Attached
                      </span>
                    ) : (
                      <>
                        <Upload className="w-3 h-3" />
                        <span>Upload Photo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

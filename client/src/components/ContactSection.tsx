import React, { useState } from "react";
import { initialContactInfo } from "../data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle2, AlertCircle, Edit3 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [contactInfo, setContactInfo] = useState(initialContactInfo);
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  // Contact Form State & Validation
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            13 • Inquiries & Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Have a software idea, technology challenge or professional opportunity? Connect with Jackline Eboso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold font-mono uppercase text-white tracking-wider">
                  Contact Channels
                </h3>
                <button
                  onClick={() => setIsEditingInfo(!isEditingInfo)}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                  title="Edit contact placeholders"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditingInfo ? "Close Edit" : "Edit Details"}</span>
                </button>
              </div>

              {isEditingInfo ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block">Email</label>
                    <input
                      type="text"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block">Phone</label>
                    <input
                      type="text"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block">Location</label>
                    <input
                      type="text"
                      value={contactInfo.location}
                      onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block">LinkedIn</label>
                    <input
                      type="text"
                      value={contactInfo.linkedin}
                      onChange={(e) => setContactInfo({ ...contactInfo, linkedin: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block">GitHub</label>
                    <input
                      type="text"
                      value={contactInfo.github}
                      onChange={(e) => setContactInfo({ ...contactInfo, github: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        Email Address
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-200">
                        {contactInfo.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        Telephone / WhatsApp
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-200">
                        {contactInfo.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {contactInfo.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Linkedin className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        LinkedIn
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-300">
                        {contactInfo.linkedin}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Github className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-300">
                        {contactInfo.github}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                Notice: Specific phone/email entries are placeholder fields ready for personal insertion.
              </div>
            </div>
          </div>

          {/* Right Column: Validated Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-xl">
              <h3 className="text-base font-bold text-white tracking-tight mb-6">
                Send an Inquiry or Project Proposal
              </h3>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Transmitted Successfully</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Jackline Eboso. Your inquiry has been received and will be reviewed promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Alex Kamau"
                        className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.fullName ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 font-mono">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@organization.co.ke"
                        className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.email ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +254 7..."
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Subject <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Software Engineering Opportunity"
                        className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.subject ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-rose-400 font-mono">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, engineering requirements, or opportunity details..."
                      className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.message ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

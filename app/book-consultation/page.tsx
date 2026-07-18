'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Compass, Calendar, Clock, MapPin, UploadCloud, Check, ArrowRight, FileText } from 'lucide-react';

export default function BookConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '11:00 AM - 12:30 PM',
    projectType: 'Luxury Residential',
    budget: 'Premium (25L - 50L)',
    message: '',
  });
  const [files, setFiles] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      const names = Array.from(e.dataTransfer.files).map(f => f.name);
      setFiles(prev => [...prev, ...names]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map(f => f.name);
      setFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        timeSlot: '11:00 AM - 12:30 PM',
        projectType: 'Luxury Residential',
        budget: 'Premium (25L - 50L)',
        message: '',
      });
      setFiles([]);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
            alt="Interior design materials board"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            VIP Consulting
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Schedule a Design Session
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left instructions block */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                Session Logistics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark-charcoal tracking-tight leading-tight">
                What to Expect During Your Consult
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '1. Feasibility Diagnostics',
                  desc: 'We review local building regulations in Chandigarh/UT, land classification limits, solar layout constraints, and budget compatibility.',
                },
                {
                  title: '2. Material & Visual Boards',
                  desc: 'Our lead curator Ar. Raman Kumar presents genuine stone, solid wood veneer, and brushed brass framing options at our Sector 34A workshop.',
                },
                {
                  title: '3. Technical MEP Scoping',
                  desc: 'We align drainage systems, centralized climate conditioning duct runs, and custom energy models to match your architectural vision.',
                },
              ].map((step, i) => (
                <div key={i} className="space-y-1.5 border-l-2 border-gold-500/20 pl-4">
                  <h4 className="font-display text-xs uppercase tracking-wider text-dark-charcoal font-bold">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center">
              <Compass className="w-8 h-8 text-gold-500 mx-auto animate-spin-slow mb-3" />
              <h5 className="font-display text-xs uppercase tracking-widest text-dark-charcoal font-bold">
                100% Free • No Obligation
              </h5>
              <p className="text-[10px] text-gray-400 mt-1">
                You will receive a complete feasibility diagnostic summary via email after our session.
              </p>
            </div>
          </div>

          {/* Right Form with Scheduler and File Uploader */}
          <div className="lg:col-span-8 bg-white border border-gray-100 p-8 rounded-2xl shadow-xl relative" id="consultation-form-box">
            {submitted ? (
              <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <Compass className="animate-spin-slow" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-dark-charcoal mb-2">
                  Session Booked Successfully
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed mb-4">
                  We have secured your consultation slot. A senior architect from NWI Chandigarh will contact you directly to confirm the meeting details.
                </p>
                <div className="p-3 bg-soft-white border border-gray-200 rounded text-left max-w-xs text-[11px] text-gray-400 font-mono space-y-1">
                  <div>Date: {form.date || 'To be aligned'}</div>
                  <div>Slot: {form.timeSlot}</div>
                  <div>Classification: {form.projectType}</div>
                </div>
              </div>
            ) : null}

            <h3 className="font-display text-lg font-bold text-dark-charcoal mb-6 pb-2 border-b border-gray-100">
              Submit Your Architectural Requirements
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sardar Harpreet Singh"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 078884 58257"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. harpreet@singhbuilders.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Select Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Time Window Slot
                  </label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal cursor-pointer"
                  >
                    <option value="10:00 AM - 11:30 AM">Morning Session (10:00 AM - 11:30 AM)</option>
                    <option value="11:30 AM - 1:00 PM">Late Morning (11:30 AM - 1:00 PM)</option>
                    <option value="2:30 PM - 4:00 PM">Afternoon (2:30 PM - 4:00 PM)</option>
                    <option value="4:00 PM - 5:30 PM">Late Afternoon (4:00 PM - 5:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Space Classification
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal cursor-pointer"
                  >
                    <option value="Luxury Residential">Luxury Residential Villa</option>
                    <option value="Commercial Workspace">Commercial Workspace / Office</option>
                    <option value="Hospitality & Dining">Hospitality & Dining Bistro</option>
                    <option value="Institutional Architecture">Institutional Architecture</option>
                    <option value="MEP System Engineering">MEP System Engineering</option>
                    <option value="Industrial Product Design">Industrial Product Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Anticipated Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal cursor-pointer"
                  >
                    <option value="Bespoke Elite">Bespoke Elite (&gt; 1 Cr INR)</option>
                    <option value="Ultra Luxury">Ultra Luxury (50L - 1 Cr INR)</option>
                    <option value="Premium">Premium (25L - 50L INR)</option>
                    <option value="Classic High-End">Classic High-End (&lt; 25L INR)</option>
                  </select>
                </div>
              </div>

              {/* Drag & Drop File Upload Box */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Upload Site Layout / Floor Plans (Optional)
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    dragging
                      ? 'border-gold-500 bg-gold-500/5'
                      : 'border-gray-200 bg-soft-white hover:border-gold-500/50'
                  }`}
                >
                  <input
                    type="file"
                    id="file-select-input"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <label htmlFor="file-select-input" className="cursor-pointer space-y-2 block">
                    <UploadCloud className="mx-auto text-gold-500 w-10 h-10 animate-pulse-slow" />
                    <span className="block text-xs font-semibold text-dark-charcoal">
                      Drag & Drop files here, or <span className="text-gold-600 underline">Browse files</span>
                    </span>
                    <span className="block text-[10px] text-gray-400">
                      Supports PDF, DWG, PNG, JPEG up to 25MB
                    </span>
                  </label>
                </div>

                {/* List of files loaded */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    {files.map((name, i) => (
                      <div key={i} className="flex items-center gap-2 bg-soft-white p-2 rounded border border-gray-150 text-xs text-gray-500">
                        <FileText size={14} className="text-gold-500 shrink-0" />
                        <span className="truncate">{name}</span>
                        <span className="text-[10px] text-green-600 ml-auto flex items-center gap-1 font-mono">
                          <Check size={10} /> Ready
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Elaborate Your Spatial Intent
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe structural pillars, floor heights, climate system needs, or local constraints..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-white py-3.5 rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2"
              >
                <span>Book Curation Session</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

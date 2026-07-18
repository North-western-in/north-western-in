'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, MessageSquare, Check, ArrowRight, User } from 'lucide-react';
import { testimonialsData } from '@/lib/data';

export default function TestimonialsPage() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5,
    projectType: 'Luxury Villa',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', role: '', comment: '', rating: 5, projectType: 'Luxury Villa' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80"
            alt="Client living room completed"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            Client Voice
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Distinguished Testimonials
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Grid of reviews */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-gold-500 fill-gold-500 w-5 h-5" />
            ))}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark-charcoal tracking-tight">
            Trust Formed Through Spatial Perfection
          </h2>
          <p className="text-gray-500 font-light text-xs sm:text-sm">
            Read direct feedback from industrial developers, premium homeowners, and corporate directors who contracted NWI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" id="testimonials-full-grid">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-500 fill-gold-500 w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed italic">
                  &quot;{test.comment}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold-500/10">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-dark-charcoal">
                    {test.name}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-500 block">
                    {test.role} • {test.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review Form Box */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 rounded-2xl shadow-lg relative" id="review-submit-container">
          {submitted ? (
            <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-dark-charcoal">
                Feedback Logged Successfully
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mt-1">
                Thank you for documenting your turnkey construction experience with NORTH WESTERN INNOVATORS.
              </p>
            </div>
          ) : null}

          <div className="text-center mb-8 space-y-2">
            <h3 className="font-display text-xl font-bold text-dark-charcoal">
              Submit Your Curation Review
            </h3>
            <p className="text-xs text-gray-500 font-light">
              Are you an active NWI project partner? Please document your architectural or interior feedback.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gurinder Singh"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Company Title / Role
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Managing Director"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Project Classification
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sector 8 Luxury Villa"
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Rating Scale
                </label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal cursor-pointer"
                >
                  <option value={5}>5 Stars (Exquisite Craft)</option>
                  <option value={4}>4 Stars (Highly Commendable)</option>
                  <option value={3}>3 Stars (Satisfactory)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                Bespoke Project Commentary
              </label>
              <textarea
                rows={4}
                required
                placeholder="Elaborate on site planning speed, MEP compliance accuracy, and structural finish quality..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full gold-gradient text-white py-3.5 rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2"
            >
              <span>Submit feedback registry</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

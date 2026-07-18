'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Mail, Phone, Clock, ArrowRight, Shield } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Chandigarh Architecture Headquarter"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            Reach Out
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Connect With Our Studio
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Grid of contact coordinates & form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coordinates column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                Office Information
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-charcoal tracking-tight leading-tight">
                Our Headquarters in Chandigarh
              </h2>
              <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                We welcome prospective clients, real estate developers, and design curators to discuss architectural blueprints at our design studio.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display text-dark-charcoal font-bold uppercase text-xs mb-1">
                    Design Studio & Atelier
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    SCO 96-97, 2nd Floor, Sector 34A, Sector 34, <br />
                    Chandigarh – 160022
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <div>
                  <h4 className="font-display text-dark-charcoal font-bold uppercase text-xs mb-1">
                    Telephone Curation
                  </h4>
                  <a href="tel:07888458257" className="text-gray-600 hover:text-gold-500 transition-colors">
                    078884 58257
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <div>
                  <h4 className="font-display text-dark-charcoal font-bold uppercase text-xs mb-1">
                    Electronic Mailbox
                  </h4>
                  <a href="mailto:contact@nwi-innovators.com" className="text-gray-600 hover:text-gold-500 transition-colors">
                    contact@nwi-innovators.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-display text-dark-charcoal font-bold uppercase text-xs mb-1">
                    Atelier Opening Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday – Saturday: 9:30 AM to 6:30 PM <br />
                    (Sunday: Closed for site maintenance)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Map */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg group">
              <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <Compass className="text-gold-500 animate-spin-slow" size={18} />
                  <span className="text-[11px] font-mono tracking-wider text-gold-600 uppercase font-semibold">
                    Atelier Coordinate
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/NORTH+WESTERN+INNOVATORS/@30.7230103,76.7656369,17.03z/data=!4m14!1m7!3m6!1s0x390fed30f696b629:0x8035d22f6ef6606e!2sNORTH+WESTERN+INNOVATORS!8m2!3d30.7230055!4d76.7681479!16s%2Fg%2F11pkxjv6v4!3m5!1s0x390fed30f696b629:0x8035d22f6ef6606e!8m2!3d30.7230055!4d76.7681479!16s%2Fg%2F11pkxjv6v4?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-gold-600 hover:text-gold-700 font-mono tracking-wider uppercase font-semibold flex items-center gap-1 transition-colors"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="relative w-full h-72 sm:h-80 bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=SCO%2096-97,%20Sector%2034A,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="North Western Innovators Headquarters Chandigarh Map"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-4 bg-white flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-50 font-mono">
                <span>📍 Adjacent Sector 34 Library</span>
                <span className="text-gray-400">30.7143° N, 76.7681° E</span>
              </div>
            </div>
          </div>

          {/* Form column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-100 p-8 rounded-2xl shadow-xl relative" id="contact-full-form">
            {submitted ? (
              <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <Compass className="animate-spin-slow" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-dark-charcoal mb-2">
                  Message Logged
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                  Thank you. Your coordination parameters are stored. Our Chandigarh office desk will reach out within 24 business hours.
                </p>
              </div>
            ) : null}

            <h3 className="font-display text-lg font-bold text-dark-charcoal mb-6">
              Send a Message to Ar. Raman Kumar
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adv. Amit Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal placeholder:text-gray-400"
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
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. amit@advocate.in"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Villa Renovation blueprints"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                  Elaborate Your Spatial Intent
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your site parameters, approximate budget limits, woodwork veneer preferences, and completion expectations..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-soft-white border border-gray-200 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 text-dark-charcoal placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-white py-3.5 rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2"
              >
                <span>Submit Secure Message</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

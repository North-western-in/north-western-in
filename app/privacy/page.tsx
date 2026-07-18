'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Compass, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-soft-white text-dark-charcoal">
      {/* Back button */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main text layout */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4 text-center sm:text-left">
          <Shield className="text-gold-500 w-12 h-12 mx-auto sm:mx-0 animate-pulse-slow" />
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-dark-charcoal">
            Privacy Disclosure Policy
          </h1>
          <p className="text-xs text-gray-400 font-mono">Last updated: July 2026</p>
        </div>

        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-xs sm:text-sm text-gray-500 leading-relaxed space-y-6 font-light">
          <p>
            Welcome to the digital portal of **NORTH WESTERN INNOVATORS (NWI)**. We are highly committed to securing all personal design parameters, architectural specifications, contact numbers, and building coordinates shared with our Chandigarh studio desk.
          </p>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              1. Information We Securely Log
            </h3>
            <p>
              When scheduling a free consultation or using our interactive Virtual Director chatbot, you voluntarily submit details like your name, telephone number, electronic email, budget preferences, architectural sketches, and floorplans. These parameters are strictly used for project scoping and direct response coordination.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              2. Data Protection Guidelines
            </h3>
            <p>
              We enforce appropriate firewalls, data compartmentalization protocols, and network access credentials across our on-premise studio terminals and cloud engines. Your architectural drawing uploads (DWG, PDF) are private and never distributed to third-party contractors without explicit permission.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              3. Communication Channels
            </h3>
            <p>
              By submitting your name and phone number, you authorize NWI coordinators to contact you via telephone call, SMS, or WhatsApp regarding your spatial requirements and to send feasibility summaries.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-mono uppercase">
              NORTH WESTERN INNOVATORS • Chandigarh
            </span>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5"
            >
              <span>Contact Desk</span>
              <Compass size={14} className="animate-spin-slow text-gold-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Compass, FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          <FileText className="text-gold-500 w-12 h-12 mx-auto sm:mx-0 animate-pulse-slow" />
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-dark-charcoal">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-gray-400 font-mono">Last updated: July 2026</p>
        </div>

        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-xs sm:text-sm text-gray-500 leading-relaxed space-y-6 font-light">
          <p>
            The following provisions represent the commercial and operational terms of service governing all architectural contracts, turnkey interior curations, and site installations orchestrated by **NORTH WESTERN INNOVATORS (NWI)**.
          </p>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              1. Turnkey Scope of Deliverables
            </h3>
            <p>
              NWI designs, drafts, and supervises spatial installations under standard turnkey parameters. A project is officially declared active upon the client&apos;s approval of the itemized Bill of Quantities (BOQ) and the initial structural mobilization payment.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              2. Material Specifications & Sourcing
            </h3>
            <p>
              We prioritize tactile honesty. Stone cuts (such as Italian Travertine), wood veneers, lighting components, and mechanical HVAC installations are procured according to the finalized BOQ parameters. Substitutions requested after materials have been cut or transported may incur adjustment fees.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              3. Regulatory & Municipal Approvals
            </h3>
            <p>
              For projects inside Chandigarh, Punjab, and Haryana, municipal loading limits, land permissions, and solar panel installations are designed to match regional codes. Client partners are responsible for supplying complete proof of ownership and legal property credentials required for submissions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-dark-charcoal uppercase tracking-wider">
              4. Governing Jurisdiction
            </h3>
            <p>
              Any disputes, billing negotiations, or operational disagreements arising under our contracts are subject to the exclusive jurisdiction of the courts located in Chandigarh, India.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-mono uppercase">
              NORTH WESTERN INNOVATORS • Sector 34A
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

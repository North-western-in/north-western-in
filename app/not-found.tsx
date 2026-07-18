'use client';

import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gold-500/5">
            <Compass className="animate-spin-slow" size={32} />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-gold-500 font-bold block">
            Error Code 404
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Spatial Coordinates Lost
          </h1>
          <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            The architectural blueprint or spatial route you requested could not be located in our Chandigarh atelier records.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 gold-gradient text-white px-8 py-3.5 rounded text-xs uppercase tracking-widest font-semibold hover:brightness-110 shadow-lg shadow-gold-500/10 transition-all duration-300 w-full"
          >
            <span>Return to Studio Home</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

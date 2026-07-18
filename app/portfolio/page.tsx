'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Compass, Cpu, Star, StarHalf, Play, Calendar } from 'lucide-react';
import { projectsData } from '@/lib/data';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProj, setSelectedProj] = useState<any | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Schools', 'Restaurants'];

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
            alt="North Western Innovators Portfolio Header"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            The Gallery
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Our Completed Landmarks
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12 mb-16">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded text-xs uppercase tracking-widest font-mono font-medium transition-all duration-300 focus:outline-none ${
                  filter === cat
                    ? 'gold-gradient text-white shadow-md'
                    : 'bg-white text-gray-500 hover:text-dark-charcoal border border-gray-100 hover:border-gold-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid-full">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProj(proj)}
                className="group relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/95 via-rich-black/35 to-transparent transition-opacity" />

                {/* Info Text */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500">
                      {proj.category} • {proj.location}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 font-light line-clamp-1 max-w-md">
                      {proj.description}
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-full text-white border border-white/20 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-colors duration-300 shrink-0">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rich-black text-white border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Elevate Your Properties Today
          </h2>
          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Every project begins with a conversation. Share your budget and architectural coordinates with Aura, our Virtual Director, or arrange a callback.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto gold-gradient text-white px-8 py-3.5 rounded text-xs uppercase tracking-widest font-semibold hover:brightness-110 shadow-lg shadow-gold-500/10 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/20 hover:border-gold-500/40 text-white px-8 py-3.5 rounded text-xs uppercase tracking-widest font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Contact Chandigarh Office
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedProj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#141414] border border-gold-500/15 max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-y-auto flex flex-col relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProj(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 text-gray-300 hover:text-white hover:bg-gold-500 rounded-full border border-white/10 transition-colors focus:outline-none"
              >
                <Compass className="rotate-45" size={16} />
              </button>

              {/* Banner Image */}
              <div className="relative h-[250px] sm:h-[400px] w-full shrink-0">
                <Image
                  src={selectedProj.image}
                  alt={selectedProj.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block">
                    {selectedProj.category} • Completed in {selectedProj.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                    {selectedProj.title}
                  </h3>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Meta details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-white/5 pb-6">
                  {[
                    { label: 'Client Partner', val: selectedProj.client },
                    { label: 'Location Site', val: selectedProj.location },
                    { label: 'Construct Size', val: selectedProj.size },
                    { label: 'Project Category', val: selectedProj.category },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-[9px] uppercase tracking-widest text-gray-500 font-mono">
                        {item.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="font-display text-sm uppercase tracking-[0.25em] text-gold-500 font-semibold">
                      Architectural Blueprint Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {selectedProj.overview}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-4">
                      <h5 className="font-display text-xs uppercase tracking-widest text-white font-medium">
                        Custom Curated Highlights
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-400 font-light">
                        {selectedProj.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* MEP / Engineering */}
                  <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-xl space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                      <Cpu size={16} className="text-gold-500" />
                      <h4 className="font-display text-xs uppercase tracking-wider text-white font-bold">
                        MEP Engineering Systems
                      </h4>
                    </div>
                    {selectedProj.mepHighlights ? (
                      <ul className="space-y-3 text-[11px] text-gray-400 font-light leading-relaxed">
                        {selectedProj.mepHighlights.map((mep: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold-500 shrink-0 font-bold">•</span>
                            <span>{mep}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-gray-500 font-light italic leading-relaxed">
                        Complete central heating, HVAC, energy diagnostics, water purification, and electrical distributions custom-curated by Er. Sandeep Dhillon and team.
                      </p>
                    )}
                    <Link
                      href={`/projects/${selectedProj.slug}`}
                      className="block text-center text-[10px] uppercase tracking-widest font-bold bg-white/5 hover:bg-gold-500 text-gold-500 hover:text-white border border-white/10 rounded py-2.5 transition-colors duration-300"
                    >
                      View Deep Specs Page
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

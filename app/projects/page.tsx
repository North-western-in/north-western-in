'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Calendar, Clock, LayoutGrid } from 'lucide-react';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Corporate Project planning blueprints"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            The Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Our Architectural Projects
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Projects List with detailed summaries */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {projectsData.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8`}
              >
                {/* Image side */}
                <div className={`lg:col-span-5 relative h-[250px] sm:h-[380px] ${!isEven && 'lg:order-last'}`}>
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-rich-black/75 text-gold-500 text-[9px] uppercase tracking-widest font-mono px-3 py-1.5 rounded border border-white/5">
                    {proj.category}
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-gold-500" />
                        <span>{proj.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-gold-500" />
                        <span>Completed {proj.year}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <LayoutGrid size={12} className="text-gold-500" />
                        <span>{proj.size}</span>
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark-charcoal hover:text-gold-500 transition-colors">
                      <Link href={`/projects/${proj.slug}`}>{proj.title}</Link>
                    </h2>

                    <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {proj.overview}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.highlights.slice(0, 3).map((hl, i) => (
                      <span key={i} className="bg-soft-white border border-gray-100 px-3 py-1 rounded text-[10px] text-gray-500 font-mono uppercase tracking-wide">
                        {hl}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      Client partner: {proj.client}
                    </span>
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-2 group"
                    >
                      <span>Detailed Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust and Inquiries Banner */}
      <section className="py-20 bg-rich-black text-white border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Consult NWI for Your Aspirational Project
          </h2>
          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our principal team conducts site visits and regulatory compliance mapping within Punjab, Haryana, Chandigarh UT, and Delhi NCR.
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
    </div>
  );
}

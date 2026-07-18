'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Compass, Layers, Home, Briefcase, Cpu, PenTool, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/lib/data';

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-gold-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-gold-500" />;
      case 'Home': return <Home className="w-6 h-6 text-gold-500" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-gold-500" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-gold-500 text-glow" />;
      default: return <Compass className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering services and drafting"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            Our Expertise
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Integrated Design & Engineering
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Services Grid with Detailed text */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {servicesData.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Block */}
                <div
                  className={`lg:col-span-5 relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-rich-black/20" />
                </div>

                {/* Content Block */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gold-500/10 border border-gold-500/15 text-gold-500 rounded-xl">
                      {getServiceIcon(svc.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block">
                        {svc.category}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark-charcoal tracking-tight mt-0.5">
                        {svc.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                    {svc.longDescription}
                  </p>

                  <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Check className="text-gold-500 w-4 h-4 shrink-0" />
                      <span>Dedicated Structural Coordinator assigned</span>
                    </div>
                    <Link
                      href="/book-consultation"
                      className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-2 group"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-rich-black text-white border-t border-gold-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              High Quality standards
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              A Complete Solution Without Intermediaries
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'No Subcontractor Re-Routing', desc: 'Every line of code, electrical map, plumbing layout, and masonry supervision is led by direct NWI full-time staff.' },
              { title: 'Itemized Bill of Materials (BOQ)', desc: 'We outline the exact wood veneer grade, paint chemical specification, and copper pipe diameter before starting.' },
              { title: 'Bespoke Craft Ateliers', desc: 'Access exclusive travertine stone cuts, fluted bronze glass, and hand-woven boucles through NWI networks.' },
            ].map((box, idx) => (
              <div key={idx} className="bg-[#181818] border border-white/5 p-6 rounded-xl space-y-3">
                <h3 className="font-display text-sm font-semibold text-gold-500 uppercase tracking-wider">
                  {box.title}
                </h3>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

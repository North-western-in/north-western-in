'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Compass, Shield, Award, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { teamData } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal relative">
      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80"
            alt="North Western Innovators Studio"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            About NWI
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Pioneering Luxury & Structural Art
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image block */}
            <div className="lg:col-span-5 relative h-[350px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="Drafting architectural elevations"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right text block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-500 font-bold block">
                The Heritage
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark-charcoal tracking-tight">
                Crafting Legacies Across Northern India
              </h2>
              <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                Founded by **Ar. Raman Kumar** in Chandigarh, NORTH WESTERN INNOVATORS (NWI) was established with a singular focus: to resolve the critical friction between artistic interior styling and core architectural engineering.
              </p>
              <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                While most styling firms strictly select color schemes and loose furnishings, we build from the foundation upwards. Our complete in-house capabilities encompass structural drawing drafting, 3D VR WebGL virtualization, local municipal compliance, high-capacity electrical loading, greywater recycling networks, and centralized VRV air-handling design.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="space-y-1">
                  <span className="block font-display text-2xl font-bold text-gold-600">15+ Years</span>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Chandigarh Heritage</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-2xl font-bold text-gold-600">500+</span>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Projects Delivered</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-2xl font-bold text-gold-600">100%</span>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">In-House Turnkey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Vision Grid */}
      <section className="py-20 bg-rich-black text-white border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Core Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Our Vision, Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tactile Honesty',
                desc: 'We never fake materials. Travertine remains solid stone, timber is real veneer, and brass is solid metal. This commitment to genuine raw components delivers an unmistakable atmosphere of solid luxury.',
                icon: <Shield className="w-6 h-6 text-gold-500" />,
              },
              {
                title: 'Coordinated Integration',
                desc: 'By synchronizing the architectural frame, spatial acoustics, lighting arrays, and complete MEP drainage paths early in the design cycle, we ensure there are zero clashes or field construction reworks.',
                icon: <Compass className="w-6 h-6 text-gold-500" />,
              },
              {
                title: 'Bespoke Craftsmanship',
                desc: 'We operate our own industrial-grade fabrication and carpentry workshop. When standard retail furniture lacks the required luxury or dimension, we custom-manufacture it for our clients.',
                icon: <Award className="w-6 h-6 text-glow text-gold-500" />,
              },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#181818] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-gold-500/15 transition-all duration-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
              The Curators of North Western Innovators
            </h2>
            <p className="text-gray-500 font-light text-xs sm:text-sm">
              Meet our founding principal and the lead directors driving engineering and design excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamData.map((tm) => (
              <div
                key={tm.id}
                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden">
                  <Image
                    src={tm.image}
                    alt={tm.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-display text-sm sm:text-base font-bold text-dark-charcoal">
                    {tm.name}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gold-500 mt-1 block">
                    {tm.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rich-black text-white border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Begin Your Turnkey Journey?
          </h2>
          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Discuss your structural framing, interior layout parameters, and MEP coordination targets with our founder, Ar. Raman Kumar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto gold-gradient text-white px-8 py-3.5 rounded text-xs uppercase tracking-widest font-semibold hover:brightness-110 shadow-lg shadow-gold-500/10 transition-all duration-300"
            >
              Book Free consultation
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

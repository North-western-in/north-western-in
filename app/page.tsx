'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Layers,
  Home as HomeIcon,
  Briefcase,
  Cpu,
  PenTool,
  ArrowRight,
  Clock,
  Star,
  Award,
  Shield,
  Activity,
  Check,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Play,
  ChevronDown,
  User,
  Heart,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import {
  servicesData,
  projectsData,
  testimonialsData,
  blogData,
  faqData,
  teamData,
} from '@/lib/data';
import VirtualConsultant from '@/components/VirtualConsultant';

export default function HomePage() {
  // Stats Counters state
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Before & After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Active Project Filter
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // FAQ Active Accordion
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  // Contact Form state
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Residential',
    budget: 'Premium (25L - 50L)',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Video Overlay Modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animation triggers on load
  useEffect(() => {
    const projInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev >= 500) {
          clearInterval(projInterval);
          return 500;
        }
        return prev + 10;
      });
    }, 30);

    const expInterval = setInterval(() => {
      setExperienceYears((prev) => {
        if (prev >= 15) {
          clearInterval(expInterval);
          return 15;
        }
        return prev + 1;
      });
    }, 80);

    const clientInterval = setInterval(() => {
      setClientsCount((prev) => {
        if (prev >= 300) {
          clearInterval(clientInterval);
          return 300;
        }
        return prev + 8;
      });
    }, 40);

    return () => {
      clearInterval(projInterval);
      clearInterval(expInterval);
      clearInterval(clientInterval);
    };
  }, []);

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  const filteredProjects = projectFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === projectFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        projectType: 'Luxury Residential',
        budget: 'Premium (25L - 50L)',
        message: '',
      });
    }, 4000);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-gold-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-gold-500" />;
      case 'Home': return <HomeIcon className="w-5 h-5 text-gold-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-gold-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-gold-500" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-gold-500 text-glow" />;
      default: return <Compass className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative min-h-screen lg:min-h-[850px] xl:h-screen flex items-center justify-center bg-rich-black overflow-hidden pt-20 sm:pt-24 pb-20 lg:pt-44 lg:pb-24 xl:py-0">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Spatial Architecture"
            fill
            className="object-cover scale-105 animate-pulse-slow"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4 sm:mt-6 lg:mt-20 xl:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:-mt-[120px] lg:mt-0"
          >
            <span className="inline-block mt-[30px] sm:mt-0 text-xs uppercase tracking-[0.4em] text-gold-500 font-mono font-bold border-b border-gold-500/20 pb-2">
              North Western Innovators
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
              Transform Spaces Into <br />
              <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-transparent">Timeless Masterpieces</span>
            </h1>
            <p className="text-gray-300 font-light text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Premium Interior Design & Architectural solutions engineered for exquisite Residential, Corporate, and Commercial structures across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/book-consultation"
                id="hero-cta-book"
                className="w-[280px] sm:w-auto gold-gradient text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded text-xs uppercase tracking-widest font-semibold hover:scale-105 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                id="hero-cta-portfolio"
                className="w-[280px] sm:w-auto border border-white/20 hover:border-gold-500/40 bg-white/5 hover:bg-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                View Exclusive Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-14 sm:mt-20 border-t border-white/10 pt-10"
          >
            {[
              { label: 'Projects Completed', value: `${projectsCount}+` },
              { label: 'Years Experience', value: `${experienceYears}+` },
              { label: 'Happy Clients', value: `${clientsCount}+` },
              { label: 'Client Satisfaction', value: '98%' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="block font-display text-2xl sm:text-4xl font-bold text-gold-500 font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden xl:flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-gray-500">Scroll Down</span>
          <div className="w-[1.5px] h-10 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: [0, 40] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 h-4 bg-gold-500 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BRANDS SECTION */}
      <section id="trusted-brands" className="bg-rich-black pt-10 md:pt-2 lg:pt-10 pb-10 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-mono">
            Trusted by Leaders in Real Estate & Enterprise
          </span>
        </div>
        <div className="relative w-full flex items-center">
          {/* Scrolling Marquee */}
          <div className="flex select-none overflow-hidden gap-12 w-full">
            <div className="animate-marquee flex gap-16 items-center">
              {[
                'DLF Commercial',
                'Chandigarh Administration',
                'Omaxe Properties',
                'TATA Housing',
                'Godrej Properties',
                'Larsen & Toubro',
                'Sukhna Developers',
                'EMAAR Group',
              ].map((brand, i) => (
                <div
                  key={i}
                  className="font-display text-sm sm:text-lg font-medium tracking-[0.35em] text-gray-500 uppercase whitespace-nowrap hover:text-gold-500 transition-colors duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
            {/* Duplicated for smooth loop */}
            <div className="animate-marquee flex gap-16 items-center" aria-hidden="true">
              {[
                'DLF Commercial',
                'Chandigarh Administration',
                'Omaxe Properties',
                'TATA Housing',
                'Godrej Properties',
                'Larsen & Toubro',
                'Sukhna Developers',
                'EMAAR Group',
              ].map((brand, i) => (
                <div
                  key={i}
                  className="font-display text-sm sm:text-lg font-medium tracking-[0.35em] text-gray-500 uppercase whitespace-nowrap hover:text-gold-500 transition-colors duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about-section" className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Col: Image & Floating Badge */}
            <div className="relative h-[400px] sm:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="Principal Architect Drafting"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-rich-black/20" />
              {/* Floating Luxury Medal Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism p-5 rounded-xl border border-gold-500/20 max-w-xs">
                <Award className="text-gold-500 w-8 h-8 mb-2" />
                <span className="block font-display text-white text-sm tracking-wide font-medium">
                  Chandigarh Design Excellence Awards
                </span>
                <span className="text-[10px] font-mono tracking-wider text-gold-500 uppercase">
                  Winner 2025 • Turnkey Architecture
                </span>
              </div>
            </div>

            {/* Right Col: Story & Story Values */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                  Our Legacy & Architecture
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-charcoal leading-tight">
                  Pioneering Luxury & Structural Integrity
                </h2>
                <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                  NORTH WESTERN INNOVATORS (NWI) represents an elite team of architects, interior curators, mechanical engineers, and product designers based in Chandigarh. Our multi-disciplinary synchronization ensures that your home or workspace is not just a visual marvel, but a perfectly engineered machine for comfortable living.
                </p>
              </div>

              {/* Mission/Vision grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'The NWI Vision',
                    desc: 'To deliver architectural landmarks and bespoke interiors that harmonize luxury, climate resiliency, and customized human utility.',
                  },
                  {
                    title: 'The Turnkey Promise',
                    desc: 'Zero-friction delivery. We manage complete layout drafting, local regulatory approvals, HVAC calculations, 3D renders, and final finishing.',
                  },
                ].map((val, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-display text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-dark-charcoal">15+</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Years in Chandigarh</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-dark-charcoal">500+</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Projects Nationwide</span>
                </div>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-2 group ml-auto"
                >
                  <span>More About Our Team</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services-section" className="py-24 bg-rich-black text-white border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              What We Orchestrate
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Bespoke Architecture & Engineering
            </h2>
            <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
              We design and coordinate the visual shell and the structural engineering in-house. That means flawless spatial delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                id={`svc-card-${svc.id}`}
                className="group relative bg-[#181818] border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-colors duration-300">
                    {getServiceIcon(svc.icon)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide mb-3 group-hover:text-gold-500 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-[10px] uppercase tracking-widest font-bold text-gold-500 group-hover:text-white flex items-center gap-2 group-hover:translate-x-1.5 transition-all duration-300 w-fit"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why-choose-us" className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Values Grid */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                  The NWI Advantage
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
                  Why Clients Entrust Us with Their Dream Spaces
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Highly Experienced Team', desc: 'Led by certified architects and senior MEP engineers with 15+ years of local execution experience.' },
                  { title: 'Bespoke Custom Materials', desc: 'Access our private workshop for specialized travertine sourcing, metal finishes, and bespoke cabinetry.' },
                  { title: 'Transparent Process', desc: 'No hidden bills. Get granular itemized BOQs, precise 3D rendering matches, and weekly video site updates.' },
                  { title: 'On-Time Turnkey Handover', desc: 'We employ rigorous site supervision and local contractor networks to ensure target deadline delivery.' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-gold-500/10 text-gold-500 shrink-0">
                        <Check size={14} />
                      </div>
                      <h3 className="font-display text-sm font-semibold text-dark-charcoal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-light pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Immersive image with float card */}
            <div className="relative h-[400px] sm:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Italian Kitchen Design"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-rich-black/10" />
              <div className="absolute top-6 right-6 glassmorphism p-5 rounded-xl border border-gold-500/20 text-center max-w-[200px]">
                <Shield className="text-gold-500 w-8 h-8 mx-auto mb-2" />
                <span className="block font-display text-white text-sm font-medium">100% Turnkey Insurance</span>
                <span className="text-[9px] font-mono tracking-wider text-gold-500 uppercase block mt-1">Guaranteed Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section id="our-process" className="py-24 bg-rich-black text-white border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Architectural Roadmap
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Our Structured Project Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Timeline connectors on large screens */}
            <div className="hidden lg:block absolute top-[44px] left-10 right-10 h-[1px] bg-white/10 z-0" />

            {[
              { num: '1', title: 'Discovery Consult', desc: 'Bespoke design questionnaire, spatial mapping, and baseline feasibility.' },
              { num: '2', title: 'Concept Planning', desc: 'Structural circulation blueprints and custom material board choices.' },
              { num: '3', title: 'Design Concept', desc: 'Finalizing architectural elevations, wood veneer choices, and stones.' },
              { num: '4', title: '3D Renderings', desc: 'High-fidelity cinematic visual virtualizations of every single angle.' },
              { num: '5', title: 'Site Execution', desc: 'Under supervision of our senior architects, engineers, and MEP leaders.' },
              { num: '6', title: 'Bespoke Handover', desc: 'Deep cleaning, light tuning, custom furniture layout, and final keys.' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 space-y-4 text-center group">
                <div className="mx-auto w-12 h-12 rounded-full gold-gradient border border-gold-400 text-white font-mono text-base font-bold flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-semibold text-white tracking-wide group-hover:text-gold-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS PORTFOLIO */}
      <section id="featured-projects" className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                Exclusive Gallery
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
                Landmarks of Sophisticated Curation
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Residential', 'Commercial', 'Schools', 'Restaurants'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 rounded text-xs uppercase tracking-widest font-mono font-medium transition-all duration-300 focus:outline-none ${
                    projectFilter === cat
                      ? 'gold-gradient text-white shadow-md'
                      : 'bg-white text-gray-500 hover:text-dark-charcoal border border-gray-100 hover:border-gold-500/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-like grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(proj)}
                  className="group relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 via-rich-black/35 to-transparent transition-opacity" />

                  {/* Text Overlay */}
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
        </div>
      </section>

      {/* 8. BEFORE & AFTER SECTION */}
      <section id="before-after" className="py-24 bg-rich-black text-white border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Architectural Transformation
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Visualizing the Architectural Miracle
            </h2>
            <p className="text-gray-400 font-light text-xs sm:text-sm">
              Drag the center slider with your mouse or finger to view the transition of raw structural site framing into the finalized, luxury curated villa.
            </p>
          </div>

          {/* Interactive Image Comparison Slider */}
          <div
            id="before-after-slider"
            className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[500px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-gold-500/20"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Before Image (Underneath) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
                alt="Before Structural Execution"
                fill
                className="object-cover"
                draggable={false}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-rich-black/75 border border-white/10 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded font-mono z-10">
                Site Foundation (Before)
              </div>
            </div>

            {/* After Image (Overlay clipped with sliderPosition) */}
            <div
              className="absolute inset-y-0 left-0 right-0 z-10 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[400px] sm:w-[896px] h-[300px] sm:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="After Luxury Curation"
                  fill
                  className="object-cover"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 right-4 bg-gold-500 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded font-mono z-20">
                Luxurious Travertine Villa (After)
              </div>
            </div>

            {/* Splitter Line Handle */}
            <div
              className="absolute inset-y-0 z-20 w-[2px] bg-gold-500"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold-500 border border-white text-white rounded-full flex items-center justify-center shadow-xl cursor-ew-resize">
                <Compass size={16} className="animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section id="testimonials-section" className="py-24 bg-soft-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-dark-charcoal leading-tight">
              Elite Clients, Unmatched Review Scores
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-gold-500 fill-gold-500 w-4 h-4" />
              ))}
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase ml-2">
                4.9/5 Rating (103+ Google Reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="text-gold-500 fill-gold-500 w-3 h-3" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed italic">
                    &quot;{test.comment}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gold-500/20">
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
        </div>
      </section>

      {/* 10. COMPANY INTRO VIDEO SECTION */}
      <section id="video-section" className="py-24 bg-rich-black text-white border-y border-gold-500/10 relative">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="NWI Corporate Workspace Planning"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Virtual Studio Tour
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              See the Craft in Action
            </h2>
            <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
              Take an exclusive look behind the scenes at our Chandigarh design studio, custom material prototyping workshop, and finalized turnkey installations.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto h-[250px] sm:h-[400px] rounded-2xl overflow-hidden group shadow-2xl border border-gold-500/20 bg-black/60">
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
              alt="NWI Studio Video Frame"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              referrerPolicy="no-referrer"
            />
            {/* Play trigger button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 hover:bg-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label="Play Studio Presentation Video"
            >
              <div className="w-16 h-16 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-2xl shadow-gold-500/30 group-hover:scale-115 transition-transform duration-300">
                <Play size={24} className="fill-white ml-1" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-white uppercase font-bold">
                Play Tour (3:15 Min)
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. TEAM SECTION */}
      <section id="team-section" className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
              The Innovators
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
              Led by Chandigarh&apos;s Top Talent
            </h2>
            <p className="text-gray-500 font-light text-xs sm:text-sm">
              Our registered architects, interior designers, MEP coordination directors, and stone-carving artisans sync directly on every floor plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" id="team-grid">
            {teamData.map((tm) => (
              <div
                key={tm.id}
                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[280px] sm:h-[350px] w-full overflow-hidden">
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

      {/* 12. FAQ SECTION */}
      <section id="faq-section" className="py-24 bg-rich-black text-white border-y border-gold-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Inquiries
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4" id="faq-accordion">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#151515] border border-white/5 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-white hover:text-gold-500 transition-colors focus:outline-none"
                >
                  <span className="font-display text-xs sm:text-sm font-semibold tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gold-500 shrink-0 transition-transform duration-300 ${
                      activeFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 text-xs sm:text-sm leading-relaxed font-light border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INTERACTIVE VIRTUAL CONSULTANT CHATBOT */}
      <section id="ai-assistant-section" className="py-24 bg-soft-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                  AI Space Modeling
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
                  Consult our Virtual Director
                </h2>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed">
                  Have spatial layout questions, wood veneer pairing questions, or MEP coordination queries?
                </p>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                  Chat in real-time with **Aura**, our Virtual Design Director. Aura leverages advanced architectural libraries to suggest custom material boards and spatial circulations instantly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-gold-500/10 text-gold-500 shrink-0">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-dark-charcoal">
                    Elite Design Grounding
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light mt-1">
                    Directly integrated with NWI&apos;s Chandigarh local building regulations, materials inventories, and MEP structural guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Chat Widget */}
            <div className="lg:col-span-7">
              <VirtualConsultant />
            </div>
          </div>
        </div>
      </section>

      {/* 14. BLOG SECTION */}
      <section id="blog-section" className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                The Journal
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-dark-charcoal tracking-tight leading-tight">
                Architectural Insights & Design Curation
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-2 group shrink-0"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blogs-grid">
            {blogData.map((blog) => (
              <article
                key={blog.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-103 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-rich-black/75 text-white text-[9px] uppercase tracking-widest font-mono px-2.5 py-1 rounded">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-dark-charcoal line-clamp-2 hover:text-gold-500 transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-[11px] text-gray-500 font-light leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gold-500/10">
                      <Image
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 font-semibold">{blog.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[10px] uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5"
                  >
                    <span>Read</span>
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CALL TO ACTION & CONTACT FORM SECTION */}
      <section id="contact-section" className="py-24 bg-rich-black text-white border-t border-gold-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Form: Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block">
                  Let&apos;s Collaborate
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  Let&apos;s Design Your Dream Space
                </h2>
                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                  Arrange a physical meeting at our Chandigarh sector 34A office, or book a digital consultation with our Principal Architect.
                </p>
              </div>

              {/* Office Metadata Details */}
              <div className="space-y-6 text-xs sm:text-sm font-light">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-white font-semibold tracking-wide uppercase text-xs mb-1">
                      NWI Chandigarh Studio
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      SCO 96-97, 2nd Floor, Sector 34A, Sector 34, <br />
                      Chandigarh – 160022
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-display text-white font-semibold tracking-wide uppercase text-xs mb-1">
                      Phone Call Curation
                    </h4>
                    <a href="tel:07888458257" className="text-gray-400 hover:text-gold-500 transition-colors">
                      078884 58257
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-display text-white font-semibold tracking-wide uppercase text-xs mb-1">
                      Electronic Mail
                    </h4>
                    <a href="mailto:contact@nwi-innovators.com" className="text-gray-400 hover:text-gold-500 transition-colors">
                      contact@nwi-innovators.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-display text-white font-semibold tracking-wide uppercase text-xs mb-1">
                      Studio Hours
                    </h4>
                    <p className="text-gray-400">
                      Monday – Saturday: 9:30 AM to 6:30 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Embedded Map */}
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <Compass className="text-gold-500 animate-spin-slow" size={18} />
                    <span className="text-[11px] font-mono tracking-wider text-gold-400 uppercase font-semibold">
                      Atelier Coordinate
                    </span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/NORTH+WESTERN+INNOVATORS/@30.7230103,76.7656369,17.03z/data=!4m14!1m7!3m6!1s0x390fed30f696b629:0x8035d22f6ef6606e!2sNORTH+WESTERN+INNOVATORS!8m2!3d30.7230055!4d76.7681479!16s%2Fg%2F11pkxjv6v4!3m5!1s0x390fed30f696b629:0x8035d22f6ef6606e!8m2!3d30.7230055!4d76.7681479!16s%2Fg%2F11pkxjv6v4?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-gold-500 hover:text-gold-400 font-mono tracking-wider uppercase font-semibold flex items-center gap-1 transition-colors"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="relative w-full h-72 sm:h-80 bg-rich-black">
                  <iframe
                    src="https://maps.google.com/maps?q=SCO%2096-97,%20Sector%2034A,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    title="North Western Innovators Headquarters Chandigarh Map"
                    className="w-full h-full opacity-85 hover:opacity-100 grayscale hover:grayscale-0 contrast-[1.1] brightness-[0.85] hover:brightness-100 transition-all duration-700"
                  />
                </div>
                <div className="p-4 bg-white/[0.02] flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 font-mono">
                  <span>📍 Adjacent Piccadily Mall</span>
                  <span className="text-gray-500">30.7143° N, 76.7681° E</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#141414] border border-white/5 p-8 rounded-2xl shadow-2xl relative" id="contact-form-container">
              {formSubmitted ? (
                <div className="absolute inset-0 bg-[#141414] rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                    <Compass className="animate-spin-slow" size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Vision Submitted Successfully
                  </h3>
                  <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                    Thank you, our Elite Consulting Desk is reviewing your spatial blueprint coordinates. Ar. Raman Kumar will contact you directly within 24 hours.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sahni"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 078884 58257"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@luxuryvilla.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                      Space Classification
                    </label>
                    <select
                      value={contactForm.projectType}
                      onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white cursor-pointer"
                    >
                      <option value="Luxury Residential">Luxury Residential Villa</option>
                      <option value="Commercial Workspace">Commercial Workspace / Office</option>
                      <option value="Hospitality & Dining">Hospitality & Dining Bistro</option>
                      <option value="Institutional Architecture">Institutional Architecture</option>
                      <option value="MEP System Engineering">MEP System Engineering</option>
                      <option value="Industrial Product Design">Industrial Product Design</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Anticipated Budget Range
                  </label>
                  <select
                    value={contactForm.budget}
                    onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white cursor-pointer"
                  >
                    <option value="Bespoke Elite">Bespoke Elite (&gt; 1 Cr INR)</option>
                    <option value="Ultra Luxury">Ultra Luxury (50L - 1 Cr INR)</option>
                    <option value="Premium">Premium (25L - 50L INR)</option>
                    <option value="Classic High-End">Classic High-End (&lt; 25L INR)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Elaborate Your Spatial Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site details, architectural goals, required rooms, layout requirements, or MEP issues..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient text-white py-3.5 rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 focus:outline-none"
                >
                  <span>Submit Bespoke Vision Brief</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 16. DETAILED PROJECT MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10"
            id="project-detail-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#141414] border border-gold-500/15 max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-y-auto flex flex-col relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 text-gray-300 hover:text-white hover:bg-gold-500 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-label="Close Project Specification Panel"
              >
                <Compass className="rotate-45" size={16} />
              </button>

              {/* Banner Image */}
              <div className="relative h-[250px] sm:h-[400px] w-full shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block">
                    {selectedProject.category} • Completed in {selectedProject.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Info grid */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Meta details list */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-white/5 pb-6">
                  {[
                    { label: 'Client Partner', val: selectedProject.client },
                    { label: 'Location Site', val: selectedProject.location },
                    { label: 'Construct Size', val: selectedProject.size },
                    { label: 'Project Category', val: selectedProject.category },
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

                {/* Left/Right Text columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="font-display text-sm uppercase tracking-[0.25em] text-gold-500 font-semibold">
                      Architectural Blueprint Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {selectedProject.overview}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-4">
                      <h5 className="font-display text-xs uppercase tracking-widest text-white font-medium">
                        Custom Curated Highlights
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-400 font-light">
                        {selectedProject.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* MEP / Engineering highlights */}
                  <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-xl space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                      <Cpu size={16} className="text-gold-500" />
                      <h4 className="font-display text-xs uppercase tracking-wider text-white font-bold">
                        MEP Engineering Systems
                      </h4>
                    </div>
                    {selectedProject.mepHighlights ? (
                      <ul className="space-y-3 text-[11px] text-gray-400 font-light leading-relaxed">
                        {selectedProject.mepHighlights.map((mep: string, idx: number) => (
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
                      href={`/projects/${selectedProject.slug}`}
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

      {/* 17. VIDEO MODAL POPUP */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            id="video-player-modal"
          >
            <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden border border-gold-500/20 bg-black shadow-2xl">
              {/* Dummy beautiful placeholder showing video presentation layout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white z-0">
                <Compass className="text-gold-500 animate-spin-slow mb-4" size={48} />
                <h4 className="font-display text-lg sm:text-2xl font-bold">
                  North Western Innovators Presentation Video
                </h4>
                <p className="text-xs text-gray-400 max-w-md font-light leading-relaxed mt-2 mb-6">
                  Showing Ar. Raman Kumar drafting, live stone fabrication at our Chandigarh workshop, and virtual Walkthroughs.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    Playback Stream • 1080p WebGL Render
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/55 text-gray-300 hover:text-white rounded-full border border-white/15 focus:outline-none"
              >
                <Compass className="rotate-45" size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

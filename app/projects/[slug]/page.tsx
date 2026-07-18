import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';
import { MapPin, Calendar, LayoutGrid, CheckCircle, Cpu, Compass, ArrowLeft, Shield } from 'lucide-react';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-soft-white text-dark-charcoal">
      {/* Back button header */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700"
          >
            <ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>

      {/* Banner / Cover */}
      <section className="relative h-[400px] sm:h-[550px] w-full bg-rich-black overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-500 font-semibold block">
              {project.category} • completed {project.year}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-4xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta grid specs */}
      <section className="bg-white border-b border-gray-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Client Partner', val: project.client },
              { label: 'Site Location', val: project.location },
              { label: 'Built Footprint', val: project.size },
              { label: 'Completion Year', val: project.year },
            ].map((spec, idx) => (
              <div key={idx} className="border-l border-gray-100 pl-4">
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono font-medium">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-base font-bold text-dark-charcoal">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative & Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-500 font-mono font-bold block">
                Project Narrative
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-dark-charcoal">
                Architectural Intent & Spatial Harmony
              </h2>
              <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
              <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed pt-2">
                Every NWI project centers on detailed material honesty. From structural reinforced concrete foundations to custom fluted walnut millwork and custom stone trims, the material board is resolved before physical earth excavation begins.
              </p>
            </div>

            {/* Gallery of photos */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display text-sm uppercase tracking-wider text-dark-charcoal font-bold">
                Spec Detail view Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative h-[250px] rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={img}
                      alt={`${project.title} Detail View ${i + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Highlights checklist */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-display text-xs uppercase tracking-wider text-dark-charcoal font-bold pb-2 border-b border-gray-100">
                Architectural Highlights
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 font-light leading-relaxed">
                {project.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MEP / Engineering System Integration */}
            <div className="bg-rich-black text-white rounded-xl p-6 shadow-xl border border-gold-500/10 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <Cpu size={16} className="text-gold-500" />
                <h4 className="font-display text-xs uppercase tracking-wider text-white font-bold">
                  Integrated Engineering
                </h4>
              </div>
              <ul className="space-y-3 text-[11px] text-gray-300 font-light leading-relaxed">
                {project.mepHighlights ? (
                  project.mepHighlights.map((mep, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold">•</span>
                      <span>{mep}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold">•</span>
                      <span>Advanced concealed HVAC slot diffusers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold">•</span>
                      <span>Integrated structural solar pathway models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold">•</span>
                      <span>Smart water pressure regulator manifolds</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Call Action card */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-center space-y-4">
              <Compass className="w-8 h-8 text-gold-500 mx-auto animate-spin-slow" />
              <h4 className="font-display text-xs uppercase tracking-widest text-dark-charcoal font-bold">
                Build a masterpiece together
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                Discuss similar material details, travertine cuts, or MEP engineering requirements for your upcoming property.
              </p>
              <Link
                href="/book-consultation"
                className="block text-center text-[10px] uppercase tracking-widest font-bold gold-gradient text-white rounded py-2.5 shadow-lg shadow-gold-500/15"
              >
                Book Free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

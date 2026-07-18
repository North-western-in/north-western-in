import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogData } from '@/lib/data';
import { ArrowLeft, Clock, Calendar, CheckCircle, Shield, Award, Compass } from 'lucide-react';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-soft-white text-dark-charcoal">
      {/* Back Header navigation */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700"
          >
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Article Meta Header */}
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-block bg-gold-500/10 text-gold-600 text-[10px] uppercase tracking-widest font-mono font-bold px-3 py-1 rounded">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-dark-charcoal leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-400 font-mono pt-2 border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-gold-500" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-gold-500" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Big Cover Image */}
        <div className="relative h-[250px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content & Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
          
          {/* Main content body (8 cols) */}
          <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            <p className="font-display text-dark-charcoal font-semibold text-lg leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="space-y-4">
              <p>
                In Chandigarh and throughout northern India, the construction of luxury residences and corporate hubs requires a balanced integration of thermal design, layout ergonomics, and durable raw materials. When designing residential villas, the ventilation ducts, load-bearing concrete layouts, and travertine slab placements must be calculated months before actual installation.
              </p>
              
              <div className="p-6 bg-white border border-gray-100 rounded-xl space-y-3 shadow-sm my-6">
                <span className="block font-display text-xs uppercase tracking-wider text-gold-500 font-bold">
                  Curator&apos;s Technical Blueprint Note
                </span>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  &quot;Concealed air slots, under-floor hydronic lines, and central smart lighting switches require a dedicated coordination supervisor during early concrete slab casting. Attempting to fit these components after masonry completions always leads to unseemly pipe bulges and spatial losses.&quot;
                </p>
              </div>

              <p>
                To maintain true tactile honesty, we discourage the use of plastic-composite panel replicas. Travertine, quartzite, solid walnut veneer, and genuine heavy brushed steel elements provide a level of visual weight and temperature feedback that synthetic elements cannot replicate. This commitment defines the high-end turnkey services engineered by North Western Innovators.
              </p>
            </div>

            {/* Additional highlights list */}
            <div className="pt-6 space-y-3">
              <h4 className="font-display text-sm uppercase tracking-wider text-dark-charcoal font-bold">
                Key Integration Targets
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-500 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  <span>Early placement diagnostics and municipal loading approvals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  <span>True-to-render custom metal fabrication at the Chandigarh workshop</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  <span>Integrated mechanical water loops and thermal airflow mapping</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Author info & sidebar (4 cols) */}
          <div className="md:col-span-4 space-y-8">
            {/* Author Profile */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center space-y-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto border border-gold-500/15 shadow">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-xs sm:text-sm font-bold text-dark-charcoal">
                  {post.author.name}
                </h4>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-500 block">
                  {post.author.role}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                Dedicated lead coordinator directing design, structural framing, and turnkey completions across India.
              </p>
            </div>

            {/* Turnkey Promise card */}
            <div className="bg-[#141414] text-white p-6 rounded-2xl border border-gold-500/10 text-center space-y-4 shadow-xl">
              <Compass className="w-8 h-8 text-gold-500 mx-auto animate-spin-slow" />
              <h5 className="font-display text-xs uppercase tracking-widest text-gold-500 font-bold">
                Coordinate with NWI
              </h5>
              <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                Arrange a virtual consultation with our founding principal to review your upcoming design parameters.
              </p>
              <Link
                href="/book-consultation"
                className="block text-center text-[10px] uppercase tracking-widest font-bold gold-gradient text-white rounded py-2.5 shadow-lg shadow-gold-500/15"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

        </div>

      </article>
    </div>
  );
}

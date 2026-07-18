'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar, Search } from 'lucide-react';
import { blogData } from '@/lib/data';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Interior Design', 'Architecture', 'Engineering', 'Products'];

  const filteredBlogs = blogData.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-soft-white text-dark-charcoal">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-rich-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80"
            alt="Interior design sketchbook"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-500 font-mono font-bold block">
            The Journal
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Architectural Curation & Insights
          </h1>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-widest font-mono font-medium transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? 'gold-gradient text-white shadow-md'
                    : 'bg-soft-white text-gray-500 hover:text-dark-charcoal border border-gray-100 hover:border-gold-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-soft-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 focus:bg-white transition-all text-dark-charcoal"
            />
          </div>

        </div>
      </section>

      {/* Blog Grid List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-posts-grid">
              {filteredBlogs.map((post) => (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Cover image */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-rich-black/75 text-white text-[9px] uppercase tracking-widest font-mono px-2.5 py-1 rounded">
                        {post.category}
                      </div>
                    </div>

                    {/* Meta & Summary */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-gold-500" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-gold-500" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-dark-charcoal hover:text-gold-500 transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-[11px] text-gray-500 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Author / CTA info */}
                  <div className="p-6 pt-0 mt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/15">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-600 font-bold leading-tight">{post.author.name}</span>
                        <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wide">{post.author.role}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[10px] uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1.5"
                    >
                      <span>Read Specs</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
              <BookOpen className="text-gold-500 w-12 h-12 mx-auto animate-pulse-slow" />
              <h3 className="font-display text-xl font-bold">No Curations Match</h3>
              <p className="text-xs text-gray-400">
                Try revising your query words or picking another category tab.
              </p>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Calendar, ArrowRight,
  Home, Info, Wrench, Briefcase, DraftingCompass, MessageSquare, BookOpen, HelpCircle, Mail
} from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Wrench },
  { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: DraftingCompass },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightPage = pathname === '/privacy' || pathname === '/terms' || (pathname.startsWith('/blog/') && pathname !== '/blog');
  const forceScrolled = isScrolled || isLightPage;

  // Scrolled state effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          forceScrolled
            ? 'glassmorphism py-3 shadow-lg shadow-black/10'
            : 'bg-rich-black/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-4 lg:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between lg:gap-4 xl:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center group focus:outline-none" id="nav-logo">
              <Logo size={42} className="text-white hover:opacity-95 transition-all" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1 2xl:gap-2" id="desktop-nav">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    className={`lg:px-1 xl:px-2 2xl:px-3 py-2 lg:text-[12px] xl:text-[12px] 2xl:text-[12px] uppercase lg:tracking-[0.06em] xl:tracking-[0.12em] 2xl:tracking-[0.2em] font-medium transition-all duration-300 relative focus:outline-none whitespace-nowrap ${
                      isActive ? 'text-gold-500' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-1 right-1 xl:left-2 xl:right-2 2xl:left-3 2xl:right-3 h-[2px] bg-gold-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/book-consultation"
                id="nav-cta-book"
                className="gold-gradient text-white lg:px-3.5 lg:py-2 lg:text-[9px] xl:px-5 xl:py-2.5 xl:text-xs rounded font-semibold uppercase lg:tracking-[0.1em] xl:tracking-widest hover:brightness-110 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 xl:gap-2 group focus:outline-none focus:ring-2 focus:ring-gold-500 whitespace-nowrap"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link
                href="tel:07888458257"
                className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-all"
                aria-label="Call North Western Innovators"
              >
                <Phone size={16} />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            id="mobile-nav-overlay"
            className="fixed inset-0 z-40 bg-rich-black/98 pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden overflow-y-auto scrollbar-none"
          >
            <div className="flex flex-col space-y-4">
              <div className="border-b border-white/5 pb-4 mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-mono font-semibold">Navigation Menu</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 group ${
                          isActive
                            ? 'bg-gold-500/10 border-gold-500/30 text-gold-500 shadow-md shadow-gold-500/5'
                            : 'bg-white/[0.02] border-white/5 text-gray-300 hover:text-white hover:bg-white/[0.05] hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded transition-all duration-300 ${
                            isActive 
                              ? 'bg-gold-500/20 text-gold-500' 
                              : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10'
                          }`}>
                            <Icon size={16} />
                          </div>
                          <span className="font-display text-sm tracking-widest font-medium uppercase">{link.name}</span>
                        </div>
                        {isActive ? (
                          <motion.span
                            layoutId="activeDot"
                            className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-1"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        ) : (
                          <ArrowRight size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 mr-1" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-10">
              <Link
                href="/book-consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center gold-gradient text-white py-3.5 rounded text-sm font-semibold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                <span>Book Free Consultation</span>
              </Link>
              <div className="text-center text-[10px] text-gray-500 font-mono tracking-widest">
                NORTH WESTERN INNOVATORS • CHANDIGARH
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

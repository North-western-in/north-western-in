'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, ArrowRight, Shield, FileText } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="bg-rich-black text-gray-300 pt-20 pb-10 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex items-center group focus:outline-none" id="footer-logo">
              <Logo size={48} className="hover:opacity-95 transition-all" />
            </Link>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              We translate client visions into breathtaking physical realities. Chandigarh&apos;s premium design house for luxury residential, sophisticated commercial, institutional architecture, and high-end MEP designing.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-gold-500/20 hover:scale-115 transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-gold-500/20 hover:scale-115 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-gold-500/20 hover:scale-115 transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-[0.2em] font-medium mb-6">
              Core Services
            </h3>
            <ul className="space-y-3.5 text-sm font-light">
              {[
                { name: 'Architectural Planning', href: '/services#architecture' },
                { name: 'Luxury Interior Design', href: '/services#interior-design' },
                { name: 'Residential & Commercial Interiors', href: '/services#residential' },
                { name: 'Product & Custom Furniture', href: '/services#product' },
                { name: 'MEP Services', href: '/services#mep' },
                { name: '3D Virtual Rendering', href: '/services#visualization' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-gold-500 hover:translate-x-1.5 inline-block transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-[0.2em] font-medium mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400">
                  SCO 96-97, 2nd Floor, <br />
                  Sector 34A, Sector 34, <br />
                  Chandigarh – 160022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <a href="tel:07888458257" className="hover:text-gold-500 transition-colors">
                  078884 58257
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <a href="mailto:contact@nwi-innovators.com" className="hover:text-gold-500 transition-colors">
                  contact@nwi-innovators.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-[0.2em] font-medium mb-6">
              Subscribe to Design Club
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
              Join our exclusive list to receive design ideas, trend analyses, and architectural inspirations curated by our designers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your luxury email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs placeholder:text-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded bg-gold-500 text-white hover:bg-gold-600 transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-gold-500 font-mono tracking-wider animate-pulse">
                  Welcome to the inner circle. Subscription sent.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 font-light font-mono tracking-wider">
            © {new Date().getFullYear()} NORTH WESTERN INNOVATORS. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gold-500 transition-colors flex items-center gap-1.5">
              <Shield size={12} />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/terms" className="hover:text-gold-500 transition-colors flex items-center gap-1.5">
              <FileText size={12} />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

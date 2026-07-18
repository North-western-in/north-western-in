'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4" id="floating-actions-container">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917888458257?text=Hi%20North%20Western%20Innovators%2C%20I%20would%20like%20to%20know%20more%20about%20your%20luxury%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="btn-whatsapp"
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:brightness-110 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with NWI"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.003 2.001a10 10 0 0 0-8.584 15.148L2 22l5.034-1.32a10 10 0 1 0 4.969-18.679zM12 20.33a8.33 8.33 0 0 1-4.254-1.163l-.305-.182-3.15.826.84-3.072-.2-.317a8.33 8.33 0 1 1 7.069 3.908zm4.56-6.438c-.25-.124-1.477-.73-1.704-.811-.227-.083-.393-.124-.559.124-.165.247-.64.811-.784.975-.144.165-.289.185-.538.062a6.79 6.79 0 0 1-1.996-1.231 7.48 7.48 0 0 1-1.381-1.72c-.145-.248-.015-.382.11-.505.112-.11.25-.29.375-.434.124-.145.165-.248.25-.414.082-.165.04-.31-.02-.434-.062-.124-.559-1.348-.766-1.848-.201-.484-.403-.418-.559-.426-.145-.008-.31-.008-.475-.008a.91.91 0 0 0-.66.31c-.227.247-.867.847-.867 2.066 0 1.219.887 2.396.986 2.53.1.132 1.745 2.664 4.228 3.733.59.255 1.05.408 1.41.521.593.189 1.134.162 1.56.1.475-.072 1.478-.604 1.684-1.157.207-.554.207-1.03.145-1.127-.062-.097-.227-.165-.476-.29z" />
        </svg>
      </motion.a>

      {/* Direct Call Button */}
      <motion.a
        href="tel:07888458257"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="btn-call-floating"
        className="bg-gold-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-gold-600 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
        aria-label="Call North Western Innovators"
        title="Call NWI Office"
      >
        <Phone size={20} className="fill-white" />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="btn-scroll-top"
            className="bg-dark-charcoal border border-gold-500/20 text-gold-500 p-3.5 rounded-full shadow-2xl hover:bg-rich-black hover:text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 cursor-pointer"
            aria-label="Scroll to top of the page"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

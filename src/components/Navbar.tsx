'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/#gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-24 bg-background/80 backdrop-blur-lg border-b border-white/5 flex items-center">
      <div className="boxy-container w-full flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-[60] group">
          <div className="relative w-40 h-16 transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Photography Portfolio Logo"
              fill
              className="object-contain object-left mix-blend-screen brightness-125 contrast-125"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-16">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-[9px] font-light uppercase tracking-[0.4em] text-white/40 hover:text-[#c5a059] transition-all duration-500 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[60] text-white/50 hover:text-white transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? null : <Menu size={28} strokeWidth={1} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center pt-24"
            >
              {/* Close Button Inside Overlay */}
              <button
                className="absolute top-8 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} strokeWidth={1} />
              </button>

              <ul className="flex flex-col items-center space-y-12">
                {menuLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-light uppercase tracking-[0.4em] text-white/40 hover:text-[#c5a059] transition-all duration-500"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="absolute bottom-12 text-[9px] uppercase tracking-[0.5em] text-white/20">
                Dilshan Jayawardhana
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}


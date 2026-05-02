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
    <nav className="fixed top-0 left-0 w-full z-[100] h-24 bg-black border-b border-white/10 flex items-center">
      <div className="boxy-container w-full flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-[60]">
          <div className="relative w-40 h-16">
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
        <ul className="hidden md:flex items-center space-x-12">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[60] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col items-center space-y-10">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}


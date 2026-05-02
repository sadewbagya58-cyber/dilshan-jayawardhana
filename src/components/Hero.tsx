'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroProps {
  images: HeroImage[];
}

export default function Hero({ images }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const displayImages = images.length > 0 ? images : [
    { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', alt: 'Vibrant Wedding Ceremony' },
    { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', alt: 'Sunset Bridal Portrait' },
    { url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop', alt: 'Colorful Celebration' }
  ];

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <section className="relative w-full h-[calc(100vh-6rem)] overflow-hidden bg-black flex items-center justify-center">
      {/* Cinematic Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={displayImages[currentIndex].url}
              alt={displayImages[currentIndex].alt}
              fill
              priority
              className="object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Modern Luxury Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        <div className="backdrop-blur-[2px] py-12 px-4 inline-block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/30 block mb-4 drop-shadow-md">
                Timeless Memories, Beautifully Captured
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-light uppercase tracking-[0.15em] text-[#eeeeee] leading-tight drop-shadow-2xl">
                Dilshan <br className="md:hidden" /> Jayawardhana
              </h1>
            </div>

            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
              We are Capturing the moments of today <br className="hidden md:block" /> that will wow your hearts tomorrow.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-8"
            >
              <Link 
                href="/#gallery" 
                className="group relative inline-block px-12 py-4 border border-white/10 text-[10px] uppercase tracking-[0.5em] text-[#eeeeee] overflow-hidden transition-all duration-700 hover:border-[#c5a059]"
              >
                <span className="relative z-10 group-hover:text-[#c5a059] transition-colors duration-500">Explore Portfolio</span>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#c5a059] scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-12 w-full flex justify-center opacity-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}



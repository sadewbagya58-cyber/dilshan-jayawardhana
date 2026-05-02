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
  
  // Fallback images if Sanity returns none
  const displayImages = images.length > 0 ? images : [
    { url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop', alt: 'Wedding Photography' },
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', alt: 'Bridal Photography' },
    { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop', alt: 'Portrait' }
  ];

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col justify-center pt-24">
      <div className="boxy-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl xl:text-7xl heading-bold text-white max-w-xl"
          >
            Dilshan Jayawardhana
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base tracking-[0.2em] uppercase text-white/70 max-w-lg leading-relaxed"
          >
            We are Capturing the moments of today that will wow your hearts tomorrow.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40"
          >
            FROM OUR TEAM TO YOUR HEART - TIMELESS MEMORIES, BEAUTIFULLY CAPTURED.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/#gallery" className="inline-block sharp-button">
              Explore Now
            </Link>
          </motion.div>
        </div>

        {/* Image Slideshow Box */}
        <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-white/10 overflow-hidden bg-muted">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={displayImages[currentIndex].url}
                alt={displayImages[currentIndex].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>

      {/* Structured Stats/Footer info bar */}
      <div className="border-t border-white/5 py-8 bg-muted/30">
        <div className="boxy-container flex flex-wrap gap-8 justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/30">
          <div>Wedding Photography</div>
          <div className="hidden sm:block">|</div>
          <div>Cinematography</div>
          <div className="hidden sm:block">|</div>
          <div>Preshoot Sessions</div>
        </div>
      </div>
    </section>
  );
}


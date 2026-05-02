'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroProps {
  images: HeroImage[];
}

export default function Hero({ images }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ y, opacity }}
          >
            <Image
              src={displayImages[currentIndex].url}
              alt={displayImages[currentIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60 grayscale"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-[0.2em] text-white mb-6"
        >
          Dilshan Jayawardhana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="text-sm md:text-lg tracking-[0.3em] uppercase text-gray-300 max-w-2xl"
        >
          Every Moment Has a Story. Every Story Deserves to Be Eternal.
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs tracking-[0.2em] text-white/50 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-white/50"
        />
      </motion.div>
    </section>
  );
}

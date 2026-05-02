'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  imageUrl?: string;
  altText?: string;
}

export default function Hero({ imageUrl, altText }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect: moves the image down slightly as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Default placeholder if no featured image is set yet
  const displayImage =
    imageUrl || 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop';
  const displayAlt = altText || 'Photography Portfolio';

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Image
          src={displayImage}
          alt={displayAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 grayscale"
        />
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

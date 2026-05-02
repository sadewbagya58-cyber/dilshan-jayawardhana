'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/image';

interface Moment {
  _id: string;
  title: string;
  image: any;
  alt: string;
  clientName?: string;
  location?: string;
  categoryTitle?: string;
}

export default function SignatureMoments({ moments }: { moments: Moment[] }) {
  if (!moments || moments.length === 0) return null;

  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-light uppercase tracking-[0.2em] text-white mb-4"
            >
              Signature Moments
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm uppercase tracking-[0.2em] text-white/50 max-w-lg"
            >
              A curated selection of our finest captures, where timeless elegance meets cinematic storytelling.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-32 h-[1px] bg-white/30"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {moments.map((moment, index) => {
            const imageUrl = moment.image ? urlForImage(moment.image)?.url() : null;
            if (!imageUrl) return null;

            return (
              <motion.div
                key={moment._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-video' : 'aspect-square md:aspect-[3/4]'}`}
              >
                <Image
                  src={imageUrl}
                  alt={moment.alt || moment.title}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                      {moment.categoryTitle || 'Featured'}
                    </p>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-1">
                      {moment.clientName || moment.title}
                    </h3>
                    {moment.location && (
                      <p className="text-sm font-light text-white/60">
                        {moment.location}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

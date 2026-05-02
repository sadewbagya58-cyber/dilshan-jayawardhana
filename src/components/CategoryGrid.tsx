'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/image';

interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: any;
  videoLink?: string;
}

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  // Hardcoded default fallback categories if none are returned from Sanity yet
  const displayCategories = categories?.length > 0 ? categories : [
    { _id: '1', title: 'Wedding Photography & Cinematography', slug: 'weddings' },
    { _id: '2', title: 'Preshoot Sessions', slug: 'preshoots' },
    { _id: '3', title: 'Bridal & Model Shoots', slug: 'bridal-model' },
    { _id: '4', title: 'Baby & Birthday Shoots', slug: 'baby-birthday' },
    { _id: '5', title: 'Hotel Promotions', slug: 'hotel-promotions' },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light uppercase tracking-[0.2em] text-white mb-4"
          >
            Collections
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[1px] bg-white/30 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category, index) => {
            const imageUrl = category.coverImage 
              ? urlForImage(category.coverImage)?.url() 
              : `https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop&sig=${index}`; // Fallback random image

            return (
              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/gallery/${category.slug}`} className="group block relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={imageUrl!}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-white mb-2">
                      {category.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/70 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      View Gallery
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

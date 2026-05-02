import { client } from '@/sanity/lib/client';
import { getGalleryByCategoryQuery } from '@/sanity/lib/queries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryView from '@/components/GalleryView';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export const revalidate = 60;

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  let categoryData = null;
  try {
    categoryData = await client.fetch(getGalleryByCategoryQuery, { slug });
  } catch (error) {
    console.error('Error fetching gallery category:', error);
  }

  if (!categoryData) {
    // If we have no data, we could show a fallback or notFound
    // For this demo, let's provide a fallback title if data fetching fails
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-40 pb-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.3em] mb-8">
            {slug.replace('-', ' ')}
          </h1>
          <p className="text-white/50 tracking-widest uppercase">No images found in this collection yet.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-40 pb-32 px-6 container mx-auto">
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.3em] mb-6">
            {categoryData.title}
          </h1>
          {categoryData.description && (
            <p className="text-white/60 tracking-widest uppercase text-sm leading-relaxed max-w-2xl mx-auto">
              {categoryData.description}
            </p>
          )}
          <div className="w-24 h-[1px] bg-white/20 mx-auto mt-12" />
        </header>

        <GalleryView photos={categoryData.images || []} />
      </div>
      <Footer />
    </main>
  );
}

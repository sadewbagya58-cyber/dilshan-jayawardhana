import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import SignatureMoments from '@/components/SignatureMoments';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { getHeroImagesQuery, getCategoriesQuery, getSignatureMomentsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  let heroImagesData = [];
  let categories = [];
  let signatureMoments = [];
  
  try {
    const [heroResult, categoriesResult, momentsResult] = await Promise.all([
      client.fetch(getHeroImagesQuery),
      client.fetch(getCategoriesQuery),
      client.fetch(getSignatureMomentsQuery)
    ]);
    
    heroImagesData = heroResult || [];
    categories = categoriesResult || [];
    signatureMoments = momentsResult || [];
  } catch (error) {
    console.error('Error fetching from Sanity (possibly using placeholder credentials):', error);
  }
  
  const heroImages = heroImagesData.map((item: any) => ({
    url: urlForImage(item.image)?.url(),
    alt: item.alt || 'Featured Photography'
  })).filter((img: any) => img.url);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero images={heroImages} />
      <SignatureMoments moments={signatureMoments} />
      <CategoryGrid categories={categories} />
      <Footer />
    </main>
  );
}


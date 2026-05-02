import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import SignatureMoments from '@/components/SignatureMoments';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { getFeaturedImageQuery, getCategoriesQuery, getSignatureMomentsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  let featuredImage = null;
  let categories = [];
  let signatureMoments = [];
  
  try {
    const [featuredResult, categoriesResult, momentsResult] = await Promise.all([
      client.fetch(getFeaturedImageQuery),
      client.fetch(getCategoriesQuery),
      client.fetch(getSignatureMomentsQuery)
    ]);
    
    featuredImage = featuredResult;
    categories = categoriesResult || [];
    signatureMoments = momentsResult || [];
  } catch (error) {
    console.error('Error fetching from Sanity (possibly using placeholder credentials):', error);
  }
  
  let imageUrl = undefined;
  if (featuredImage?.image) {
    imageUrl = urlForImage(featuredImage.image)?.url();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero imageUrl={imageUrl} altText={featuredImage?.alt || 'Featured Photography'} />
      <SignatureMoments moments={signatureMoments} />
      <CategoryGrid categories={categories} />
      <Footer />
    </main>
  );
}


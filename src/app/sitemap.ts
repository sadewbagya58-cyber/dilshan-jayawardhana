import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { getCategoriesQuery } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dilshanjayawardana.com';

  // Fetch categories to generate dynamic gallery links
  let categories = [];
  try {
    categories = await client.fetch(getCategoriesQuery);
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error);
  }

  const categoryUrls = (categories || []).map((cat: any) => ({
    url: `${baseUrl}/gallery/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categoryUrls,
  ];
}

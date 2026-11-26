import type { MetadataRoute } from 'next';
import { cases } from '@/content/data';
import { origin } from '@/content/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/experience',
    '/education',
    '/projects',
    ...cases.map((item) => `/experience/cases/${item.slug}`),
  ];
  return paths.flatMap((path) => [
    {
      url: `${origin}${path || '/'}`,
      changeFrequency: 'monthly' as const,
      priority: path ? 0.7 : 1,
    },
    { url: `${origin}/en${path}`, changeFrequency: 'monthly' as const, priority: path ? 0.7 : 0.9 },
  ]);
}

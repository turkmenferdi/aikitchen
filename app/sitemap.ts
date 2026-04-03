import { MetadataRoute } from 'next';

const baseUrl = 'https://aikitchen.com.tr';
const locales = ['en', 'tr'];

const routes = [
  '',
  '/about',
  '/platform',
  '/solutions',
  '/solutions/financial',
  '/solutions/accounts-payable',
  '/solutions/legal',
  '/solutions/tourism',
  '/services',
  '/why-ai-kitchen',
  '/case-studies',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return pages as MetadataRoute.Sitemap;
}

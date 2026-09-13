import { MetadataRoute } from 'next';

const baseUrl = 'https://aikitchen.com.tr';
const locales = ['en', 'tr'];

const routes = [
  '',
  '/about',
  '/platform',
  '/turbohub',
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

const turkishOnlyRoutes = [
  '/robotik-surec-otomasyonu',
  '/belge-otomasyonu',
  '/sap-otomasyonu',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    }))
  );

  const turkishPages = turkishOnlyRoutes.map((route) => ({
    url: `${baseUrl}/tr${route}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...localizedPages, ...turkishPages] as MetadataRoute.Sitemap;
}

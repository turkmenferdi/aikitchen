export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/.next/'],
      },
    ],
    sitemap: 'https://aikitchen.com.tr/sitemap.xml',
  };
}

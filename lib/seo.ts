const SITE_URL = 'https://aikitchen.com.tr';

/** Native Next.js metadata for the two published locales of one route. */
export function localeAlternates(locale: 'en' | 'tr', route = '') {
  const path = route ? `/${route}` : '';

  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      en: `${SITE_URL}/en${path}`,
      tr: `${SITE_URL}/tr${path}`,
      'x-default': `${SITE_URL}/en${path}`,
    },
  };
}

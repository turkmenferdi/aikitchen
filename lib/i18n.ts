import { Language, isValidLanguage } from '@/i18n/config';
import { en } from '@/i18n/en';
import { tr } from '@/i18n/tr';

const dictionaries = {
  en,
  tr,
};

export async function getDictionary(locale: string): Promise<typeof en> {
  if (!isValidLanguage(locale)) {
    return dictionaries.en;
  }
  return dictionaries[locale as Language];
}

export function getAlternateLink(currentLocale: string, targetLocale: string, pathname: string): string {
  // Remove current locale from pathname if it exists
  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${currentLocale})`), '') || '/';
  return `/${targetLocale}${pathWithoutLocale}`;
}

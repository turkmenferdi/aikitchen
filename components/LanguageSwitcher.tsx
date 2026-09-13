'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const otherLocale = locale === 'en' ? 'tr' : 'en';
  const rest = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '');
  // Turkish-only landing pages have no English version; send English visitors to the English home instead.
  const turkishOnly = ['/robotik-surec-otomasyonu', '/belge-otomasyonu', '/sap-otomasyonu'];
  const target = otherLocale === 'en' && turkishOnly.includes(rest) ? '/en' : `/${otherLocale}${rest}`;

  return (
    <Link
      href={target}
      hrefLang={otherLocale}
      className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant px-2.5 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:border-outline hover:text-on-surface"
      aria-label={otherLocale === 'en' ? 'Switch to English' : 'Türkçeye geç'}
    >
      <Globe size={15} />
      {otherLocale.toUpperCase()}
    </Link>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
  const params = useParams();
  const locale = Array.isArray(params?.locale) ? params.locale[0] : (params?.locale as string);
  const [isOpen, setIsOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'tr' : 'en';
  const otherLocaleLabel = otherLocale === 'en' ? 'English' : 'Türkçe';

  // Get current pathname without locale
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locale})`), '') || '/';
  const targetPath = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-accent-teal text-sm font-medium text-foreground transition-colors"
      >
        <span className="font-semibold text-xs uppercase tracking-wider">{locale}</span>
        <span className="text-muted">⌄</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-border rounded-lg shadow-lg z-50">
          <Link
            href={targetPath}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-sm text-foreground hover:bg-primary-50 hover:text-accent-teal transition-colors border-b border-border last:border-b-0"
          >
            {otherLocaleLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

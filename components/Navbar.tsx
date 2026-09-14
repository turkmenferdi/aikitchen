'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { buttonClass } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './Logo';

interface NavbarProps {
  locale: string;
  dictionary: {
    nav: {
      home: string;
      about: string;
      platform: string;
      turbohub: string;
      solutions: string;
      services: string;
      caseStudies: string;
      contact: string;
      requestDemo: string;
      menu: string;
    };
  };
}

export function Navbar({ dictionary, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? '';
  const t = dictionary.nav;

  const navItems = [
    { label: t.platform, href: `/${locale}/platform` },
    { label: t.turbohub, href: `/${locale}/turbohub` },
    { label: t.solutions, href: `/${locale}/solutions` },
    { label: t.services, href: `/${locale}/services` },
    { label: t.caseStudies, href: `/${locale}/case-studies` },
    { label: t.about, href: `/${locale}/about` },
  ];

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/70 bg-surface/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href={`/${locale}`} className="flex-shrink-0" aria-label="AI Kitchen">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive(item.href) ? 'text-primary-fixed' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/contact`} className={buttonClass('primary', 'sm', 'hidden sm:inline-flex')}>
            {t.requestDemo}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-on-surface hover:bg-surface-container-high xl:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={t.menu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-outline-variant/70 bg-surface-container xl:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {[{ label: t.home, href: `/${locale}` }, ...navItems, { label: t.contact, href: `/${locale}/contact` }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-on-surface hover:bg-surface-container-low"
                >
                  {item.label}
                  <ArrowRight size={16} className="text-outline" />
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href={`/${locale}/contact`} className={buttonClass('primary', 'lg', 'w-full')}>
                {t.requestDemo}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

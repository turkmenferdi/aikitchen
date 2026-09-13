'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useParams } from 'next/navigation';

interface NavbarProps {
  dictionary: {
    nav: {
      home: string;
      about: string;
      platform: string;
      turbohub: string;
      solutions: string;
      services: string;
      why: string;
      caseStudies: string;
      contact: string;
      requestDemo: string;
    };
  };
}

export function Navbar({ dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const locale = Array.isArray(params?.locale) ? params.locale[0] : (params?.locale as string);

  const navItems = [
    { label: dictionary.nav.home, href: `/${locale}` },
    { label: dictionary.nav.about, href: `/${locale}/about` },
    { label: dictionary.nav.platform, href: `/${locale}/platform` },
    { label: dictionary.nav.turbohub, href: `/${locale}/turbohub` },
    { label: dictionary.nav.solutions, href: `/${locale}/solutions` },
    { label: dictionary.nav.services, href: `/${locale}/services` },
    { label: dictionary.nav.why, href: `/${locale}/why-ai-kitchen` },
    { label: dictionary.nav.caseStudies, href: `/${locale}/case-studies` },
    { label: dictionary.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-surface-container/90 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 border-b border-outline/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-shrink-0 items-center gap-3 whitespace-nowrap font-headline font-semibold text-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-fixed to-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container font-bold text-lg shadow-lg shadow-primary/30">
              AK
            </div>
            <span className="text-on-surface hidden sm:inline">AI Kitchen</span>
          </Link>

          {/* Desktop Navigation: the logo already links home */}
          <div className="hidden xl:flex items-center gap-5">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`} className="hidden sm:block">
              <Button variant="primary" size="sm">
                {dictionary.nav.requestDemo}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-high"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden border-t border-outline/20 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-on-surface hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link href={`/${locale}/contact`} className="w-full block">
                <Button variant="primary" className="w-full">
                  {dictionary.nav.requestDemo}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

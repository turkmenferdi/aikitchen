import React from 'react';
import Link from 'next/link';

interface FooterProps {
  dictionary: {
    footer: {
      company: string;
      description: string;
      product: string;
      solutions: string;
      services: string;
      resources: string;
      legal: string;
      privacy: string;
      terms: string;
      contact: string;
      email: string;
      address: string;
      copyright: string;
    };
  };
  locale: string;
}

export function Footer({ dictionary, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-accent-teal-dark rounded-lg flex items-center justify-center font-bold text-lg">
                AK
              </div>
              <span className="text-xl font-bold">{dictionary.footer.company}</span>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">{dictionary.footer.description}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {dictionary.footer.product}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/platform`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/solutions`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {dictionary.footer.solutions}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {dictionary.footer.services}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {dictionary.footer.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/why-ai-kitchen`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Why AI Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/case-studies`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {dictionary.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {dictionary.footer.legal}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {dictionary.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {dictionary.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-white/70 text-sm mb-2">{dictionary.footer.contact}</p>
              <a
                href={`mailto:${dictionary.footer.email}`}
                className="text-accent-teal hover:text-white text-sm font-medium transition-colors"
              >
                {dictionary.footer.email}
              </a>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-2">{dictionary.footer.address}</p>
              <p className="text-white text-sm font-medium">Enterprise Automation Platform</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>{dictionary.footer.copyright.replace('2026', currentYear.toString())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  locale: string;
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
    };
    footer: {
      description: string;
      offerings: string;
      solutions: string;
      companyTitle: string;
      contact: string;
      supportLabel: string;
      salesLabel: string;
      supportEmail: string;
      salesEmail: string;
      turbohubContactLabel: string;
      turbohubEmail: string;
      copyright: string;
    };
    solutions: {
      financial: { name: string };
      accountsPayable: { name: string };
      legal: { name: string };
      tourism: { name: string };
    };
  };
}

export function Footer({ dictionary, locale }: FooterProps) {
  const { nav, footer, solutions } = dictionary;
  const year = new Date().getFullYear();

  const columns = [
    {
      title: footer.offerings,
      links: [
        { label: nav.platform, href: `/${locale}/platform` },
        { label: nav.turbohub, href: `/${locale}/turbohub` },
        { label: nav.services, href: `/${locale}/services` },
      ],
    },
    {
      title: footer.solutions,
      links: [
        { label: solutions.financial.name, href: `/${locale}/solutions/financial` },
        { label: solutions.accountsPayable.name, href: `/${locale}/solutions/accounts-payable` },
        { label: solutions.legal.name, href: `/${locale}/solutions/legal` },
        { label: solutions.tourism.name, href: `/${locale}/solutions/tourism` },
      ],
    },
    {
      title: footer.companyTitle,
      links: [
        { label: nav.about, href: `/${locale}/about` },
        { label: nav.why, href: `/${locale}/why-ai-kitchen` },
        { label: nav.caseStudies, href: `/${locale}/case-studies` },
        { label: nav.contact, href: `/${locale}/contact` },
      ],
    },
  ];

  // Channels that share an address are shown once, with their labels combined.
  const emails = [
    { label: footer.salesLabel, email: footer.salesEmail },
    { label: footer.supportLabel, email: footer.supportEmail },
    { label: footer.turbohubContactLabel, email: footer.turbohubEmail },
  ].reduce<{ label: string; email: string }[]>((acc, item) => {
    const existing = acc.find((entry) => entry.email === item.email);
    if (existing) existing.label = `${existing.label} · ${item.label}`;
    else acc.push({ ...item });
    return acc;
  }, []);

  return (
    <footer className="border-t border-outline-variant/60 bg-surface-dim text-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)_1.6fr]">
          <div>
            <Link href={`/${locale}`} aria-label="AI Kitchen">
              <Logo inverted />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{footer.description}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 font-body text-sm font-semibold text-white">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 font-body text-sm font-semibold text-white">{footer.contact}</h2>
            <ul className="space-y-3">
              {emails.map((item) => (
                <li key={item.email}>
                  <p className="text-xs text-white/50">{item.label}</p>
                  <a href={`mailto:${item.email}`} className="inline-flex items-center gap-2 break-all text-sm text-white/80 hover:text-white lg:break-normal lg:whitespace-nowrap">
                    <Mail size={14} className="flex-shrink-0" />
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-white/50">
          {footer.copyright.replace('2026', String(year))}
        </div>
      </div>
    </footer>
  );
}

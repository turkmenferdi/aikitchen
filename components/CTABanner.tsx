import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonClass } from './Button';

interface CTABannerProps {
  heading: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTABanner({ heading, description, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white md:px-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(124,58,237,0.45),transparent_60%),radial-gradient(50%_70%_at_0%_100%,rgba(79,70,229,0.4),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">{heading}</h2>
        {description && <p className="mb-9 text-lg leading-relaxed text-white/80">{description}</p>}
        <div className={`flex flex-col justify-center gap-3 sm:flex-row ${description ? '' : 'mt-8'}`}>
          <Link href={primaryCTA.href} className={buttonClass('primary', 'lg', '!bg-white !text-ink !shadow-none hover:!bg-indigo-100')}>
            {primaryCTA.text}
            <ArrowRight size={18} />
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className={buttonClass('ghost', 'lg', 'border border-white/30 !text-white hover:!bg-white/10')}>
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

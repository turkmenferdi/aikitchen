import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { buttonClass } from './Button';
import { CTABanner } from './CTABanner';

// Shared building blocks for the Turkish-only SEO landing pages.

export function SeoHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant/60 bg-surface-container-low">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(79,70,229,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 md:pb-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-sm text-on-surface-variant">
          <Link href="/tr" className="hover:text-primary-fixed">
            Ana Sayfa
          </Link>
          <ChevronRight size={14} />
          <Link href="/tr/platform" className="hover:text-primary-fixed">
            Süreç Otomasyonu
          </Link>
          <ChevronRight size={14} />
          <span className="text-on-surface">{eyebrow}</span>
        </nav>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{eyebrow}</p>
        <h1 className="mb-6 max-w-4xl text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/tr/contact" className={buttonClass('primary', 'lg')}>
            Demo Talep Edin
            <ArrowRight size={18} />
          </Link>
          <Link href="/tr/case-studies" className={buttonClass('secondary', 'lg')}>
            Vaka Çalışmaları
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SeoSection({ title, intro, children, muted = false }: { title: string; intro?: string; children: ReactNode; muted?: boolean }) {
  return (
    <section className={`${muted ? 'border-y border-outline-variant/60 bg-surface-container-low' : 'bg-surface'} py-16 md:py-20`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-3xl font-bold leading-tight text-on-surface md:text-[2.25rem]">{title}</h2>
        {intro && <p className="mb-10 max-w-4xl text-lg leading-relaxed text-on-surface-variant">{intro}</p>}
        {!intro && <div className="mb-8" />}
        {children}
      </div>
    </section>
  );
}

export function TextColumns({ children }: { children: ReactNode }) {
  return <div className="grid gap-8 text-[17px] leading-8 text-on-surface-variant md:grid-cols-2 md:gap-12">{children}</div>;
}

export function FeatureGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, description]) => (
        <article key={title} className="flex gap-4 rounded-2xl border border-outline-variant bg-surface-container p-6">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed">
            <Check size={18} />
          </span>
          <div>
            <h3 className="mb-1.5 text-lg font-bold text-on-surface">{title}</h3>
            <p className="leading-relaxed text-on-surface-variant">{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProcessFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-start gap-4 rounded-2xl border border-outline-variant bg-surface p-5">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="pt-1 font-medium leading-snug text-on-surface">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function RelatedLinks({ links }: { links: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className="group flex items-center justify-between rounded-2xl border border-outline-variant bg-surface p-5 font-semibold text-on-surface transition-colors hover:border-primary/40 hover:bg-surface-container-high"
        >
          <span>{label}</span>
          <ArrowRight size={18} className="text-primary-fixed transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export function SeoCTA({ heading }: { heading: string }) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTABanner
          heading={heading}
          description="Mevcut süreci, kullanılan sistemleri, iş kurallarını ve kontrol adımlarını birlikte değerlendirelim."
          primaryCTA={{ text: 'Demo Talep Edin', href: '/tr/contact' }}
          secondaryCTA={{ text: 'Çalışma modelini inceleyin', href: '/tr/services' }}
        />
      </div>
    </section>
  );
}

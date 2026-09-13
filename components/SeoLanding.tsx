import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CTABanner } from './CTABanner';

export function SeoHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="bg-gradient-to-br from-surface via-surface-container-low to-primary/10 py-16 md:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" className="mb-9 text-sm text-on-surface-variant"><Link href="/tr" className="hover:text-primary">Ana Sayfa</Link><span className="mx-2">/</span><span>{eyebrow}</span></nav><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p><h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1><p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant">{description}</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/tr/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary">Demo Talep Edin <ArrowRight size={17} /></Link><Link href="/tr/case-studies" className="rounded-xl border border-outline px-6 py-3 font-semibold">Vaka Çalışmaları</Link></div></div></section>;
}

export function SeoSection({ title, intro, children, muted = false }: { title: string; intro?: string; children: ReactNode; muted?: boolean }) {
  return <section className={`${muted ? 'bg-surface-container-low' : 'bg-surface'} py-16 md:py-20`}><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="mb-5 text-3xl font-bold md:text-4xl">{title}</h2>{intro && <p className="mb-9 max-w-4xl text-lg leading-relaxed text-on-surface-variant">{intro}</p>}{children}</div></section>;
}

export function TextColumns({ children }: { children: ReactNode }) {
  return <div className="grid gap-8 text-base leading-8 text-on-surface-variant md:grid-cols-2">{children}</div>;
}

export function FeatureGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return <div className="grid gap-5 md:grid-cols-2">{items.map(([title, description]) => <article key={title} className="rounded-2xl border border-outline/20 bg-surface-container p-6"><CheckCircle2 className="mb-4 text-primary" /><h3 className="mb-2 text-xl font-bold">{title}</h3><p className="leading-relaxed text-on-surface-variant">{description}</p></article>)}</div>;
}

export function ProcessFlow({ steps }: { steps: readonly string[] }) {
  return <ol className="grid gap-3 md:grid-cols-3">{steps.map((step, index) => <li key={step} className="relative rounded-2xl border border-primary/20 bg-primary/10 p-5"><span className="mb-3 block text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span><p className="font-semibold">{step}</p></li>)}</ol>;
}

export function RelatedLinks({ links }: { links: readonly (readonly [string, string])[] }) {
  return <div className="grid gap-4 sm:grid-cols-2">{links.map(([label, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-xl border border-outline/20 bg-surface-container p-5 font-semibold hover:border-primary/50"><span>{label}</span><ArrowRight size={18} className="text-primary transition-transform group-hover:translate-x-1" /></Link>)}</div>;
}

export function SeoCTA({ heading }: { heading: string }) {
  return <section className="bg-surface py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><CTABanner heading={heading} description="Mevcut süreci, kullanılan sistemleri, iş kurallarını ve kontrol adımlarını birlikte değerlendirelim." primaryCTA={{ text: 'Demo Talep Edin', href: '/tr/contact' }} /></div></section>;
}

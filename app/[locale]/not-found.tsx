import Link from 'next/link';
import { ArrowRight, SearchX } from 'lucide-react';
import { buttonClass } from '@/components/Button';

// not-found receives no route params, so the page speaks both site languages.
export default function NotFound() {
  const links = [
    { tr: 'Süreç Otomasyonu', en: 'Process Automation', path: 'platform' },
    { tr: 'TurboHUB', en: 'TurboHUB', path: 'turbohub' },
    { tr: 'Çözümler', en: 'Solutions', path: 'solutions' },
    { tr: 'İletişim', en: 'Contact', path: 'contact' },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        <span className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <SearchX size={30} />
        </span>
        <p className="mb-3 font-headline text-sm font-bold uppercase tracking-[0.14em] text-primary">404</p>
        <h1 lang="tr" className="mb-2 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
          Aradığınız sayfayı bulamadık
        </h1>
        <p lang="en" className="mb-6 text-xl font-semibold text-on-surface-variant">
          We couldn’t find the page you were looking for
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
          <span lang="tr">Adres değişmiş ya da sayfa kaldırılmış olabilir.</span>{' '}
          <span lang="en">The address may have changed or the page may have been removed.</span>
        </p>
        <div className="mb-14 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/tr" className={buttonClass('primary', 'lg')} lang="tr">
            Ana sayfaya dön
            <ArrowRight size={18} />
          </Link>
          <Link href="/en" className={buttonClass('secondary', 'lg')} lang="en">
            Go to the English home page
          </Link>
        </div>
        <ul className="grid gap-3 text-left sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={`/tr/${link.path}`}
                className="group flex items-center justify-between rounded-2xl border border-outline-variant bg-surface px-5 py-4 font-semibold text-on-surface hover:border-primary/40"
              >
                <span lang="tr">{link.tr}</span>
                <ArrowRight size={16} className="text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

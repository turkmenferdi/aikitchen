import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, FileText, MapPin, MessageSquareText, Receipt } from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { SOLUTIONS, TURKISH_TOPIC_PAGES } from '@/lib/solutions';
import { buttonClass } from '@/components/Button';
import { SolutionCard } from '@/components/SolutionCard';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const isEnglish = validLocale === 'en';

  return {
    title: isEnglish
      ? 'Business Process Automation Solutions | AI Kitchen'
      : 'İş Süreci Otomasyonu Çözümleri | AI Kitchen',
    description: isEnglish
      ? 'Review automation approaches for finance, invoice processing, document workflows and repeatable operations.'
      : 'Finans, fatura işleme, belge akışları ve tekrarlanan operasyonlar için otomasyon yaklaşımlarını inceleyin.',
    alternates: localeAlternates(validLocale, 'solutions'),
  };
}

const icons = { financial: BarChart3, accountsPayable: Receipt, legal: FileText, tourism: MapPin };

export default async function Solutions({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { solutions } = await getDictionary(validLocale);
  const { index, ui } = solutions;

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{index.hero.eyebrow}</p>
          <h1 className="mb-6 max-w-3xl text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{index.hero.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{index.hero.description}</p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SOLUTIONS.map(({ slug, key }) => {
              const data = solutions[key];
              const Icon = icons[key];
              return (
                <SolutionCard
                  key={slug}
                  title={data.name}
                  description={data.hero.description}
                  href={`/${validLocale}/solutions/${slug}`}
                  cta={ui.learnMore}
                  icon={<Icon size={24} />}
                  points={data.capabilities.slice(0, 3)}
                />
              );
            })}
          </div>

          {validLocale === 'tr' && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold text-on-surface">{index.topicsHeading}</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {TURKISH_TOPIC_PAGES.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group flex flex-col rounded-2xl border border-outline-variant bg-white p-6 transition-colors hover:border-primary/40"
                  >
                    <h3 className="mb-2 text-lg font-bold text-on-surface">{page.title}</h3>
                    <p className="mb-4 leading-relaxed text-on-surface-variant">{page.description}</p>
                    <ArrowRight size={18} className="mt-auto text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:flex-row md:items-center md:p-10">
            <div className="flex gap-5">
              <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white sm:flex">
                <MessageSquareText size={22} />
              </span>
              <div>
                <h2 className="mb-2 text-2xl font-bold text-on-surface">{index.notListed.heading}</h2>
                <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">{index.notListed.description}</p>
              </div>
            </div>
            <Link href={`/${validLocale}/contact`} className={buttonClass('primary', 'lg', 'flex-shrink-0')}>
              {index.notListed.cta}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

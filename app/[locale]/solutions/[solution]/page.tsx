import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Bot, Check, ChevronRight, Gauge, Lightbulb, TriangleAlert } from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { SOLUTIONS, TURKISH_TOPIC_PAGES, getSolution } from '@/lib/solutions';
import { buttonClass } from '@/components/Button';
import { CTABanner } from '@/components/CTABanner';

interface PageProps {
  params: Promise<{
    locale: string;
    solution: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, solution } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const entries = {
    financial: {
      en: ['Financial Automation', 'Automate finance operations, reconciliation, and exception handling with AI and RPA.'],
      tr: ['Finans ve Muhasebe Süreçleri Otomasyonu', 'Veri mutabakatı, belge işleme, finansal kontrol ve raporlama süreçleri için RPA otomasyonu.'],
    },
    'accounts-payable': {
      en: ['Accounts Payable Automation', 'Automate invoice processing and approval workflows with AI and RPA.'],
      tr: ['Fatura ve Borç Hesapları Otomasyonu', 'Fatura işleme ve onay akışları için AI ve RPA otomasyonu.'],
    },
    legal: {
      en: ['Legal Document Automation', 'Streamline document and contract operations with AI-assisted automation.'],
      tr: ['Belge ve Sözleşme Otomasyonu', 'Belge ve sözleşme operasyonlarını AI destekli otomasyonla hızlandırın.'],
    },
    tourism: {
      en: ['Tourism Operations Automation', 'Coordinate reservation and customer operations with AI and RPA automation.'],
      tr: ['Turizm Operasyon Otomasyonu', 'Rezervasyon ve müşteri operasyonlarını AI ve RPA otomasyonuyla yönetin.'],
    },
  } as const;
  const entry = entries[solution as keyof typeof entries];

  if (!entry) return {};
  const [title, description] = entry[validLocale];
  return {
    title: `${title} | AI Kitchen`,
    description,
    alternates: localeAlternates(validLocale, `solutions/${solution}`),
  };
}

export async function generateStaticParams() {
  return ['en', 'tr'].flatMap((locale) => SOLUTIONS.map(({ slug }) => ({ locale, solution: slug })));
}

export default async function SolutionDetail({ params }: PageProps) {
  const { locale, solution } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);
  const current = getSolution(dictionary, solution);

  if (!current) {
    notFound();
  }

  const { data } = current;
  const { ui } = dictionary.solutions;
  const related = SOLUTIONS.filter(({ slug }) => slug !== solution).map(({ slug, key }) => ({
    title: dictionary.solutions[key].name,
    description: dictionary.solutions[key].hero.description,
    href: `/${validLocale}/solutions/${slug}`,
  }));
  const relatedLinks = validLocale === 'tr' ? [...related, ...TURKISH_TOPIC_PAGES] : related;

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 md:pb-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-sm text-on-surface-variant">
            <Link href={`/${validLocale}/solutions`} className="hover:text-primary-fixed">
              {ui.breadcrumb}
            </Link>
            <ChevronRight size={14} />
            <span className="text-on-surface">{data.name}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{data.name}</p>
              <h1 className="mb-6 text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{data.hero.title}</h1>
              <p className="mb-9 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{data.hero.description}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/${validLocale}/contact`} className={buttonClass('primary', 'lg')}>
                  {ui.ctaButton}
                  <ArrowRight size={18} />
                </Link>
                <Link href={`/${validLocale}/services`} className={buttonClass('secondary', 'lg')}>
                  {ui.secondaryCta}
                </Link>
              </div>
            </div>

            <figure className="rounded-3xl border border-outline-variant bg-surface p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)] md:p-8">
              <figcaption className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                  <Bot size={20} />
                </span>
                <span className="font-headline text-base font-bold text-on-surface">{ui.flowLabel}</span>
              </figcaption>
              <ol className="space-y-3">
                {data.flow.map((step, idx) => (
                  <li key={step} className="flex items-center gap-4 rounded-2xl border border-outline-variant bg-surface-container px-5 py-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="text-[15px] font-medium text-on-surface">{step}</span>
                  </li>
                ))}
              </ol>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-outline-variant bg-surface-container p-8 md:p-10">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
              <TriangleAlert size={22} />
            </span>
            <h2 className="mb-4 text-2xl font-bold text-on-surface">{ui.challengeLabel}</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">{data.challenges}</p>
          </article>
          <article className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-10">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
              <Lightbulb size={22} />
            </span>
            <h2 className="mb-4 text-2xl font-bold text-on-surface">{ui.solutionLabel}</h2>
            <p className="text-lg leading-relaxed text-on-surface">{data.solution}</p>
          </article>
        </div>
      </section>

      <section className="border-y border-outline-variant/60 bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-on-surface">{ui.capabilitiesLabel}</h2>
            <ul className="space-y-3">
              {data.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 rounded-2xl border border-outline-variant bg-surface px-5 py-4 text-on-surface">
                  <Check size={20} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
                  <span className="text-[15px] font-medium">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-on-surface">{ui.outcomesLabel}</h2>
            <ul className="space-y-3">
              {data.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 rounded-2xl bg-ink px-5 py-4 text-white">
                  <Gauge size={20} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
                  <span className="text-[15px] font-medium">{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-on-surface-variant">{ui.outcomesNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-on-surface">{ui.relatedLabel}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-outline-variant bg-surface-container p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="mb-2 text-lg font-bold text-on-surface">{item.title}</h3>
                <p className="mb-4 leading-relaxed text-on-surface-variant">{item.description}</p>
                <ArrowRight size={18} className="mt-auto text-primary-fixed transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={ui.ctaHeading.replace('{name}', data.name)}
            description={ui.ctaDescription}
            primaryCTA={{ text: ui.ctaButton, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: ui.secondaryCta, href: `/${validLocale}/services` }}
          />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarRange, Check, LifeBuoy, Lightbulb, Plug, Rocket, Search, ClipboardCheck, Users, Building2 } from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { buttonClass } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABanner } from '@/components/CTABanner';

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
      ? 'RPA Consulting and Automation Services | AI Kitchen'
      : 'RPA Danışmanlığı ve Otomasyon Hizmetleri | AI Kitchen',
    description: isEnglish
      ? 'From process discovery and controlled pilots to implementation, integration and ongoing support for RPA and business process automation.'
      : 'Süreç keşfinden kontrollü pilota, uygulamadan desteğe kadar RPA ve iş süreci otomasyonu hizmetleri.',
    alternates: localeAlternates(validLocale, 'services'),
  };
}

const stageKeys = ['processDiscovery', 'assessment', 'poc', 'implementation', 'integration', 'support'] as const;
const stageIcons = [Search, ClipboardCheck, Lightbulb, Rocket, Plug, LifeBuoy];

export default async function Services({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { services } = await getDictionary(validLocale);
  const { index } = services;
  const stages = stageKeys.map((key) => services[key]);

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{index.hero.eyebrow}</p>
          <h1 className="mb-6 max-w-4xl text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{index.hero.title}</h1>
          <p className="mb-9 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{index.intro}</p>
          <Link href={`/${validLocale}/contact`} className={buttonClass('primary', 'lg')}>
            {index.primaryCta}
            <ArrowRight size={18} />
          </Link>

          <ol className="mt-14 grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {stages.map((stage, idx) => (
              <li key={stage.name}>
                <a
                  href={`#stage-${idx + 1}`}
                  className="flex h-full items-center gap-3 rounded-2xl border border-outline-variant bg-surface px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white"
                >
                  <span className="font-headline text-sm font-bold text-primary">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-semibold leading-snug text-on-surface">{stage.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={index.stagesEyebrow} title={index.stagesHeading} description={index.stagesDescription} className="mb-14" />
          <ol className="space-y-5">
            {stages.map((stage, idx) => {
              const Icon = stageIcons[idx];
              return (
                <li
                  key={stage.name}
                  id={`stage-${idx + 1}`}
                  className="grid scroll-mt-28 gap-8 rounded-3xl border border-outline-variant bg-white p-7 md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
                >
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={24} />
                      </span>
                      <span className="font-headline text-4xl font-extrabold text-outline-variant">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-on-surface">{stage.name}</h3>
                    <p className="mb-4 text-lg font-medium text-on-surface">{stage.description}</p>
                    <p className="leading-relaxed text-on-surface-variant">{stage.content}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-lg bg-surface-container-high px-3 py-1.5 text-sm text-on-surface-variant">
                      <CalendarRange size={15} />
                      <span className="font-semibold text-on-surface">{index.timelineLabel}:</span> {stage.timeline}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-surface p-6">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-on-surface-variant">{index.benefitsLabel}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {stage.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-on-surface">
                          <Check size={18} className="mt-0.5 flex-shrink-0 text-success" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-y border-outline-variant/60 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={index.collaboration.eyebrow} title={index.collaboration.heading} className="mb-14" />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-outline-variant bg-surface p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-on-surface">
                  <Building2 size={22} />
                </span>
                <h3 className="mb-0 text-xl font-bold text-on-surface">{index.collaboration.youLabel}</h3>
              </div>
              <ul className="space-y-3">
                {index.collaboration.you.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-on-surface">
                    <Check size={20} className="mt-1 flex-shrink-0 text-on-surface-variant" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
              <div className="relative mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Users size={22} />
                </span>
                <h3 className="mb-0 text-xl font-bold text-white">{index.collaboration.weLabel}</h3>
              </div>
              <ul className="relative space-y-3">
                {index.collaboration.we.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-white/90">
                    <Check size={20} className="mt-1 flex-shrink-0 text-primary-fixed" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={index.cta.heading}
            description={index.cta.description}
            primaryCTA={{ text: index.cta.primary, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: index.cta.secondary, href: `/${validLocale}/platform` }}
          />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Calculator, Check, FileText, FlaskConical, HardDrive } from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
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
  const { caseStudies } = await getDictionary(validLocale);

  return {
    title: caseStudies.meta.title,
    description: caseStudies.meta.description,
    alternates: localeAlternates(validLocale, 'case-studies'),
  };
}

const caseIcons = [Calculator, FileText];

export default async function CaseStudies({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { caseStudies } = await getDictionary(validLocale);
  const { documented, scenarios, sap } = caseStudies;

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{caseStudies.hero.eyebrow}</p>
          <h1 className="mb-6 max-w-3xl text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{caseStudies.hero.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{caseStudies.hero.description}</p>
        </div>
      </section>

      {/* Documented real cases */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={documented.eyebrow} title={documented.heading} centered={false} className="mb-10" />
          <div className="space-y-6">
            {documented.cases.map((item, idx) => {
              const Icon = caseIcons[idx % caseIcons.length];
              return (
                <article key={item.title} className="overflow-hidden rounded-3xl border border-outline-variant bg-surface-container">
                  <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="p-8 md:p-10">
                      <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed">
                          <Icon size={22} />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                          <BadgeCheck size={14} />
                          {documented.label}
                        </span>
                        <span className="text-sm font-medium text-on-surface-variant">{item.area}</span>
                      </div>
                      <h3 className="mb-6 text-2xl font-bold text-on-surface md:text-3xl">{item.title}</h3>
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-on-surface-variant">{documented.beforeLabel}</p>
                          <p className="leading-relaxed text-on-surface">{item.before}</p>
                        </div>
                        <div>
                          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-on-surface-variant">{documented.automatedLabel}</p>
                          <ul className="space-y-2">
                            {item.steps.map((step) => (
                              <li key={step} className="flex items-start gap-2.5 text-on-surface">
                                <Check size={18} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 bg-ink p-8 text-white md:p-10">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary-fixed">{documented.resultsLabel}</p>
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl bg-white/[0.06] p-5">
                          <p className="mb-1 font-headline text-4xl font-extrabold text-white">{metric.value}</p>
                          <p className="text-sm leading-snug text-white/70">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-on-surface-variant">{documented.note}</p>
        </div>
      </section>

      {/* Illustrative scenarios */}
      <section className="border-y border-outline-variant/60 bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={scenarios.eyebrow} title={scenarios.heading} description={scenarios.description} centered={false} className="mb-10" />
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.items.map((item) => (
              <article key={item.company} className="flex flex-col rounded-3xl border border-dashed border-outline bg-surface p-7">
                <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  <FlaskConical size={14} />
                  {scenarios.label}
                </span>
                <h3 className="mb-4 text-xl font-bold text-on-surface">{item.industry}</h3>
                <p className="mb-1 text-sm font-semibold text-on-surface-variant">{scenarios.challengeLabel}</p>
                <p className="mb-4 leading-relaxed text-on-surface">{item.challenge}</p>
                <p className="mb-1 text-sm font-semibold text-on-surface-variant">{scenarios.approachLabel}</p>
                <p className="mb-5 leading-relaxed text-on-surface">{item.solution}</p>
                <p className="mb-2 text-sm font-semibold text-on-surface-variant">{scenarios.outcomesLabel}</p>
                <ul className="space-y-2">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-[15px] text-on-surface">
                      <Check size={16} className="mt-1 flex-shrink-0 text-outline" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="mt-5 flex flex-col gap-6 rounded-3xl border border-dashed border-outline bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex gap-5">
              <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed sm:flex">
                <HardDrive size={22} />
              </span>
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  <FlaskConical size={14} />
                  {sap.label}
                </span>
                <h3 className="mb-2 text-xl font-bold text-on-surface">{sap.title}</h3>
                <p className="max-w-3xl leading-relaxed text-on-surface-variant">{sap.description}</p>
              </div>
            </div>
            <Link href={sap.href} className="inline-flex flex-shrink-0 items-center gap-2 font-semibold text-primary-fixed hover:gap-3">
              {sap.cta}
              <ArrowRight size={18} className="transition-all" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={caseStudies.cta.heading}
            description={caseStudies.cta.description}
            primaryCTA={{ text: caseStudies.cta.primary, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: caseStudies.cta.secondary, href: `/${validLocale}/solutions` }}
          />
        </div>
      </section>
    </>
  );
}

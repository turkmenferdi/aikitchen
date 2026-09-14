import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calculator,
  Check,
  ChevronDown,
  Database,
  FileSearch,
  Headset,
  Inbox,
  Layers,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
  UserCheck,
  Users,
  Wrench,
} from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { buttonClass } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABanner } from '@/components/CTABanner';
import { HeroFlowCard } from '@/components/home/HeroFlowCard';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { home } = await getDictionary(validLocale);

  return {
    title: home.meta.title,
    description: home.meta.description,
    openGraph: { title: home.meta.title, description: home.meta.description },
    alternates: localeAlternates(validLocale),
  };
}

const taskIcons = [Calculator, Users, Truck, Database, Scale, Headset];
const stepIcons = [Inbox, FileSearch, Layers, UserCheck];
const whyIcons = [Sparkles, ShieldCheck, Wrench, Headset];

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { home } = await getDictionary(validLocale);
  const [automation, turbohub] = home.offerings.items;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: home.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero: what we do, for whom, and a concrete example of the work */}
      <section className="relative overflow-hidden border-b border-outline-variant/60 bg-surface-container-low">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:px-8 lg:pb-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary-fixed">
              <Bot size={16} />
              {home.hero.eyebrow}
            </p>
            <h1 className="mb-6 text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-on-surface sm:text-5xl lg:text-[3.4rem]">
              {home.hero.title}{' '}
              <span className="bg-gradient-to-r from-primary-fixed to-secondary-fixed-dim bg-clip-text text-transparent">{home.hero.titleHighlight}</span>
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{home.hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={`/${validLocale}/contact`} className={buttonClass('primary', 'lg')}>
                {home.hero.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <a href="#how-it-works" className={buttonClass('secondary', 'lg')}>
                {home.hero.secondaryCta}
              </a>
            </div>
            <div className="mt-10">
              <p className="mb-3 text-sm font-medium text-on-surface-variant">{home.hero.worksWith}</p>
              <ul className="flex flex-wrap gap-2">
                {home.hero.systems.map((system) => (
                  <li key={system} className="rounded-lg border border-outline-variant bg-surface-container px-3 py-1.5 text-sm font-medium text-on-surface">
                    {system}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <HeroFlowCard label={home.heroCard.label} title={home.heroCard.title} footer={home.heroCard.footer} steps={home.heroCard.steps} />
        </div>
      </section>

      {/* Offerings: the two things we sell, side by side */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={home.offerings.eyebrow} title={home.offerings.heading} description={home.offerings.description} className="mb-14" />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-outline-variant bg-surface-container p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-fixed">
                  <Bot size={24} />
                </span>
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{automation.tag}</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-on-surface md:text-3xl">{automation.title}</h3>
              <p className="mb-7 text-lg leading-relaxed text-on-surface-variant">{automation.description}</p>
              <ul className="mb-9 grid gap-3 sm:grid-cols-2">
                {automation.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-on-surface">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${validLocale}/platform`} className="mt-auto inline-flex items-center gap-2 font-semibold text-primary-fixed hover:gap-3">
                {automation.cta}
                <ArrowRight size={18} className="transition-all" />
              </Link>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
              <div className="relative mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <BarChart3 size={24} />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">{turbohub.tag}</span>
              </div>
              <h3 className="relative mb-3 text-2xl font-bold text-white md:text-3xl">{turbohub.title}</h3>
              <p className="relative mb-7 text-lg leading-relaxed text-white/75">{turbohub.description}</p>
              <ul className="relative mb-9 grid gap-3 sm:grid-cols-2">
                {turbohub.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-white/90">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${validLocale}/turbohub`} className="relative mt-auto inline-flex items-center gap-2 font-semibold text-primary-fixed hover:gap-3">
                {turbohub.cta}
                <ArrowRight size={18} className="transition-all" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Concrete tasks by team */}
      <section className="border-y border-outline-variant/60 bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={home.tasks.eyebrow} title={home.tasks.heading} description={home.tasks.description} className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.tasks.groups.map((group, idx) => {
              const Icon = taskIcons[idx % taskIcons.length];
              return (
                <article key={group.team} className="rounded-2xl border border-outline-variant bg-surface p-6 transition-colors hover:border-primary/40">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed">
                      <Icon size={20} />
                    </span>
                    <h3 className="mb-0 text-lg font-bold text-on-surface">{group.team}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-on-surface-variant">
                        <Check size={16} className="mt-1 flex-shrink-0 text-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How a robot works */}
      <section id="how-it-works" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={home.howItWorks.eyebrow} title={home.howItWorks.heading} description={home.howItWorks.description} className="mb-14" />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {home.howItWorks.steps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              const isHuman = idx === home.howItWorks.steps.length - 1;
              return (
                <li
                  key={step.title}
                  className={`relative rounded-2xl border p-6 ${isHuman ? 'border-primary/30 bg-primary/5' : 'border-outline-variant bg-surface-container'}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${isHuman ? 'bg-primary text-white' : 'bg-ink text-white'}`}>
                      <Icon size={20} />
                    </span>
                    <span className="font-headline text-3xl font-extrabold text-outline">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-on-surface">{step.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{step.description}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-on-surface-variant">
            <ShieldCheck size={18} className="flex-shrink-0 text-primary-fixed" />
            {home.howItWorks.note}
          </p>
        </div>
      </section>

      {/* Engagement model */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <SectionHeading eyebrow={home.model.eyebrow} title={home.model.heading} description={home.model.description} centered={false} className="mb-8" />
            <Link href={`/${validLocale}/services`} className={buttonClass('secondary', 'md')}>
              {home.model.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
          <ol className="relative space-y-4">
            {home.model.steps.map((step, idx) => (
              <li key={step.title} className="flex gap-5 rounded-2xl border border-outline-variant bg-surface p-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-on-surface">{step.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof: documented cases */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{home.proof.eyebrow}</p>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-[2.5rem]">{home.proof.heading}</h2>
              <p className="text-lg leading-relaxed text-white/70">{home.proof.description}</p>
            </div>
            <Link href={`/${validLocale}/case-studies`} className="inline-flex flex-shrink-0 items-center gap-2 font-semibold text-primary-fixed hover:gap-3">
              {home.proof.cta}
              <ArrowRight size={18} className="transition-all" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {home.proof.cases.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-fixed">{item.area}</p>
                <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mb-8 leading-relaxed text-white/70">{item.description}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-white/[0.06] p-5">
                      <p className="mb-1 whitespace-nowrap font-headline text-3xl font-extrabold text-white lg:text-[1.7rem] xl:text-4xl">{metric.value}</p>
                      <p className="text-sm leading-snug text-white/65">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/55">{home.proof.note}</p>
        </div>
      </section>

      {/* Why AI Kitchen */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={home.why.eyebrow} title={home.why.heading} className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {home.why.items.map((item, idx) => {
              const Icon = whyIcons[idx % whyIcons.length];
              return (
                <article key={item.title} className="rounded-2xl border border-outline-variant bg-surface-container p-6">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed">
                    <Icon size={22} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-outline-variant/60 bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={home.faq.eyebrow} title={home.faq.heading} className="mb-12" />
          <div className="divide-y divide-outline-variant rounded-2xl border border-outline-variant">
            {home.faq.items.map((item) => (
              <details key={item.question} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-on-surface">
                  {item.question}
                  <ChevronDown size={20} className="flex-shrink-0 text-outline transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-on-surface-variant">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={home.finalCta.heading}
            description={home.finalCta.description}
            primaryCTA={{ text: home.finalCta.primary, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: home.finalCta.secondary, href: `/${validLocale}/turbohub` }}
          />
        </div>
      </section>
    </>
  );
}

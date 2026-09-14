import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { buttonClass } from '@/components/Button';
import { TurboHubMockup } from '@/components/turbohub/TurboHubMockup';
import {
  ArrowRight,
  BarChart3,
  Download,
  FileText,
  CheckCircle2,
  Cloud,
  Cpu,
  Mail,
  MessageSquareText,
  Server,
  Zap,
} from 'lucide-react';

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
      ? 'TurboHUB | AI-Powered Management Analytics | AI Kitchen'
      : 'TurboHUB | Yapay Zekâ Destekli Yönetim Analitiği | AI Kitchen',
    description: isEnglish
      ? 'TurboHUB answers management questions in natural language using data from accounting, ERP, CRM, warehouse systems and Excel — in minutes instead of days.'
      : 'TurboHUB; muhasebe, ERP, CRM, depo sistemleri ve Excel verileriyle yönetim sorularınızı doğal dilde, günler yerine dakikalar içinde yanıtlar.',
    alternates: localeAlternates(validLocale, 'turbohub'),
  };
}

export default async function TurboHub({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);
  const t = dictionary.turbohub;
  const deploymentIcons = [Server, Cpu, Cloud];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-outline-variant/60 bg-surface-container-low">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_85%_20%,rgba(124,58,237,0.10),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/5 px-3.5 py-1.5 text-sm font-semibold text-secondary-fixed-dim">
              <BarChart3 size={16} />
              {t.hero.eyebrow}
            </p>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-on-surface md:text-6xl">{t.hero.title}</h1>
            <p className="mb-5 max-w-2xl text-2xl font-bold leading-snug text-on-surface md:text-[1.75rem]">{t.hero.subtitle}</p>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">{t.hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className={buttonClass('primary', 'lg')}>
                {t.hero.primaryCta}
                <ArrowRight size={18} />
              </a>
              <a href={t.whitepaper.file} className={buttonClass('secondary', 'lg')} download>
                <Download size={18} />
                {t.hero.whitepaperCta}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.hero.tags.map((tag) => (
                <li key={tag} className="rounded-lg border border-outline-variant bg-surface-container px-3 py-1.5 text-sm font-medium text-on-surface">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <TurboHubMockup {...t.mockup} />
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-fixed">{t.problem.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface leading-tight">{t.problem.heading}</h2>
            </div>
            <ul className="md:col-span-3 space-y-6 border-l-4 border-secondary pl-6">
              {t.problem.points.map((point) => (
                <li key={point} className="text-lg leading-relaxed text-on-surface-variant">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Three types of inefficient costs */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.costs.heading} description={t.costs.description} className="mb-16" />
          {/* One row per department. On desktop the two comparison panels share subgrid rows, so their headings and lists start level. */}
          <div className="space-y-6">
            {t.costs.items.map((item, idx) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.25rem] border border-outline/20 bg-surface-container lg:grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr]"
              >
                <div className="flex items-center gap-5 border-b border-outline/20 p-8 lg:row-span-2 lg:border-b-0 lg:border-r">
                  <span className="font-headline text-5xl font-bold text-primary-fixed-dim">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="mb-0 text-xl font-semibold text-on-surface">{item.title}</h3>
                </div>
                <div className="p-8 lg:grid lg:grid-rows-subgrid lg:row-span-2">
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-error">{t.costs.problemLabel}</p>
                    <h4 className="mb-0 font-semibold text-on-surface">{item.subtitle}</h4>
                  </div>
                  <ul className="space-y-3">
                    {item.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3 text-on-surface-variant">
                        <Zap className="w-5 h-5 text-secondary-fixed-dim flex-shrink-0 mt-0.5" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-secondary-container/40 p-8 lg:grid lg:grid-rows-subgrid lg:row-span-2">
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-fixed">{t.costs.solutionLabel}</p>
                    <h4 className="mb-0 font-semibold text-on-surface">{item.solutionTitle}</h4>
                  </div>
                  <ul className="space-y-3">
                    {item.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3 text-on-surface">
                        <CheckCircle2 className="w-5 h-5 text-primary-fixed flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About + How it works */}
      <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold text-on-surface leading-tight">{t.about.heading}</h2>
              <ul className="space-y-5">
                {t.about.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-fixed flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-on-surface-variant">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-secondary-container to-primary-dim p-8 md:p-10 shadow-2xl shadow-secondary/20">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-on-secondary-container">
                <MessageSquareText className="w-7 h-7" />
                {t.about.howHeading}
              </h3>
              <ol className="space-y-5">
                {t.about.steps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4 text-on-secondary-container">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-on-secondary-container/15 text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.benefits.heading} className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {t.benefits.items.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-[1.25rem] border border-outline/20 bg-surface-container text-center"
              >
                <div className="bg-gradient-to-br from-secondary-container to-primary-dim px-6 py-8">
                  <p className="whitespace-nowrap font-headline text-3xl font-extrabold text-white lg:text-[2rem]">{item.value}</p>
                </div>
                <p className="px-6 py-8 text-lg font-semibold text-on-surface">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[1.25rem] border border-primary/30 bg-primary/10 p-8">
            <p className="text-lg font-medium leading-relaxed text-on-surface">{t.benefits.note}</p>
          </div>
          <p className="mt-4 text-sm text-on-surface-variant">{t.benefits.disclaimer}</p>
        </div>
      </section>

      {/* Deployment options */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.deployment.heading} description={t.deployment.description} className="mb-16" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-0">
            {t.deployment.options.map((option, idx) => {
              const Icon = deploymentIcons[idx] ?? Server;
              return (
                <article
                  key={option.title}
                  className="rounded-[1.25rem] border border-outline/20 bg-surface-container p-8 lg:grid lg:grid-rows-subgrid lg:row-span-3"
                >
                  <div>
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/20 text-primary-fixed">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-on-surface">{option.title}</h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-on-surface-variant">{option.description}</p>
                  <ul className="space-y-3">
                    {option.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary-fixed flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-on-surface-variant">{t.deployment.note}</p>
        </div>
      </section>

      {/* White paper + contact */}
      <section id="contact" className="scroll-mt-24 bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <article className="flex flex-col rounded-3xl border border-outline-variant bg-surface p-8 md:p-10">
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary-fixed-dim">
              <FileText size={24} />
            </span>
            <h2 className="mb-3 text-2xl font-bold text-on-surface md:text-3xl">{t.whitepaper.heading}</h2>
            <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">{t.whitepaper.description}</p>
            <div className="mt-auto flex flex-wrap items-center gap-4">
              <a href={t.whitepaper.file} download className={buttonClass('secondary', 'lg')}>
                <Download size={18} />
                {t.whitepaper.cta}
              </a>
              <span className="text-sm text-on-surface-variant">{t.whitepaper.meta}</span>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
            <div className="relative">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{t.contact.subheading}</p>
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.contact.heading}</h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/75">{t.contact.description}</p>

              <div className="mb-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-headline text-xl font-bold">
                  {t.contact.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div className="min-w-0">
                  <p className="font-headline text-xl font-bold">{t.contact.name}</p>
                  <p className="mb-1 text-sm text-white/60">{t.contact.role}</p>
                  <a href={`mailto:${t.contact.email}`} className="inline-flex items-center gap-2 break-all text-primary-fixed hover:text-white">
                    <Mail size={16} className="flex-shrink-0" />
                    {t.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`/${validLocale}/contact?topic=turbohub`} className={buttonClass('primary', 'lg', '!bg-white !text-ink !shadow-none hover:!bg-indigo-100')}>
                  {t.contact.formCta}
                  <ArrowRight size={18} />
                </a>
                <a href={`mailto:${t.contact.email}?subject=TurboHUB%20Demo`} className={buttonClass('ghost', 'lg', 'border border-white/30 !text-white hover:!bg-white/10')}>
                  <Mail size={18} />
                  {t.contact.emailCta}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import {
  ArrowRight,
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
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-secondary-container/30 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-on-surface">{t.hero.title}</h1>
          <p className="mb-6 max-w-3xl text-2xl md:text-3xl font-semibold leading-snug text-on-surface">
            {t.hero.subtitle}
          </p>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant">{t.hero.description}</p>
          <div className="mb-10 flex flex-wrap gap-3">
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button variant="primary" size="lg">
                {t.hero.primaryCta}
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg">
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.problem.eyebrow}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.costs.items.map((item, idx) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-[1.25rem] border border-outline/20 bg-surface-container"
              >
                <div className="flex-1 p-8">
                  <span className="mb-4 block text-4xl font-bold text-outline/50">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-on-surface">{item.title}</h3>
                  <p className="mb-6 text-sm text-on-surface-variant">{item.subtitle}</p>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-error">{t.costs.problemLabel}</p>
                  <ul className="space-y-3">
                    {item.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3 text-on-surface-variant">
                        <Zap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-secondary-container/40 p-8">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{t.costs.solutionLabel}</p>
                  <h4 className="mb-4 font-semibold text-on-surface">{item.solutionTitle}</h4>
                  <ul className="space-y-3">
                    {item.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3 text-on-surface">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
                  <p className="text-3xl md:text-4xl font-bold text-on-secondary-container">{item.value}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.deployment.options.map((option, idx) => {
              const Icon = deploymentIcons[idx] ?? Server;
              return (
                <article
                  key={option.title}
                  className="rounded-[1.25rem] border border-outline/20 bg-surface-container p-8"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/20 text-primary">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-on-surface">{option.title}</h3>
                  <p className="mb-6 leading-relaxed text-on-surface-variant">{option.description}</p>
                  <ul className="space-y-3">
                    {option.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary-container px-6 py-14 md:px-14 text-on-primary">
            <div className="absolute top-0 right-0 h-96 w-96 -mr-48 -mt-48 rounded-full bg-primary-fixed opacity-20" />
            <div className="relative z-10 text-center">
              <h2 className="mb-3 text-3xl md:text-4xl font-bold">{t.contact.heading}</h2>
              <p className="mb-2 text-xl font-semibold">{t.contact.subheading}</p>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-on-primary/90">{t.contact.description}</p>

              <div className="mx-auto mb-10 flex max-w-md flex-col items-center gap-5 rounded-2xl bg-surface/90 p-6 text-on-surface sm:flex-row sm:text-left">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-fixed to-secondary-container text-2xl font-bold text-on-secondary-container">
                  {t.contact.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-2xl font-bold">{t.contact.name}</p>
                  <p className="mb-2 text-sm text-on-surface-variant">{t.contact.role}</p>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="inline-flex items-center gap-2 break-all font-medium text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {t.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${t.contact.email}?subject=TurboHUB%20Demo`}>
                  <Button variant="secondary" size="lg">
                    {t.contact.emailCta}
                  </Button>
                </a>
                <a href={`/${validLocale}/contact`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-2">
                      {t.contact.formCta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

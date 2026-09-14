import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Eye, HandHeart, Scale, Target, Users, Wrench } from 'lucide-react';
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
  const isEnglish = validLocale === 'en';

  return {
    title: isEnglish
      ? 'About AI Kitchen | Business Process Automation'
      : 'AI Kitchen Hakkında | İş Süreci Otomasyonu',
    description: isEnglish
      ? 'Learn about AI Kitchen\'s approach to RPA, document automation and repeatable business-process workflows.'
      : 'AI Kitchen’ın RPA, belge otomasyonu ve tekrarlanan iş süreçlerine yönelik yaklaşımını inceleyin.',
    alternates: localeAlternates(validLocale, 'about'),
  };
}

const valueIcons = [Wrench, Scale, Award, HandHeart];

export default async function About({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { about } = await getDictionary(validLocale);

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-fixed">{about.hero.eyebrow}</p>
            <h1 className="mb-6 text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{about.hero.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{about.hero.description}</p>
          </div>
          <aside className="rounded-3xl border border-outline-variant bg-surface p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-fixed">
                <Users size={20} />
              </span>
              <p className="font-headline text-lg font-bold text-on-surface">{about.hero.focusLabel}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {about.hero.focusTeams.map((team) => (
                <li key={team} className="rounded-lg border border-outline-variant bg-surface-container px-3 py-1.5 text-sm font-medium text-on-surface">
                  {team}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-on-surface md:text-[2.5rem]">{about.story.heading}</h2>
            <p className="text-xl leading-relaxed text-on-surface-variant">{about.story.content}</p>
          </div>
          <ol className="space-y-4">
            {about.story.principles.map((principle, idx) => (
              <li key={principle.title} className="flex gap-5 rounded-2xl border border-outline-variant bg-surface-container p-6">
                <span className="font-headline text-3xl font-extrabold text-primary-fixed-dim">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-on-surface">{principle.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-outline-variant/60 bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-outline-variant bg-surface p-8 md:p-10">
            <Target size={28} className="mb-5 text-primary-fixed" />
            <h2 className="mb-3 text-2xl font-bold text-on-surface">{about.mission.heading}</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">{about.mission.content}</p>
          </article>
          <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/40 blur-3xl" />
            <Eye size={28} className="relative mb-5 text-primary-fixed" />
            <h2 className="relative mb-3 text-2xl font-bold text-white">{about.vision.heading}</h2>
            <p className="relative text-lg leading-relaxed text-white/75">{about.vision.content}</p>
          </article>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={about.values.heading} description={about.trust.description} className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {about.values.items.map((item, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
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

      <section className="border-t border-outline-variant/60 bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-on-surface">{about.explore.heading}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.explore.links.map((link) => (
              <Link
                key={link.href}
                href={`/${validLocale}${link.href}`}
                className="group flex flex-col rounded-2xl border border-outline-variant bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-surface-container-high"
              >
                <h3 className="mb-2 text-lg font-bold text-on-surface">{link.title}</h3>
                <p className="mb-4 leading-relaxed text-on-surface-variant">{link.description}</p>
                <ArrowRight size={18} className="mt-auto text-primary-fixed transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={about.cta.heading}
            description={about.cta.description}
            primaryCTA={{ text: about.cta.primary, href: `/${validLocale}/contact` }}
          />
        </div>
      </section>
    </>
  );
}

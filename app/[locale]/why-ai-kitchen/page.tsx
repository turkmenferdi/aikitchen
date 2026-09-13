import type { Metadata } from 'next';
import { Check, Cpu, GraduationCap, Layers, Lock, Target, X, Zap } from 'lucide-react';
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
    title: isEnglish ? 'Why AI Kitchen | RPA and AI Automation Partner' : 'Neden AI Kitchen | RPA ve Yapay Zekâ Otomasyon Ortağı',
    description: isEnglish
      ? 'Review AI Kitchen\'s approach to RPA, document automation and business process orchestration.'
      : "AI Kitchen'ın RPA, belge otomasyonu ve iş süreci orkestrasyonu yaklaşımını inceleyin.",
    alternates: localeAlternates(validLocale, 'why-ai-kitchen'),
  };
}

const itemIcons = [Zap, Layers, Lock, Cpu, GraduationCap, Target];

export default async function WhyAiKitchen({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { whyAiKitchen: why } = await getDictionary(validLocale);

  return (
    <>
      <section className="border-b border-outline-variant/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{why.hero.eyebrow}</p>
          <h1 className="mb-6 max-w-4xl text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{why.hero.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{why.intro}</p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item, idx) => {
              const Icon = itemIcons[idx % itemIcons.length];
              return (
                <article key={item.title} className="flex flex-col rounded-3xl border border-outline-variant bg-white p-7">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </span>
                  <h2 className="mb-3 text-xl font-bold text-on-surface">{item.title}</h2>
                  <p className="mb-6 leading-relaxed text-on-surface-variant">{item.description}</p>
                  <p className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-sm font-semibold text-primary">
                    <Check size={16} />
                    {item.benefit}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/60 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={why.comparison.heading} className="mb-12" />
          <div className="overflow-x-auto rounded-2xl border border-outline-variant">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-on-surface-variant">{why.comparison.head[0]}</th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-on-surface-variant">{why.comparison.head[1]}</th>
                  <th scope="col" className="bg-primary/5 px-6 py-4 text-sm font-semibold text-primary">{why.comparison.head[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {why.comparison.rows.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row" className="px-6 py-5 align-top font-semibold text-on-surface">{row.aspect}</th>
                    <td className="px-6 py-5 align-top text-on-surface-variant">
                      <span className="flex gap-2.5">
                        <X size={18} className="mt-0.5 flex-shrink-0 text-outline" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="bg-primary/5 px-6 py-5 align-top font-medium text-on-surface">
                      <span className="flex gap-2.5">
                        <Check size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                        {row.aiKitchen}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={why.cta.heading}
            description={why.cta.description}
            primaryCTA={{ text: why.cta.primary, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: why.cta.secondary, href: `/${validLocale}/case-studies` }}
          />
        </div>
      </section>
    </>
  );
}

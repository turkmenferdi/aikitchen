import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import { Grid } from '@/components/Grid';

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
    title: isEnglish ? 'Case Studies - AI Kitchen' : 'Vaka Çalışmaları - AI Kitchen',
    description: isEnglish
      ? 'Illustrative enterprise automation scenarios'
      : 'Örnek kurumsal otomasyon senaryoları',
    alternates: localeAlternates(validLocale, 'case-studies'),
  };
}

export default async function CaseStudies({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const isEnglish = validLocale === 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">
            {dictionary.caseStudies.hero.title}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {dictionary.caseStudies.hero.description}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Grid columns={1} gap="lg">
            {dictionary.caseStudies.items.map((item: any, idx: number) => (
              <CaseStudyCard
                key={idx}
                company={item.company}
                industry={item.industry}
                metric={item.metric}
                metricLabel={item.metricLabel}
                challenge={item.challenge}
                outcomes={item.outcomes}
                challengeLabel={isEnglish ? 'Illustrative scenario' : 'Örnek senaryo'}
                outcomesLabel={isEnglish ? 'Potential outcomes to measure' : 'Ölçülebilecek olası sonuçlar'}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={
              isEnglish ? 'Ready to achieve similar results?' : 'Benzer sonuçları birlikte planlayalım'
            }
            description={
              isEnglish
                ? "Let's explore how AI Kitchen can transform your operations"
                : 'Operasyonlarınızdaki en doğru otomasyon senaryosunu birlikte kurgulayalım.'
            }
            primaryCTA={{
              text: isEnglish ? 'Request Demo' : 'Demo Talep Et',
              href: `/${locale}/contact`,
            }}
          />
        </div>
      </section>
    </>
  );
}

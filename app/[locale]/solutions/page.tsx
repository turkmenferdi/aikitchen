import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { SolutionCard } from '@/components/SolutionCard';
import { Grid } from '@/components/Grid';
import { BarChart3, Zap, FileText, MapPin } from 'lucide-react';

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

export default async function Solutions({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">
            {dictionary.solutions.index.hero.title}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {dictionary.solutions.index.hero.description}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Grid columns={2} gap="lg">
            {[
              {
                title: dictionary.solutions.financial.name,
                description: dictionary.solutions.financial.hero.description,
                href: `/${locale}/solutions/financial`,
                icon: <BarChart3 className="w-8 h-8 text-primary" />,
              },
              {
                title: dictionary.solutions.accountsPayable.name,
                description: dictionary.solutions.accountsPayable.hero.description,
                href: `/${locale}/solutions/accounts-payable`,
                icon: <Zap className="w-8 h-8 text-primary" />,
              },
              {
                title: dictionary.solutions.legal.name,
                description: dictionary.solutions.legal.hero.description,
                href: `/${locale}/solutions/legal`,
                icon: <FileText className="w-8 h-8 text-primary" />,
              },
              {
                title: dictionary.solutions.tourism.name,
                description: dictionary.solutions.tourism.hero.description,
                href: `/${locale}/solutions/tourism`,
                icon: <MapPin className="w-8 h-8 text-primary" />,
              },
            ].map((solution, idx) => (
              <SolutionCard
                key={idx}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                icon={solution.icon}
              />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}

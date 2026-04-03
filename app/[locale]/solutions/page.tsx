import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
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
    title: isEnglish ? 'Solutions - AI Kitchen' : 'Çözümler - AI Kitchen',
    description: isEnglish
      ? 'Enterprise automation solutions for finance, legal, operations, and more'
      : 'Finans, hukuk, operasyon ve daha birçok alanı için kurumsal otomasyon çözümleri',
  };
}

export default async function Solutions({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-white to-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {dictionary.solutions.index.hero.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {dictionary.solutions.index.hero.description}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Grid columns={2} gap="lg">
            {[
              {
                title: dictionary.solutions.financial.name,
                description: 'Automate financial operations with AI-powered accuracy and governance',
                href: `/${locale}/solutions/financial`,
                icon: <BarChart3 className="w-8 h-8 text-accent-teal" />,
              },
              {
                title: dictionary.solutions.accountsPayable.name,
                description: 'Transform AP from manual process to intelligent, compliant automation',
                href: `/${locale}/solutions/accounts-payable`,
                icon: <Zap className="w-8 h-8 text-accent-teal" />,
              },
              {
                title: dictionary.solutions.legal.name,
                description: 'Automate high-value legal processes with AI-powered document understanding',
                href: `/${locale}/solutions/legal`,
                icon: <FileText className="w-8 h-8 text-accent-teal" />,
              },
              {
                title: dictionary.solutions.tourism.name,
                description: 'Streamline hospitality operations with intelligent automation',
                href: `/${locale}/solutions/tourism`,
                icon: <MapPin className="w-8 h-8 text-accent-teal" />,
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

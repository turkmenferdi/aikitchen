import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { FeatureCard } from '@/components/FeatureCard';
import { Grid } from '@/components/Grid';
import {
  Search,
  Zap,
  Lightbulb,
  Rocket,
  Wrench,
  LifeBuoy,
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
      ? 'RPA Consulting and Automation Services | AI Kitchen'
      : 'RPA Danışmanlığı ve Otomasyon Hizmetleri | AI Kitchen',
    description: isEnglish
      ? 'Expert services from process discovery to implementation and ongoing support'
      : 'Süreç keşfinden kontrollü pilota, uygulamadan desteğe kadar RPA ve iş süreci otomasyonu hizmetleri.',
    alternates: localeAlternates(validLocale, 'services'),
  };
}

export default async function Services({ params }: PageProps) {
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
            {dictionary.services.index.hero.title}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {dictionary.services.index.hero.description}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-surface-container-low border-b border-outline/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {dictionary.services.index.intro}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Grid columns={3} gap="lg">
            {[
              {
                title: dictionary.services.processDiscovery.name,
                description: dictionary.services.processDiscovery.description,
                icon: Search,
              },
              {
                title: dictionary.services.assessment.name,
                description: dictionary.services.assessment.description,
                icon: Zap,
              },
              {
                title: dictionary.services.poc.name,
                description: dictionary.services.poc.description,
                icon: Lightbulb,
              },
              {
                title: dictionary.services.implementation.name,
                description: dictionary.services.implementation.description,
                icon: Rocket,
              },
              {
                title: dictionary.services.integration.name,
                description: dictionary.services.integration.description,
                icon: Wrench,
              },
              {
                title: dictionary.services.support.name,
                description: dictionary.services.support.description,
                icon: LifeBuoy,
              },
            ].map((service, idx) => (
              <FeatureCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Service Details Callout */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6">
            {isEnglish ? 'An Implementation Methodology Shaped to the Process' : 'Sürece Göre Şekillenen Uygulama Metodolojisi'}
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            {isEnglish
              ? 'The scope and schedule are defined after reviewing the process, systems, controls and success criteria with the customer team.'
              : 'Kapsam ve takvim; süreç, sistemler, kontroller ve başarı kriterleri müşteri ekibiyle incelendikten sonra belirlenir.'}
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 p-8">
            <p className="text-on-surface font-semibold mb-4">
              {isEnglish
                ? 'Delivery stages are planned after discovery'
                : 'Teslim aşamaları keşif sonrasında planlanır'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
              {(
                isEnglish
                  ? [
                      'Process discovery',
                      'Assessment',
                      'Controlled pilot',
                      'Implementation',
                      'Integration',
                      'Support',
                    ]
                  : [
                      'Süreç keşfi',
                      'Değerlendirme',
                      'Kontrollü pilot',
                      'Uygulama',
                      'Entegrasyon',
                      'Destek',
                    ]
              ).map((phase, idx) => (
                <div key={idx} className="bg-surface-container-high rounded border border-outline/20 p-3 text-center">
                  <p className="text-on-surface-variant font-medium">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

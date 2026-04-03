import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
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
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const isEnglish = locale === 'en';

  return {
    title: isEnglish ? 'Services - AI Kitchen' : 'Hizmetler - AI Kitchen',
    description: isEnglish
      ? 'Expert services from process discovery to implementation and ongoing support'
      : 'İşlem keşfinden uygulamaya ve devam eden desteğe kadar uzman hizmetler',
  };
}

export default async function Services({ params }: PageProps) {
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-white to-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {dictionary.services.index.hero.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {dictionary.services.index.hero.description}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted leading-relaxed">
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
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Proven Implementation Methodology
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            From discovery through scaling, our methodology ensures successful transformation and
            internal capability building at every stage.
          </p>

          <div className="bg-gradient-to-br from-accent-teal/10 to-accent-teal/5 rounded-lg border border-accent-teal/20 p-8">
            <p className="text-foreground font-semibold mb-4">
              Timeline Overview: 6 months from discovery to production at scale
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
              {[
                '2-4w Discovery',
                '1-2w Assessment',
                '4-8w POC',
                '8-16w Implementation',
                'Variable Integration',
                'Ongoing Support',
              ].map((phase, idx) => (
                <div key={idx} className="bg-white rounded border border-border p-3 text-center">
                  <p className="text-muted font-medium">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { Grid } from '@/components/Grid';
import { Award, Target, Eye, Heart, Shield, Zap } from 'lucide-react';

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
    title: isEnglish ? 'About AI Kitchen' : 'AI Kitchen Hakkında',
    description: isEnglish
      ? 'Learn about AI Kitchen\'s mission to transform enterprise automation'
      : 'AI Kitchen\'in kurumsal otomasyonu dönüştürme misyonu hakkında bilgi edinin',
  };
}

export default async function About({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-white to-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {dictionary.about.hero.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {dictionary.about.hero.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {dictionary.about.story.heading}
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {dictionary.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Grid columns={2} gap="lg">
            <div className="bg-white rounded-lg border border-border p-10">
              <Target className="w-8 h-8 text-accent-teal mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {dictionary.about.mission.heading}
              </h3>
              <p className="text-muted leading-relaxed">
                {dictionary.about.mission.content}
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-10">
              <Eye className="w-8 h-8 text-accent-teal mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {dictionary.about.vision.heading}
              </h3>
              <p className="text-muted leading-relaxed">
                {dictionary.about.vision.content}
              </p>
            </div>
          </Grid>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={dictionary.about.values.heading}
            description=""
            className="mb-16"
          />

          <Grid columns={2} gap="lg">
            {dictionary.about.values.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={[Shield, Zap, Heart, Award][idx]}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-foreground to-foreground/95 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {dictionary.about.trust.heading}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dictionary.about.trust.description}
          </p>

          <div className="bg-white/10 backdrop-blur rounded-lg border border-white/20 p-12">
            <p className="text-white/70 italic">
              "AI Kitchen transformed how we approach automation. We moved from siloed point solutions to a unified, intelligent platform that actually learns from our business." - Enterprise Client
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import { Grid } from '@/components/Grid';
import Link from 'next/link';
import { Zap, Lock, Brain, Cpu, ArrowRight, BarChart3, Shield, Workflow } from 'lucide-react';

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
      ? 'AI Kitchen - Scale Your Digital Workforce'
      : 'AI Kitchen - Dijital İş Gücünüzü Ölçeklendirin',
    description: isEnglish
      ? 'Enterprise AI-supported RPA platform for intelligent automation. Build digital workers with Agentic AI and secure on-premises deployment.'
      : 'Kurumsal AI destekli RPA platformu akıllı otomasyon için. Agentic AI ve güvenli şirket içi dağıtım ile dijital işçiler oluşturun.',
    openGraph: {
      title: isEnglish
        ? 'AI Kitchen - Scale Your Digital Workforce'
        : 'AI Kitchen - Dijital İş Gücünüzü Ölçeklendirin',
      description: isEnglish
        ? 'Enterprise-ready AI and RPA automation platform'
        : 'Kurumsal seviye AI ve RPA otomasyon platformu',
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-surface">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full -ml-48 -mb-48" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold uppercase tracking-wider">
              {dictionary.home.hero.subHeading}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight">
              {dictionary.home.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed">
              {dictionary.home.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  {dictionary.home.hero.cta}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href={`/${locale}/platform`}>
                <Button variant="outline" size="lg">
                  {dictionary.common.learnMore}
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 rounded-[2rem] border border-outline/30 bg-surface-container/60 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
            <div className="bg-surface-container-high rounded-[1.75rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-surface-container p-6 shadow-sm border border-outline/20">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary-container text-on-secondary-container shadow-sm shadow-secondary/20">
                    <Brain className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-on-surface">AI Agents</span>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-surface-container p-6 shadow-sm border border-outline/20">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-tertiary-container text-on-tertiary-container shadow-sm shadow-tertiary/20">
                    <Workflow className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-on-surface">RPA</span>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-surface-container p-6 shadow-sm border border-outline/20">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-container text-on-primary-container shadow-sm shadow-primary/20">
                    <Zap className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Digital Workforce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={dictionary.home.valueProposition.heading}
            description=""
            className="mb-16"
          />

          <Grid columns={3} gap="lg">
            {dictionary.home.valueProposition.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={[Zap, Shield, Brain][idx]}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2rem] border border-outline/20 bg-surface-container shadow-xl shadow-primary/10 p-8 animate-slide-up">
              <SectionHeading
                title={dictionary.home.platformOverview.heading}
                description={dictionary.home.platformOverview.description}
                centered={false}
                className="mb-8"
              />
              <ul className="space-y-4">
                {dictionary.home.platformOverview.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-on-surface-variant leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-high rounded-lg border border-outline/20 p-8 shadow-sm flex items-center justify-center min-h-96">
              <div className="text-center text-on-surface-variant">
                <Cpu className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                <p className="text-sm">Platform Architecture Diagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={dictionary.home.coreCapabilities.heading}
            description=""
            className="mb-16"
          />

          <Grid columns={2} gap="lg">
            {dictionary.home.coreCapabilities.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={[Workflow, Brain, BarChart3, Cpu][idx]}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Business Outcomes Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-surface-container-highest to-surface-container-high text-on-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {dictionary.home.businessOutcomes.heading}
            </h2>
          </div>

          <Grid columns={3} gap="lg">
            {dictionary.home.businessOutcomes.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container/50 backdrop-blur rounded-lg border border-outline/30 p-8 text-center hover:border-outline/50 transition-colors"
              >
                <p className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {item.metric}
                </p>
                <p className="text-on-surface/90 text-lg">{item.description}</p>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-container-highest rounded-lg border border-outline/20 p-8 shadow-sm flex items-center justify-center min-h-96">
              <div className="text-center text-on-surface-variant">
                <Lock className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                <p className="text-sm">Security & Compliance Illustration</p>
              </div>
            </div>
            <div>
              <SectionHeading
                title={dictionary.home.securitySection.heading}
                description={dictionary.home.securitySection.description}
                centered={false}
                className="mb-8"
              />
              <ul className="space-y-4 mb-8">
                {dictionary.home.securitySection.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading
              title={dictionary.home.caseStudiesPreview.heading}
              description=""
              centered={false}
              className="mb-0"
            />
            <Link href={`/${locale}/case-studies`}>
              <Button variant="outline">
                {dictionary.home.caseStudiesPreview.viewAll}
              </Button>
            </Link>
          </div>

          <Grid columns={3} gap="lg">
            {dictionary.caseStudies.items.slice(0, 3).map((item, idx) => (
              <CaseStudyCard
                key={idx}
                company={item.company}
                industry={item.industry}
                metric={item.metric}
                metricLabel={item.metricLabel}
                challenge={item.challenge}
                outcomes={item.outcomes}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={dictionary.home.finalCTA.heading}
            description={dictionary.home.finalCTA.description}
            primaryCTA={{
              text: dictionary.home.finalCTA.cta,
              href: `/${locale}/contact`,
            }}
          />
        </div>
      </section>
    </>
  );
}

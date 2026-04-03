import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { SolutionCard } from '@/components/SolutionCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import { TrustBadges } from '@/components/TrustBadges';
import { Grid } from '@/components/Grid';
import Link from 'next/link';
import { Zap, Lock, Brain, Cpu, ArrowRight, BarChart3, Shield, Workflow } from 'lucide-react';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const isEnglish = locale === 'en';

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
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-white to-primary-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-teal/5 rounded-full -ml-48 -mb-48" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent-teal/10 text-accent-teal text-sm font-semibold uppercase tracking-wider">
              {dictionary.home.hero.subHeading}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {dictionary.home.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
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
          <div className="mt-16 bg-gradient-to-b from-white/50 to-transparent rounded-2xl border border-border p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-12 md:p-16 flex items-center justify-center gap-8">
              <div className="hidden md:flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border border-border">
                  <Brain className="w-12 h-12 text-accent-teal" />
                </div>
                <span className="text-sm font-medium text-foreground">AI Agents</span>
              </div>
              <Plus className="text-muted/50 hidden md:block" size={32} />
              <div className="hidden md:flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border border-border">
                  <Workflow className="w-12 h-12 text-accent-teal" />
                </div>
                <span className="text-sm font-medium text-foreground">RPA</span>
              </div>
              <Equals className="text-muted/50 hidden md:block" size={32} />
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border border-border">
                  <Zap className="w-12 h-12 text-accent-teal" />
                </div>
                <span className="text-sm font-medium text-foreground">Digital Workforce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-32 bg-white">
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
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title={dictionary.home.platformOverview.heading}
                description={dictionary.home.platformOverview.description}
                centered={false}
                className="mb-8"
              />
              <ul className="space-y-4">
                {dictionary.home.platformOverview.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent-teal rounded-full" />
                    </div>
                    <span className="text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-border p-8 shadow-sm flex items-center justify-center min-h-96">
              <div className="text-center text-muted">
                <Cpu className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
                <p className="text-sm">Platform Architecture Diagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 md:py-32 bg-white">
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-foreground to-foreground/95 text-white">
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
                className="bg-white/10 backdrop-blur rounded-lg border border-white/20 p-8 text-center hover:border-white/40 transition-colors"
              >
                <p className="text-5xl md:text-6xl font-bold text-accent-teal mb-4">
                  {item.metric}
                </p>
                <p className="text-white/90 text-lg">{item.description}</p>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-border p-8 shadow-sm flex items-center justify-center min-h-96">
              <div className="text-center text-muted">
                <Lock className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
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
                    <Lock className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 md:py-32 bg-background">
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
      <section className="py-20 md:py-32 bg-white">
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

// Simple icon components for SVG
function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function Equals(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
    </svg>
  );
}

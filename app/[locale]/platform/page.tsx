import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { CTABanner } from '@/components/CTABanner';
import { Grid } from '@/components/Grid';
import Link from 'next/link';
import {
  Brain,
  Workflow,
  BarChart3,
  Lock,
  Zap,
  Shield,
  Database,
  Settings,
  Cpu,
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
    title: isEnglish ? 'Platform - AI Kitchen' : 'Platform - AI Kitchen',
    description: isEnglish
      ? 'Explore AI Kitchen\'s digital workforce platform powered by AI and RPA'
      : 'AI Kitchen\'in AI ve RPA tarafından güçlendirilen dijital işgücü platformunu keşfedin',
  };
}

export default async function Platform({ params }: PageProps) {
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-white to-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {dictionary.platform.hero.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {dictionary.platform.hero.description}
          </p>
        </div>
      </section>

      {/* Digital Workforce */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dictionary.platform.digitalWorkforce.heading}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {dictionary.platform.digitalWorkforce.description}
              </p>
              <ul className="space-y-4">
                {dictionary.platform.digitalWorkforce.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent-teal rounded-full" />
                    </div>
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-border p-8 flex items-center justify-center min-h-96">
              <div className="text-center text-muted">
                <Brain className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
                <p className="text-sm">Digital Workers Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI + RPA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg border border-border p-8 flex items-center justify-center min-h-96 order-2 md:order-1">
              <div className="text-center text-muted">
                <Cpu className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
                <p className="text-sm">Integration Architecture</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dictionary.platform.agentic.heading}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {dictionary.platform.agentic.description}
              </p>
              <ul className="space-y-4">
                {dictionary.platform.agentic.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Orchestration */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dictionary.platform.orchestration.heading}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {dictionary.platform.orchestration.description}
              </p>
              <ul className="space-y-4">
                {dictionary.platform.orchestration.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-border p-8 flex items-center justify-center min-h-96">
              <div className="text-center text-muted">
                <Workflow className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
                <p className="text-sm">Process Orchestration Flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Prem Deployment */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg border border-border p-8 flex items-center justify-center min-h-96 order-2 md:order-1">
              <div className="text-center text-muted">
                <Lock className="w-16 h-16 mx-auto mb-4 text-accent-teal/50" />
                <p className="text-sm">On-Premises Infrastructure</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dictionary.platform.onPrem.heading}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {dictionary.platform.onPrem.description}
              </p>
              <ul className="space-y-4">
                {dictionary.platform.onPrem.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Strengths */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={dictionary.platform.architecture.heading}
            description=""
            className="mb-16"
          />

          <Grid columns={3} gap="lg">
            {dictionary.platform.architecture.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={[Database, Zap, Cpu, Settings, Lock, Shield][idx]}
              />
            ))}
          </Grid>
        </div>
      </section>

      {/* Execution */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-border p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {dictionary.platform.execution.heading}
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              {dictionary.platform.execution.description}
            </p>
            <Grid columns={2} gap="lg">
              {dictionary.platform.execution.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted">{point}</span>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Ready to explore our platform?"
            description="Schedule a demo to see AI Kitchen in action"
            primaryCTA={{
              text: 'Request Demo',
              href: `/${locale}/contact`,
            }}
          />
        </div>
      </section>
    </>
  );
}

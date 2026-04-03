import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { Button } from '@/components/Button';
import { FeatureCard } from '@/components/FeatureCard';
import { CTABanner } from '@/components/CTABanner';
import { Grid } from '@/components/Grid';
import Link from 'next/link';
import { CheckCircle, BarChart3, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: {
    locale: string;
    solution: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { solution } = params;
  const solutionMap: { [key: string]: string } = {
    financial: 'Financial Automation',
    'accounts-payable': 'Accounts Payable',
    legal: 'Legal Document Processing',
    tourism: 'Tourism & Hospitality',
  };

  const title = solutionMap[solution] || 'Solution';
  return {
    title: `${title} - AI Kitchen`,
  };
}

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  return [
    { locale: params.locale, solution: 'financial' },
    { locale: params.locale, solution: 'accounts-payable' },
    { locale: params.locale, solution: 'legal' },
    { locale: params.locale, solution: 'tourism' },
  ];
}

export default async function SolutionDetail({ params }: PageProps) {
  const locale = isValidLanguage(params.locale) ? params.locale : 'en';
  const dictionary = await getDictionary(locale);
  const { solution } = params;

  const solutionData: { [key: string]: any } = {
    financial: dictionary.solutions.financial,
    'accounts-payable': dictionary.solutions.accountsPayable,
    legal: dictionary.solutions.legal,
    tourism: dictionary.solutions.tourism,
  };

  const data = solutionData[solution];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Back Link */}
      <section className="py-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/solutions`}
            className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal-dark transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Solutions
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-white to-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {data.hero.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">{data.hero.description}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Challenge</h2>
          <p className="text-lg text-muted leading-relaxed">{data.challenges}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Solution</h2>
          <p className="text-lg text-muted leading-relaxed mb-8">{data.solution}</p>

          <div className="bg-white rounded-lg border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Capabilities</h3>
            <ul className="space-y-4">
              {data.capabilities.map((capability: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Expected Outcomes
          </h2>

          <Grid columns={3} gap="lg">
            {data.outcomes.map((outcome: string, idx: number) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-border p-8 text-center"
              >
                <BarChart3 className="w-8 h-8 text-accent-teal mx-auto mb-4" />
                <p className="text-muted">{outcome}</p>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={`${data.name} - Ready to Start?`}
            description="Schedule a demo to see how AI Kitchen can transform your operations"
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

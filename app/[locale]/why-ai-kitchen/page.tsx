import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { CTABanner } from '@/components/CTABanner';
import {
  Zap,
  Shield,
  Lock,
  Cpu,
  TrendingUp,
  DollarSign,
  CheckCircle,
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
    title: isEnglish ? 'Why AI Kitchen' : 'Neden AI Kitchen',
    description: isEnglish
      ? 'Understand why enterprises choose AI Kitchen over traditional RPA'
      : 'Kuruluşların neden geleneksel RPA\'dan AI Kitchen\'i seçtiğini anlayın',
  };
}

export default async function WhyAiKitchen({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">
            {dictionary.whyAiKitchen.hero.title}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {dictionary.whyAiKitchen.hero.description}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-surface-container-low border-b border-outline/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-on-surface-variant leading-relaxed">{dictionary.whyAiKitchen.intro}</p>
        </div>
      </section>

      {/* Why Items */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {dictionary.whyAiKitchen.items.map((item: any, idx: number) => (
              <div key={idx} className="bg-surface-container-high rounded-lg border border-outline/20 p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {[Zap, Shield, Lock, Cpu, TrendingUp, DollarSign][idx % 6] &&
                      (() => {
                        const icons = [Zap, Shield, Lock, Cpu, TrendingUp, DollarSign];
                        const Icon = icons[idx % 6];
                        return (
                          <Icon className="w-8 h-8 text-primary" />
                        );
                      })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-on-surface mb-3">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-4">{item.description}</p>
                    <p className="text-primary font-semibold">💡 {item.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-12 text-center">
            {dictionary.whyAiKitchen.comparison.heading}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-surface-container-high rounded-lg border border-outline/20">
              <thead>
                <tr className="border-b border-outline/20">
                  <th className="px-6 py-4 text-left font-semibold text-on-surface">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold text-on-surface-variant">Traditional RPA</th>
                  <th className="px-6 py-4 text-left font-semibold text-primary">
                    AI Kitchen
                  </th>
                </tr>
              </thead>
              <tbody>
                {dictionary.whyAiKitchen.comparison.rows.map((row: any, idx: number) => (
                  <tr key={idx} className="border-b border-outline/20 hover:bg-surface-container-low">
                    <td className="px-6 py-4 font-semibold text-on-surface">{row.aspect}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{row.traditional}</td>
                    <td className="px-6 py-4 text-on-surface-variant flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {row.aiKitchen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Ready to see the difference?"
            description="Experience AI Kitchen's unified AI + RPA platform"
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

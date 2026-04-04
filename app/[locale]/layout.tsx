import type { Metadata } from 'next';
import { languages, isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import '@/app/globals.css';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';

  const isEnglish = validLocale === 'en';
  const title = isEnglish
    ? 'AI Kitchen - Enterprise AI-Supported RPA Platform'
    : 'AI Kitchen - Kurumsal AI Destekli RPA Platformu';
  const description = isEnglish
    ? 'Scale your digital workforce with AI-supported RPA and Agentic AI. Enterprise-ready automation platform for intelligent process orchestration.'
    : 'AI destekli RPA ve Agentic AI ile dijital iş gücünüzü ölçeklendirin. Akıllı işlem orkestrasyon için kurumsal otomasyon platformu.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      languages: {
        'en': `https://aikitchen.com.tr/en`,
        'tr': `https://aikitchen.com.tr/tr`,
      },
    },
  };
}

export function generateStaticParams() {
  return languages.map((lang) => ({
    locale: lang,
  }));
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <html lang={locale} className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AI Kitchen',
              url: 'https://aikitchen.com.tr',
              logo: 'https://aikitchen.com.tr/logo.png',
              description: 'Enterprise AI-supported RPA platform for digital workforce automation',
              sameAs: [
                'https://twitter.com/aikitchen',
                'https://linkedin.com/company/aikitchen',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 'info@aikitchen.com.tr',
              },
            }),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
        <Navbar dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer dictionary={dictionary} locale={locale} />
        <Chatbot />
      </body>
    </html>
  );
}

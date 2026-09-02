import type { Metadata } from 'next';
import { languages, isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
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
    ? 'AI Kitchen | Business Process Automation and RPA'
    : 'AI Kitchen | İş Süreci Otomasyonu ve RPA';
  const description = isEnglish
    ? 'Automate repeatable business processes across documents, browsers, email, Office tools, ERP and CRM systems with RPA and AI-supported workflows.'
    : 'Tekrarlanan iş süreçlerini RPA ve AI destekli iş akışlarıyla; belge, tarayıcı, e-posta, Office, ERP ve CRM sistemleri arasında otomatikleştirin.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
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
  if (!isValidLanguage(locale)) {
    notFound();
  }
  const validLocale = locale;
  const dictionary = await getDictionary(validLocale);

  return (
    <html lang={validLocale} className="dark">
    <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AI Kitchen',
              url: 'https://aikitchen.com.tr',
              description: 'Business process automation services using RPA, document processing and AI-supported workflows',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 'sales@aikitchen.com.tr',
              },
            }),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
        <Navbar dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer dictionary={dictionary} locale={locale} />
      </body>
    </html>
  );
}

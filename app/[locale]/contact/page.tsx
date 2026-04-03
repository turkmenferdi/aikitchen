import type { Metadata } from 'next';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

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
    title: isEnglish ? 'Contact AI Kitchen' : 'AI Kitchen\'e Ulaşın',
    description: isEnglish
      ? 'Get in touch with AI Kitchen to discuss your automation needs'
      : 'Otomasyon ihtiyaçlarınızı tartışmak için AI Kitchen ile iletişime geçin',
  };
}

export default async function Contact({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">
            {dictionary.contact.hero.title}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {dictionary.contact.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-8">Send us a message</h2>
              <ContactForm dictionary={dictionary} />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-8">
                {dictionary.contact.info.contact}
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="bg-surface-container rounded-lg border border-outline/20 p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-2">
                        {dictionary.contact.info.emailLabel}
                      </p>
                      <a
                        href={`mailto:${dictionary.contact.info.email}`}
                        className="text-primary hover:text-secondary-fixed font-medium transition-colors"
                      >
                        {dictionary.contact.info.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-surface-container rounded-lg border border-outline/20 p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-2">
                        {dictionary.contact.info.phoneLabel}
                      </p>
                      <a
                        href={`tel:${dictionary.contact.info.phone}`}
                        className="text-primary hover:text-secondary-fixed font-medium transition-colors"
                      >
                        {dictionary.contact.info.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-surface-container rounded-lg border border-outline/20 p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-2">
                        {dictionary.contact.info.addressLabel}
                      </p>
                      <p className="text-on-surface font-medium">{dictionary.contact.info.address}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
                  <p className="text-sm font-semibold text-on-surface mb-2">Response Time</p>
                  <p className="text-on-surface-variant text-sm">{dictionary.contact.info.response}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-surface border-t border-outline/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 h-96 flex items-center justify-center">
            <div className="text-center text-on-surface-variant">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary/50" />
              <p className="text-sm">Map - Global Presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6">
            {dictionary.contact.cta.heading}
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            {dictionary.contact.cta.description}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button variant="primary" size="lg">
              {dictionary.contact.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

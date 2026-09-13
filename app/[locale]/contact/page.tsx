import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { ContactForm } from '@/components/ContactForm';
import { isContactTopic } from '@/lib/contact';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    topic?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { contact } = await getDictionary(validLocale);

  return {
    title: contact.meta.title,
    description: contact.meta.description,
    alternates: localeAlternates(validLocale, 'contact'),
  };
}

export default async function Contact({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { topic } = await searchParams;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);
  const { contact } = dictionary;
  // Pages can deep-link a topic, e.g. /tr/contact?topic=turbohub.
  const defaultTopic = isContactTopic(topic) ? topic : '';

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_0%_0%,rgba(79,70,229,0.08),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{contact.hero.eyebrow}</p>
            <h1 className="mb-6 text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">{contact.hero.title}</h1>
            <p className="mb-10 text-lg leading-relaxed text-on-surface-variant md:text-xl">{contact.hero.description}</p>

            <h2 className="mb-5 text-xl font-bold text-on-surface">{contact.steps.heading}</h2>
            <ol className="space-y-4">
              {contact.steps.items.map((step, idx) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-on-surface">{step.title}</p>
                    <p className="leading-relaxed text-on-surface-variant">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-outline-variant bg-white p-6 shadow-[0_24px_60px_-28px_rgba(15,18,51,0.3)] md:p-9">
            <h2 className="mb-6 text-2xl font-bold text-on-surface">{contact.formTitle}</h2>
            <ContactForm dictionary={dictionary} defaultTopic={defaultTopic} />
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/60 bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-on-surface">{contact.channels.heading}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {contact.channels.items.map((channel) => (
              <a
                key={channel.email}
                href={`mailto:${channel.email}`}
                className="group flex flex-col rounded-2xl border border-outline-variant bg-white p-6 transition-colors hover:border-primary/40"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} />
                </span>
                <p className="mb-1 text-lg font-bold text-on-surface">{channel.label}</p>
                <p className="mb-4 text-on-surface-variant">{channel.description}</p>
                <p className="mt-auto break-all font-semibold text-primary group-hover:underline">{channel.email}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-on-surface-variant">{contact.channels.response}</p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  Bot,
  CalendarClock,
  Check,
  FileText,
  FileSearch,
  ListChecks,
  Lock,
  MonitorSmartphone,
  ScrollText,
  ShieldCheck,
  UserCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { isValidLanguage } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { buttonClass } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABanner } from '@/components/CTABanner';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const { platform } = await getDictionary(validLocale);

  return {
    title: platform.meta.title,
    description: platform.meta.description,
    alternates: localeAlternates(validLocale, 'platform'),
  };
}

const capabilityIcons = [FileText, MonitorSmartphone, Sparkles, UserCheck, CalendarClock, ScrollText];
const controlIcons = [Lock, ListChecks, UserCheck, ShieldCheck];

// Turkish-only landing pages have no English equivalent, so they are listed only on the Turkish page.
const turkishLandingPages = [
  { title: 'Robotik Süreç Otomasyonu', description: 'Tarayıcı, Office, e-posta ve kurumsal sistemlerdeki tekrarlanan görevler.', href: '/tr/robotik-surec-otomasyonu' },
  { title: 'Belge Otomasyonu', description: 'Belge tanıma, veri çıkarma, doğrulama ve sistem kaydı.', href: '/tr/belge-otomasyonu' },
  { title: 'SAP Süreç Otomasyonu', description: 'Kontrol, mutabakat, zamanlanmış işlem ve raporlama senaryoları.', href: '/tr/sap-otomasyonu' },
];

export default async function Platform({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLanguage(locale) ? locale : 'en';
  const dictionary = await getDictionary(validLocale);
  const { platform, solutions } = dictionary;
  const d = platform.diagram;

  const useCases = [
    { title: solutions.financial.name, description: solutions.financial.hero.description, href: `/${validLocale}/solutions/financial` },
    { title: solutions.accountsPayable.name, description: solutions.accountsPayable.hero.description, href: `/${validLocale}/solutions/accounts-payable` },
    { title: solutions.legal.name, description: solutions.legal.hero.description, href: `/${validLocale}/solutions/legal` },
    { title: solutions.tourism.name, description: solutions.tourism.hero.description, href: `/${validLocale}/solutions/tourism` },
    ...(validLocale === 'tr' ? turkishLandingPages : []),
  ];

  return (
    <>
      {/* Hero + data flow diagram */}
      <section className="relative overflow-hidden border-b border-outline-variant/60 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.08),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary">
              <Bot size={16} />
              {platform.hero.eyebrow}
            </p>
            <h1 className="mb-6 text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-[3.25rem]">
              {platform.hero.title}
            </h1>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{platform.hero.description}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={`/${validLocale}/contact`} className={buttonClass('primary', 'lg')}>
                {platform.hero.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <a href="#capabilities" className={buttonClass('secondary', 'lg')}>
                {platform.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl items-center gap-4 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr]">
            <FlowColumn label={d.inputsLabel} items={d.inputs} />
            <FlowArrow />
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-3xl bg-ink p-6 text-white shadow-[0_24px_60px_-24px_rgba(15,18,51,0.6)]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Bot size={20} />
                  </span>
                  <p className="font-headline text-lg font-bold">{d.robotLabel}</p>
                </div>
                <ol className="space-y-2.5">
                  {d.robotSteps.map((step, idx) => (
                    <li key={step} className="flex items-center gap-3 rounded-xl bg-white/[0.07] px-4 py-3 text-[15px]">
                      <span className="font-headline text-sm font-bold text-primary-fixed">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3">
                <UserCheck size={20} className="flex-shrink-0 text-primary" />
                <p className="text-sm text-on-surface">
                  <span className="font-semibold">{d.humanLabel}:</span> {d.human}
                </p>
              </div>
            </div>
            <FlowArrow />
            <FlowColumn label={d.outputsLabel} items={d.outputs} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={platform.capabilities.eyebrow}
            title={platform.capabilities.heading}
            description={platform.capabilities.description}
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platform.capabilities.items.map((item, idx) => {
              const Icon = capabilityIcons[idx % capabilityIcons.length];
              return (
                <article key={item.title} className="rounded-2xl border border-outline-variant bg-white p-7">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional RPA vs AI Kitchen */}
      <section className="border-y border-outline-variant/60 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={platform.comparison.eyebrow} title={platform.comparison.heading} className="mb-12" />
          <div className="overflow-x-auto rounded-2xl border border-outline-variant">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-on-surface-variant">{platform.comparison.head[0]}</th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-on-surface-variant">{platform.comparison.head[1]}</th>
                  <th scope="col" className="bg-primary/5 px-6 py-4 text-sm font-semibold text-primary">{platform.comparison.head[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {platform.comparison.rows.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row" className="px-6 py-5 align-top font-semibold text-on-surface">{row.aspect}</th>
                    <td className="px-6 py-5 align-top text-on-surface-variant">
                      <span className="flex gap-2.5">
                        <X size={18} className="mt-0.5 flex-shrink-0 text-outline" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="bg-primary/5 px-6 py-5 align-top font-medium text-on-surface">
                      <span className="flex gap-2.5">
                        <Check size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                        {row.aiKitchen}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Control and security */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <SectionHeading
            eyebrow={platform.control.eyebrow}
            title={platform.control.heading}
            description={platform.control.description}
            centered={false}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {platform.control.items.map((item, idx) => {
              const Icon = controlIcons[idx % controlIcons.length];
              return (
                <article key={item.title} className="rounded-2xl border border-outline-variant bg-white p-6">
                  <Icon size={22} className="mb-4 text-primary" />
                  <h3 className="mb-2 text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t border-outline-variant/60 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={platform.useCases.eyebrow}
            title={platform.useCases.heading}
            description={platform.useCases.description}
            className="mb-12"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-outline-variant bg-surface p-6 transition-colors hover:border-primary/50 hover:bg-white"
              >
                <FileSearch size={20} className="mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-on-surface">{item.title}</h3>
                <p className="mb-5 leading-relaxed text-on-surface-variant">{item.description}</p>
                <ArrowRight size={18} className="mt-auto text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading={platform.cta.heading}
            description={platform.cta.description}
            primaryCTA={{ text: platform.cta.primary, href: `/${validLocale}/contact` }}
            secondaryCTA={{ text: platform.cta.secondary, href: `/${validLocale}/services` }}
          />
        </div>
      </section>
    </>
  );
}

function FlowColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-outline-variant bg-surface p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{label}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="rounded-xl border border-outline-variant bg-white px-4 py-3 text-[15px] font-medium text-on-surface">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden className="flex items-center justify-center text-primary">
      <ArrowRight size={24} className="hidden lg:block" />
      <ArrowDown size={24} className="lg:hidden" />
    </div>
  );
}

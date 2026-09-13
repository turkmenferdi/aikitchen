import type { en } from '@/i18n/en';

type SolutionKey = 'financial' | 'accountsPayable' | 'legal' | 'tourism';

/** URL slug ↔ dictionary key for the solution detail pages. */
export const SOLUTIONS: readonly { slug: string; key: SolutionKey }[] = [
  { slug: 'financial', key: 'financial' },
  { slug: 'accounts-payable', key: 'accountsPayable' },
  { slug: 'legal', key: 'legal' },
  { slug: 'tourism', key: 'tourism' },
];

export function getSolution(dictionary: typeof en, slug: string) {
  const entry = SOLUTIONS.find((solution) => solution.slug === slug);
  return entry ? { ...entry, data: dictionary.solutions[entry.key] } : null;
}

// Turkish-only landing pages have no English equivalent, so they are listed only on Turkish pages.
export const TURKISH_TOPIC_PAGES = [
  { title: 'Robotik Süreç Otomasyonu', description: 'Tarayıcı, Office, e-posta ve kurumsal sistemlerdeki tekrarlanan görevler.', href: '/tr/robotik-surec-otomasyonu' },
  { title: 'Belge Otomasyonu', description: 'Belge tanıma, veri çıkarma, doğrulama ve sistem kaydı.', href: '/tr/belge-otomasyonu' },
  { title: 'SAP Süreç Otomasyonu', description: 'Kontrol, mutabakat, zamanlanmış işlem ve raporlama senaryoları.', href: '/tr/sap-otomasyonu' },
] as const;

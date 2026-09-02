import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const corpus = [
  'app/[locale]/layout.tsx',
  'app/[locale]/page.tsx',
  'app/[locale]/contact/page.tsx',
  'app/[locale]/services/page.tsx',
  'components/Footer.tsx',
  'components/TrustBadges.tsx',
  'i18n/en.ts',
  'i18n/tr.ts',
].map(read).join('\n');

const forbidden = [
  '+90 (212) 000 00 00',
  'SOC2, HIPAA, GDPR ready',
  'Deployed across industries',
  'bank portals',
  'banka ekranları',
  'twitter.com/aikitchen',
  'linkedin.com/company/aikitchen',
  'aikitchen.com.tr/logo.png',
  'approximately 6 months',
  'ortalama 6 ay',
];

for (const claim of forbidden) {
  assert.equal(corpus.includes(claim), false, `Unsupported or placeholder claim remains: ${claim}`);
}

assert.equal(corpus.includes('href="#"'), false, 'Placeholder hash link remains');
assert.match(read('i18n/tr.ts'), /Gerçek müşteri sonucu veya referansı olarak sunulmayan/);
assert.match(read('i18n/en.ts'), /not published customer references or measured business results/);
assert.match(read('app/[locale]/page.tsx'), /localeAlternates\(validLocale\)/);

const futureRoutes = [
  'robotik-surec-otomasyonu',
  'is-sureci-otomasyonu',
  'sap-otomasyonu',
  'belge-otomasyonu',
  'finans-muhasebe-otomasyonu',
  'insan-kaynaklari-otomasyonu',
  'satin-alma-otomasyonu',
  'lojistik-otomasyonu',
  'vaka-calismalari',
];

for (const route of futureRoutes) {
  assert.equal(
    existsSync(join(root, 'app/[locale]', route)),
    false,
    `Phase 1 must not create future route: ${route}`,
  );
}

console.log('SEO foundation checks passed.');

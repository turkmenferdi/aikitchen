# AI Kitchen Phase 1 SEO Audit

Date: 2026-09-02  
Scope: audit, claim cleanup, and SEO foundation only  
Production site: `https://aikitchen.com.tr`

## Safety snapshot

The pre-change site is recoverable from both:

- branch `backup/pre-phase1-seo-20260902`
- tag `pre-phase1-seo-20260902`
- source commit `d2c064d`

No existing public URL was removed or renamed in Phase 1.

## Source-of-truth boundary

No customer evidence pack, certification record, integration inventory, or measured-results report was found in the repository. Phase 1 therefore uses only the positioning supplied by the owner: RPA, repeatable business-process automation, browser and Office/email/PDF operations, ERP/CRM interaction, data processing and transfer, document recognition, orchestration, and explicitly supported AI/ML or OCR capabilities.

The site must not publish unverified claims about named Turkish accounting products, banks, e-government services, legal compliance, certifications, customers, or numerical business results.

## Existing public-page inventory

All 24 sitemap URLs returned HTTP 200 during the production audit. Each page had one server-rendered H1, a locale-specific canonical, hreflang entries, and no `noindex` directive. The main navigation is rendered as links, not JavaScript-only controls.

| Page | URL pattern | Language | Current SEO title | Meta-description assessment | H1 | Indexable | Canonical | Navigation | Purpose |
|---|---|---|---|---|---|---|---|---|---|
| Home | `/en` | EN | Business Process Automation and RPA \| AI Kitchen | Updated to concrete process automation | RPA and Automation for Business Processes | Yes | Self | Main nav | Primary B2B positioning |
| Home | `/tr` | TR | İş Süreci Otomasyonu ve RPA \| AI Kitchen | Updated to concrete process automation | Kurumsal İş Süreçleri İçin RPA ve Otomasyon Çözümleri | Yes | Self | Main nav | Turkish B2B landing page |
| About | `/{locale}/about` | EN/TR | About AI Kitchen / AI Kitchen Hakkında | Valid but broad | About AI Kitchen / AI Kitchen Hakkında | Yes | Self | Main nav | Company approach and mission |
| Platform | `/{locale}/platform` | EN/TR | Platform - AI Kitchen | Generic; should be refined when product evidence is approved | Platform | Yes | Self | Main nav | Automation capabilities and architecture |
| Solutions | `/{locale}/solutions` | EN/TR | Solutions - AI Kitchen / Çözümler - AI Kitchen | Valid but broad | Solutions / Çözümler | Yes | Self | Main nav | Existing solution index |
| Finance solution | `/{locale}/solutions/financial` | EN/TR | Financial Automation / Finans Operasyon Otomasyonu - AI Kitchen | Specific and relevant | Intelligent Automation for Finance Operations / Finans Operasyonlarında Akıllı Otomasyon | Yes | Self | Solutions index | Finance workflow automation |
| Payables solution | `/{locale}/solutions/accounts-payable` | EN/TR | Accounts Payable Automation / Fatura ve Borç Hesapları Otomasyonu - AI Kitchen | Specific and relevant | Automate Invoice Processing and Approval Flows / Fatura İşleme ve Onay Akışlarını Otomatikleştirin | Yes | Self | Solutions index | Invoice and approval automation |
| Legal solution | `/{locale}/solutions/legal` | EN/TR | Legal Document Automation / Belge ve Sözleşme Otomasyonu - AI Kitchen | Specific and relevant | Accelerate Contract and Document Operations / Sözleşme ve Belge Operasyonlarını Hızlandırın | Yes | Self | Solutions index | Document and contract workflows |
| Tourism solution | `/{locale}/solutions/tourism` | EN/TR | Tourism Operations Automation / Turizm Operasyon Otomasyonu - AI Kitchen | Specific but outside the initial SEO wedge | Coordinate Reservations... / Rezervasyon ve Müşteri Operasyonlarını... | Yes | Self | Solutions index | Existing tourism workflow page |
| Services | `/{locale}/services` | EN/TR | Services - AI Kitchen / Hizmetler - AI Kitchen | Generic; wording corrected from “process” mistranslation | Services / Hizmetler | Yes | Self | Main nav | Discovery, pilot, implementation, support |
| Why AI Kitchen | `/{locale}/why-ai-kitchen` | EN/TR | Why AI Kitchen / Neden AI Kitchen | Updated to avoid unverified customer adoption claim | Why AI Kitchen / Neden AI Kitchen | Yes | Self | Main nav | Differentiation and delivery approach |
| Case studies | `/{locale}/case-studies` | EN/TR | Case Studies / Vaka Çalışmaları - AI Kitchen | Explicitly identifies illustrative scenarios | Case Studies / Vaka Çalışmaları | Yes | Self | Main nav | Hypothetical use-case examples, not references |
| Contact | `/{locale}/contact` | EN/TR | Contact AI Kitchen / AI Kitchen'e Ulaşın | Specific and valid | Get in Touch / İletişime Geçin | Yes | Self | Main nav and CTA | Lead form and verified email contact |

`{locale}` means both `/en` and `/tr`. Solution pages are linked through the Solutions page rather than the top-level navigation, which is appropriate for the current structure.

## Technical findings

| Check | Result | Phase 1 action |
|---|---|---|
| Duplicate pages | No indexable duplicate locale routes found | Preserve locale canonicals |
| Missing H1 | None across the 24 sitemap URLs | No change |
| Duplicate titles | Platform uses the same wording in both languages; no cross-URL duplicate within one language | Flagged for later content refinement |
| Weak titles | About, Platform, Solutions, Services remain broad | Home and high-risk copy improved; deeper rewrite deferred until source material exists |
| Indexability | All sitemap pages indexable; unknown route returns 404 | Preserve |
| Broken internal links | Footer privacy and terms pointed to `#` | Replaced with real contact/email destinations; no fake legal pages created |
| JavaScript-only navigation | None found in primary navigation | Preserve server-rendered links |
| Redirects | `/` and unprefixed routes redirect once to `/en`; trailing slash normalizes once | Acceptable; no chains found |
| 404 handling | Unknown localized URL returns 404 | Working |
| Structured-data logo | `/logo.png` returned 404 | Removed invalid logo property until a real asset is supplied |
| Organization social links | Repository contained unverified X and LinkedIn URLs | Removed from structured data pending owner confirmation |
| Placeholder contact facts | Public phone and global map/address presentation were not supported | Removed from public contact page |
| Sitemap freshness | Every build reports every page as newly modified | Keep under review; replace with real content dates in a later technical phase |

## Unsupported-claim cleanup

Phase 1 removed or neutralized:

- named “bank portal/screen” capability where no implemented integration was documented;
- placeholder phone number and unsupported global-presence presentation;
- unverified social profiles and a nonexistent organization-logo URL;
- “proven” methodology and fixed implementation timelines;
- certification/readiness and deployment-history claims in the reusable trust component;
- absolute or exaggerated outcome language;
- illustrative scenarios written in past tense as though they were completed customer projects.

The existing scenarios now identify themselves as hypothetical and describe outcomes to measure, not results already achieved.

## Proposed Turkish SEO architecture, not built in Phase 1

| Proposed URL | Search intent and primary topic | Proposed SEO title | Proposed H1 | Proposed meta description | Evidence/case support required | Internal links |
|---|---|---|---|---|---|---|
| `/tr/` | Commercial investigation; enterprise process automation | İş Süreci Otomasyonu ve RPA Çözümleri \| AI Kitchen | Kurumsal İş Süreçleri İçin RPA ve Otomasyon | Belge, veri ve çok sistemli operasyonları RPA ve AI destekli iş akışlarıyla otomatikleştirin. | Approved overview or verified customer story | All pillar pages, contact, case studies |
| `/tr/robotik-surec-otomasyonu/` | Learn and evaluate RPA | Robotik Süreç Otomasyonu (RPA) Çözümleri \| AI Kitchen | Robotik Süreç Otomasyonu ile Tekrarlanan İşleri Otomatikleştirin | Tarayıcı, masaüstü, Office, e-posta ve kurumsal sistemlerde tekrarlanan görevler için RPA çözümlerini inceleyin. | Verified cross-system RPA implementation | Business process, SAP, document, case studies |
| `/tr/is-sureci-otomasyonu/` | Evaluate end-to-end workflow automation | İş Süreci Otomasyonu Çözümleri \| AI Kitchen | Uçtan Uca İş Süreci Otomasyonu | İnsan onayı, iş kuralları, belge ve veri adımlarını tek bir otomasyon akışında yönetin. | Verified orchestration example | RPA, document, finance, HR, procurement |
| `/tr/sap-otomasyonu/` | Evaluate SAP task automation | SAP Otomasyonu ve RPA Çözümleri \| AI Kitchen | SAP Süreçlerinde Tekrarlanan İşleri Otomatikleştirin | SAP ile çevresindeki dosya, e-posta ve web adımlarını kapsayan otomasyon yaklaşımını inceleyin. | Must have documented SAP work before publication | RPA, finance, procurement, logistics |
| `/tr/belge-otomasyonu/` | Evaluate OCR/document processing | Belge Otomasyonu ve Veri Çıkarma \| AI Kitchen | Belge Okuma, Veri Çıkarma ve Onay Otomasyonu | PDF, e-posta eki ve formlardan veri çıkarma, doğrulama ve yönlendirme süreçlerini otomatikleştirin. | Verified document-processing scenario | Payables, finance, HR, procurement |
| `/tr/finans-muhasebe-otomasyonu/` | Commercial; finance automation | Finans ve Muhasebe Otomasyonu \| AI Kitchen | Finans ve Muhasebe Süreçlerini Otomatikleştirin | Mutabakat, raporlama, veri toplama, kontrol ve onay iş akışları için RPA ve belge otomasyonunu inceleyin. | Verified finance case with approved metrics | Document, SAP, procurement, cases |
| `/tr/insan-kaynaklari-otomasyonu/` | Commercial; HR operations | İnsan Kaynakları Süreç Otomasyonu \| AI Kitchen | İnsan Kaynaklarında Tekrarlanan Süreçleri Otomatikleştirin | Belge, veri girişi, kontrol, bildirim ve onay adımlarını otomasyonla standartlaştırın. | Future verified HR case | Document, process automation, cases |
| `/tr/satin-alma-otomasyonu/` | Commercial; procurement workflows | Satın Alma Süreç Otomasyonu \| AI Kitchen | Satın Alma ve Onay Süreçlerini Otomatikleştirin | Talep, belge, karşılaştırma ve onay adımlarını izlenebilir iş akışlarıyla yönetin. | Verified procurement or payables case | Document, finance, SAP, logistics |
| `/tr/lojistik-otomasyonu/` | Commercial; logistics/back office | Lojistik Süreç Otomasyonu \| AI Kitchen | Lojistik ve Arka Ofis Süreçlerini Otomatikleştirin | Veri aktarımı, belge kontrolü, durum güncelleme ve bildirim süreçleri için otomasyon seçeneklerini inceleyin. | Future verified logistics case | Process automation, document, SAP, cases |
| `/tr/vaka-calismalari/` | Proof and comparison | İş Süreci Otomasyonu Vaka Çalışmaları \| AI Kitchen | Otomasyon Vaka Çalışmaları | Onaylanmış müşteri vakalarını, başlangıç durumunu, uygulanan akışı ve ölçülen sonuçları inceleyin. | Only named/anonymous cases approved by owner with evidence | Every relevant solution page and contact |

## Language structure

- Keep Turkish and English content in separate, indexable folders: `/tr/...` and `/en/...`.
- Keep self-referencing canonicals and reciprocal `hreflang` values for `tr`, `en`, and `x-default`.
- Keep `/` as a single redirect to `/en` until the owner chooses Turkish as the commercial default.
- Do not mix Turkish and English copy on one indexed page.
- When future Turkish SEO URLs are approved, create equivalent English URLs only when genuine English content exists. Do not publish machine-filled thin translations.
- Slug migration from the current English route names to the proposed Turkish architecture requires a separate mapping, 301 redirects, sitemap update, internal-link update, and Search Console monitoring. It is intentionally not part of Phase 1.

## Owner-review queue

Before stronger claims or new pages are published, obtain:

1. approved company/product description and deployment model;
2. verified integration inventory, including whether SAP or any named Turkish system is implemented;
3. approved customer references or anonymized case-study evidence;
4. measurement methodology for any time, error, capacity, or ROI result;
5. verified certifications/compliance statements;
6. official phone, address, logo, and social-profile URLs;
7. approved privacy notice and terms text before creating legal pages.

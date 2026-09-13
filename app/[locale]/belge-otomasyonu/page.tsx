import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLanguage } from '@/i18n/config';
import { turkishOnlyAlternates } from '@/lib/seo';
import { FeatureGrid, ProcessFlow, RelatedLinks, SeoCTA, SeoHero, SeoSection, TextColumns } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Belge Otomasyonu ve Veri Çıkarma | AI Kitchen',
  description: 'PDF, e-posta ekleri ve diğer belgelerden veri çıkarma, doğrulama ve muhasebe sistemlerine aktarma süreçlerini otomatikleştirin.',
  alternates: turkishOnlyAlternates('belge-otomasyonu'),
};

const candidates = [
  ['Muhasebe belgeleri', 'Belgenin alınması, sınıflandırılması, alanların çıkarılması, kontrollerin yapılması ve muhasebe kaydının hazırlanması.'],
  ['E-posta ekleri', 'Belirli posta kutularına gelen belgelerin alınması, ilgili süreç veya sorumlu kişiyle eşleştirilmesi.'],
  ['Form ve başvuru belgeleri', 'Form alanlarının okunması, zorunlu bilgilerin kontrol edilmesi ve eksik kayıtların işaretlenmesi.'],
  ['Sözleşme ve ekleri', 'Belge türünün belirlenmesi, gerekli alanların çıkarılması, ön kontrol ve onay akışına yönlendirme.'],
  ['Tarama ve fotoğraflar', 'Uygun kaliteye sahip tarama veya fotoğraflardan OCR ile metin ve alan çıkarma.'],
  ['Arşiv ve kayıt işlemleri', 'İşlenen belgenin adlandırılması, uygun konuma kaydedilmesi ve işlem sonucunun kayıt altına alınması.'],
] as const;

export default async function DocumentAutomationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLanguage(locale) || locale !== 'tr') notFound();
  return <>
    <SeoHero eyebrow="Belge Otomasyonu" title="Belge Okuma, Veri Çıkarma ve İşleme Süreçlerini Otomatikleştirin" description="AI Kitchen; tarama, fotoğraf, PDF ve e-posta eklerinden gelen belgelerin tanınması, gerekli verilerin çıkarılması, doğrulanması ve muhasebe veya ERP sistemine aktarılması için uçtan uca otomasyon akışları kurar." />
    <SeoSection title="Belge otomasyonu nedir?" intro="Belge otomasyonu, bir belgenin sisteme ulaştığı andan kaydedilip raporlandığı ana kadar yapılan tekrarlı okuma, veri girişi, kontrol ve yönlendirme işlemlerini standartlaştırır."><TextColumns><div><p>Manuel belge işlemede çalışanlar e-posta, paylaşılan klasör, tarama veya fotoğraf yoluyla gelen kayıtları açar; gerekli alanları bulur, hedef sisteme girer ve doğruluk kontrolü yapar. Yüksek hacimde bu iş önemli çalışan eforu gerektirir ve manuel veri girişi hatası olasılığı oluşturur.</p><p className="mt-5">Otomasyon, belgeyi kaynağından alır ve işleme hazırlar. OCR veya belge tanıma, yalnızca belge biçimi ve içerik yapısı için uygun olduğunda kullanılır.</p></div><div><p>Çıkarılan alanlar tek başına doğru kabul edilmez. Veri tipi, zorunlu alan, matematiksel tutarlılık, tekrar kayıt ve mevcut muhasebe verisi gibi kontroller uygulanabilir. Belirsiz veya eksik kayıtlar insan incelemesine yönlendirilir.</p><p className="mt-5">Doğrulanan bilgi muhasebe ya da ERP sistemine aktarılabilir, belge uygun konuma kaydedilebilir ve işlem sonucu izlenebilir bir kayıtla tamamlanabilir.</p></div></TextColumns></SeoSection>
    <SeoSection title="Belge işleme akışı nasıl çalışır?" muted><ProcessFlow steps={['Belge e-posta, paylaşılan kaynak, tarama veya fotoğraf olarak alınır', 'Belge türü ve içerik yapısı tanınır', 'Gerekli alanlar ve bilgiler çıkarılır', 'Veriler doğrulanır ve matematiksel kontroller uygulanır', 'Bilgi muhasebe veya ERP kaydıyla karşılaştırılır', 'Onaylanan kayıt hedef sisteme aktarılır', 'Belge ve işlem sonucu kayıt altına alınır']} /></SeoSection>
    <SeoSection title="Hangi belge süreçleri otomatikleştirilebilir?" intro="Uygunluk; belge kalitesi, çeşitlilik, işlem hacmi, doğrulama kuralları ve hedef sistem erişimine göre değerlendirilir."><FeatureGrid items={candidates} /></SeoSection>
    <SeoSection title="Belgelenmiş belge işleme ve muhasebe vakası" muted><div className="rounded-3xl border border-primary/30 bg-surface-container p-7 md:p-10"><p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Anonimleştirilmiş gerçek otomasyon vakası</p><h3 className="mb-5 text-2xl font-bold">Belge İşleme ve Muhasebe Otomasyonu</h3><div className="grid gap-8 md:grid-cols-2"><div className="space-y-4 leading-relaxed text-on-surface-variant"><p>Başlangıçta muhasebe ve birincil belgelerin kaydı ile işlenmesi önemli çalışan eforu gerektiriyor ve manuel veri girişi hatası olasılığı oluşturuyordu.</p><p>Otomatik akış belge taraması veya fotoğrafını; e-posta ya da paylaşılan kaynaklardan alabiliyor, bilgiyi tanıyor, ilgili alanları çıkarıyor, doğruluyor ve muhasebe sistemi verisiyle karşılaştırıyordu. Gerekli matematiksel kontrollerin ardından belge kaydediliyor ve muhasebe sisteminde ilgili bilgi oluşturuluyordu.</p></div><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1"><div className="rounded-2xl bg-primary/10 p-6"><p className="text-4xl font-bold text-primary">3–20x</p><p className="mt-2">Belge kayıt işinde daha düşük iş gücü gereksinimi</p></div><div className="rounded-2xl bg-primary/10 p-6"><p className="text-4xl font-bold text-primary">2–3x</p><p className="mt-2">Gelen belge işleme hızında artış</p></div></div></div><p className="mt-7 text-sm text-on-surface-variant">Bu sonuçlar yalnızca belgelenmiş vaka çalışmasına aittir. Her uygulamanın sonucu belge yapısına, hacme, sistemlere ve kontrol gereksinimlerine göre değişebilir.</p></div></SeoSection>
    <SeoSection title="Kontrolsüz otomasyon yerine doğrulanabilir akış"><TextColumns><div><h3 className="mb-3 text-xl font-bold text-on-surface">İnsan incelemesi gereken kayıtlar</h3><p>Belge okunamıyorsa, zorunlu bir alan eksikse veya kayıt mevcut sistem bilgisiyle uyuşmuyorsa işlem otomatik olarak tamamlanmak zorunda değildir. İstisna kaydı oluşturulup sorumlu çalışana yönlendirilebilir.</p></div><div><h3 className="mb-3 text-xl font-bold text-on-surface">İşlem kaydı ve raporlama</h3><p>Belgenin nereden geldiği, hangi kontrollerden geçtiği, hangi verinin hedef sisteme aktarıldığı ve hangi kayıtların incelemeye ayrıldığı raporlanabilir.</p></div></TextColumns></SeoSection>
    <SeoSection title="İlgili otomasyon çözümleri" muted><RelatedLinks links={[["Finans Operasyonları", "/tr/solutions/financial"], ["Robotik Süreç Otomasyonu", "/tr/robotik-surec-otomasyonu"], ["SAP Süreç Otomasyonu", "/tr/sap-otomasyonu"], ["Gerçek Vaka Çalışmaları", "/tr/case-studies"]]} /></SeoSection>
    <SeoCTA heading="Belge İşleme Sürecinizi Birlikte İnceleyelim" />
  </>;
}

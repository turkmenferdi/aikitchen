import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLanguage } from '@/i18n/config';
import { turkishOnlyAlternates } from '@/lib/seo';
import { FeatureGrid, ProcessFlow, RelatedLinks, SeoCTA, SeoHero, SeoSection, TextColumns } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Robotik Süreç Otomasyonu (RPA) Çözümleri | AI Kitchen',
  description: 'Tarayıcı, Office, e-posta, belge ve kurumsal sistemlerde tekrarlanan görevleri RPA ile otomatikleştirin. AI Kitchen Robotik Süreç Otomasyonu çözümlerini inceleyin.',
  alternates: turkishOnlyAlternates('robotik-surec-otomasyonu'),
};

const suitable = [
  ['Tekrarlanan ve kural bazlı işler', 'Aynı ekranlarda, aynı kurallarla ve benzer veri yapılarıyla düzenli olarak yapılan işler RPA için güçlü adaylardır.'],
  ['Yüksek işlem hacmi', 'Çok sayıda kayıt, dosya, e-posta veya formun benzer adımlardan geçtiği süreçler otomasyonla ölçeklenebilir.'],
  ['Sistemler arası veri aktarımı', 'Bir uygulamadan alınan verinin başka bir uygulamaya girildiği veya dosyalar arasında kopyalandığı süreçler otomatikleştirilebilir.'],
  ['Kontrol ve karşılaştırma', 'Tanımlı kurallara göre kayıt eşleştirme, eksik alan bulma, tutarsızlık işaretleme ve raporlama yapılabilir.'],
] as const;

const operations = [
  ['Tarayıcı otomasyonu', 'Web uygulamalarında oturum açma, arama, form doldurma, kayıt güncelleme, veri indirme ve sonuç yükleme adımları.'],
  ['Office işlemleri', 'Excel verisini okuma ve dönüştürme, dosya birleştirme, Word şablonlarını doldurma ve rapor çıktısı üretme.'],
  ['E-posta işlemleri', 'Gelen kutusunu izleme, ekleri alma, mesajları sınıflandırma, kurallara göre yönlendirme ve bildirim gönderme.'],
  ['PDF ve belge işlemleri', 'Belgeyi tanıma, gerekli alanları çıkarma, veriyi doğrulama ve sonraki iş adımına aktarma.'],
  ['ERP ve CRM işlemleri', 'İzin verilen ekranlar veya API bağlantıları üzerinden kayıt okuma, güncelleme, kontrol etme ve sonuç işleme.'],
  ['Veri operasyonları', 'CSV, Excel, veri tabanı çıktısı ve kurumsal sistem kayıtlarını toplama, eşleştirme, dönüştürme ve aktarma.'],
] as const;

export default async function RpaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLanguage(locale) || locale !== 'tr') notFound();
  return <>
    <SeoHero eyebrow="Robotik Süreç Otomasyonu" title="Robotik Süreç Otomasyonu ile Tekrarlanan İşleri Otomatikleştirin" description="RPA, çalışanların bilgisayar üzerinde tekrar tekrar yaptığı tanımlı görevleri yazılım robotlarıyla yürütür. AI Kitchen, belge, tarayıcı, e-posta, Office dosyaları ve kurumsal uygulamalar arasında çalışan süreçleri iş kuralları ve kontrol adımlarıyla birlikte otomatikleştirir." />
    <SeoSection title="RPA nedir?" intro="Robotik Süreç Otomasyonu, mevcut uygulamaları tamamen değiştirmek yerine kullanıcıların yaptığı dijital adımları tanımlı kurallar içinde otomatik olarak çalıştırır."><TextColumns><div><p>Bir RPA robotu ekrandaki alanları okuyabilir, dosya açabilir, veri kopyalayabilir, form doldurabilir, bir iş kuralını uygulayabilir ve sonucu başka bir sisteme kaydedebilir. Böylece çalışanlar yüksek hacimli tekrar işleri yerine karar ve istisna gerektiren konulara odaklanabilir.</p><p className="mt-5">RPA yalnızca tıklama otomasyonu değildir. Sağlıklı bir süreçte erişim yetkileri, hata yönetimi, insan onayı, işlem kayıtları ve yeniden çalışma kuralları da tasarlanır.</p></div><div><p>AI Kitchen yaklaşımı, tarayıcı ve masaüstü adımlarını belge işleme, veri doğrulama, e-posta ve ERP/CRM etkileşimiyle aynı akışta birleştirir. AI veya makine öğrenmesi yalnızca sınıflandırma, içerik anlama ya da istisna tespiti gibi gerçekten gerekli adımlarda kullanılır.</p><p className="mt-5">Otomasyon kapsamı süreç keşfi sırasında mevcut sistemler, veri kaynakları, işlem hacmi, iş kuralları ve kontrol gereksinimleri incelenerek belirlenir.</p></div></TextColumns></SeoSection>
    <SeoSection title="Hangi süreçler RPA için uygundur?" muted><FeatureGrid items={suitable} /></SeoSection>
    <SeoSection title="AI Kitchen hangi işlemleri otomatikleştirebilir?" intro="Tek bir robot yerine, işin başından sonucuna kadar farklı araçları kullanan kontrollü bir iş akışı tasarlanabilir."><FeatureGrid items={operations} /></SeoSection>
    <SeoSection title="Örnek RPA iş akışı" intro="Aşağıdaki akış, e-postayla gelen bir belgenin kontrol edilip kurumsal sisteme aktarılmasını gösteren genel bir örnektir." muted><ProcessFlow steps={['E-posta ve ek alınır', 'Belge ve kayıt türü belirlenir', 'Gerekli alanlar çıkarılır', 'Veriler iş kurallarına göre doğrulanır', 'ERP veya CRM kaydı kontrol edilir', 'Sonuç kaydedilir ve sorumlu kişiye raporlanır']} /></SeoSection>
    <SeoSection title="Belgelenmiş vakalarla ilişkisi"><TextColumns><div><h3 className="mb-3 text-xl font-bold text-on-surface">KPI prim hesaplama otomasyonu</h3><p>Belgelenmiş insan kaynakları vakasında farklı kurumsal sistemlerden veri toplama ve Excel tabanlı işleme adımları otomatikleştirildi. Sürece dahil olan çalışan sayısı 8’den 1’e, işlem süresi yaklaşık 20 günden 3 güne indi.</p></div><div><h3 className="mb-3 text-xl font-bold text-on-surface">Belge işleme ve muhasebe otomasyonu</h3><p>Belgelenmiş senaryoda belge alma, tanıma, veri çıkarma, doğrulama ve muhasebe sistemine kayıt akışı otomatikleştirildi. Sonuçlar yalnızca bu vakaya aittir ve vaka sayfasında bağlamıyla sunulur.</p></div></TextColumns></SeoSection>
    <SeoSection title="İlgili otomasyon çözümleri" muted><RelatedLinks links={[["Belge Otomasyonu", "/tr/belge-otomasyonu"], ["SAP Süreç Otomasyonu", "/tr/sap-otomasyonu"], ["Finans Operasyonları", "/tr/solutions/financial"], ["Gerçek Vaka Çalışmaları", "/tr/case-studies"]]} /></SeoSection>
    <SeoCTA heading="Tekrarlanan İşlerinizi RPA ile Nasıl Otomatikleştirebileceğimizi İnceleyelim" />
  </>;
}

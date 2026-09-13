import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLanguage } from '@/i18n/config';
import { turkishOnlyAlternates } from '@/lib/seo';
import { FeatureGrid, ProcessFlow, RelatedLinks, SeoCTA, SeoHero, SeoSection, TextColumns } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'SAP Süreç Otomasyonu ve RPA | AI Kitchen',
  description: 'SAP üzerindeki tekrarlanan kontrol, veri işleme, karşılaştırma ve raporlama süreçlerini RPA ile otomatikleştirme senaryolarını inceleyin.',
  alternates: turkishOnlyAlternates('sap-otomasyonu'),
};

const scenarios = [
  ['Amortisman hesaplama ve kontrol', 'Amortisman hesapları ile ilgili parametrelerin ve sonuçların tanımlı kurallara göre kontrol edilmesi.'],
  ['Birincil belge sürelerinin kontrolü', 'Birincil belgeler için tanımlı son tarihlerin izlenmesi, geciken veya eksik kayıtların işaretlenmesi.'],
  ['Vergi ve amortisman parametreleri', 'İlgili parametrelerin karşılaştırılması, tutarsızlıkların belirlenmesi ve kontrol çıktısının hazırlanması.'],
  ['Gayrimenkul bilgilerinin mutabakatı', 'Farklı kaynaklardaki taşınmaz bilgilerinin eşleştirilmesi ve uyuşmayan kayıtların listelenmesi.'],
  ['Kadastro verisi karşılaştırması', 'Kadastro verilerinin ilgili kayıtlarla karşılaştırılması ve farkların kontrol raporuna aktarılması.'],
  ['Zamanlanmış sistem işlemleri', 'Belirlenen dönemlerde işlem sistemlerinin çalıştırılması, sonuçların toplanması ve sorumlu çalışanlara iletilmesi.'],
] as const;

export default async function SapAutomationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLanguage(locale) || locale !== 'tr') notFound();
  return <>
    <SeoHero eyebrow="SAP Süreç Otomasyonu" title="SAP Süreçlerinde Tekrarlanan İşleri Otomatikleştirin" description="RPA; SAP üzerindeki tekrarlanan kontrol, veri işleme, karşılaştırma ve raporlama adımlarını çevresindeki dosya, e-posta ve kurumsal sistemlerle birlikte yürütebilir. AI Kitchen, iş kurallarını ve istisna yönetimini içeren kontrollü SAP otomasyon senaryoları tasarlar." />
    <SeoSection title="SAP süreçlerinde neden RPA?" intro="SAP süreçlerinin önemli bir bölümü yalnızca SAP ekranında gerçekleşmez. Veriler Excel dosyalarından, e-postalardan, farklı kayıt sistemlerinden veya dış kaynaklardan gelebilir."><TextColumns><div><p>Çalışanlar çoğu zaman bir kaynaktaki veriyi alır, SAP kaydıyla karşılaştırır, eksik veya tutarsız alanları bulur ve sonucu bir rapora aktarır. Bu işlemler belirli dönemlerde tekrarlandığında RPA için uygun bir süreç adayı oluşabilir.</p><p className="mt-5">RPA robotu, mevcut iş kurallarını izleyerek veri toplama, ekran işlemi, karşılaştırma ve raporlama adımlarını yürütebilir. Karar veya onay gerektiren istisnalar sorumlu çalışana bırakılır.</p></div><div><p>SAP otomasyonu, mevcut sistemi değiştirmek anlamına gelmez. Otomasyonun çalışma biçimi; izin verilen erişim yöntemi, ekran veya API kullanılabilirliği, veri sahipliği ve kurumun kontrol gereksinimleri dikkate alınarak belirlenir.</p><p className="mt-5">Her senaryonun uygulanabilirliği süreç keşfinde doğrulanır. Bu sayfada herhangi bir müşteri sonucu veya sayısal performans garantisi sunulmamaktadır.</p></div></TextColumns></SeoSection>
    <SeoSection title="SAP ve çevresindeki sistemleri tek akışta yönetin" muted><ProcessFlow steps={['Dosya, e-posta veya kaynak sistemden veri alınır', 'Kayıt yapısı ve zorunlu alanlar kontrol edilir', 'SAP işlemi veya sorgusu çalıştırılır', 'Veriler karşılaştırılır ve iş kuralları uygulanır', 'Tutarsızlıklar istisna olarak işaretlenir', 'Kontrol raporu oluşturulur', 'Sonuç sorumlu çalışanlara gönderilir']} /></SeoSection>
    <SeoSection title="Desteklenen SAP süreç otomasyonu senaryoları" intro="Aşağıdaki senaryolar, şirket tarafından sağlanan SAP otomasyon materyalinde tasarlanmış ve belgelenmiş kullanım alanlarıdır. Bunlar müşteri referansı veya ölçülmüş ROI iddiası değildir."><FeatureGrid items={scenarios} /></SeoSection>
    <SeoSection title="Mutabakat, kontrol ve tutarsızlık yönetimi" muted><TextColumns><div><h3 className="mb-3 text-xl font-bold text-on-surface">Kayıtları karşılaştırma</h3><p>Farklı kaynaklardaki kayıtlar ortak anahtarlarla eşleştirilebilir. Eksik kayıt, farklı parametre, tarih uyuşmazlığı veya hesaplama farkı gibi durumlar tanımlı kurallarla belirlenebilir.</p><p className="mt-5">Robotun amacı belirsizliği gizlemek değil, kontrol edilecek istisnaları görünür hale getirmektir. Eşleşmeyen kayıtlar ayrı bir listeye veya görev akışına aktarılabilir.</p></div><div><h3 className="mb-3 text-xl font-bold text-on-surface">Kontrol raporları</h3><p>İşlem sonunda tamamlanan kayıtlar, bulunan tutarsızlıklar ve inceleme bekleyen adımlar için rapor oluşturulabilir. Sonuçlar belirlenen çalışanlara e-posta veya kurum içi akış üzerinden iletilebilir.</p><p className="mt-5">Rapor yapısı, kullanılan kaynaklar ve sorumluluk dağılımı süreç sahibiyle birlikte tanımlanır.</p></div></TextColumns></SeoSection>
    <SeoSection title="Zamanlanmış SAP otomasyonu"><TextColumns><div><p>Dönemsel kontroller, belirlenen takvimde otomatik olarak başlatılabilir. Robot gerekli kaynakları toplar, işlem sistemini çalıştırır ve sonuçları kontrol eder. Başarılı, hatalı ve inceleme gerektiren kayıtlar birbirinden ayrılabilir.</p></div><div><p>Zamanlama tek başına yeterli değildir. Erişim hatası, eksik dosya, değişen ekran veya beklenmeyen veri durumunda izlenecek yol da otomasyon tasarımının parçasıdır. Yeniden deneme ve insan eskalasyonu kuralları süreçle birlikte belirlenir.</p></div></TextColumns></SeoSection>
    <SeoSection title="İlgili otomasyon çözümleri" muted><RelatedLinks links={[["Robotik Süreç Otomasyonu", "/tr/robotik-surec-otomasyonu"], ["Finans Operasyonları", "/tr/solutions/financial"], ["Belge Otomasyonu", "/tr/belge-otomasyonu"], ["Vaka Çalışmaları ve Senaryolar", "/tr/case-studies"]]} /></SeoSection>
    <SeoCTA heading="SAP Süreçlerinizdeki Tekrarlanan Kontrol İşlerini İnceleyelim" />
  </>;
}

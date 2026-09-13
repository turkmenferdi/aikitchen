import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  FileCheck2,
  FileText,
  Globe2,
  HardDrive,
  PackageCheck,
  RefreshCcw,
  Settings2,
  ShoppingCart,
  Users,
  Workflow,
} from 'lucide-react';
import { CTABanner } from './CTABanner';

const processCards = [
  ['Finans ve Muhasebe', 'Mutabakat, veri toplama, kontrol, raporlama ve belge işleme adımlarını standart iş akışlarına dönüştürün.', Calculator],
  ['Belge İşleme', 'Tarama, fotoğraf, PDF veya e-posta eklerinden veri çıkarın; doğrulayın ve hedef sisteme aktarın.', FileText],
  ['SAP / ERP Süreçleri', 'Tekrarlanan kontrol, karşılaştırma, veri işleme ve raporlama adımlarını zamanlanmış akışlarla yönetin.', HardDrive],
  ['İnsan Kaynakları', 'Farklı sistemlerden veri toplama, Excel işleme, hesaplama ve kontrol adımlarını otomatikleştirin.', Users],
  ['Satın Alma', 'Talep, belge, karşılaştırma, onay ve tedarikçi takip adımlarını izlenebilir hale getirin.', ShoppingCart],
  ['Lojistik', 'Belge kontrolü, durum güncelleme, veri aktarımı ve bildirim işlerini otomatik akışlarla yönetin.', PackageCheck],
  ['Back-Office Operasyonları', 'Web, e-posta, Office dosyaları ve kurumsal uygulamalar arasındaki tekrarlanan işleri azaltın.', Settings2],
] as const;

const workflow = [
  ['Veri / Belge', FileText],
  ['RPA Robotu', RefreshCcw],
  ['İş Kuralları ve Doğrulama', FileCheck2],
  ['ERP / SAP / Web / Office', Globe2],
  ['Raporlama ve Kontrol', Workflow],
] as const;

const results = [
  ['8 → 1', 'KPI prim hesaplama sürecine dahil olan çalışan sayısı'],
  ['20 → 3 gün', 'KPI prim hesaplama süresi'],
  ['3–20x', 'Belge kayıt sürecindeki iş yükünde azalma'],
  ['2–3x', 'Gelen belge işleme hızında artış'],
] as const;

const solutions = [
  ['Robotik Süreç Otomasyonu', 'Tarayıcı, Office, e-posta ve kurumsal sistemlerdeki tekrarlanan görevler.', '/tr/robotik-surec-otomasyonu'],
  ['Belge Otomasyonu', 'Belge tanıma, veri çıkarma, doğrulama ve sistem kaydı.', '/tr/belge-otomasyonu'],
  ['SAP Süreç Otomasyonu', 'Kontrol, mutabakat, zamanlanmış işlem ve raporlama senaryoları.', '/tr/sap-otomasyonu'],
  ['Finans Operasyonları', 'Veri mutabakatı, raporlama, kontrol ve muhasebe iş akışları.', '/tr/solutions/financial'],
] as const;

export function Phase2TurkishHome() {
  return (
    <>
      <section className="bg-gradient-to-br from-surface via-surface-container-low to-primary/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">RPA ve iş süreci otomasyonu</p>
            <h1 className="mb-7 text-4xl font-bold leading-tight text-on-surface md:text-6xl">Kurumsal İş Süreçleri İçin RPA ve Otomasyon Çözümleri</h1>
            <div className="max-w-3xl space-y-3 text-lg leading-relaxed text-on-surface-variant">
              <p>AI Kitchen, belge, web uygulaması, e-posta, Office dosyası ve kurumsal sistemler arasında tekrarlanan, kural bazlı işleri otomatikleştirir.</p>
              <p>RPA robotları veriyi toplar ve işler; iş kuralları, doğrulama, insan onayı ve raporlama adımları aynı süreç içinde yönetilir.</p>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/tr/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-on-primary">Demo Talep Edin <ArrowRight size={18} /></Link>
              <Link href="#cozumler" className="inline-flex items-center justify-center rounded-xl border border-outline px-7 py-4 font-semibold text-on-surface hover:bg-surface-container-high">Çözümleri İnceleyin</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-on-surface md:text-4xl">Hangi Süreçleri Otomatikleştirebilirsiniz?</h2>
          <p className="mb-12 max-w-3xl text-lg text-on-surface-variant">Otomasyon adayı süreçler genellikle yüksek hacimli, tekrarlanan, açık iş kuralları bulunan ve birden fazla sistem arasında veri taşıyan işlerdir.</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processCards.map(([title, description, Icon]) => <article key={title} className="rounded-2xl border border-outline/20 bg-surface-container p-6"><Icon className="mb-5 text-primary" size={30} /><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="leading-relaxed text-on-surface-variant">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">AI Kitchen Nasıl Çalışır?</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-on-surface-variant">Robot, tanımlanan yetkiler ve kurallar içinde veriyi işler; doğrulama gerektiren adımlar kontrol edilir, sonuçlar hedef sisteme ve raporlamaya aktarılır.</p>
          <div className="grid gap-3 md:grid-cols-5">
            {workflow.map(([label, Icon], index) => <div key={label} className="relative rounded-2xl border border-outline/20 bg-surface-container p-5 text-center"><Icon className="mx-auto mb-3 text-primary" /><p className="font-semibold">{label}</p>{index < workflow.length - 1 && <span className="absolute -right-3 top-1/2 hidden text-primary md:block">→</span>}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Gerçek Otomasyon Sonuçları</h2>
          <p className="mb-10 max-w-3xl text-on-surface-variant">Aşağıdaki göstergeler, şirket tarafından sağlanan kaynaklarda yer alan iki belgelenmiş otomasyon vakasına aittir.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{results.map(([value, label]) => <article key={label} className="rounded-2xl border border-primary/30 bg-primary/10 p-6"><p className="mb-3 text-4xl font-bold text-primary">{value}</p><p className="leading-relaxed text-on-surface-variant">{label}</p></article>)}</div>
          <p className="mt-7 text-sm text-on-surface-variant">Sonuçlar ilgili vaka çalışmalarına aittir. Her sürecin otomasyon potansiyeli mevcut sistemlere ve süreç yapısına göre değişebilir.</p>
        </div>
      </section>

      <section id="cozumler" className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Otomasyon Çözümleri</h2>
          <div className="grid gap-5 md:grid-cols-2">{solutions.map(([title, description, href]) => <Link key={href} href={href} className="group rounded-2xl border border-outline/20 bg-surface-container p-7 hover:border-primary/50"><h3 className="mb-3 text-2xl font-bold">{title}</h3><p className="mb-5 text-on-surface-variant">{description}</p><span className="inline-flex items-center gap-2 font-semibold text-primary">İnceleyin <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Gerçek Vaka Çalışmaları</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-outline/20 bg-surface-container p-7"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">İnsan Kaynakları</p><h3 className="mb-4 text-2xl font-bold">KPI Prim Hesaplama Otomasyonu</h3><p className="mb-5 text-on-surface-variant">Farklı kurumsal sistemlerden ve Excel akışlarından toplanan verilerle yürütülen KPI prim hesaplama süreci otomatikleştirildi.</p><p className="font-semibold">8 → 1 çalışan · 20 → 3 gün</p></article>
            <article className="rounded-2xl border border-outline/20 bg-surface-container p-7"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Muhasebe / Finans Operasyonları</p><h3 className="mb-4 text-2xl font-bold">Belge İşleme ve Muhasebe Otomasyonu</h3><p className="mb-5 text-on-surface-variant">Belge alma, tanıma, veri çıkarma, doğrulama, kontrol ve muhasebe sistemine kayıt adımları otomatikleştirildi.</p><p className="font-semibold">3–20x daha düşük iş gücü gereksinimi · 2–3x işlem hızı</p></article>
          </div>
          <Link href="/tr/case-studies" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">Vaka çalışmalarını inceleyin <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="bg-surface py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><CTABanner heading="Hangi Süreçlerin Otomasyona Uygun Olduğunu Birlikte İnceleyelim" primaryCTA={{ text: 'Demo Talep Edin', href: '/tr/contact' }} /></div></section>
    </>
  );
}

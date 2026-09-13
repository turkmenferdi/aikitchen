export const tr = {
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    platform: 'Süreç Otomasyonu',
    turbohub: 'TurboHUB',
    solutions: 'Çözümler',
    services: 'Çalışma Modeli',
    why: 'Neden AI Kitchen',
    caseStudies: 'Vaka Çalışmaları',
    contact: 'İletişim',
    requestDemo: 'Demo Talep Et',
    menu: 'Menü',
  },

  language: {
    en: 'English',
    tr: 'Türkçe',
  },

  common: {
    learnMore: 'Detayları İncele',
    getStarted: 'Başlayın',
    contactUs: 'Bize Ulaşın',
    schedule: 'Demo Planla',
    explore: 'Keşfet',
    close: 'Kapat',
    success: 'Başarılı',
    error: 'Hata',
    loading: 'Yükleniyor...',
  },

  footer: {
    company: 'AI Kitchen',
    description:
      'AI Kitchen, tekrarlanan ofis işlerini RPA ve yapay zekâ ile otomatikleştirir; TurboHUB ile yönetime şirket verilerinden hızlı cevaplar sunar.',
    offerings: 'Ne sunuyoruz',
    solutions: 'Çözümler',
    companyTitle: 'Şirket',
    contact: 'İletişim',
    supportLabel: 'Destek',
    salesLabel: 'Satış',
    supportEmail: 'support@aikitchen.com.tr',
    salesEmail: 'sales@aikitchen.com.tr',
    turbohubContactLabel: 'TurboHUB',
    turbohubEmail: 'elena.turkmen@aikitchen.com.tr',
    copyright: '© 2026 AI Kitchen. Tüm hakları saklıdır.',
  },

  home: {
    meta: {
      title: 'İş Süreci Otomasyonu, RPA ve Yapay Zekâ | AI Kitchen',
      description:
        'Fatura ve belge işleme, veri girişi, mutabakat ve raporlama gibi tekrarlanan işleri ERP, Excel, e-posta ve web sistemleriniz arasında RPA ve yapay zekâ ile otomatikleştirin.',
    },
    hero: {
      eyebrow: 'RPA + yapay zekâ ile iş süreci otomasyonu',
      title: 'Ekibinizin her gün elle yaptığı işleri',
      titleHighlight: 'yazılım robotlarına devredin.',
      description:
        'AI Kitchen; fatura ve belge işleme, veri girişi, mutabakat ve raporlama gibi tekrarlanan işleri ERP, Excel, e-posta ve web sistemleriniz arasında otomatikleştirir. Süreci birlikte analiz eder, robotu kurar ve canlıda destekleriz.',
      primaryCta: 'Demo Talep Edin',
      secondaryCta: 'Nasıl çalıştığını görün',
      worksWith: 'Mevcut sistemlerinizle çalışır',
      systems: ['SAP ve ERP', 'Excel', 'E-posta', 'PDF ve taranmış belgeler', 'Web uygulamaları'],
    },
    heroCard: {
      label: 'Örnek otomasyon akışı',
      title: 'Tedarikçi faturası işleme',
      steps: [
        { title: 'Fatura e-postayla geldi', detail: 'PDF eki alındı', status: 'done' },
        { title: 'Alanlar okundu', detail: 'Tedarikçi, tarih, tutar, KDV', status: 'done' },
        { title: 'Siparişle karşılaştırıldı', detail: 'Tutar farkı tespit edildi', status: 'warning' },
        { title: 'Onaya gönderildi', detail: 'Karar sorumlu çalışanda', status: 'human' },
        { title: 'ERP’ye kaydedilecek', detail: 'Onaydan sonra otomatik', status: 'pending' },
      ],
      footer: 'Robot kuralları uygular, istisnaları size bırakır.',
    },
    offerings: {
      eyebrow: 'Ne sunuyoruz?',
      heading: 'İki şekilde işinizi hızlandırıyoruz',
      description: 'Tekrarlanan işleri otomatikleştiren bir hizmet ve yönetime veriden hızlı cevap veren bir ürün.',
      items: [
        {
          tag: 'Hizmet',
          title: 'Süreç Otomasyonu',
          description:
            'Tekrarlanan operasyon işlerini RPA robotları ve yapay zekâ ile otomatikleştiriyoruz. Süreç keşfinden canlıya alma ve desteğe kadar uçtan uca yanınızdayız.',
          points: ['Belge ve fatura işleme', 'Veri girişi ve sistemler arası aktarım', 'Mutabakat, kontrol ve raporlama', 'İstisnalar için insan onayı'],
          cta: 'Süreç otomasyonunu inceleyin',
        },
        {
          tag: 'Ürün',
          title: 'TurboHUB',
          description:
            'Muhasebe, ERP, CRM ve Excel verilerinizi tek bir katmanda birleştirir; yönetim sorularınıza doğal dilde, dakikalar içinde cevap verir.',
          points: ['Doğal dilde soru, yapılandırılmış cevap', 'Mevcut sistemlerin üzerine kurulur', 'Kurum içi, donanım paketi veya bulut', 'Veriler kurum içinde kalabilir'],
          cta: 'TurboHUB’ı inceleyin',
        },
      ],
    },
    tasks: {
      eyebrow: 'Somut örnekler',
      heading: 'Hangi işleri robotlara devredebilirsiniz?',
      description:
        'Otomasyon için en uygun işler; sık tekrarlanan, kuralları belli olan ve birden fazla sistem arasında veri taşıyan işlerdir.',
      groups: [
        { team: 'Finans ve Muhasebe', items: ['Gelen fatura ve belge kaydı', 'Cari ve hesap mutabakatı', 'Ay sonu kontrol ve raporları', 'Ödeme öncesi kontroller'] },
        { team: 'İnsan Kaynakları', items: ['Prim ve KPI hesaplamaları', 'Farklı sistemlerden veri toplama', 'Excel tabanlı hesaplama ve kontrol'] },
        { team: 'Satın Alma ve Lojistik', items: ['Teklif ve belge karşılaştırma', 'Sipariş ve durum güncellemeleri', 'Belge kontrolü ve bildirimler'] },
        { team: 'SAP ve ERP', items: ['Zamanlanmış kontrol işlemleri', 'Kayıt karşılaştırma ve tutarsızlık raporu', 'Parametre ve veri doğrulama'] },
        { team: 'Hukuk ve Belge Yönetimi', items: ['Sözleşme ve eklerden alan çıkarma', 'Eksik bilgi ön kontrolü', 'Arşivleme ve etiketleme'] },
        { team: 'Müşteri Operasyonları', items: ['Talep ve rezervasyon kaydı', 'Bildirim ve onay e-postaları', 'Uygulamalar arası veri aktarımı'] },
      ],
    },
    howItWorks: {
      eyebrow: 'Nasıl çalışır?',
      heading: 'Bir yazılım robotu ne yapar?',
      description:
        'Robot, bir çalışanın ekranda yaptığı adımları tanımlı yetki ve kurallar içinde tekrarlar. Yapay zekâ ise belge okuma ve sınıflandırma gibi yorum gerektiren adımları destekler.',
      steps: [
        { title: 'Veriyi alır', description: 'E-posta, PDF, taranmış belge, Excel dosyası veya web uygulamasından.' },
        { title: 'Okur ve kontrol eder', description: 'Yapay zekâ alanları çıkarır; iş kuralları doğrular ve karşılaştırır.' },
        { title: 'Sisteme işler', description: 'ERP, SAP, CRM veya web ekranında kaydı oluşturur, raporu hazırlar.' },
        { title: 'İstisnayı size bırakır', description: 'Belirsiz veya kural dışı durumlar onay için sorumlu çalışana gider.' },
      ],
      note: 'Mevcut sistemlerinizi değiştirmeniz gerekmez; robot izin verilen erişim yöntemleriyle çalışır.',
    },
    model: {
      eyebrow: 'Çalışma modeli',
      heading: 'Nasıl başlıyoruz?',
      description: 'Riski düşük, ölçülebilir adımlarla ilerliyoruz.',
      steps: [
        { title: 'Süreç keşfi', description: 'Mevcut işi adım adım inceliyor, otomasyona en uygun süreçleri ve başarı ölçütlerini belirliyoruz.' },
        { title: 'Pilot', description: 'Seçilen bir süreçte kontrollü bir pilot kuruyor, sonuçları gerçek veriyle birlikte ölçüyoruz.' },
        { title: 'Canlıya alma', description: 'Doğrulanan akışları üretime alıyor, ekibinize bilgi aktarıyoruz.' },
        { title: 'Destek ve genişleme', description: 'Canlı akışları izliyor, iyileştiriyor ve yeni süreçlere yayıyoruz.' },
      ],
      cta: 'Çalışma modelini inceleyin',
    },
    proof: {
      eyebrow: 'Kanıt',
      heading: 'Belgelenmiş sonuçlar',
      description:
        'Aşağıdaki sonuçlar, şirket tarafından sağlanan kaynaklarda belgelenmiş ve müşteri adı kullanılmadan paylaşılan iki gerçek otomasyon vakasına aittir.',
      cases: [
        {
          area: 'İnsan Kaynakları',
          title: 'KPI prim hesaplama otomasyonu',
          description: 'Farklı kurumsal sistemlerden ve Excel dosyalarından toplanan verilerle yürütülen prim hesaplama süreci otomatikleştirildi.',
          metrics: [
            { value: '8 → 1', label: 'Sürece dahil olan çalışan sayısı' },
            { value: '20 → 3 gün', label: 'Hesaplama süresi' },
          ],
        },
        {
          area: 'Muhasebe ve Finans',
          title: 'Belge işleme ve muhasebe kaydı',
          description: 'Belge alma, tanıma, veri çıkarma, doğrulama, kontrol ve muhasebe sistemine kayıt adımları otomatikleştirildi.',
          metrics: [
            { value: '3–20x', label: 'Belge kaydında daha düşük iş gücü ihtiyacı' },
            { value: '2–3x', label: 'Belge işleme hızında artış' },
          ],
        },
      ],
      note: 'Sonuçlar ilgili vakalara aittir; her sürecin potansiyeli mevcut sistemlere ve süreç yapısına göre değişir.',
      cta: 'Vaka çalışmalarını inceleyin',
    },
    why: {
      eyebrow: 'Neden AI Kitchen?',
      heading: 'Otomasyonu yazılım satışı değil, uygulama disiplini olarak ele alıyoruz',
      items: [
        { title: 'RPA ve yapay zekâ bir arada', description: 'Kural bazlı adımlar robotla, belge anlama ve sınıflandırma yapay zekâ ile aynı akışta yürür.' },
        { title: 'Kontrol sizde kalır', description: 'Robotun neye erişeceği, nerede insan onayı gerektiği ve hangi kayıtların tutulacağı baştan tanımlanır.' },
        { title: 'Politikanıza uygun kurulum', description: 'Kurulum modeli, sistem ve erişim gereksinimlerinize göre keşif aşamasında belirlenir.' },
        { title: 'Eğitim ve kalıcı destek', description: 'Canlıya geçişten sonra da ekibinizi eğitir, akışları izler ve iyileştiririz.' },
      ],
    },
    faq: {
      eyebrow: 'SSS',
      heading: 'Sık sorulan sorular',
      items: [
        {
          question: 'RPA (robotik süreç otomasyonu) nedir?',
          answer:
            'RPA, bir çalışanın bilgisayarda yaptığı tekrarlanan adımları (veri kopyalama, form doldurma, dosya işleme, sistemler arası aktarım) yazılım robotlarının tanımlı kurallarla yapmasıdır. Yapay zekâ ile birlikte kullanıldığında belge okuma ve sınıflandırma gibi adımlar da otomatikleşir.',
        },
        {
          question: 'Mevcut sistemlerimizi değiştirmemiz gerekir mi?',
          answer:
            'Hayır. Robot; ERP, SAP, Excel, e-posta ve web uygulamaları gibi mevcut sistemlerinizle, izin verilen erişim yöntemleri üzerinden çalışır.',
        },
        {
          question: 'Hangi süreçler otomasyona uygun?',
          answer:
            'Sık tekrarlanan, kuralları açık, dijital veriyle çalışan ve birden fazla sistem arasında veri taşıyan süreçler iyi adaylardır. Süreç keşfinde birlikte önceliklendiririz.',
        },
        {
          question: 'Bir otomasyon projesi ne kadar sürer?',
          answer:
            'Süre; sürecin kapsamına, kullanılan sistemlere ve erişim koşullarına bağlıdır. Genellikle tek bir süreçte pilotla başlanır, takvim keşif sonrasında netleşir.',
        },
        {
          question: 'Veri ve erişim güvenliği nasıl sağlanır?',
          answer:
            'Robotun erişim yetkileri, işlem kayıtları ve insan onayı gereken adımlar kurumunuzun politikalarına göre tanımlanır. Kurulum modeli güvenlik gereksinimlerinize göre belirlenir.',
        },
        {
          question: 'TurboHUB ile süreç otomasyonu arasındaki fark nedir?',
          answer:
            'Süreç otomasyonu tekrarlanan işleri yapar. TurboHUB ise farklı sistemlerdeki verileri birleştirerek yönetim sorularına hızlı cevap verir. İkisi ayrı ayrı veya birlikte kullanılabilir.',
        },
      ],
    },
    finalCta: {
      heading: 'Hangi işlerinizin otomasyona uygun olduğunu birlikte bulalım',
      description: 'Mevcut sürecinizi, kullandığınız sistemleri ve iş kurallarınızı kısa bir görüşmede değerlendirelim.',
      primary: 'Demo Talep Edin',
      secondary: 'TurboHUB’ı inceleyin',
    },
  },

  about: {
    hero: {
      title: 'AI Kitchen Hakkında',
      description:
        'Türkçe iş ihtiyaçlarını bilen, kurumsal otomasyonu sadece yazılım değil uygulama disiplini olarak ele alan bir ekip.',
    },
    story: {
      heading: 'Yaklaşımımız',
      content:
        'Birçok kurumda otomasyon projeleri ya aşırı teknik kaldığı ya da yalnızca tekil görevleri çözdüğü için ölçeklenemiyor. AI Kitchen, referans alınan RPA ekosistemlerinin modülerliğini; AI destekli karar katmanı, süreç danışmanlığı, eğitim ve canlı destek yaklaşımıyla bir araya getirerek daha uygulanabilir bir model sunar.',
    },
    mission: {
      heading: 'Misyonumuz',
      content:
        'Kurumsal ekiplerin en çok zaman kaybettiren manuel süreçlerini görünür, yönetilebilir ve ölçülebilir otomasyonlara dönüştürmek.',
    },
    vision: {
      heading: 'Vizyonumuz',
      content:
        'Her işletmenin, kendi verisi ve kendi süreçleri üzerinde çalışan dijital bir iş gücünü güvenle yönetebildiği bir operasyon standardı oluşturmak.',
    },
    values: {
      heading: 'Değerlerimiz',
      items: [
        {
          title: 'Uygulanabilirlik',
          description: 'Teoride değil, gerçek iş akışlarında hızlı değer üreten çözümler tasarlarız.',
        },
        {
          title: 'Şeffaflık',
          description: 'Ne otomatikleşecek, ne insan onayında kalacak ve nasıl ölçülecek açıkça tanımlanır.',
        },
        {
          title: 'Yetkinlik Kazandırma',
          description: 'Müşteri ekiplerini eğiterek otomasyonu kurum içinde sürdürülebilir hale getiririz.',
        },
        {
          title: 'Uzun Vadeli Ortaklık',
          description: 'Devreye alma sonrası optimizasyon ve yeni süreçlerin yaygınlaştırılmasını birlikte yönetiriz.',
        },
      ],
    },
    trust: {
      heading: 'Gerçek Operasyonlara Odaklı',
      description:
        'Finans, hukuk, operasyon, insan kaynakları, müşteri hizmetleri ve belge yoğun ekiplerde tekrarlı işleri azaltmaya odaklanırız.',
    },
  },

  platform: {
    meta: {
      title: 'Süreç Otomasyonu: RPA ve Yapay Zekâ ile Yazılım Robotları | AI Kitchen',
      description:
        'Belge, e-posta, Excel, ERP ve web uygulamaları arasındaki tekrarlanan işleri RPA robotları ve yapay zekâ ile uçtan uca otomatikleştirin. İstisna yönetimi, insan onayı ve kontrollü kurulum.',
    },
    hero: {
      eyebrow: 'Hizmet · Süreç Otomasyonu',
      title: 'Tekrarlanan işleri uçtan uca yürüten yazılım robotları',
      description:
        'AI Kitchen; belge okuma, veri girişi, kontrol, mutabakat ve raporlama adımlarını tek bir otomatik akışta birleştirir. Robot kuralları uygular, yapay zekâ belgeleri anlar, kritik kararlar ise ekibinizde kalır.',
      primaryCta: 'Süreç analizi için görüşelim',
      secondaryCta: 'Robotun yapabildikleri',
    },
    diagram: {
      inputsLabel: 'Gelen veri',
      inputs: ['E-posta ve ekler', 'PDF ve taranmış belgeler', 'Excel ve CSV dosyaları', 'Web uygulamaları'],
      robotLabel: 'AI Kitchen robotu',
      robotSteps: ['Okur ve sınıflandırır', 'Kurallarla kontrol eder', 'Sistemlere işler', 'Raporlar ve bildirir'],
      outputsLabel: 'Hedef sistemler',
      outputs: ['ERP ve SAP', 'CRM ve iş uygulamaları', 'Raporlar ve dosyalar', 'E-posta bildirimleri'],
      humanLabel: 'İstisna olduğunda',
      human: 'Sorumlu çalışana onay için gider',
    },
    capabilities: {
      eyebrow: 'Yetenekler',
      heading: 'Robotun yapabildikleri',
      description: 'Bir çalışanın bilgisayarda yaptığı tekrarlanan adımların büyük bölümü otomatikleştirilebilir.',
      items: [
        { title: 'Belge ve veri işleme', description: 'PDF, Excel, Word, CSV, e-posta ve formlardaki veriyi okur, doğrular, dönüştürür ve taşır.' },
        { title: 'Uygulama ve tarayıcı otomasyonu', description: 'Web uygulamaları, masaüstü ekranları ve eski sistemler üzerinde çalışan akışlar kurar.' },
        { title: 'Yapay zekâ ile belge anlama', description: 'Sınıflandırma, alan çıkarma, içerik anlama ve istisna tespitini sabit kuralların ötesine taşır.' },
        { title: 'İstisna ve onay yönetimi', description: 'Kural dışı durumları tespit eder, sorumlu kişiye yönlendirir ve onaydan sonra akışı sürdürür.' },
        { title: 'Zamanlanmış ve tetiklenen çalışma', description: 'Belirli saatlerde, dönem sonlarında veya yeni bir e-posta ya da dosya geldiğinde başlar.' },
        { title: 'İzleme ve işlem kayıtları', description: 'Hangi kaydın, hangi adımda, nasıl işlendiğini izlenebilir hale getirir.' },
      ],
    },
    comparison: {
      eyebrow: 'Fark',
      heading: 'Klasik RPA ile AI Kitchen yaklaşımı',
      head: ['Konu', 'Klasik RPA', 'AI Kitchen'],
      rows: [
        { aspect: 'Kapsam', traditional: 'Tek tek görevlerin otomasyonu', aiKitchen: 'Karar desteğiyle uçtan uca süreç otomasyonu' },
        { aspect: 'Belge anlama', traditional: 'Sınırlı, çoğunlukla kural bazlı', aiKitchen: 'Yapay zekâ destekli sınıflandırma ve alan çıkarma' },
        { aspect: 'İstisna yönetimi', traditional: 'Manuel takip, kırılgan kurallar', aiKitchen: 'Eskalasyon, onay ve yeniden deneme tasarımı' },
        { aspect: 'Ekip yetkinliği', traditional: 'Uzman geliştiricilere yüksek bağımlılık', aiKitchen: 'Eğitim ve ortak teslim modeli' },
      ],
    },
    control: {
      eyebrow: 'Kontrol ve güvenlik',
      heading: 'Otomasyon büyür, kontrol sizde kalır',
      description:
        'Robotun neye erişebileceği, hangi adımlarda insan onayı gerektiği ve hangi kayıtların tutulacağı projenin başında birlikte tanımlanır.',
      items: [
        { title: 'Veri sahipliği ve erişim kontrolü', description: 'Robot yalnızca izin verilen sistemlere ve verilere, tanımlı yetkilerle erişir.' },
        { title: 'İşlem kayıtları', description: 'Her adımda ne yapıldığı ve hangi kayıtların işlendiği izlenebilir.' },
        { title: 'İnsan onay adımları', description: 'Kritik iş akışlarında karar noktaları sorumlu çalışanda kalır.' },
        { title: 'Politikaya uygun kurulum', description: 'Kurulum modeli, sistem ve güvenlik gereksinimlerinize göre keşif aşamasında belirlenir.' },
      ],
    },
    useCases: {
      eyebrow: 'Nereden başlamalı?',
      heading: 'Departman ve konuya göre otomasyon',
      description: 'Sizinkine en yakın senaryoyu inceleyin.',
    },
    cta: {
      heading: 'Otomatikleştirmek istediğiniz süreci birlikte inceleyelim',
      description: 'Mevcut adımları, kullandığınız sistemleri ve kontrol noktalarını birlikte değerlendirip uygun kapsamı belirleyelim.',
      primary: 'Demo Talep Edin',
      secondary: 'Çalışma modelini inceleyin',
    },
  },

  solutions: {
    index: {
      hero: {
        eyebrow: 'Çözümler',
        title: 'Departmanınıza göre otomasyon çözümleri',
        description:
          'Finans, fatura, hukuk ve müşteri operasyonlarındaki tekrarlanan işler için hazır senaryo mantığıyla başlıyor, sürecinize uyarlıyoruz.',
      },
      topicsHeading: 'Konuya göre otomasyon',
      notListed: {
        heading: 'Süreciniz listede yok mu?',
        description: 'Bir iş sık tekrarlanıyor, kuralları belli ve sistemler arasında veri taşıyorsa büyük ihtimalle iyi bir adaydır. Birlikte bakalım.',
        cta: 'Sürecinizi anlatın',
      },
    },
    ui: {
      learnMore: 'İnceleyin',
      breadcrumb: 'Çözümler',
      flowLabel: 'Örnek otomasyon akışı',
      challengeLabel: 'Mevcut zorluk',
      solutionLabel: 'AI Kitchen yaklaşımı',
      capabilitiesLabel: 'Öne çıkan yetkinlikler',
      outcomesLabel: 'Birlikte ölçtüğümüz kazanımlar',
      outcomesNote: 'Başarı ölçütleri keşif aşamasında tanımlanır ve pilot sırasında gerçek veriyle ölçülür.',
      relatedLabel: 'Diğer çözümler',
      ctaHeading: '{name} için ilk adımı atalım',
      ctaDescription: 'Kısa bir görüşmede iş akışınızdaki hangi adımların otomasyona uygun olduğunu birlikte değerlendirelim.',
      ctaButton: 'Demo Talep Edin',
      secondaryCta: 'Çalışma modelini inceleyin',
    },
    financial: {
      name: 'Finans ve Muhasebe Operasyonları',
      hero: {
        title: 'Finans ve Muhasebe Süreçlerini Otomatikleştirin',
        description:
          'Veri mutabakatı, raporlama, kontrol, belge işleme ve sistemler arası veri aktarımı adımlarını RPA ile standartlaştırın.',
      },
      challenges:
        'Finans ve muhasebe ekipleri farklı sistemlerden veri toplar, Excel dosyalarını karşılaştırır, belge bilgilerini kontrol eder, mutabakat yapar ve istisnaları manuel takip eder. Yüksek hacimli tekrarlı işlemler önemli çalışan eforu gerektirir ve manuel veri girişi hatası olasılığı oluşturur.',
      solution:
        'AI Kitchen; ERP ve izin verilen web uygulamaları, Excel dosyaları, e-posta akışları ve belgeler arasında veri toplama, eşleştirme, kontrol, uyumsuzluk işaretleme, muhasebe kaydı hazırlama ve rapor üretme adımlarını otomatikleştirir.',
      capabilities: [
        'Çok sistemli finans verisi toplama ve eşleştirme',
        'Veri mutabakatı, sapma ve tutarsızlık tespiti',
        'Belge okuma, doğrulama ve muhasebe kaydı hazırlama',
        'Finansal kontrol ve raporlama otomasyonu',
        'İşlem geçmişi ve kontrol kayıtları',
        'İnsan onayı gerektiren adımlarda eskalasyon',
      ],
      outcomes: [
        'Kapanış ve kontrol süresinin ölçülmesi ve azaltılması',
        'Manuel veri girişi hatalarının izlenmesi ve azaltılması',
        'Ekibin istisnalara odaklanabilmesi',
      ],
      cta: 'Finans Operasyonlarını İncele',
      flow: ['ERP, Excel ve e-postadan veriyi toplar', 'Kayıtları eşleştirir ve farkları tespit eder', 'Rapor ve mutabakat çıktısını hazırlar', 'İstisnaları incelemeye yönlendirir'],
    },
    accountsPayable: {
      name: 'Fatura ve Ödeme Süreçleri',
      hero: {
        title: 'Fatura İşleme ve Onay Akışlarını Otomatikleştirin',
        description:
          'Gelen faturaların okunması, doğrulanması, onaya yönlendirilmesi ve sisteme işlenmesini hızlandırın.',
      },
      challenges:
        'Muhasebe ve satın alma ekipleri farklı kanallardan gelen faturaları toplar, PO ve teslim bilgileriyle karşılaştırır, eksik kayıtları takip eder ve ödeme için onay zinciri yürütür.',
      solution:
        'AI Kitchen; belgeleri okur, alanları çıkarır, iş kurallarına göre doğrular, onay akışını başlatır ve sonuçları muhasebe sistemlerine işler.',
      capabilities: [
        'Fatura verisi çıkarımı ve sınıflandırma',
        'PO ve teslim bilgisiyle çapraz kontrol',
        'Otomatik onay yönlendirme',
        'Tedarikçi ve evrak takibi',
        'Ödeme öncesi kontrol listeleri',
      ],
      outcomes: [
        'Fatura başına işlem süresinin ölçülmesi ve azaltılması',
        'Daha az manuel veri girişi',
        'Onay süreçlerinde daha iyi görünürlük',
      ],
      cta: 'Fatura Süreçlerini İncele',
      flow: ['Gelen faturayı okur', 'Alanları çıkarır ve doğrular', 'Sipariş ve teslimat verisiyle karşılaştırır', 'Onaya yönlendirir ve muhasebeye kaydeder'],
    },
    legal: {
      name: 'Hukuki Belge Süreçleri',
      hero: {
        title: 'Sözleşme ve Belge Operasyonlarını Hızlandırın',
        description:
          'Belge inceleme, veri çıkarımı, risk işaretleme ve arşivleme adımlarını standart hale getirin.',
      },
      challenges:
        'Hukuk ekipleri yüksek hacimli belge akışlarında tekrar eden kontrol işleriyle zaman kaybeder. Farklı sözleşme tipleri ve manuel takip, çevrim sürelerini uzatır.',
      solution:
        'AI Kitchen; sözleşmelerden kritik alanları çıkarır, ön kontrol kurallarını uygular, eksik veya riskli noktaları işaretler ve ilgili ekipleri sürece dahil eder.',
      capabilities: [
        'Belge sınıflandırma ve içerik çıkarımı',
        'Kritik madde ve alan tespiti',
        'Ön risk işaretleme',
        'Arşiv ve etiketleme otomasyonu',
        'Süreç adımlarının kayıt altına alınması',
      ],
      outcomes: [
        'Belge işleme çevrim süresinin ölçülmesi ve azaltılması',
        'Standart kontrol adımlarında tutarlılık',
        'Tekrarlanan kontrol işlerinin otomasyona aktarılması',
      ],
      cta: 'Hukuki Süreçleri İncele',
      flow: ['Sözleşme ve ekleri alır', 'Sınıflandırır ve kritik alanları çıkarır', 'Eksik bilgi ve risk noktalarını işaretler', 'Doğru kişiye yönlendirir ve arşivler'],
    },
    tourism: {
      name: 'Turizm ve Müşteri Operasyonları',
      hero: {
        title: 'Rezervasyon ve Müşteri Operasyonlarını Uçtan Uca Yönetin',
        description:
          'Rezervasyon, teyit, ödeme, misafir iletişimi ve takip adımlarını merkezi otomasyonla yönetin.',
      },
      challenges:
        'Turizm ve hizmet ekipleri web panelleri, e-posta kutuları, ödeme ekranları ve CRM araçları arasında aynı veriyi tekrar tekrar işler. Bu da gecikme ve memnuniyet kaybı yaratır.',
      solution:
        'AI Kitchen; çok kanallı rezervasyon verisini toplar, teyit mesajlarını üretir, ödeme ve durum güncellemelerini işler, görevleri ekipler arasında otomatik dağıtır.',
      capabilities: [
        'Rezervasyon ve talep toplama',
        'Misafir iletişimi ve bildirim akışları',
        'Ödeme ve durum güncelleme senaryoları',
        'Operasyon görevlerinin ekipler arasında dağıtımı',
        'Sonraki aksiyonlar için takip akışları',
      ],
      outcomes: [
        'Dönüş süresinin ölçülmesi ve iyileştirilmesi',
        'Tekrarlanan operasyon adımlarının azaltılması',
        'Misafir deneyiminde daha tutarlı iletişim',
      ],
      cta: 'Turizm Operasyonlarını İncele',
      flow: ['Kanallardan gelen talepleri toplar', 'Rezervasyon kaydını oluşturur veya günceller', 'Onay ve bildirimleri gönderir', 'Takip görevlerini ekiplere dağıtır'],
    },
  },

  services: {
    index: {
      hero: {
        title: 'Hizmetler',
        description:
          'Keşiften canlı kullanıma, eğitimden optimizasyona kadar otomasyonu kurumsal ölçekte hayata geçiren hizmet modeli.',
      },
      intro:
        'Referans alınan platformların eğitim ve yetkinlik merkezi yaklaşımından ilhamla, yalnızca kurulum değil ekiplerin otomasyonu sahiplenmesini sağlayan bir çalışma modeli sunuyoruz.',
    },
    processDiscovery: {
      name: 'Süreç Keşfi',
      description: 'Hangi işlerin otomasyona en uygun olduğunu veriyle belirleyin.',
      content:
        'Mevcut operasyonunuzu adım adım analiz eder, manuel eforu, tekrar eden işleri ve hata noktalarını görünür hale getiririz.',
      benefits: [
        'Öncelikli otomasyon adaylarının belirlenmesi',
        'Darboğazların ve tekrar işlerin netleştirilmesi',
        'Başarı metriklerinin tanımlanması',
        'Gerçekçi yol haritası oluşturulması',
      ],
      timeline: 'Keşif sonrasında belirlenir',
    },
    assessment: {
      name: 'Teknik ve Operasyonel Değerlendirme',
      description: 'Kurulum modeli, entegrasyon gereksinimleri ve ekip hazırlığını belirleyin.',
      content:
        'Sistemlerinizi, erişim modellerini, veri kaynaklarını ve kullanıcı rollerini analiz ederek uygulanabilir bir kurulum planı çıkarırız.',
      benefits: [
        'Sistem ve erişim gereksinimlerinin netleşmesi',
        'Entegrasyon ihtiyaçlarının haritalanması',
        'Risk ve bağımlılıkların görülmesi',
        'Uygulama kapsamının netleştirilmesi',
      ],
      timeline: 'Keşif sonrasında belirlenir',
    },
    poc: {
      name: 'Pilot / POC',
      description: 'Yüksek etkili tek bir süreçte hızlı değer gösterin.',
      content:
        'Kısa sürede sonuç üretmek için seçilen bir süreçte kontrollü pilot kurar, başarı kriterlerini birlikte ölçeriz.',
      benefits: [
        'Hızlı değer ispatı',
        'İş birimleriyle güven oluşturma',
        'Gerçek veriyle test etme',
        'Sonraki yaygınlaştırma için sağlam temel kurma',
      ],
      timeline: 'Kapsama göre belirlenir',
    },
    implementation: {
      name: 'Canlıya Alma ve Yaygınlaştırma',
      description: 'Doğrulanmış senaryoları üretim ortamına taşıyın ve yeni süreçlere açın.',
      content:
        'Pilotta doğrulanan akışları üretim kalitesine getirir, kullanıcı devrini yapar ve otomasyonu yeni departmanlara yayarız.',
      benefits: [
        'Üretim ortamına güvenli geçiş',
        'Bilgi transferi ve ekip eğitimi',
        'Standartlaştırılmış teslim yaklaşımı',
        'Yeni süreçler için tekrar kullanılabilir yapıların kurulması',
      ],
      timeline: 'Kapsama göre belirlenir',
    },
    integration: {
      name: 'Sistem Entegrasyonu',
      description: 'Web panelleri, masaüstü uygulamalar, dosyalar ve API’leri aynı akışta birleştirin.',
      content:
        'ERP, CRM, muhasebe, e-posta, paylaşımlı klasörler ve üçüncü parti servislerle bağlantı kurarak otomasyonun gerçek veri üzerinde çalışmasını sağlarız.',
      benefits: [
        'Çoklu sistem bağlantısı',
        'Veri akışlarının standardizasyonu',
        'API ve ekran otomasyonu kombinasyonu',
        'Gerçek zamanlı veya zamanlanmış senaryolar',
      ],
      timeline: 'Sistem ve erişim kapsamına göre belirlenir',
    },
    support: {
      name: 'Eğitim, Destek ve Optimizasyon',
      description: 'Kurulum sonrası performansı izleyin ve yeni süreçleri daha hızlı devreye alın.',
      content:
        'Ekiplerinizi eğitir, canlı süreçleri izler, iyileştirme alanlarını belirler ve otomasyonu yeni kullanım senaryolarına taşırız.',
      benefits: [
        'Kullanıcı ve operasyon ekibi eğitimi',
        'Canlı destek ve hata analizi',
        'Sürekli iyileştirme döngüsü',
        'Yeni senaryolar için danışmanlık',
      ],
      timeline: 'Hizmet kapsamına göre belirlenir',
    },
  },

  whyAiKitchen: {
    hero: {
      title: 'Neden AI Kitchen',
      description: 'Kurumsal otomasyonu yazılımdan öte, uygulama disiplini olarak ele alan bütünleşik yapı.',
    },
    intro:
      'Sadece görev otomasyonu değil; hazır senaryolar, eğitim yaklaşımı, kurumsal yönetişim ve AI destekli karar katmanıyla daha uygulanabilir bir dönüşüm modeli sunuyoruz.',
    items: [
      {
        title: 'Hazır ve Uyarlanabilir Yapı',
        description:
          'Her şeyi sıfırdan başlatmak yerine, sık kullanılan süreç kurgularını hızla uyarlayarak projeleri daha kısa sürede ilerletiriz.',
        benefit: 'Daha hızlı canlıya geçiş',
      },
      {
        title: 'Kurumsal Ölçekte Tasarım',
        description:
          'Birden fazla sistem, ekip ve onay mekanizması içeren süreçler için görünürlük ve kontrol sağlayan bir yapı sunarız.',
        benefit: 'Dağınık araçlar yerine tek merkezden yönetim',
      },
      {
        title: 'Kontrollü Veri ve Erişim',
        description:
          'Otomasyonun hangi veriye erişeceği, hangi adımda kimin onay vereceği ve hangi kayıtların tutulacağı net olarak tanımlanır.',
        benefit: 'Güvenlik ve uyumluluk açısından daha güçlü zemin',
      },
      {
        title: 'AI ile Güçlendirilmiş RPA',
        description:
          'Yalnızca tıklama ve veri taşıma değil; belge anlama, sınıflandırma ve istisna tespitini de sürecin içine katarız.',
        benefit: 'Kural bazlı otomasyonun ötesine geçiş',
      },
      {
        title: 'Eğitim ve Yetkinlik Kazandırma',
        description:
          'Müşteri ekipleri için devreye alma sonrasında da öğrenmeyi destekleyen bir çalışma modeli kurarız.',
        benefit: 'Dış bağımlılığı azaltan sürdürülebilir yapı',
      },
      {
        title: 'İş Sonuçlarına Odaklı Yaklaşım',
        description:
          'Başarıyı yalnızca geliştirilen bot sayısıyla değil; kazanılan zaman, düşen hata oranı ve iyileşen servis kalitesiyle ölçeriz.',
        benefit: 'Daha net ROI takibi',
      },
    ],
    comparison: {
      heading: 'AI Kitchen ve Geleneksel RPA Karşılaştırması',
      rows: [
        {
          aspect: 'Kapsam',
          traditional: 'Tekil görev otomasyonu',
          aiKitchen: 'Uçtan uca süreç ve karar katmanı',
        },
        {
          aspect: 'Belge Anlama',
          traditional: 'Sınırlı, çoğunlukla kural bazlı',
          aiKitchen: 'AI destekli sınıflandırma ve veri çıkarımı',
        },
        {
          aspect: 'İstisna Yönetimi',
          traditional: 'Manuel takip ve kırılgan akışlar',
          aiKitchen: 'Eskalasyon, onay ve yeniden deneme kurguları',
        },
        {
          aspect: 'Uyarlama Hızı',
          traditional: 'Her süreçte yüksek geliştirme eforu',
          aiKitchen: 'Hazır modüllerle daha hızlı devreye alma',
        },
        {
          aspect: 'Ekip Yetkinliği',
          traditional: 'Platform bağımlı uzman gereksinimi',
          aiKitchen: 'Eğitim ve ortak çalışma modeliyle bilgi transferi',
        },
        {
          aspect: 'Kurumsal Görünürlük',
          traditional: 'Parçalı log ve takip yapısı',
          aiKitchen: 'Merkezî izleme ve denetim izi',
        },
      ],
    },
  },

  caseStudies: {
    hero: {
      title: 'Vaka Çalışmaları',
      description:
        'Gerçek müşteri sonucu veya referansı olarak sunulmayan, değerlendirme amaçlı temsili otomasyon senaryoları.',
    },
    items: [
      {
        company: 'Temsili Finans Operasyonu',
        industry: 'Finans Operasyonları',
        challenge:
          'Farklı Excel dosyaları ve izin verilen iş uygulamalarındaki kayıtların manuel karşılaştırıldığı varsayımsal bir süreç.',
        solution:
          'Değerlendirilebilecek yapı: veri toplama, mutabakat ve istisna işaretleme adımlarının otomasyonu.',
        outcomes: [
          'Gün sonu kontrol süresinin ölçülmesi',
          'Ekibin sapmalara odaklanabilmesi',
          'Tekrarlanan raporlama adımlarının azaltılması',
          'İşlem kaydı üreten standart bir akışın değerlendirilmesi',
        ],
        metric: 'Örnek Senaryo',
        metricLabel: 'Finans Operasyonları',
      },
      {
        company: 'Temsili Sipariş Operasyonu',
        industry: 'Sipariş ve Müşteri Operasyonları',
        challenge:
          'Sipariş güncellemeleri, iade kayıtları ve taleplerin farklı paneller arasında tekrarlandığı varsayımsal bir süreç.',
        solution:
          'Değerlendirilebilecek yapı: tarayıcı ve arka ofis ekranları arasındaki sipariş ve talep adımlarının orkestrasyonu.',
        outcomes: [
          'Pik dönem iş yükünün izlenmesi',
          'Dönüş sürelerinin ölçülmesi',
          'Tekrarlanan panel işlemlerinin azaltılması',
          'Takip edilebilir görev dağıtımının değerlendirilmesi',
        ],
        metric: 'Örnek Senaryo',
        metricLabel: 'Sipariş ve Müşteri Operasyonları',
      },
      {
        company: 'Temsili Belge ve Onay Operasyonu',
        industry: 'Belge ve Onay Süreçleri',
        challenge:
          'Sözleşme ekleri, faturalar ve onay belgelerinin e-postayla geldiği, kontrol ve durum takibinin manuel yürütüldüğü varsayımsal bir süreç.',
        solution:
          'Değerlendirilebilecek yapı: belge okuma, alan çıkarımı, ön kontrol ve ilgili kişilere yönlendirme adımlarının otomasyonu.',
        outcomes: [
          'Belge çevrim süresinin ölçülmesi',
          'Eksik evrakların erken işaretlenmesi',
          'Onay bekleyen işlerin görünür hale getirilmesi',
          'Ekipler arası görev dağıtımının netleştirilmesi',
        ],
        metric: 'Örnek Senaryo',
        metricLabel: 'Belge ve Onay Süreçleri',
      },
    ],
  },

  turbohub: {
    hero: {
      eyebrow: 'Ürün',
      title: 'TurboHUB',
      subtitle: 'Tüm kurumsal sistemlerinizden yönetim cevapları — günler değil, dakikalar içinde',
      description:
        'TurboHUB; muhasebe, ERP, bordro, CRM ve depo yönetimi sistemleri, veritabanları ve Excel modellerinizdeki verileri kullanarak yönetim sorularınızı doğal dilde yanıtlayan yapay zekâ destekli bir sistemdir.',
      tags: ['Güvenlik', 'Sinir Ağları', 'Yapay Zekâ Ajanları', 'İş Dijitalleşmesi'],
      primaryCta: 'Demo Talep Edin',
      secondaryCta: 'Nasıl Çalışır?',
      whitepaperCta: 'White Paper’ı İndirin',
    },
    mockup: {
      label: 'Örnek görünüm',
      askLabel: 'Soru',
      question: 'Geçen ayın gelirini cari hesaplara göre kırılımlı göster',
      sourcesLabel: 'Kullanılan kaynaklar',
      sources: ['Muhasebe', 'CRM', 'Excel'],
      answerTitle: 'Cari bazında gelir · geçen ay',
      columns: ['Cari hesap', 'Gelir', 'Pay'],
      rows: [
        ['Cari A', '4,2 mn ₺', '%31'],
        ['Cari B', '2,9 mn ₺', '%21'],
        ['Cari C', '2,1 mn ₺', '%15'],
        ['Diğer', '4,5 mn ₺', '%33'],
      ],
      footnote: 'Gösterim amaçlı temsili veridir',
    },
    whitepaper: {
      heading: 'TurboHUB White Paper',
      description:
        'Sorunu, TurboHUB’ın çalışma prensibini, departman bazında etkisini, kurulum modellerini ve altyapı gereksinimlerini anlatan 8 sayfalık doküman.',
      cta: 'PDF’i İndirin',
      file: '/whitepapers/TurboHUB_White_Paper_TR.pdf',
      meta: 'PDF · Türkçe',
    },
    problem: {
      eyebrow: 'Şirketlerin bize anlattıkları',
      heading: 'Raporlama birbirinden kopuk birçok kaynaktaki veriye dayanıyor',
      points: [
        'Yönetim raporları için 5–7 kaynak arasında manuel mutabakat gerekiyor: muhasebe, bordro, CRM, depo yönetimi sistemleri, dış servisler ve manuel Excel modelleri.',
        'Aynı metrik sistemden sisteme %5–15 oranında farklılık gösterebiliyor.',
        'Her ay 3–5 iş günü yorum ve analiz yerine mutabakata harcanıyor.',
      ],
    },
    costs: {
      heading: 'Üç tür verimsiz maliyet',
      description:
        'Yönetim raporlamasında BI veya Excel kullanan şirketler, veri hazırlama aşamasında — analitiğin “ilk kilometresinde” — sistematik verimsizliklerle karşılaşıyor.',
      problemLabel: 'Bugün',
      solutionLabel: 'TurboHUB ile',
      items: [
        {
          title: 'BT Departmanı',
          subtitle: 'Rapor oluşturma ve özelleştirme',
          problems: [
            'Her yeni rapor kırılımı için BT talebi açılması gerekiyor',
            'Özelleştirme için 2–3 haftalık bekleme süresi',
            'Biriken iş birimi talepleri',
          ],
          solutionTitle: 'Otomatik veri hazırlama',
          solutions: [
            'BT desteği olmadan 2–4 dakikada yeni rapor kırılımı',
            'Tüm raporlar tek ve tutarlı bir mantığı kullanır',
          ],
        },
        {
          title: 'Analistler ve Finans Yöneticileri',
          subtitle: 'Veri çekme ve mutabakat',
          problems: [
            'Her ay 3–5 gün manuel konsolidasyona harcanıyor',
            'Veri tutarsızlıklarının mutabakatı uzun sürüyor',
            'Zamanın %70–80’i analiz yerine rutin işlere gidiyor',
          ],
          solutionTitle: 'İş kullanıcılarına bağımsızlık',
          solutions: [
            'Doğal dilde soru — dakikalar içinde yapılandırılmış cevap',
            '1,5–2 tam zamanlı analist kapasitesi açığa çıkar',
          ],
        },
        {
          title: 'Muhasebe Departmanı',
          subtitle: 'Ek analitik boyutların girilmesi',
          problems: [
            'Birincil belgelere analitik etiketlerin manuel girilmesi',
            'Artan veri giriş yükü',
            'Yüksek insan hatası riski',
          ],
          solutionTitle: 'Dolaylı göstergelerle yapay zekâ analitiği',
          solutions: [
            'Yapay zekâ, metin alanlarından ve ilişkili belgelerden analitik bilgi çıkarır',
            'Muhasebe, rapor hazırlığına değil yasal uyumluluğa odaklanır',
          ],
        },
      ],
    },
    about: {
      heading: 'Yönetici talebinden içgörüye dakikalar içinde',
      points: [
        'Mevcut sistemlerinizin (muhasebe, Excel, CRM, veritabanları, veri ambarları) üzerine kurulan, sürekli güncellenen ve gerçek zamanlı analitik sağlayan veri katmanı',
        'Yönetici soruları dakikalar içinde yanıtlanır',
        '24 saatlik gecikmenin kâr kaybı anlamına geldiği durumlar için yapay zekâ destekli bir araç',
      ],
      howHeading: 'Nasıl çalışır?',
      steps: [
        'Sorunuzu doğal dilde sorarsınız: “Geçen ayın gelirini cari hesaplara göre kırılımlı göster”',
        'TurboHUB, kurumsal sistemlerinizden beslenen ve sürekli güncellenen operasyonel bir veri katmanı tutar',
        'Tüm kaynaklardaki veriler yapay zekâ ile tek bir katmanda birleştirilir',
        'Sistem yapılandırılmış ve aksiyona dönüştürülebilir bir cevap üretir',
      ],
    },
    benefits: {
      heading: 'Temel iş faydaları',
      items: [
        { value: '5+ gün → 2 dk', label: 'Talepten rapora geçen sürede kısalma' },
        { value: '%100', label: 'Rapor özelleştirme maliyetlerinin ortadan kalkması' },
        { value: '2+ FTE', label: 'Açığa çıkan analist kapasitesi' },
      ],
      note:
        'TurboHUB, uzun veri hazırlama süreçlerini ve tek tek çalışanların uzmanlığına bağımlılığı ortadan kaldırır. Sistemi kullanmak için özel beceri veya eğitim gerekmez.',
      disclaimer:
        'Rakamlar TurboHUB ürün materyallerine dayanmaktadır. Gerçek sonuçlar veri kaynaklarınıza, veri kalitenize ve proje kapsamına göre değişir.',
    },
    deployment: {
      heading: 'Esnek kurulum seçenekleri',
      description:
        'TurboHUB kendi altyapınızda çalışabilir, önceden yapılandırılmış bir donanım-yazılım paketi olarak teslim edilebilir veya bulutta barındırılabilir.',
      options: [
        {
          title: 'Kurum içi (on-premise)',
          description:
            'Kendi fiziksel sunucularınıza veya sanal makinelerinize kurulur. Çözümün konteynerlerde çalışabilmesi için ortamın sanallaştırmayı desteklemesi gerekir.',
          specs: [
            'Minimum (1–2 kullanıcı): Intel Core i7, 128 GB RAM, 4 TB SSD, RTX 3060 / 4090 / 5090',
            'Pilot (1–10 kullanıcı): Intel Core i9, 128 GB RAM, 8 TB SSD, Tesla P40 / A40 / A100',
            'Kurumsal (100+ kullanıcı): Intel Xeon Platinum, 512 GB RAM, 16 TB SSD, NVIDIA A100 / H100 / H200 veya 4× L40',
          ],
        },
        {
          title: 'Donanım-yazılım paketi',
          description:
            'Gerekli sunucular mevcut değilse TurboHUB, altyapınıza yerleştirilecek özel donanım üzerinde kurulu ve yapılandırılmış olarak teslim edilebilir.',
          specs: [
            'Kompakt yapay zekâ süper bilgisayarı: NVIDIA DGX Spark',
            '405 milyar parametreye kadar modeller için iki düğümlü DGX Spark kümesi',
            'Verileriniz kurumunuzun içinde kalır',
          ],
        },
        {
          title: 'Bulut (SaaS)',
          description:
            'Yeni sistemlerin kurum içinde barındırılması mümkün değilse TurboHUB, kiralanan özel sunucular üzerinde hizmet olarak sunulabilir.',
          specs: [
            'Yerel LLM çalıştırmak için GPU’lu sunucular',
            'Bulut LLM abonelikleriyle birlikte GPU’suz sunucular',
            'İhtiyaçlarınıza göre boyutlandırılan sunucu yapılandırması',
          ],
        },
      ],
      note: 'Donanım yapılandırmaları yol gösterici niteliktedir ve kapsam belirleme sırasında ekibinizle birlikte netleştirilir.',
    },
    contact: {
      heading: 'Denemeye hazır mısınız?',
      subheading: 'Bir demoyla başlayalım',
      description: '15 dakikada sistemin nasıl kullanıldığını ve yaratabileceği etkiyi gösterelim.',
      name: 'Elena Türkmen',
      role: 'TurboHUB İletişim',
      email: 'elena.turkmen@aikitchen.com.tr',
      emailCta: 'E-posta Gönderin',
      formCta: 'Demo Talep Edin',
    },
  },

  contact: {
    hero: {
      title: 'İletişime Geçin',
      description:
        'Süreçlerinizi birlikte inceleyelim; hazır senaryo mu, özel kurulum mu daha doğru birlikte belirleyelim.',
    },
    form: {
      fullName: 'Ad Soyad',
      company: 'Şirket',
      email: 'İş E-postası',
      phone: 'Telefon',
      message: 'Nasıl yardımcı olabiliriz?',
      solution: 'İlgi Alanı',
      selectSolution: 'Bir konu seçin...',
      submit: 'Talep Gönder',
      submitting: 'Gönderiliyor...',
      success: 'Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      required: 'Bu alan zorunludur',
      invalidEmail: 'Lütfen geçerli bir e-posta adresi girin',
      placeholderName: 'Adınızı ve soyadınızı yazın',
      placeholderCompany: 'Şirket adınızı yazın',
      placeholderEmail: 'ornek@sirketiniz.com',
      placeholderPhone: '+90 5xx xxx xx xx',
      placeholderMessage: 'Otomatikleştirmek istediğiniz süreçleri kısaca anlatın',
      optionFinancial: 'Finans Operasyonları',
      optionAp: 'Fatura ve Ödeme Süreçleri',
      optionLegal: 'Hukuki Belge Süreçleri',
      optionTourism: 'Turizm ve Müşteri Operasyonları',
      optionTurbohub: 'TurboHUB — Yapay Zekâ ile Yönetim Analitiği',
      optionOther: 'Diğer',
    },
    info: {
      contact: 'İletişim Bilgileri',
      email: 'support@aikitchen.com.tr',
      emailLabel: 'E-posta',
      phone: '',
      phoneLabel: 'Telefon',
      address: 'Kurumsal Otomasyon Platformu',
      addressLabel: 'Merkez',
      hours: 'Pazartesi - Cuma, 09:00 - 18:00',
      response: 'Talebinizi aldıktan sonra en kısa sürede dönüş yapıyoruz',
    },
    cta: {
      heading: 'Kurumsal Otomasyonda Bir Sonraki Adıma Hazır mısınız?',
      description:
        'Manuel iş yükünü azaltan, ölçülebilir ve sürdürülebilir bir otomasyon yapısını birlikte kuralım.',
      button: 'Görüşme Başlat',
    },
  },
};

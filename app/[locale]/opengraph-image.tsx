import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'AI Kitchen';

const copy = {
  tr: {
    title: 'Tekrarlanan ofis işlerini yazılım robotlarına devredin',
    subtitle: 'RPA ve yapay zekâ ile süreç otomasyonu · TurboHUB ile yönetim analitiği',
  },
  en: {
    title: 'Hand off repetitive back-office work to software robots',
    subtitle: 'Process automation with RPA and AI · Management analytics with TurboHUB',
  },
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const text = locale === 'en' ? copy.en : copy.tr;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          // Satori rejects multi-layer `background` shorthand; color and gradient must be set separately.
          backgroundColor: '#0b0d2a',
          backgroundImage: 'radial-gradient(circle at 90% 10%, #5b21b6 0%, rgba(91,33,182,0) 45%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            AK
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>AI Kitchen</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>{text.title}</div>
          <div style={{ fontSize: 30, color: '#c7d2fe', maxWidth: 980 }}>{text.subtitle}</div>
        </div>
        <div style={{ fontSize: 26, color: '#a5b4fc' }}>aikitchen.com.tr</div>
      </div>
    ),
    size,
  );
}

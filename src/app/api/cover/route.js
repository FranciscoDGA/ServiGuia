import { ImageResponse } from 'next/og';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const rawTitle = (searchParams.get('title') || 'Guia de Direitos do Servidor Público').slice(0, 110);
  const category = (searchParams.get('category') || 'ServGuia • RPPS & Direitos').slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background: 'linear-gradient(135deg, #09182a 0%, #1a365d 55%, #2b6cb0 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(236, 201, 75, 0.16)',
              border: '1px solid rgba(236, 201, 75, 0.45)',
              color: '#ecc94b',
              padding: '10px 22px',
              borderRadius: '999px',
              fontSize: '22px',
              fontWeight: 700,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Serv<span style={{ color: '#ecc94b' }}>Guia</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: rawTitle.length > 70 ? '44px' : '52px',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            maxWidth: '1050px',
          }}
        >
          {rawTitle}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.18)',
            paddingTop: '22px',
            fontSize: '22px',
            color: '#cbd5e1',
          }}
        >
          <span>Portal do Servidor Público • Base CF/88, EC 103/2019 e STF/STJ</span>
          <span style={{ color: '#ecc94b', fontWeight: 700 }}>Guia Prático</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    }
  );
}

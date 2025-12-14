import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: '#171717',
        color: '#FFFFFF',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
      }}
    >
      <div style={{ fontSize: 48, opacity: 0.6 }}>Petr Rajtslegr</div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Software Developer
        </div>

        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
          }}
        >
          I build modern web applications and experiences with a focus on
          performance, accessibility, and user experience.
        </div>
      </div>

      <div style={{ fontSize: 32 }}>rajtslegr.dev</div>
    </div>,
    { ...size },
  );
}

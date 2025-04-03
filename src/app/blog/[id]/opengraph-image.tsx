import { ImageResponse } from 'next/og';

import { getPostMetadata } from '@/lib/meta-posts';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const postData = await getPostMetadata(params.id);

  if (!postData) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            background: '#171717',
            color: '#FFFFFF',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div style={{ fontSize: 48, opacity: 0.6, marginBottom: '40px' }}>
            Petr Rajtslegr
          </div>
          <div>Post Not Found</div>
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
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
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: '20px',
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {postData.title}
          </div>

          {postData.description && (
            <div
              style={{
                fontSize: 32,
                opacity: 0.8,
                maxWidth: '800px',
              }}
            >
              {postData.description}
            </div>
          )}
        </div>

        <div
          style={{
            fontSize: 32,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '20px',
          }}
        >
          <div>rajtslegr.dev</div>
          <div>
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

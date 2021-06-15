import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import LastFm from 'components/LastFm';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { cache, SWRConfig } from 'swr';
import { render } from 'test/test-utils';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} />
));

describe('LastFm', () => {
  enableFetchMocks();
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  afterEach(async () => {
    await waitFor(() => cache.clear());
  });

  test('should render image', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        recenttracks: {
          track: [
            {
              artist: {
                mbid: '78ef0c47-d5a1-49aa-a4cb-36ef98eaec72',
                '#text': 'The Flying Eyes',
              },
              album: {
                mbid: '4e82f203-cd00-4a01-ac40-520365070cc8',
                '#text': 'Done So Wrong',
              },
              image: [
                {
                  size: 'small',
                  '#text':
                    'https://lastfm.freetls.fastly.net/i/u/34s/a8d2e6860e60460fc69f0e00be585ffc.jpg',
                },
                {
                  size: 'medium',
                  '#text':
                    'https://lastfm.freetls.fastly.net/i/u/64s/a8d2e6860e60460fc69f0e00be585ffc.jpg',
                },
                {
                  size: 'large',
                  '#text':
                    'https://lastfm.freetls.fastly.net/i/u/174s/a8d2e6860e60460fc69f0e00be585ffc.jpg',
                },
                {
                  size: 'extralarge',
                  '#text':
                    'https://lastfm.freetls.fastly.net/i/u/300x300/a8d2e6860e60460fc69f0e00be585ffc.jpg',
                },
              ],
              streamable: '0',
              date: {
                uts: '1622271714',
                '#text': '29 May 2021, 07:01',
              },
              url: 'https://www.last.fm/music/The+Flying+Eyes/_/Poison+The+Well',
              name: 'Poison The Well',
              mbid: 'edad8395-7636-3b53-afb4-24a9a485b18a',
            },
          ],
        },
      }),
    );

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <LastFm />
      </SWRConfig>,
    );

    const image = await screen.findByAltText('Album art');
    expect(image).toBeInTheDocument();
  });

  it('should render skeleton', () => {
    fetchMock.mockResponseOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ body: 'ok' }), 100),
        ),
    );

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <LastFm />
      </SWRConfig>,
    );

    const text = screen.queryByText('Error fetching data from Last.fm.');
    expect(text).not.toBeInTheDocument();
    const image = screen.queryByAltText('Album art');
    expect(image).not.toBeInTheDocument();
  });

  it('should render error message', async () => {
    fetchMock.mockReject(() => Promise.reject('Error'));

    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <LastFm />
      </SWRConfig>,
    );

    const text = await screen.findByText('Error fetching data from Last.fm.');
    expect(text).toBeInTheDocument();
  });
});

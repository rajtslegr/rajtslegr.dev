import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Instagram, { Props } from '../../components/Instagram';

describe('Instagram', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      data: {
        data: [
          {
            caption: '#instagram',
            id: '1',
            thumbnail_url: undefined,
            media_url: 'https://www.instagram.com/',
            permalink: 'https://www.instagram.com/',
          },
        ],
      },
    };
  });

  test('should render instagram image', () => {
    const { getByAltText } = render(<Instagram data={expectedProps.data} />);

    const image = getByAltText('#instagram');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://www.instagram.com/');
  });

  test('should use thumbnail_url if media_url is not present', () => {
    expectedProps.data!.data[0].media_url = undefined;
    expectedProps.data!.data[0].thumbnail_url = 'https://www.instagram.com/';

    const { getByAltText } = render(<Instagram data={expectedProps.data} />);

    const image = getByAltText('#instagram');
    expect(image).toHaveAttribute('src', 'https://www.instagram.com/');
  });

  test('should render only 9 image elements', () => {
    for (let i = 0; i < 12; i++) {
      expectedProps.data!.data[i] = {
        caption: '#instagram',
        id: (i + 1).toString(),
        thumbnail_url: undefined,
        media_url: 'https://www.instagram.com/',
        permalink: 'https://www.instagram.com/',
      };
    }

    const { getAllByRole } = render(<Instagram data={expectedProps.data} />);

    const images = getAllByRole('img');
    expect(images).toHaveLength(9);
  });
});

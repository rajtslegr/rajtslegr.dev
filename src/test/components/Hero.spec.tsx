import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '@/components/hero/Hero';
import { render } from '@/test/test-utils';

jest.mock('next/image', () => ({ alt }: { alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/static/images/hero.jpg" alt={alt} />
));

describe('Hero', () => {
  it('should contain hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

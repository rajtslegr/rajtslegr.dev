import Hero from '@/components/Hero';
import heroCode from '@/data/hero-code';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

jest.mock('next/image', () => ({ alt }: { alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/static/images/hero.jpg" alt={alt} />
));

describe('Hero', () => {
  it('should contain hero image', () => {
    render(<Hero heroCode={heroCode} />);

    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

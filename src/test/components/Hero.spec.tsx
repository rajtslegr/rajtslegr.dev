import Hero from '@/components/hero/Hero';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

jest.mock('next/image', () => ({ alt }: { alt: string }) => (
  <img src="/static/images/hero.jpg" alt={alt} />
));

describe('Hero', () => {
  it('should contain hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

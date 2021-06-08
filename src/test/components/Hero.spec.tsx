import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Hero from '../../components/Hero';
import heroCode from '../../data/hero-code';
import { render } from '../test-utils';

describe('Hero', () => {
  it('should contain hero image', () => {
    render(<Hero heroCode={heroCode} />);

    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

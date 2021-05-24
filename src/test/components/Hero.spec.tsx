import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Hero from '../../components/Hero';
import heroCode from '../../data/heroCode';

describe('Hero', () => {
  test('should contain hero image', () => {
    const { getByAltText } = render(<Hero heroCode={heroCode} />);

    const heroImage = getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
  });
});

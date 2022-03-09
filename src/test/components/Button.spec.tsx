import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import Button from '@/components/buttons/Button';

describe('Button', () => {
  it('should contain given children', () => {
    const innerHTML = 'My name is button!';
    render(<Button>{innerHTML}</Button>);

    const buttonByText = screen.getByText(innerHTML);
    expect(buttonByText).toBeInTheDocument();
  });
});

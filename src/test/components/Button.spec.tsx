import Button from '@/components/ui/Button';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';

describe('button', () => {
  it('should contain given children', () => {
    const innerHTML = 'My name is button!';
    render(<Button>{innerHTML}</Button>);

    const buttonByText = screen.getByText(innerHTML);
    expect(buttonByText).toBeInTheDocument();
  });
});

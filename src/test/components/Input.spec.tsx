import Input from '@/components/ui/Input';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';

describe('Input', () => {
  it('should contain render input', () => {
    render(<Input label="Cute input" />);

    const inputByLabel = screen.getByLabelText('Cute input');
    expect(inputByLabel).toBeInTheDocument();
  });
});

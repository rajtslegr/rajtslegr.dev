import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import Input from '@/components/form/Input';

describe('Input', () => {
  it('should contain render input', () => {
    render(<Input label="Cute input" />);

    const inputByLabel = screen.getByLabelText('Cute input');
    expect(inputByLabel).toBeInTheDocument();
  });
});

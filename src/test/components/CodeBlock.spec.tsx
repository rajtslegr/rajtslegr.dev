import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import CodeBlock, { Props } from '../../components/CodeBlock';
import heroCode from '../../data/hero-code';
import { render } from '../test-utils';

describe('CodeBlock', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      code: heroCode,
    };
  });

  it('should render code', () => {
    render(<CodeBlock {...expectedProps} />);

    const code = screen.getByText(expectedProps.code[0]);
    expect(code).toBeVisible();
  });

  it('should render comment', () => {
    expectedProps = { code: ['// Comment'] };
    render(<CodeBlock {...expectedProps} />);

    const code = screen.getByText(expectedProps.code[0]);
    expect(code).toHaveClass('text-gray-500');
  });
});

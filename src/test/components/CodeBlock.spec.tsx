import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CodeBlock, { Props } from '../../components/CodeBlock';
import heroCode from '../../data/heroCode';

describe('CodeBlock', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      code: heroCode,
    };
  });

  test('should render code', () => {
    const { getByText } = render(<CodeBlock {...expectedProps} />);

    const code = getByText(expectedProps.code[0]);
    expect(code).toBeVisible();
  });

  test('should render comment', () => {
    expectedProps = { code: ['// Comment'] };
    const { getByText } = render(<CodeBlock {...expectedProps} />);

    const code = getByText(expectedProps.code[0]);
    expect(code).toHaveClass('text-gray-500');
  });
});

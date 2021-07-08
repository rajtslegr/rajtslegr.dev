import CodeBlock, { Props } from '@/components/ui/CodeBlock';
import heroCode from '@/data/hero-code';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

jest.mock('next/image', () => ({ alt }: { alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/static/images/hero.jpg" alt={alt} />
));

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

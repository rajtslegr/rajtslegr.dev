import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import Footer from 'components/Footer';
import { render } from 'test/test-utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Footer', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should navigate properly', () => {
    render(<Footer />);

    fireEvent.click(screen.getByText('Home'));
    expect(push).toHaveBeenCalledWith('/', '/', expect.anything());
    fireEvent.click(screen.getByText('Projects'));
    expect(push).toHaveBeenCalledWith(
      '/projects',
      '/projects',
      expect.anything(),
    );
    fireEvent.click(screen.getByText('Blog'));
    expect(push).toHaveBeenCalledWith('/blog', '/blog', expect.anything());
    fireEvent.click(screen.getByText('Contact'));
    expect(push).toHaveBeenCalledWith(
      '/contact',
      '/contact',
      expect.anything(),
    );
  });

  it('should contain current year', () => {
    render(<Footer />);

    const curYear = screen.getByText(
      new RegExp(new Date().getFullYear().toString(), 'i'),
    );
    expect(curYear).toBeInTheDocument();
  });
});

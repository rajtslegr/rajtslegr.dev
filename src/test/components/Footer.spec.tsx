import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Footer from '../../components/Footer';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Footer', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  test('should navigate properly', () => {
    const { getByText } = render(<Footer />);

    fireEvent.click(getByText('Home'));
    expect(push).toHaveBeenCalledWith('/', '/', expect.anything());
    fireEvent.click(getByText('Projects'));
    expect(push).toHaveBeenCalledWith(
      '/projects',
      '/projects',
      expect.anything(),
    );
    fireEvent.click(getByText('Blog'));
    expect(push).toHaveBeenCalledWith('/blog', '/blog', expect.anything());
    fireEvent.click(getByText('Contact'));
    expect(push).toHaveBeenCalledWith(
      '/contact',
      '/contact',
      expect.anything(),
    );
  });

  test('should countain heart emoji', () => {
    const { getByLabelText } = render(<Footer />);

    const emoji = getByLabelText('Hearth emoji');
    expect(emoji).toBeInTheDocument();
  });

  test('should containt current year', () => {
    const { getByText } = render(<Footer />);

    const curYear = getByText(
      new RegExp(new Date().getFullYear().toString(), 'i'),
    );
    expect(curYear).toBeInTheDocument();
  });
});

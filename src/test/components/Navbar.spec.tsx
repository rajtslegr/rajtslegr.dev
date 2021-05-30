import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import NavBar from '../../components/NavBar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let mockOnTop = true;
jest.mock('../../hooks/useOnTop', () => ({
  __esModule: true,
  default: () => mockOnTop,
}));

describe('NavBar', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should navigate properly', () => {
    const { getByText } = render(<NavBar />);

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

  it('should render shadow on scroll', async () => {
    const { getByRole } = render(<NavBar />);

    const nav = getByRole('navigation');
    expect(nav).not.toHaveClass('shadow');
    fireEvent.scroll(window, { target: { pageYOffset: 300 } });
    waitFor(() => {
      expect(nav).toHaveClass('shadow');
    });
  });
});

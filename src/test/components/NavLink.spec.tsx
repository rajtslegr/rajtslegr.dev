import NavLink from '@/components/ui/NavLink';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('NavLink', () => {
  const selectedClass =
    'text-gray-500 transition dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300';

  const pathname = '/';
  useRouter.mockImplementation(() => ({
    pathname,
  }));

  it('should not use class on same link as current route', () => {
    render(<NavLink href="/">Navigation Link</NavLink>);

    const navLink = screen.getByRole('link');
    expect(navLink).not.toHaveClass(selectedClass);
  });

  it('should use class on different link than current route', () => {
    render(<NavLink href="/projects">Navigation Link</NavLink>);

    const navLink = screen.getByRole('link');
    expect(navLink).toHaveClass(selectedClass);
  });
});

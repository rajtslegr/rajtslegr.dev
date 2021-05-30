import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Layout from '../../components/Layout';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Layout', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should have main element in structure', () => {
    const { getByRole } = render(
      <Layout>
        <p>Children Mock</p>
      </Layout>,
    );

    const main = getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

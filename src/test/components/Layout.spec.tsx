import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Layout from '../../components/Layout';
import { render } from '../test-utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Layout', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should have main element in structure', () => {
    render(
      <Layout>
        <p>Children Mock</p>
      </Layout>,
    );

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

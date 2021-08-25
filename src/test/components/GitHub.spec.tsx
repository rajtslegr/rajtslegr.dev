import GitHub, { Props } from '@/components/GitHub';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

describe('GitHub', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      data: [
        {
          node_id: 'MDEwOlJlcG9zaXRvcnkzNTAwMDIzODQ=',
          full_name: 'rajtslegr/rajtslegr.com',
          html_url: 'https://github.com/rajtslegr/rajtslegr.com',
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
        },
      ],
    };
  });

  it('should render github card', () => {
    render(<GitHub data={expectedProps.data} />);

    const text = screen.getByText(/rajtslegr/);
    expect(text).toBeInTheDocument();
  });

  it('should render error message', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectedProps.data! = undefined!;

    render(<GitHub data={expectedProps.data} />);

    const text = screen.getByText('Error fetching data from GitHub.');
    expect(text).toBeInTheDocument();
  });
});

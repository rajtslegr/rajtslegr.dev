import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import GitHub, { Props } from '../../components/GitHub';

describe('GitHub', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      data: [
        {
          node_id: 'MDEwOlJlcG9zaXRvcnkzNTAwMDIzODQ=',
          full_name: 'RajceP/rajtslegr.com',
          html_url: 'https://github.com/RajceP/rajtslegr.com',
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
        },
      ],
    };
  });

  it('should render github card', () => {
    const { getByText } = render(<GitHub data={expectedProps.data} />);

    const text = getByText(/RajceP/);
    expect(text).toBeInTheDocument();
  });

  it('should render error message', () => {
    expectedProps.data! = undefined!;

    const { getByText } = render(<GitHub data={expectedProps.data} />);

    const text = getByText('Error fetching data from GitHub.');
    expect(text).toBeInTheDocument();
  });
});

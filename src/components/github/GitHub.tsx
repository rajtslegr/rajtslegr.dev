import { ReactNode } from 'react';

import MotionSection from '../layout/MotionSection';
import GitHubCard from './GitHubCard';
import { GitHubData } from '@/types/entities';

export interface Props {
  data?: GitHubData[];
}

const GitHub: React.FC<Props> = ({ data }) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from GitHub.
    </p>
  );

  if (Array.isArray(data)) {
    render = (
      <div className="grid gap-4 lg:grid-cols-2">
        {data?.map(
          (
            {
              node_id,
              full_name,
              html_url,
              language,
              stargazers_count,
              watchers_count,
            },
            index,
          ) => (
            <GitHubCard
              index={index}
              key={node_id}
              link={html_url}
              language={language}
              stars={stargazers_count}
              watches={watchers_count}
            >
              {full_name}
            </GitHubCard>
          ),
        )}
      </div>
    );
  }

  return (
    <div>
      <MotionSection delay={0.3}>
        <h2 className="mt-12 mb-4 text-3xl font-bold dark:text-gray-100">
          GitHub
        </h2>
      </MotionSection>
      {render}
    </div>
  );
};

export default GitHub;

import { DocumentIcon, EyeIcon, StarIcon } from '@heroicons/react/solid';
import { IGitHubData } from 'types/types';

interface IGitHubCard {
  children: string;
  link: string;
  language: string;
  stars: number;
  watches: number;
}

export interface Props {
  data?: IGitHubData[];
}

const GitHubCard: React.FC<IGitHubCard> = ({
  children,
  link,
  language,
  stars,
  watches,
}) => (
  <div className="flex flex-col p-2 transition bg-white rounded shadow dark:bg-card hover:shadow-lg">
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex flex-row h-6">
        <DocumentIcon />
        <span className="text-lg">{children}</span>
      </div>
      <div className="flex flex-row h-6 text-gray-500 dark:text-gray-400">
        <span>{language}</span>
        <div className="flex justify-end flex-grow space-x-2">
          <StarIcon />
          <span>{stars}</span>
          <EyeIcon />
          <span>{watches}</span>
        </div>
      </div>
    </a>
  </div>
);

const GitHub: React.FC<Props> = ({ data }) => {
  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from GitHub.
    </p>
  );

  if (Array.isArray(data)) {
    render = (
      <>
        <div className="grid gap-4 xl:grid-cols-2">
          {data?.map(
            ({
              node_id,
              full_name,
              html_url,
              language,
              stargazers_count,
              watchers_count,
            }) => (
              <GitHubCard
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
      </>
    );
  }

  return (
    <>
      <p className="my-4 text-4xl">GitHub</p>
      {render}
    </>
  );
};

export default GitHub;

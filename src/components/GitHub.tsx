import { IGitHubData } from '../types/types';

interface IGitHubCard {
  children: string;
  link: string;
  language: string;
  stars: number;
  watches: number;
}

interface Props {
  data?: IGitHubData[];
}

const DocIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const eyeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);

const GitHubCard: React.FC<IGitHubCard> = ({
  children,
  link,
  language,
  stars,
  watches,
}) => (
  <div className="flex flex-col p-2 transition border border-gray-200 rounded shadow hover:shadow-lg">
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex flex-row h-6">
        {DocIcon}
        <span className="text-lg">{children}</span>
      </div>
      <div className="flex flex-row h-6 text-gray-500 dark:text-gray-400">
        <span>{language}</span>
        <div className="flex justify-end flex-grow space-x-2">
          {StarIcon}
          <span>{stars}</span>
          {eyeIcon}
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
      <p className="mb-4 text-4xl">GitHub</p>
      {render}
    </>
  );
};

export default GitHub;

import { DocumentIcon, EyeIcon, StarIcon } from '@heroicons/react/20/solid';

interface IGitHubCard {
  children: string;
  link: string;
  language: string;
  stars: number;
  watches: number;
}

const GitHubCard = ({
  children,
  link,
  language,
  stars,
  watches,
}: IGitHubCard) => (
  <div className="card-hover group bg-card-light dark:bg-card rounded-md border border-gray-200/30 p-4 dark:border-gray-800/30">
    <a href={link} rel="noopener noreferrer" target="_blank" className="block">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <DocumentIcon className="mr-2 size-5 shrink-0 text-gray-500 dark:text-gray-400" />
          <h3
            className="truncate text-base font-medium text-black group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200"
            title={children}
          >
            {children}
          </h3>
        </div>

        <div className="flex items-center justify-between text-sm">
          {language ? (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {language}
            </span>
          ) : (
            <span></span>
          )}

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <StarIcon className="mr-1 size-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{stars}</span>
            </div>
            <div className="flex items-center">
              <EyeIcon className="mr-1 size-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">
                {watches}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default GitHubCard;

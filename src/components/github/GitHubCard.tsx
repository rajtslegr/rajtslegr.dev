import { DocumentIcon, EyeIcon, StarIcon } from '@heroicons/react/solid';

interface IGitHubCard {
  children: string;
  link: string;
  language: string;
  stars: number;
  watches: number;
}

const GitHubCard: React.FC<IGitHubCard> = ({
  children,
  link,
  language,
  stars,
  watches,
}) => (
  <div className="flex overflow-hidden flex-col p-2 bg-white dark:bg-card rounded-lg shadow">
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex flex-row h-6 dark:text-gray-100">
        <DocumentIcon />
        <h3 className="text-lg font-semibold truncate">{children}</h3>
      </div>
      <div className="flex flex-row h-6" />
      <div className="flex flex-row h-6 text-gray-500 dark:text-gray-400">
        <p>{language}</p>
        <div className="flex grow justify-end space-x-2">
          <StarIcon />
          <span>{stars}</span>
          <EyeIcon />
          <span>{watches}</span>
        </div>
      </div>
    </a>
  </div>
);

export default GitHubCard;

import { DocumentIcon, EyeIcon, StarIcon } from '@heroicons/react/20/solid';

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
  <div className="flex flex-col overflow-hidden rounded-lg bg-white p-2 shadow motion-safe:transition-all motion-safe:hover:scale-105 dark:bg-card">
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex h-6 flex-row dark:text-gray-100">
        <DocumentIcon />
        <h3 className="truncate text-lg font-semibold" title={children}>
          {children}
        </h3>
      </div>
      <div className="flex h-6 flex-row" />
      <div className="flex h-6 flex-row text-gray-500 dark:text-gray-400">
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

import { DocumentIcon, EyeIcon, StarIcon } from '@heroicons/react/solid';
import MotionSection from '../layout/MotionSection';

interface IGitHubCard {
  children: string;
  index: number;
  link: string;
  language: string;
  stars: number;
  watches: number;
}

const GitHubCard: React.FC<IGitHubCard> = ({
  children,
  index,
  link,
  language,
  stars,
  watches,
}) => (
  <MotionSection
    delay={index / 10 + 0.3}
    className="flex flex-col p-2 bg-white rounded shadow dark:bg-card "
  >
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex flex-row h-6 dark:text-gray-100">
        <DocumentIcon />
        <h3 className="text-lg font-semibold">{children}</h3>
      </div>
      <div className="flex flex-row h-6" />
      <div className="flex flex-row h-6 text-gray-500 dark:text-gray-400">
        <p>{language}</p>
        <div className="flex justify-end flex-grow space-x-2">
          <StarIcon />
          <span>{stars}</span>
          <EyeIcon />
          <span>{watches}</span>
        </div>
      </div>
    </a>
  </MotionSection>
);

export default GitHubCard;

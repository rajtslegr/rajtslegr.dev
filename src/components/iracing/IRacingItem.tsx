import { TrophyIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import { IRacingAccount, IRacingRating } from '@/types/entities';

interface IRacingItemProps {
  account: IRacingAccount;
}

const IRacingRatingBadge = ({ rating }: { rating: IRacingRating }) => {
  const getColorClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'road':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'oval':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'dirt road':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'dirt oval':
        return 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium',
        getColorClass(rating.category),
      )}
    >
      <TrophyIcon className="size-3" />
      <span>
        {rating.category}: {rating.ratingDisplayAs}
      </span>
    </div>
  );
};

const IRacingItem = ({ account }: IRacingItemProps) => {
  return (
    <div className="card-hover rounded-md border border-gray-200/30 bg-card-light p-4 dark:border-gray-800/30 dark:bg-card">
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium text-black dark:text-white">
          {account.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ID: {account.id}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {account.ratings &&
            account.ratings.map((rating) => (
              <IRacingRatingBadge
                key={`${rating.category}-${rating.type}`}
                rating={rating}
              />
            ))}
          {!account.ratings && (
            <span className="text-sm italic text-gray-500">
              No ratings available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default IRacingItem;

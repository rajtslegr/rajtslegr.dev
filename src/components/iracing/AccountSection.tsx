import type { IRacingAccountsResponse, IRacingRating } from '@/types/entities';

interface AccountSectionProps {
  accountsData?: IRacingAccountsResponse;
}

const AccountSection = ({ accountsData }: AccountSectionProps) => {
  if (!accountsData || !accountsData.items || accountsData.items.length === 0) {
    return null;
  }

  const account = accountsData.items[0];

  const filteredRatings = account.ratings?.filter((rating) => {
    const category = rating.category.toLowerCase();
    return category.includes('sports') || category.includes('formula');
  });

  const sortedRatings = filteredRatings?.sort((a, b) => {
    const categoryA = a.category.toLowerCase();
    const categoryB = b.category.toLowerCase();

    if (categoryA !== categoryB) {
      return categoryA.includes('sports') ? -1 : 1;
    }

    const isASR = a.ratingDisplayAs.trim().indexOf(' ') > 0;
    const isBSR = b.ratingDisplayAs.trim().indexOf(' ') > 0;

    if (isASR !== isBSR) {
      return isASR ? 1 : -1;
    }

    return 0;
  });

  const categoryGroups: Record<string, IRacingRating[]> = {};
  sortedRatings?.forEach((rating) => {
    const category = rating.category.toLowerCase().includes('sports')
      ? 'sports'
      : 'formula';
    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }
    categoryGroups[category].push(rating);
  });

  const formatCategory = (category: string) => {
    return category === 'sports' ? 'Sports Car' : 'Formula Car';
  };

  const getLicenseColor = (license: string) => {
    switch (license) {
      case 'A':
        return 'bg-blue-700';
      case 'B':
        return 'bg-green-600';
      case 'C':
        return 'bg-yellow-500';
      case 'D':
        return 'bg-orange-600';
      case 'R':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {Object.entries(categoryGroups).map(([category, ratings]) => {
        const iRating = ratings.find((r) => !r.ratingDisplayAs.includes(' '));
        const safetyRating = ratings.find((r) =>
          r.ratingDisplayAs.includes(' '),
        );

        if (!iRating && !safetyRating) return null;

        return (
          <div
            key={category}
            className="bg-card-light dark:bg-card rounded-md border border-gray-200/30 p-4 dark:border-gray-800/30"
          >
            <h3
              className={`mb-2 text-sm font-medium text-gray-600 dark:text-gray-400`}
            >
              {formatCategory(category)}
            </h3>

            <div className="flex items-center justify-between">
              {iRating && (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    iRating
                  </span>
                  <span className="text-xl font-bold text-black dark:text-white">
                    {iRating.ratingDisplayAs}
                  </span>
                </div>
              )}

              {safetyRating && (
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    License
                  </span>
                  <div className="flex items-center">
                    {safetyRating.ratingDisplayAs
                      .split(' ')
                      .map((part, index) => {
                        if (index === 0) {
                          return (
                            <span
                              key={index}
                              className={`mr-1.5 flex size-7 items-center justify-center rounded-full font-bold text-white ${getLicenseColor(part)}`}
                            >
                              {part}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={index}
                            className="text-lg font-medium text-black dark:text-white"
                          >
                            {part}
                          </span>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountSection;

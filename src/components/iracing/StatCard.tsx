import { ReactNode } from 'react';

import clsx from 'clsx';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  suffix?: string;
  className?: string;
}

const StatCard = ({
  icon,
  title,
  value,
  suffix = '',
  className = '',
}: StatCardProps) => (
  <div
    className={clsx(
      'rounded-md border border-gray-200/30 bg-card-light p-3 dark:border-gray-800/30 dark:bg-card',
      className,
    )}
  >
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-gray-100 p-1.5 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-base font-medium text-black dark:text-white">
          {value}
          {suffix && <span className="text-xs text-gray-500">{suffix}</span>}
        </p>
      </div>
    </div>
  </div>
);

export default StatCard;

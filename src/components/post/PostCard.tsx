import Link from 'next/link';

import { PostData } from '@/types/entities';
import { parseDate } from '@/utils/date';

interface PostCardProps {
  post: PostData;
}

const PostCard = ({
  post: { id, date, title, description, readingTime, views },
}: PostCardProps) => (
  <Link href={`/blog/${id}`} passHref className="group">
    <div className="card-hover bg-card-light dark:bg-card h-full rounded-md border border-gray-200/30 p-5 transition-all duration-200 dark:border-gray-800/30">
      <div className="flex h-full flex-col">
        <h2 className="mb-2 text-lg font-medium text-black group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200">
          {title}
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-500">
          <time dateTime={date} className="inline-block">
            {parseDate(date)}
          </time>
          <span className="mx-1">•</span>
          <span className="inline-block">{readingTime?.text}</span>
          <span className="mx-1">•</span>
          <span className="inline-block">{views} views</span>
        </div>
      </div>
    </div>
  </Link>
);

export default PostCard;

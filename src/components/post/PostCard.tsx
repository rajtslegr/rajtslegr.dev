import Link from 'next/link';

import { PostData } from '@/types/entities';
import parseDate from '@/utils/date';

interface Props {
  post: PostData;
}

const PostCard: React.FC<Props> = ({
  post: { id, date, title, description, readingTime, views },
}) => (
  <Link href={`/blog/${id}`} passHref>
    <div className="flex flex-col p-4 space-y-2 bg-white rounded shadow cursor-pointer dark:bg-card sm:h-64 lg:h-48">
      <h2 className="text-xl font-semibold dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-1"></div>
      <div className="flex flex-row text-gray-500 dark:text-gray-400">
        <p>
          {parseDate(date)}
          {' • '}
          {readingTime?.text}
          {' • '}
          {views} views
        </p>
      </div>
    </div>
  </Link>
);

export default PostCard;

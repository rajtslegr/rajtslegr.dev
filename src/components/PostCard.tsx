import { ISortedPostData } from '@/types/types';
import parseDate from '@/utils/date';
import Link from 'next/link';

interface Props {
  post: ISortedPostData;
}

const PostCard: React.FC<Props> = ({
  post: { id, date, title, description, readingTime },
}) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className="flex flex-col p-4 space-y-2 bg-white rounded shadow cursor-pointer dark:bg-card">
        <h2 className="text-xl font-semibold dark:text-gray-100">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-1"></div>
        <div className="flex flex-row text-gray-500 dark:text-gray-400">
          <p>
            {parseDate(date)}
            {' • '}
            {readingTime.text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

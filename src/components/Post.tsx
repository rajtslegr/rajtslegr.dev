import Link from 'next/link';
import { ISortedPostData } from 'types/types';
import parseDate from 'utils/date';

interface Props {
  post: ISortedPostData;
}

const Post: React.FC<Props> = ({
  post: { id, date, title, description, readingTime },
}) => {
  return (
    <Link href={`/post/${id}`} passHref>
      <div className="flex flex-col p-4 space-y-2 transition bg-white rounded shadow cursor-pointer hover:shadow-lg dark:bg-card">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-row justify-between">
          <span className="text-base text-gray-500 dark:text-gray-400">
            {parseDate(date)}
          </span>
          <span className="text-base text-gray-500 dark:text-gray-400">
            {readingTime.text}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Post;

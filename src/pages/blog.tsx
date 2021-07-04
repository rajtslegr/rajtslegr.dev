import MetaData from 'components/MetaData';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { ISortedPostData } from 'types/types';
import parseDate from 'utils/date';

interface Props {
  allPostsData: ISortedPostData[];
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <h1 className="mb-4 text-4xl font-bold md:mb-12">Blog</h1>
      <ul className="grid w-full gap-4 lg:grid-cols-2">
        {allPostsData.map(({ id, date, title, description, readingTime }) => (
          <li key={id}>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;

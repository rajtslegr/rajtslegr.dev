import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ISortedPostData } from 'types/types';
import parseDate from 'utils/date';

interface Props {
  allPostsData: ISortedPostData[];
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Blog</title>
      </Head>
      <div className="flex flex-col items-center">
        <ul className="w-full space-y-4 lg:w-1/2">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/post/${id}`} passHref>
                <div className="flex flex-col p-4 transition  rounded shadow cursor-pointer hover:shadow-lg bg-white dark:bg-card">
                  <a>
                    <div className="text-xl font-bold">{title}</div>
                    <div className="font-light">{parseDate(date)}</div>
                  </a>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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

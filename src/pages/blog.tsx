import { SearchIcon } from '@heroicons/react/solid';
import Input from 'components/Input';
import MetaData from 'components/MetaData';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { ISortedPostData } from 'types/types';
import parseDate from 'utils/date';

interface Props {
  allPostsData: ISortedPostData[];
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  const [search, setSearch] = useState('');
  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <h1 className="mb-4 text-4xl font-bold md:mb-12">Blog</h1>
      <div className="relative flex flex-col w-full mb-4 md:w-1/3">
        <Input
          label="Search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute w-5 h-5 text-gray-500 right-3 top-[38px] dark:text-gray-400">
          <SearchIcon />
        </span>
      </div>
      <ul className="grid w-full gap-4 lg:grid-cols-2">
        {filteredPosts.map(({ id, date, title, description, readingTime }) => (
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
      {filteredPosts.length < 1 && (
        <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
          These aren&apos;t the droids you&apos;re looking for...
        </p>
      )}
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

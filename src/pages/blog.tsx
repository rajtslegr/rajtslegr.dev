import { SearchIcon } from '@heroicons/react/solid';
import Input from 'components/Input';
import MetaData from 'components/MetaData';
import Post from 'components/Post';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { ISortedPostData } from 'types/types';

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
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12">Blog</h1>
      <div className="relative flex flex-col w-full mb-4 md:w-1/3">
        <Input
          aria-label="Search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute w-5 h-5 text-gray-500 right-3 top-[10px] dark:text-gray-400">
          <SearchIcon />
        </span>
      </div>
      <ul className="grid w-full gap-4 lg:grid-cols-2">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
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

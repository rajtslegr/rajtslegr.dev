import { useState } from 'react';

import { GetStaticProps, NextPage } from 'next';

import { SearchIcon } from '@heroicons/react/solid';

import Input from '@/components/form/Input';
import MetaData from '@/components/meta-data/MetaData';
import PostCard from '@/components/post/PostCard';
import { getSortedPostsData } from '@/lib/posts';
import { PostData } from '@/types/entities';

interface Props {
  allPostsData: PostData[];
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  const [search, setSearch] = useState('');

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Blog
      </h1>
      <div>
        <div className="relative mb-4 flex flex-col md:w-1/3">
          <Input
            aria-label="Search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute top-[10px] right-3 h-5 w-5 text-gray-500 dark:text-gray-400">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
          These aren&apos;t the droids you&apos;re looking for...
        </p>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
    revalidate: 10800,
  };
};

export default Blog;

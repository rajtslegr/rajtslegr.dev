import MetaData from '@/components/MetaData';
import PostCard from '@/components/PostCard';
import Input from '@/components/ui/Input';
import { getSortedPostsData } from '@/lib/posts';
import { PostData } from '@/types/entities';
import { SearchIcon } from '@heroicons/react/solid';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

interface Props {
  allPostsData: PostData[];
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  const [search, setSearch] = useState('');

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Blog
      </h1>
      <div className="relative flex flex-col mb-4 md:w-1/3">
        <Input
          aria-label="Search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute w-5 h-5 text-gray-500 right-3 top-[10px] dark:text-gray-400">
          <SearchIcon />
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
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
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;

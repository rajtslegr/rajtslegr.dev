import { useState } from 'react';

import { GetStaticProps, NextPage } from 'next';

import { SearchIcon } from '@heroicons/react/solid';

import Input from '@/components/form/Input';
import MotionSection from '@/components/layout/MotionSection';
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
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <MotionSection>
        <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
          Blog
        </h1>
      </MotionSection>
      <MotionSection delay={0.1}>
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
      </MotionSection>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <MotionSection key={post.id} delay={index / 10 + 0.2}>
            <PostCard post={post} />
          </MotionSection>
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

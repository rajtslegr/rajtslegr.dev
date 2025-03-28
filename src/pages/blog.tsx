import { useState } from 'react';

import { GetStaticProps, NextPage } from 'next';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import Input from '@/components/form/Input';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import PostCard from '@/components/post/PostCard';
import { getSortedPostsData } from '@/lib/posts';
import { PostData } from '@/types/entities';

interface BlogProps {
  allPostsData: PostData[];
}

const Blog: NextPage<BlogProps> = ({ allPostsData }) => {
  const [search, setSearch] = useState('');

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <MetaData title="Petr Rajtslegr | Blog" />
      <MotionSection>
        <h1 className="mb-8 inline-block font-normal tracking-tight text-black dark:text-white md:mb-12">
          <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Blog
          </span>
        </h1>
      </MotionSection>
      <MotionSection delay={0.1}>
        <div>
          <div className="relative mb-4 flex flex-col md:w-1/3">
            <Input
              aria-label="Search"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <span className="absolute right-3 top-[10px] size-5 text-gray-500 dark:text-gray-400">
              <MagnifyingGlassIcon />
            </span>
          </div>
        </div>
      </MotionSection>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <MotionSection key={post.id} delay={0.2 + index / 10}>
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

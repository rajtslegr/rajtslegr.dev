import { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import Input from '@/components/form/Input';
import MotionSection from '@/components/motion/MotionSection';
import PostCard from '@/components/post/PostCard';
import type { PostData } from '@/types/entities';

export default function BlogContent({
  allPostsData,
}: {
  allPostsData: PostData[];
}) {
  const [search, setSearch] = useState('');

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <MotionSection>
        <h1 className="mb-8 inline-block font-normal tracking-tight text-black md:mb-12 dark:text-white">
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
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
            <span className="absolute top-[10px] right-3 size-5 text-gray-500 dark:text-gray-400">
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
        <p className="flex justify-center p-6 text-gray-500 italic dark:text-gray-400">
          These aren&apos;t the droids you&apos;re looking for...
        </p>
      )}
    </>
  );
}

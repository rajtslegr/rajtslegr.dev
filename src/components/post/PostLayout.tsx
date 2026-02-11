import type { ReactNode } from 'react';

import hero from '../../../public/static/images/hero.jpg';
import MotionSection from '../motion/MotionSection';
import type { PostData } from '@/types/entities';
import { parseDate } from '@/utils/date';

interface PostLayoutProps {
  postData: PostData;
  children: ReactNode;
}

const PostLayout = ({
  postData: { title, date, image },
  children,
}: PostLayoutProps) => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <article className="w-full max-w-none text-black dark:text-white">
        <MotionSection>
          <h1 className="text-4xl leading-[2.8rem] font-bold tracking-tight text-black md:text-5xl md:leading-[3.5rem] dark:text-gray-100">
            {title}
          </h1>
        </MotionSection>
        <MotionSection delay={0.1}>
          <div className="mt-4 flex flex-row items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col">
              <img
                className="size-10 overflow-hidden rounded-full shadow-sm"
                src={hero.src}
                alt="Hero"
              />
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">by Petr Rajtslegr</p>
              <div className="flex flex-row">
                <p>{parseDate(date)}</p>
              </div>
            </div>
          </div>
          {image && (
            <div className="mt-12 overflow-hidden rounded-lg text-[0px] shadow-sm">
              <img
                src={`/static/images/blog/${image}`}
                alt="Blog post header image"
                className="h-auto w-full"
              />
            </div>
          )}
        </MotionSection>
        <MotionSection delay={0.2}>
          <div className="prose dark:prose-invert mt-12 max-w-none">
            {children}
          </div>
        </MotionSection>
      </article>
    </div>
  );
};
export default PostLayout;

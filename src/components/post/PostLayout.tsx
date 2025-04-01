import Image from 'next/image';

import { ContentPostData } from '@/types/entities';
import { parseDate } from '@/utils/date';

import hero from '../../../public/static/images/hero.jpg';
import MotionSection from '../motion/MotionSection';

interface PostLayoutProps {
  postData: ContentPostData;
}

const PostLayout = ({
  postData: { title, date, mdxContent, image },
}: PostLayoutProps) => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">
      <article className="w-full max-w-none text-black dark:text-white">
        <MotionSection>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-gray-100 md:text-5xl">
            {title}
          </h1>
        </MotionSection>
        <MotionSection delay={0.1}>
          <div className="mt-4 flex flex-row items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col">
              <Image
                className="size-10 overflow-hidden rounded-full shadow"
                src={hero}
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
            <div className="mt-12 overflow-hidden rounded-lg text-[0px] shadow">
              <Image
                src={`/static/images/blog/${image}`}
                alt="Blog post header image"
                height={720}
                width={1125}
              ></Image>
            </div>
          )}
        </MotionSection>
        <MotionSection delay={0.2}>
          <div className="prose mt-12 max-w-none dark:prose-dark">
            {mdxContent}
          </div>
        </MotionSection>
      </article>
    </div>
  );
};
export default PostLayout;

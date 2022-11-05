import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { ContentPostData } from '@/types/entities';
import { parseDate } from '@/utils/date';

import hero from '../../../public/static/images/hero.jpg';
import MotionSection from '../motion/MotionSection';

interface PostLayoutProps {
  postData: ContentPostData;
}

const PostLayout: React.FC<PostLayoutProps> = ({
  postData: { title, date, mdxContent, image },
}) => (
  <div className="flex flex-col items-center mx-auto max-w-2xl">
    <article className="w-full max-w-none text-black dark:text-white">
      <MotionSection>
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-gray-100 md:text-5xl">
          {title}
        </h1>
      </MotionSection>
      <MotionSection delay={0.1}>
        <div className="flex flex-row items-center mt-4 space-x-2 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col">
            <Image
              className="overflow-hidden w-10 h-10 rounded-full shadow"
              src={hero}
              alt="Hero"
              placeholder="blur"
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
          <div className="overflow-hidden mt-12 text-[0px] rounded-lg shadow">
            <Image
              src={`/static/images/blog/${image}`}
              alt="Blog post header image"
              placeholder="blur"
              blurDataURL={`/static/images/blog/${image}`}
              height={720}
              width={1125}
            ></Image>
          </div>
        )}
      </MotionSection>
      <MotionSection delay={0.2}>
        <div className="mt-12 max-w-none prose dark:prose-dark">
          <MDXRemote {...mdxContent} />
        </div>
      </MotionSection>
    </article>
  </div>
);

export default PostLayout;

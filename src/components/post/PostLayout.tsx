import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import hero from '../../../public/static/images/hero.jpg';
import MotionSection from '../layout/MotionSection';
import { ContentPostData } from '@/types/entities';
import parseDate from '@/utils/date';

interface Props {
  postData: ContentPostData;
}

const PostLayout: React.FC<Props> = ({
  postData: { title, date, mdxContent, image },
}) => (
  <div className="flex flex-col items-center max-w-2xl mx-auto">
    <article className="w-full text-black max-w-none dark:text-white">
      <MotionSection>
        <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-gray-100">
          {title}
        </h1>
      </MotionSection>
      <MotionSection
        delay={0.1}
        className="flex flex-row items-center mt-4 space-x-2 text-gray-500 dark:text-gray-400"
      >
        <div className="flex flex-col">
          <div className="w-10 h-10 overflow-hidden rounded-full shadow">
            <Image src={hero} alt="Hero" placeholder="blur"></Image>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-semibold">by Petr Rajtslegr</p>
          <div className="flex flex-row">
            <p>{parseDate(date)}</p>
          </div>
        </div>
      </MotionSection>
      {image && (
        <MotionSection
          delay={0.2}
          className="mt-12 overflow-hidden rounded shadow text-[0px]"
        >
          <Image
            src={`/static/images/blog/${image}`}
            alt="Blog post header image"
            placeholder="blur"
            blurDataURL={`/static/images/blog/${image}`}
            height={720}
            width={1125}
          ></Image>
        </MotionSection>
      )}
      <MotionSection
        delay={0.3}
        className="mt-12 prose max-w-none dark:prose-dark"
      >
        <MDXRemote {...mdxContent} />
      </MotionSection>
    </article>
  </div>
);

export default PostLayout;

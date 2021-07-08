import MetaData from '@/components/MetaData';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { IPostData } from '@/types/types';
import parseDate from '@/utils/date';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import hero from '../../../public/static/images/hero.jpg';

interface Props {
  postData: IPostData;
}

const Post: NextPage<Props> = ({
  postData: { title, description, date, content, readingTime },
}) => {
  const IS_DEV = process.env.NODE_ENV === 'development';

  return (
    <>
      <MetaData
        title={`${title} | Petr Rajtslegr`}
        description={description}
        type="article"
        date={new Date(date).toISOString()}
      />
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <article className="w-full text-black max-w-none dark:text-white">
          <h1 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-row items-center mt-4 mb-12 space-x-2 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col">
              <div className="w-8 h-8 overflow-hidden rounded-full shadow">
                <Image
                  unoptimized={IS_DEV}
                  src={hero}
                  alt="Hero"
                  placeholder="blur"
                  priority
                ></Image>
              </div>
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">by Petr Rajtslegr</p>
              <div className="flex flex-row">
                <p>
                  {parseDate(date)}
                  {` • `}
                  {readingTime.text}
                </p>
              </div>
            </div>
          </div>
          <div className="prose dark:prose-dark">
            <MDXRemote {...content} />
          </div>
        </article>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;

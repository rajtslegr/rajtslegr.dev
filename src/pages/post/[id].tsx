import MetaData from '@/components/MetaData';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { IPostData } from '@/types/types';
import parseDate from '@/utils/date';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

interface Props {
  postData: IPostData;
}

const Post: NextPage<Props> = ({
  postData: { title, description, date, content, readingTime },
}) => {
  return (
    <>
      <MetaData
        title={`${title} | Petr Rajtslegr`}
        description={description}
        type="article"
        date={new Date(date).toISOString()}
      />
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <article className="w-full prose text-black max-w-none dark:prose-dark dark:text-white">
          <h1 className="text-black dark:text-white">{title}</h1>
          <div className="flex flex-row justify-between text-gray-500 dark:text-gray-400">
            <p>{parseDate(date)}</p>
            <p>{readingTime.text}</p>
          </div>
          <MDXRemote {...content} />
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

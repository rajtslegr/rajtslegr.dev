import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { IPostData } from '../../types/types';
import { parseDate } from '../../utils/date';

interface Props {
  postData: IPostData;
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex flex-col items-center">
        <article className="prose lg:prose-xl dark:prose-dark ">
          <h1>{postData.title}</h1>
          <div>{parseDate(postData.date)}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

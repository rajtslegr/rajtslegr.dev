import MetaData from '@/components/MetaData';
import PostLayout from '@/components/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { IPostData } from '@/types/types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
  postData: IPostData;
}

const Blog: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <MetaData
        title={`${postData.title} | Petr Rajtslegr`}
        description={postData.description}
        type="article"
        date={new Date(postData.date).toISOString()}
        image={`/static/images/blog/${postData.image}`}
      />
      <PostLayout postData={postData} />
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

export default Blog;

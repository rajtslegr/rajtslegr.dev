import MetaData from '@/components/meta-data/MetaData';
import PostLayout from '@/components/post/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { ContentPostData } from '@/types/entities';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
  postData: ContentPostData;
}

const Blog: NextPage<Props> = ({ postData }) => (
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

import { notFound } from 'next/navigation';

import PostLayout from '@/components/post/PostLayout';
import ViewCounter from '@/components/post/ViewCounter';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }

  const image = postData.image
    ? `/static/images/blog/${postData.image}`
    : undefined;

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: new Date(postData.date).toISOString(),
      images: image ? [{ url: image }] : [],
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <>
      <ViewCounter slug={id} />
      <PostLayout postData={postData} />
    </>
  );
}

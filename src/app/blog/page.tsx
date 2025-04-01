import { getSortedPostsData } from '@/lib/posts';

import BlogContent from './BlogContent';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return <BlogContent allPostsData={allPostsData} />;
}

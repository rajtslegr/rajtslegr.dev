import BlogContent from '../../components/blog/BlogContent';
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on software development, design, and more.',
  openGraph: {
    title: 'Blog',
    description: 'Thoughts on software development, design, and more.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return <BlogContent allPostsData={allPostsData} />;
}

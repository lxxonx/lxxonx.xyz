import ListLayout from '@/layouts/ListLayout';
import { getAllMdx } from 'lib/mdx';
import { PostType } from 'types/post';

type Props = {
  posts: PostType[];
};

export default function BlogPage({ posts }: Props): JSX.Element {
  return <ListLayout posts={posts} type="Blog" />;
}

export async function getStaticProps(): Promise<{ props: { posts: any } }> {
  const posts = await getAllMdx('posts');

  posts
    .map((post: any) => post.data)
    .sort((a: any, b: any) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: posts.reverse(),
    },
  };
}

import ListLayout from '@/layouts/ListLayout';
import dayjs from 'dayjs';
import { getAllMdx } from 'lib/mdx';
import { PostType } from '@/types/mdx';

type Props = {
  posts: PostType[];
};

export default function BlogPage({ posts }: Props): JSX.Element {
  return <ListLayout posts={posts} type="Blogs" />;
}

export async function getStaticProps(): Promise<{ props: { posts: any } }> {
  let posts = await getAllMdx('posts');

  posts = posts.sort((a: PostType, b: PostType) => {
    return dayjs(a.date).isAfter(b.date) ? -1 : 1;
  });

  return {
    props: {
      posts: posts,
    },
  };
}

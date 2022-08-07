import ListLayout from '@/layouts/ListLayout';
import { PostType, Tags } from '@/types/mdx';
import dayjs from 'dayjs';
import { getAllMdx } from 'lib/mdx';
import { getAllTags } from 'lib/tags';

type Props = {
  posts: PostType[];
  tags: Tags;
};

export default function BlogPage({ posts, tags }: Props): JSX.Element {
  return <ListLayout posts={posts} tags={tags} type="Blogs" />;
}

export async function getStaticProps(): Promise<{ props: Props }> {
  let posts = await getAllMdx('blogs');
  const tags = await getAllTags('blogs');

  posts = posts.sort((a: PostType, b: PostType) => {
    return dayjs(a.date).isAfter(b.date) ? -1 : 1;
  });

  return {
    props: {
      posts,
      tags,
    },
  };
}

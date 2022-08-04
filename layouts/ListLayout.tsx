import PostItem from '@/components/PostItem';
import siteMetadata from '@/data/siteMetadata';
import { PostType } from '@/types/mdx';
import Head from 'next/head';
import Layout from './default';

type Props = {
  posts: PostType[];
  type: 'Blogs' | 'Projects';
};

function ListLayout({ posts, type }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{`${type} | ${siteMetadata.author}`}</title>{' '}
      </Head>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-pixel-lg">{type}</h1>
        <hr />
        {posts.map((post: PostType) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </div>
    </Layout>
  );
}

export default ListLayout;

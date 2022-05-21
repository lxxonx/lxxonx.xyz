import Layout from '@/components/Layout';
import siteMetadata from '@/data/siteMetadata';
import dayjs from 'dayjs';
import Head from 'next/head';
import Link from 'next/link';
import { PostType } from 'types/post';
import { getAllMdx } from 'lib/mdx';

type Props = {
  posts: PostType[];
};

export default function BlogPage({ posts }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{`Blog | ${siteMetadata.author}`}</title>{' '}
      </Head>
      <div>
        {posts.map((post: PostType) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {dayjs(post.date).format('YYYY년 MM월 DD일')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.summary}</p>
            <p>
              <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
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

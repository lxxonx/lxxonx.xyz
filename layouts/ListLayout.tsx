import siteMetadata from '@/data/siteMetadata';
import { PostType } from '@/types/post';
import dayjs from 'dayjs';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from './default';

type Props = {
  posts: PostType[];
  type: 'Blog' | 'Project';
};

function ListLayout({ posts, type }: Props): JSX.Element {
  const lowerType = type.toLowerCase();
  return (
    <Layout>
      <Head>
        <title>{`${type} | ${siteMetadata.author}`}</title>{' '}
      </Head>
      <div>
        {posts.map((post: PostType) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {dayjs(post.date).format('YYYY년 MM월 DD일')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link
                as={`/${lowerType}/${post.slug}`}
                href={`/${lowerType}/[slug]`}
              >
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.summary}</p>
            <p>
              <Link
                as={`/${lowerType}/${post.slug}`}
                href={`/${lowerType}/[slug]`}
              >
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export default ListLayout;

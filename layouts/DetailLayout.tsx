import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { MetaProps } from '@/types/layout';
import { PostType } from '@/types/mdx';
import dayjs from 'dayjs';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './default';

const components = {
  Head,
  Image,
  Link,
};

type DetailLayoutProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

function DetailLayout({ source, frontMatter }: DetailLayoutProps): JSX.Element {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - ${siteMetadata.author}`,
    summary: frontMatter.summary,
    cover: `${siteMetadata.WEBSITE_HOST_URL}${frontMatter.cover}`,
    date: frontMatter.date,
    readingTime: frontMatter.readingTime,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <div className="mb-3 flex flex-wrap justify-even space-x-2">
          {frontMatter.tags &&
            frontMatter.tags.map((tag: string) => <Tag text={tag} key={tag} />)}
        </div>
        <h1 className="mb-0 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <h3 className="mb-0 text-gray-500 dark:text-gray-400">
          {frontMatter.summary}
        </h3>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          {dayjs(frontMatter.date).format('YYYY년 MM월 DD일')}
        </p>
        {frontMatter.cover && (
          <img src={frontMatter.cover} alt="cover" height="auto" width="auto" />
        )}

        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}

export default DetailLayout;

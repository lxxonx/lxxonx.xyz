import dayjs from 'dayjs';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { getMdxFromSlug, getMdxSlug } from 'lib/mdx';
import Layout, { WEBSITE_HOST_URL } from '@/components/Layout';
import { MetaProps } from '@/types/layout';
import { PostType } from '@/types/post';
import siteMetadata from '@/data/siteMetadata';
import Tag from '@/components/Tag';

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const ProjectPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - ${siteMetadata.author}`,
    summary: frontMatter.summary,
    cover: `${WEBSITE_HOST_URL}${frontMatter.cover}`,
    date: frontMatter.date,
    readingTime: frontMatter.readingTime,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1 className="mb-0 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <h3 className="mb-0 text-gray-500 dark:text-gray-400">
          {frontMatter.summary}
        </h3>
        <div className="mb-3 flex flex-wrap justify-even space-x-2">
          {frontMatter.tags &&
            frontMatter.tags.map((tag: string) => <Tag text={tag} key={tag} />)}
        </div>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          {dayjs(frontMatter.date).format('YYYY년 MM월 DD일')}
        </p>
        {frontMatter.cover && (
          <Image src={frontMatter.cover} alt="cover" width={500} height={500} />
        )}

        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const { content, frontmatter } = await getMdxFromSlug(slug, 'projects');

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: frontmatter,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: frontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getMdxSlug('projects')).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;

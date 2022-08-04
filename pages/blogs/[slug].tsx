import DetailLayout from '@/layouts/DetailLayout';
import { PostType } from '@/types/mdx';
import mdxPrism from 'mdx-prism';
import { getMdxFromSlug, getMdxSlug } from 'lib/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  return <DetailLayout source={source} frontMatter={frontMatter} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const { content, frontmatter } = await getMdxFromSlug(slug, 'posts');

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
  const paths = (await getMdxSlug('posts')).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;

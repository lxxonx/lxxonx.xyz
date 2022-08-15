import DetailLayout from '@/layouts/DetailLayout';
import { PostType } from '@/types/mdx';
import { getMdxFromSlug, getMdxSlug } from 'lib/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeToc from '@jsdevtools/rehype-toc';

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  return <DetailLayout source={source} frontMatter={frontMatter} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const { content, frontmatter } = await getMdxFromSlug(slug, 'blogs');

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeHighlight,
        rehypeToc,
      ],
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
  const paths = (await getMdxSlug('blogs')).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;

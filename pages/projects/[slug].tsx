import DetailLayout from '@/layouts/DetailLayout';
import { PostType } from '@/types/mdx';
import { getMdxFromSlug, getMdxSlug } from 'lib/mdx';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const ProjectPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  return <DetailLayout source={source} frontMatter={frontMatter} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const { content, frontmatter } = await getMdxFromSlug(slug, 'projects');

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeHighlight,
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
  const paths = (await getMdxSlug('projects')).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;

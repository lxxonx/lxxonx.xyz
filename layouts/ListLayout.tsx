import PostItem from '@/components/PostItem';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { MdxTypes, PostType, Tags } from '@/types/mdx';
import kebabCase from 'lib/utils/kebabCase';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './default';

type Props = {
  posts: PostType[];
  tags: Tags;
  type: 'Blogs' | 'Projects';
};

function ListLayout({ posts, tags, type }: Props): JSX.Element {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

  return (
    <Layout>
      <Head>
        <title>{`${type} | ${siteMetadata.author}`}</title>{' '}
      </Head>
      <div className="flex max-w-lg flex-wrap">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2 mr-5 ">
              <Tag text={t} type={`${type.toLowerCase() as MdxTypes}`} />
              <Link href={`${type}/tags/${kebabCase(t)}`}>
                <a className="text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400 font-pixel-sm tracking-tight">{` (${tags[t]})`}</a>
              </Link>
            </div>
          );
        })}
      </div>
      <h1 className="font-pixel-lg">{type}</h1>
      <hr />
      {posts.map((post: PostType) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </Layout>
  );
}

export default ListLayout;

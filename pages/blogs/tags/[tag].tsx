import PostItem from '@/components/PostItem';
import Layout from '@/layouts/default';
import { PostType } from '@/types/mdx';
import { getAllFrontMatters, getAllTags } from 'lib/tags';
import kebabCase from 'lib/utils/kebabCase';
import { useState } from 'react';

export async function getStaticPaths(): Promise<{
  paths: { params: { tag: string } }[];
  fallback: boolean;
}> {
  const tags = await getAllTags('blogs');
  const paths = Object.keys(tags).map((tag) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
interface StaticProps {
  params: {
    tag: string;
  };
}

export async function getStaticProps({
  params,
}: StaticProps): Promise<{ props: { posts: any[]; tag: any } }> {
  const allPosts = await getAllFrontMatters('blogs');
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t: string) => kebabCase(t)).includes(params.tag)
  );

  return { props: { posts: filteredPosts, tag: params.tag } };
}

type Props = any;

export default function TagDetail({ posts, tag }: Props): JSX.Element {
  const title = tag?.toUpperCase();
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts?.filter((frontMatter: any) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Layout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-pixel-lg text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="focus:outline-none block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {filteredBlogPosts?.map((post: PostType) => (
            <PostItem post={post} key={post.title} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

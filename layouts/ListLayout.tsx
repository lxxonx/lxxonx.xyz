import IconLoader from '@/components/icons/IconLoader';
import PostItem from '@/components/PostItem';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { MdxTypes, PostType, Tags } from '@/types/mdx';
import kebabCase from 'lib/utils/kebabCase';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Layout from './default';

type Props = {
  posts: PostType[];
  tags: Tags;
  type: 'Blogs' | 'Projects';
};

function ListLayout({ posts, tags, type }: Props): JSX.Element {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  const [showOverflow, setShowOverflow] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const toggleShowOverflow = (): void => setShowOverflow(!showOverflow);
  const tagItems = useRef<HTMLDivElement>(null);
  const tagContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (
        tagItems.current &&
        tagContainer.current &&
        tagItems.current.clientHeight > tagContainer.current.clientHeight
      ) {
        setIsOverflow(true);
      } else {
        setIsOverflow(false);
      }
    };
    document.fonts.addEventListener('loadingdone', handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.fonts.removeEventListener('loadingdone', handleResize);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>{`${type} | ${siteMetadata.author}`}</title>{' '}
      </Head>
      <div
        ref={tagContainer}
        className={`max-w-3xl mx-auto relative ${
          showOverflow ? 'mb-8' : 'max-h-40 overflow-hidden mb-4'
        }`}
      >
        <div className={'flex flex-wrap'} ref={tagItems}>
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} type={`${type.toLowerCase() as MdxTypes}`} />
                <Link href={`${type}/tags/${kebabCase(t)}`}>
                  <a className="text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400 font-pixel-sm tracking-tight">{` (${tags[t]})`}</a>
                </Link>
              </div>
            );
          })}
        </div>
        {isOverflow && (
          <div
            className={`absolute flex justify-center w-full bg-gradient-to-t from-white dark:from-gray-900 to-transparent  ${
              showOverflow ? '-bottom-6' : 'bottom-0'
            }`}
          >
            <button onClick={() => toggleShowOverflow()}>
              {showOverflow ? (
                <IconLoader kind="arrowUp" />
              ) : (
                <IconLoader kind="arrowDown" />
              )}
            </button>
          </div>
        )}
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

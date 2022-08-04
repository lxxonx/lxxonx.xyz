import Layout from '@/layouts/default';
import Tag from '@/components/Tag';
import Link from 'next/link';
import kebabCase from 'lib/utils/kebabCase';
import { getAllTags } from 'lib/tags';

export async function getStaticProps(): Promise<{ props: { tags: any } }> {
  const tags = await getAllTags();

  return { props: { tags } };
}

type Props = any;

export default function Tags({ tags }: Props): JSX.Element {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return (
    <Layout>
      <h1 className="font-pixel-lg">Tags</h1>
      <hr />
      <br />
      <div className="flex max-w-lg flex-wrap">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2 mr-5 ">
              <Tag text={t} />
              <Link href={`/tags/${kebabCase(t)}`}>
                <a className="text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400 font-pixel-sm tracking-tight">{` (${tags[t]})`}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

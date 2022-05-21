import Layout from '@/components/Layout';
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
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link href={`/tags/${kebabCase(t)}`}>{` (${tags[t]})`}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

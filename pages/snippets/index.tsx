import SnippetCard from '@/components/SnippetCard';
import Layout from '@/layouts/default';
import { Snippet } from '@/types/mdx';
import { getSnippets } from 'lib/mdx';

type Props = {
  snippets: Snippet[];
};
function SnippetPage({ snippets }: Props): JSX.Element {
  return (
    <Layout>
      <h1 className="font-pixel-lg">Snippets</h1>
      <hr className="my-2" />
      <div className="flex flex-col space-y-2">
        {snippets.length === 0 && 'No tags found.'}
        {snippets.map((s) => {
          return <SnippetCard key={s.title} snippet={s}></SnippetCard>;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: { snippets: any } }> {
  let snippets = await getSnippets();

  snippets = snippets.sort();

  return {
    props: {
      snippets: snippets.reverse(),
    },
  };
}

export default SnippetPage;

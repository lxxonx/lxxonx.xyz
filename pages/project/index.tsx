import ListLayout from '@/layouts/ListLayout';
import { getAllMdx } from 'lib/mdx';
import { PostType } from 'types/post';

type Props = {
  projects: PostType[];
};

export default function ProjectPage({ projects }: Props): JSX.Element {
  return <ListLayout posts={projects} type="Project" />;
}

export async function getStaticProps(): Promise<{ props: { projects: any } }> {
  const projects = await getAllMdx('projects');

  projects
    .map((project: any) => project.data)
    .sort((a: any, b: any) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      projects: projects.reverse(),
    },
  };
}

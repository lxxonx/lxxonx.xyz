import ListLayout from '@/layouts/ListLayout';
import dayjs from 'dayjs';
import { getAllMdx } from 'lib/mdx';
import { PostType } from '@/types/mdx';

type Props = {
  projects: PostType[];
};

export default function ProjectPage({ projects }: Props): JSX.Element {
  return <ListLayout posts={projects} type="Projects" />;
}

export async function getStaticProps(): Promise<{ props: { projects: any } }> {
  let projects = await getAllMdx('projects');

  projects = projects.sort((a: PostType, b: PostType) => {
    return dayjs(a.date).isAfter(b.date) ? -1 : 1;
  });

  return {
    props: {
      projects: projects,
    },
  };
}

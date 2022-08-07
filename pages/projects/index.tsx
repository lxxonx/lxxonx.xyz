import ListLayout from '@/layouts/ListLayout';
import dayjs from 'dayjs';
import { getAllMdx } from 'lib/mdx';
import { PostType, Tags } from '@/types/mdx';
import { getAllTags } from 'lib/tags';

type Props = {
  projects: PostType[];
  tags: Tags;
};

export default function ProjectPage({ projects, tags }: Props): JSX.Element {
  return <ListLayout posts={projects} tags={tags} type="Projects" />;
}

export async function getStaticProps(): Promise<{ props: Props }> {
  let projects = await getAllMdx('projects');
  const tags = await getAllTags('projects');

  projects = projects.sort((a: PostType, b: PostType) => {
    return dayjs(a.date).isAfter(b.date) ? -1 : 1;
  });

  return {
    props: {
      projects,
      tags,
    },
  };
}

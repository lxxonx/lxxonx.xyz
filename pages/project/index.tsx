import Layout from '@/components/Layout';
import siteMetadata from '@/data/siteMetadata';
import dayjs from 'dayjs';
import Head from 'next/head';
import Link from 'next/link';
import { PostType } from 'types/post';
import { getAllMdx } from 'lib/mdx';

type Props = {
  projects: PostType[];
};

export default function ProjectPage({ projects }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{`Project | ${siteMetadata.author}`}</title>
      </Head>
      <div>
        {projects.map((project: PostType) => (
          <article key={project.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {dayjs(project.date).format('YYYY년 MM월 DD일')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/project/${project.slug}`} href={`/project/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {project.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{project.summary}</p>
            <p>
              <Link as={`/project/${project.slug}`} href={`/project/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
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

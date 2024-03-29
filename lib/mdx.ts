import { MdxTypes } from '@/types/mdx';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

export async function getMdxSlug(_kind: MdxTypes): Promise<string[]> {
  const mdxPath = path.join(process.cwd(), `data/${_kind}`);
  const paths = sync(`${mdxPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug] = fileName.split('.');

    return slug;
  });
}

export interface MdxPost {
  content: string;
  frontmatter: {
    slug: string;
    summary: string;
    title: string;
    readingTime: string;
    cover?: string;
  };
}
export async function getMdxFromSlug(
  slug: string,
  _kind: MdxTypes
): Promise<MdxPost> {
  const mdxPath = path.join(process.cwd(), `data/${_kind}`);
  const dir = path.join(mdxPath, `${slug}.mdx`);
  const source = fs.readFileSync(dir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      summary: data.summary,
      title: data.title,
      cover: data.cover ? data.cover : null,
      readingTime: readingTime(source.toString()).text,
      ...data,
    },
  };
}

export async function getAllMdx(kind: MdxTypes): Promise<any> {
  const resolvedPath = path.join(process.cwd(), 'data', kind);

  const mdxs = fs.readdirSync(resolvedPath);

  return mdxs.reduce((allProjects: any, projectSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), `data/${kind}`, projectSlug),
      'utf-8'
    );
    const { data }: any = matter(source);

    return [
      {
        ...data,
        slug: projectSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allProjects,
    ];
  }, []);
}

export async function getSnippets(): Promise<any> {
  const resolvedPath = path.join(process.cwd(), 'data', 'snippets');

  const mdxs = fs.readdirSync(resolvedPath);

  return mdxs.reduce((allSnippets: any, fileName) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), `data/snippets`, fileName),
      'utf-8'
    );
    const { data, content }: any = matter(source);

    return [
      {
        ...data,
        content,
      },
      ...allSnippets,
    ];
  }, []);
}

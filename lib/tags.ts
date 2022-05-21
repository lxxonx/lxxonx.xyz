import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import kebabCase from './utils/kebabCase';

export async function getAllTags(): Promise<any> {
  const posts = fs.readdirSync(path.join(process.cwd(), 'data', 'posts'));
  const projects = fs.readdirSync(path.join(process.cwd(), 'data', 'projects'));
  const tagCount = {} as any;
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((file: any) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data', 'posts', file),
      'utf8'
    );
    const { data } = matter(source);
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag: string) => {
        const formattedTag = kebabCase(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  projects.forEach((file: any) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data', 'projects', file),
      'utf8'
    );
    const { data } = matter(source);
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag: string) => {
        const formattedTag = kebabCase(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  return tagCount;
}

function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '');
}

export async function getAllFrontMatters(): Promise<any[]> {
  const posts = fs.readdirSync(path.join(process.cwd(), 'data', 'posts'));
  const projects = fs.readdirSync(path.join(process.cwd(), 'data', 'projects'));

  const allFrontMatter: any[] = [];

  posts.forEach((file) => {
    const [fileName, _extension] = file.split('.');

    if (_extension !== 'md' && _extension !== 'mdx') {
      return;
    }
    const source = fs.readFileSync(
      path.join(process.cwd(), `data`, `posts`, file),
      'utf-8'
    );
    const { data: frontmatter } = matter(source);
    allFrontMatter.push({
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date ? dayjs(frontmatter.date).toISOString() : null,
    });
  });

  projects.forEach((file) => {
    const [fileName, _extension] = file.split('.');

    if (_extension !== 'md' && _extension !== 'mdx') {
      return;
    }

    const source = fs.readFileSync(
      path.join(process.cwd(), `data`, `projects`, file),
      'utf-8'
    );

    const { data: frontmatter } = matter(source);

    allFrontMatter.push({
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date ? dayjs(frontmatter.date).toISOString() : null,
    });
  });

  return allFrontMatter.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
}

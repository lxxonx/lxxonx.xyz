import { MdxTypes, PostType, Tags } from '@/types/mdx';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import kebabCase from './utils/kebabCase';

const getPath = (_path: string) => {
  return path.join(process.cwd(), 'data', _path);
};

export async function getAllTags(_type: MdxTypes): Promise<Tags> {
  const tagCount = {} as Tags;
  const dir = fs.readdirSync(getPath(_type));
  dir.forEach((file: any) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data', _type, file),
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

export async function getAllFrontMatters(_type: MdxTypes): Promise<PostType[]> {
  const allFrontMatter: any[] = [];

  const dir = fs.readdirSync(getPath(_type));
  dir.forEach((file) => {
    const [fileName, _extension] = file.split('.');

    if (_extension !== 'md' && _extension !== 'mdx') {
      return;
    }
    const source = fs.readFileSync(
      path.join(process.cwd(), `data`, _type, file),
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

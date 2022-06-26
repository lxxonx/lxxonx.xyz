export type PostType = {
  date?: string;
  summary?: string;
  cover?: string;
  slug: string;
  title: string;
  kind: 'project' | 'blog';
  readingTime: string;
  tags?: string[];
};

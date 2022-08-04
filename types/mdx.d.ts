export interface BaseMdx {
  title: string;
  slug: string;
  content: string;
}
export interface PostType extends BaseMdx {
  date?: string;
  summary?: string;
  cover?: string;
  kind: 'project' | 'blog';
  readingTime: string;
  tags?: string[];
}

export interface Snippet extends BaseMdx {
  language: 'Javascript';
}

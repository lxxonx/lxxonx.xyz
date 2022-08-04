import { PostType } from './mdx';

export interface MetaProps extends Partial<PostType> {
  type?: string;
}

import { PostType } from './post';

export interface MetaProps extends Partial<PostType> {
  type?: string;
}

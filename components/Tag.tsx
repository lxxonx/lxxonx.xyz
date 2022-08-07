import Link from 'next/link';
import kebabCase from 'lib/utils/kebabCase';
import { MdxTypes } from '@/types/mdx';

type Props = {
  text: string;
  type: MdxTypes;
};

const Tag = ({ text, type }: Props): JSX.Element => {
  return (
    <Link href={`${type}/tags/${kebabCase(text)}`}>
      <a className="text-sm font-bold uppercase text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400 rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default Tag;

import Link from 'next/link';
import kebabCase from 'lib/utils/kebabCase';

type Props = {
  text: string;
};

const Tag = ({ text }: Props): JSX.Element => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="  text-sm font-medium uppercase text-green-500 dark:text-green-300 dark:hover:text-green-400 rounded-md bg-gray-700 px-2 py-1">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default Tag;

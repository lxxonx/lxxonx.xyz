import Link from 'next/link';
import kebabCase from 'lib/utils/kebabCase';

type Props = {
  text: string;
};

const Tag = ({ text }: Props): JSX.Element => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 rounded-md bg-gray-700 ">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default Tag;

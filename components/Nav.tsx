import Link from 'next/link';

const Nav = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-3 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white pr-3 py-4">About</a>
      </Link>
      <Link href="/blog">
        <a className="text-gray-900 dark:text-white pr-3 py-4">Blog</a>
      </Link>
      <Link href="/project">
        <a className="text-gray-900 dark:text-white pr-3 py-4">Project</a>
      </Link>
      <Link href="/tags">
        <a className="text-gray-900 dark:text-white pr-3 py-4">Tags</a>
      </Link>
    </nav>
  );
};

export default Nav;

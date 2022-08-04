import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    if (isOpen) {
      setIsOpen(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      setIsOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  return (
    <>
      <div className="sm:hidden left-0 flex flex-col h-full">
        <button onClick={toggle} className="sm:hidden">
          hamburger
        </button>
        {isOpen && (
          <motion.div
            className="font-pixel sm:hidden flex flex-col fixed top-0 left-0 pl-6 z-10 bg-gray-300 bg-opacity-80 w-full h-full"
            initial={{ x: '-100%' }}
            animate={{
              x: 0,
              position: 'fixed',
            }}
          >
            <button onClick={toggle}>close</button>
            <Link href="/">
              <a className="text-gray-900 dark:text-white pr-3 py-4">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-900 dark:text-white pr-3 py-4">About</a>
            </Link>
            <Link href="/blogs">
              <a className="text-gray-900 dark:text-white pr-3 py-4">Blogs</a>
            </Link>
            <Link href="/projects">
              <a className="text-gray-900 dark:text-white pr-3 py-4">
                Projects
              </a>
            </Link>
            <Link href="/tags">
              <a className="text-gray-900 dark:text-white pr-3 py-4">Tags</a>
            </Link>
            <Link href="/snippets">
              <a className="text-gray-900 dark:text-white pr-3 py-4">
                Snippets
              </a>
            </Link>
          </motion.div>
        )}
      </div>
      <nav className="hidden sm:block font-pixel-lg font-semibold ">
        <Link href="/">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-900 dark:text-white pr-3 py-4">About</a>
        </Link>
        <Link href="/blogs">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Blogs</a>
        </Link>
        <Link href="/projects">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Projects</a>
        </Link>
        <Link href="/tags">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Tags</a>
        </Link>
        <Link href="/snippets">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Snippets</a>
        </Link>
      </nav>
    </>
  );
};

export default Nav;

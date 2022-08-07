import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import rehypeHighlight from 'rehype-highlight';
import { AnimatePresence, motion } from 'framer-motion';

const components = {
  Head,
  Image,
  Link,
};
type Props = {
  snippet: {
    title: string;
    content: string;
    language: 'Javascript';
  };
};

function SnippetCard({ snippet }: Props): JSX.Element {
  const [source, setSource] = useState<
    MDXRemoteSerializeResult<Record<string, unknown>> | undefined
  >();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getSource = async () => {
      const source = await serialize(snippet.content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypeHighlight],
        },
      });
      return source;
    };
    getSource().then((s) => setSource(s));
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="font-pixel-lg text-sm font-bold uppercase text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400 rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 mb-2"
        >
          {snippet.title}
        </button>
        <AnimatePresence>
          {source && open && (
            <motion.div
              className="prose dark:prose-dark"
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: 'linear' }}
            >
              <MDXRemote {...source} components={components} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SnippetCard;

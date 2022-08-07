import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Nav from '@/components/Nav';
import ThemeSwitch from '@/components/ThemeSwitch';
import { motion } from 'framer-motion';
import React from 'react';
import { MetaProps } from '../types/layout';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="px-6">
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <Nav />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className="py-4 mx-auto max-w-5xl"
      >
        {children}
      </motion.main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;

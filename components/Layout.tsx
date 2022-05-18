import React from 'react';
import { MetaProps } from '../types/layout';
import Footer from './Footer';
import Head from './Head';
import Nav from './Nav';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
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
      <main>
        <div className="max-w-5xl py-4 mx-auto">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

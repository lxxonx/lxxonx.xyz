import React from 'react';
import { MetaProps } from '../types/layout';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Nav from '@/components/Nav';
import ThemeSwitch from '@/components/ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

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
      <main className="py-4 mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

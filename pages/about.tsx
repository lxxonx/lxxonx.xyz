import React from 'react';
import Layout from '@/components/Layout';
import OutlinedBox from '@/components/OutlinedBox';
import siteMetadata from '@/data/siteMetadata';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: `About - ${siteMetadata.author}`,
      }}
    >
      <h1>About</h1>
      <hr />
      <br />
      <p>Welcome to the about page</p>
      <div className="flex">
        <OutlinedBox className="flex">not about</OutlinedBox>
        <OutlinedBox className="flex">not about</OutlinedBox>
      </div>
    </Layout>
  );
};

export default About;

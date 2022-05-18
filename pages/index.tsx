import Layout from '@/components/Layout';
import siteMetadata from '@/data/siteMetadata';

export const Home = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: `Home - ${siteMetadata.author}`,
      }}
    >
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;

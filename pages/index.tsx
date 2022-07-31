import Layout from '@/layouts/default';
import Lottie from '@/components/Lottie';
import siteMetadata from '@/data/siteMetadata';

export const Home = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: `Home - ${siteMetadata.author}`,
      }}
    >
      <Lottie src="/animation/welcome.json"></Lottie>
      <div className="text-center">
        <div>본 웹사이트는 Next.js, Tailwind css, mdx 로 만들어졌습니다</div>
        <div>현재 검색엔진 최적화를 위해 작업 중이며</div>
        <div>
          버그가 발생할 경우{' '}
          <a
            href="https://github.com/lxxonx/lxxonx.xyz/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            여기
          </a>
          를 눌러 알려주시면 저에게 많은 도움이 됩니다
        </div>
        <div>
          더 자세한 내용은{' '}
          <a
            href="https://github.com/lxxonx/lxxonx.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            깃허브링크
          </a>
          를 통해 확인하실 수 있습니다
        </div>
      </div>
    </Layout>
  );
};

export default Home;

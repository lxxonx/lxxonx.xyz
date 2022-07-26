import React from 'react';
import Layout from '@/components/Layout';
import OutlinedBox from '@/components/OutlinedBox';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import ShadowedBox from '@/components/ShadowedBox';

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
      <ShadowedBox className="bg-yellow-400 text-gray-700 font-extrabold mb-6">
        Who Am I?
      </ShadowedBox>
      <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row">
        <OutlinedBox className="flex-1">
          <Carousel
            className="mb-6 mx-auto"
            carouselItems={[
              <Image
                key={1}
                className="carousel-item"
                src="/img/profile.jpg"
                alt="profile"
                width={208}
                height={208}
              ></Image>,
              <Image
                key={2}
                className="carousel-item"
                src="/img/profile2.jpeg"
                alt="profile"
                width={208}
                height={208}
              ></Image>,
              <Image
                key={3}
                className="carousel-item"
                src="/img/profile3.jpeg"
                alt="profile"
                width={208}
                height={208}
              ></Image>,
              <Image
                key={4}
                className="carousel-item"
                src="/img/profile4.jpeg"
                alt="profile"
                width={208}
                height={208}
              ></Image>,
            ]}
          ></Carousel>
          <div>
            <div className="flex">
              <div className="mr-2">이름: </div>
              <strong className="text-xl">이원창</strong>
            </div>
            <div>생년월일 1992년 5월 3일</div>
            <div>위치 대한민국 대전</div>
          </div>

          <div>
            <h3>Websites</h3>
            <hr />
            <div>github: https://www.github.com/lxxonx</div>
          </div>
        </OutlinedBox>
        <OutlinedBox className="flex-2">
          <h3 className="capitalize">bio</h3>
          <hr className="my-4" />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            nihil, sint animi architecto accusamus cumque aperiam, voluptatibus
            eaque odio ea veniam dolore ullam quaerat alias consequatur, nulla
            impedit mollitia. Perspiciatis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cumque eius impedit iure odio,
            incidunt voluptatibus? Atque iste quos, optio dolore maiores eaque
            obcaecati. Earum mollitia, rem consectetur eveniet laborum iste!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            nihil, sint animi architecto accusamus cumque aperiam, voluptatibus
            eaque odio ea veniam dolore ullam quaerat alias consequatur, nulla
            impedit mollitia. Perspiciatis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cumque eius impedit iure odio,
            incidunt voluptatibus? Atque iste quos, optio dolore maiores eaque
            obcaecati. Earum mollitia, rem consectetur eveniet laborum iste!
          </div>
        </OutlinedBox>
      </div>

      <ShadowedBox className="bg-yellow-400 text-gray-700 font-extrabold my-6">
        Who Can I Do?
      </ShadowedBox>

      <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row">
        <OutlinedBox className="flex-1">
          <h3 className="capitalize">language</h3>
          <hr className="my-4" />
          <div>한국어 native</div>
          <div>영어 Advanced</div>
          <div>JS Can Create A Full Stack App</div>

          <div>
            JavaScript/TypeScript, HTML5, CSS3, Scss, Dart, Go, C#, Python
            (Interested In: Rust, Elixir)
          </div>
        </OutlinedBox>
        <OutlinedBox className="flex-1">
          <h3 className="capitalize">skill</h3>
          <hr className="my-4" />

          <div>
            - Frontend React.js, Vue.js, Nest.js, Styled Components, Tailwind
            css, Apollo, Flutter (Interested In: Svelte, Electron, Storybook) -
            Backend Nest.js, Express.js, Socket.io, Nginx, Prisma, TypeORM,
            Mysql, Postgresql, Redis, RabbitMQ, Firebase (Interested In: NATS,
            AWS DynamoDB, MongoDB, Planet Scale, Strapi, KeystoneJS) - DevOps
            Docker, Docker Compose, Github, Github Actions, AWS ECS, AWS EC2
            (Interested In: Kubernetes, Terraform)
          </div>
          <div>구글링 Advanced</div>
          <div>커뮤니케이션 Advanced</div>
        </OutlinedBox>
      </div>
    </Layout>
  );
};

export default About;

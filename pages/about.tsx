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
      <div className="flex space-x-2">
        <OutlinedBox className="flex-1">
          <Carousel
            className="mb-6"
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
          <div>이름 이원창</div>
          <div>생년월일 1992년 5월 3일</div>
          <div>위치 대한민국 대전</div>
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

      <div className="flex space-x-2">
        <OutlinedBox className="flex-1">
          <h3 className="capitalize">language</h3>
          <hr className="my-4" />
          <div>한국어 native</div>
          <div>영어 Advanced</div>
          <div>JS Can Create A Full Stack App</div>
        </OutlinedBox>
        <OutlinedBox className="flex-1">
          <h3 className="capitalize">skill</h3>
          <hr className="my-4" />
          <div>구글링 Advanced</div>
          <div>커뮤니케이션 Advanced</div>
        </OutlinedBox>
      </div>
    </Layout>
  );
};

export default About;

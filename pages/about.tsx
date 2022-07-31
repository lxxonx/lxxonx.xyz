import React from 'react';
import Layout from '@/components/Layout';
import OutlinedBox from '@/components/OutlinedBox';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import ShadowedBox from '@/components/ShadowedBox';
import AboutSkillBox from '@/components/about/SkillBox';
import AboutLanguageBox from '@/components/about/LanguageBox';

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
        What Can I Do?
      </ShadowedBox>

      <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row">
        <AboutLanguageBox />
        <AboutSkillBox />
      </div>
    </Layout>
  );
};

export default About;

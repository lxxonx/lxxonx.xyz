import React from 'react';
import Layout from '@/layouts/default';
import OutlinedBox from '@/components/OutlinedBox';
import siteMetadata from '@/data/siteMetadata';
import Carousel from '@/components/Carousel';
import ShadowedBox from '@/components/ShadowedBox';
import AboutSkillBox from '@/components/about/SkillBox';
import AboutLanguageBox from '@/components/about/LanguageBox';

export const About = (): JSX.Element => {
  const profilePics = [
    '/img/profile.jpg',
    '/img/profile2.jpeg',
    '/img/profile3.jpeg',
    '/img/profile4.jpeg',
  ].sort(() => Math.random() - 0.5);
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
            carouselItems={profilePics}
          ></Carousel>
          <div>
            <div className="flex items-center">
              <div className="mr-2 text-sm dark:text-gray-400 text-gray-500">
                이름:
              </div>
              <strong className="">이원창</strong>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-sm dark:text-gray-400 text-gray-500">
                생년월일:
              </div>
              <strong className="">1992년 5월 3일</strong>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-sm dark:text-gray-400 text-gray-500">
                위치:
              </div>
              <strong className="">대한민국 대전</strong>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-sm dark:text-gray-400 text-gray-500">
                깃헙:
              </div>
              <strong className="">
                <a
                  href="https://www.github.com/lxxonx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/lxxonx
                </a>
              </strong>
            </div>
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

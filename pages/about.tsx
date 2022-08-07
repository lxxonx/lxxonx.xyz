import BioBox from '@/components/about/BioBox';
import AboutLanguageBox from '@/components/about/LanguageBox';
import PersonalBox from '@/components/about/PersonalBox';
import AboutSkillBox from '@/components/about/SkillBox';
import ShadowedBox from '@/components/ShadowedBox';
import siteMetadata from '@/data/siteMetadata';
import Layout from '@/layouts/default';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: `About - ${siteMetadata.author}`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="font-pixel-lg">About</h1>
        <hr />
        <br />

        <ShadowedBox className="font-pixel-lg text-xl bg-yellow-400 text-gray-900 font-extrabold mb-6">
          Who Am I?
        </ShadowedBox>
        <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row">
          <PersonalBox />
          <BioBox />
        </div>

        <ShadowedBox className="font-pixel-lg text-xl bg-yellow-400 text-gray-900 font-extrabold my-6">
          What Can I Do?
        </ShadowedBox>
        <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row">
          <AboutLanguageBox />
          <AboutSkillBox />
        </div>
      </div>
    </Layout>
  );
};

export default About;

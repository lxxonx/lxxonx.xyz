import OutlinedBox from '../OutlinedBox';
import RateBox from '../RateBox';
import IconLoader from '../icons/IconLoader';
import { useState } from 'react';
import skills from '@/data/skills.json';

type SkillItemProps = {
  link: string;
  name: string;
  rate: number;
};
const SkillItem = ({ link, name, rate }: SkillItemProps) => {
  return (
    <div className="flex space-x-2">
      <a className="" href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <RateBox rate={rate} size={4} />
    </div>
  );
};

const RateInfo = () => {
  return (
    <div className="absolute top-7 right-0 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md space-y-2">
      <div className="head-border dark:border-gray-50">
        <div className="pt-2">별점 기준</div>
      </div>
      <hr />
      <div className="grid grid-cols-4 items-center">
        <div>
          <RateBox rate={1} size={4} />
        </div>
        <div className="col-span-3">관심을 갖고 열심히 배우고 있습니다.</div>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div>
          <RateBox rate={2} size={4} />
        </div>
        <div className="col-span-3">사용해본 경험이 있습니다.</div>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div>
          <RateBox rate={3} size={4} />
        </div>
        <div className="col-span-3">써본 경험이 꽤 많이 있습니다.</div>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div>
          <RateBox rate={4} size={4} />
        </div>
        <div className="col-span-3">
          사용해본 경험이 많으며, 발생하는 문제에 대해서 해결할 수 있습니다.
        </div>
      </div>
      {/* <div className="grid grid-cols-4">
        <div>
          <RateBox rate={5} size={4} />
        </div>
        <div className="col-span-3"></div>
      </div> */}
    </div>
  );
};

function AboutSkillBox(): JSX.Element {
  const [info, setInfo] = useState(false);

  return (
    <OutlinedBox className="flex-1">
      <div className="flex justify-between items-center">
        <h3 className="capitalize font-pixel-lg font-bold text-xl">skill</h3>
        <div
          className="relative w-full flex justify-end"
          onMouseOver={() => setInfo(true)}
          onMouseLeave={() => setInfo(false)}
        >
          <IconLoader kind="info" size={6} />
          {info && <RateInfo />}
        </div>
      </div>
      <hr className="my-4" />
      <div>
        {skills.map((skill) => (
          <SkillItem
            link={skill.link}
            name={skill.name}
            rate={skill.rate}
            key={skill.name}
          />
        ))}
      </div>
    </OutlinedBox>
  );
}

export default AboutSkillBox;

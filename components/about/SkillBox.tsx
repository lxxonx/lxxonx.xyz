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
    <div className="absolute top-7 right-0 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
      <div className="head-border dark:border-gray-50 ">
        <div className="py-2">별점 기준</div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <RateBox rate={1} size={4} />
        </div>
        <div className="col-span-3">열심히 배우는 중 입니다</div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <RateBox rate={2} size={4} />
        </div>
        <div className="col-span-3">
          쓸 수는 있습니다. 왜냐고 물어보시면 잘 모르겠습니다
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <RateBox rate={3} size={4} />
        </div>
        <div className="col-span-3">
          써본 경험이 꽤 있습니다. 여전히 깊이는 모릅니다
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <RateBox rate={4} size={4} />
        </div>
        <div className="col-span-3">
          혼자서 할 수 있지만 시간이 조금 필요합니다
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <RateBox rate={5} size={4} />
        </div>
        <div className="col-span-3">
          구글의 도움만 있다면 혼자서 잘 할 수 있습니다
        </div>
      </div>
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

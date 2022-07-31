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
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <RateBox rate={rate} size={4} />
    </div>
  );
};

const RateInfo = () => {
  return (
    <div className="absolute top-7 right-0 dark:bg-gray-800 px-4 py-2 rounded-md">
      <table className="">
        <thead>
          <tr className="head-border dark:border-gray-50">
            <th className="py-2">별점 기준</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr">
            <td>
              <RateBox rate={1} size={4} />
            </td>
            <td>열심히 배우는 중 입니다</td>
          </tr>
          <tr className="tr">
            <td>
              <RateBox rate={2} size={4} />
            </td>
            <td>쓸 수는 있습니다. 왜냐고 물어보시면 잘 모르겠습니다</td>
          </tr>
          <tr className="tr">
            <td>
              <RateBox rate={3} size={4} />
            </td>
            <td>써본 경험이 꽤 있습니다. 여전히 깊이는 모릅니다</td>
          </tr>
          <tr className="tr">
            <td>
              <RateBox rate={4} size={4} />
            </td>
            <td>혼자서 할 수 있지만 시간이 조금 필요합니다</td>
          </tr>
          <tr className="tr">
            <td>
              <RateBox rate={5} size={4} />
            </td>
            <td>구글의 도움만 있다면 혼자서 잘 할 수 있습니다</td>
          </tr>
        </tbody>
        <style jsx>{`
          .head-border {
            border-bottom: 1px solid;
          }
          .tr {
            font-size: 0.75rem /* 12px */;
            line-height: 1rem;
            padding-left: 0.5rem /* 8px */;
            padding-right: 0.5rem /* 8px */;
            padding-top: 0.25rem /* 4px */;
            padding-bottom: 0.25rem /* 4px */;
          }
          td {
            padding: 4px 0;
          }
          td:not(:last-child) {
            padding-right: 4px;
          }
        `}</style>
      </table>
    </div>
  );
};

function AboutSkillBox(): JSX.Element {
  const [info, setInfo] = useState(false);

  return (
    <OutlinedBox className="flex-1">
      <div className="flex justify-between items-center">
        <h3 className="capitalize">skill</h3>
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
        <div>
          {skills.map((skill) => (
            <SkillItem
              link={skill.link}
              name={skill.name}
              rate={skill.rate}
              key={skill.name}
            />
          ))}
          Nest.js, Express.js, Socket.io, Nginx, Prisma, TypeORM, Mysql,
          Postgresql, Redis, RabbitMQ, Firebase (Interested In: NATS, AWS
          DynamoDB, MongoDB, Planet Scale, Strapi, KeystoneJS)
        </div>
        - Frontend React.js, Vue.js, Nest.js, Styled Components, Tailwind css,
        Apollo, Flutter (Interested In: Svelte, Electron, Storybook) - Backend -
        DevOps Docker, Docker Compose, Github, Github Actions, AWS ECS, AWS EC2
        (Interested In: Kubernetes, Terraform)
      </div>
      <div>구글링 Advanced</div>
      <div>커뮤니케이션 Advanced</div>
    </OutlinedBox>
  );
}

export default AboutSkillBox;

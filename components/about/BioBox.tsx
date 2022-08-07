import React from 'react';
import OutlinedBox from '../OutlinedBox';

function BioBox() {
  return (
    <OutlinedBox className="flex-2">
      <h2 className="capitalize font-pixel-lg font-bold">bio</h2>
      <hr className="my-4" />
      <div>
        <ul className="list-disc pl-4 space-y-3">
          <li>1년차 풀스택 개발자로 일하고 있는 이원창입니다</li>
          <li>
            <b>비즈니스에 대해 생각합니다.</b> 프로그램을 만들 때 단순히 듣고
            따라가는 것이 아니라, 비즈니스 로직에 대해 먼저 생각하고 그에 맞는
            프로그램을 구성합니다. 비용에 대해서 생각합니다. 현재 회사에서
            물리서버에 올려진 프로그램들을 AWS로 마이그레이션하여 비용을 약
            <strong>80%이상</strong> 감소시켰습니다.
          </li>
          <li>
            <b>효율적으로 일하기를 좋아합니다.</b> 배포와 개발의 자동화 및
            보일러플레이트를 만듦으로써 불필요한 시간낭비를 줄이고 집중력있는
            개발이 가능하도록 노력합니다. 깃헙 액션과 AWS 람다, ECS를 사용하여
            배포 자동화를 구현한 경험이 있습니다. 영업팀에서 필요한 작업들을
            자동화하여 불필요한 업무시간을 대폭 감소시킨 경험이 있습니다.
          </li>
        </ul>
      </div>
    </OutlinedBox>
  );
}

export default BioBox;

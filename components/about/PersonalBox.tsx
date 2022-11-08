import React from 'react';
import Carousel from '../Carousel';
import IconLoader from '../icons/IconLoader';
import OutlinedBox from '../OutlinedBox';

type RowProps = {
  size: number;
  kind:
    | 'calendar'
    | 'star'
    | 'info'
    | 'calendar'
    | 'location'
    | 'github'
    | 'mail';
  children: JSX.Element | string;
};
const InfoRow = ({ size, kind, children }: RowProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-2 text-sm dark:text-gray-400 text-gray-500 w-6 h-6 flex justify-center items-center">
        <IconLoader kind={kind} size={size} />
      </div>
      <strong className="">{children}</strong>
    </div>
  );
};

function PersonalBox() {
  const profilePics = [
    '/img/profile2.jpeg',
    '/img/profile3.jpeg',
    '/img/profile4.jpeg',
  ].sort(() => Math.random() - 0.5);
  return (
    <OutlinedBox className="flex-1">
      <Carousel className="mb-6 mx-auto" carouselItems={profilePics}></Carousel>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">이원창</h3>
          {/* <a
            href="https://lxxonx.notion.site/5f69e9e9faf64cba8661b7ee7ba71d74"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel-sm text-xs"
          >
            more detail
          </a> */}
        </div>
        <InfoRow kind="calendar" size={6}>
          1992년 5월 3일
        </InfoRow>
        <InfoRow kind="location" size={6}>
          대한민국 대전
        </InfoRow>
        <InfoRow kind="github" size={5}>
          <a
            href="https://www.github.com/lxxonx"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lxxonx
          </a>
        </InfoRow>
        <InfoRow kind="mail" size={6}>
          <a href="mailto:leeonechang92@gmail.com">leeonechang92@gmail.com</a>
        </InfoRow>
      </div>
    </OutlinedBox>
  );
}

export default PersonalBox;

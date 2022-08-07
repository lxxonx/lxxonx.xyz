import dayjs from 'dayjs';
import React from 'react';
import SocialIcon from './icons/SocialIcon';

function Footer(): JSX.Element {
  return (
    <footer className="py-8 flex">
      <div className="mx-auto">
        <div className="flex py-2 space-x-4 justify-center">
          <SocialIcon href="https://github.com/lxxonx" kind="github" size={8} />
          <SocialIcon
            href="https://instagram.com/lxxonx.xyz"
            kind="instagram"
            size={8}
          />
        </div>
        <div className="font-pixel-lg font-bold">
          © {dayjs().year()} Lxxonx.xyz
        </div>
      </div>
    </footer>
  );
}

export default Footer;

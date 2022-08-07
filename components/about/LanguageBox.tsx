import React from 'react';
import OutlinedBox from '../OutlinedBox';
import RateBox from '../RateBox';
import lang from '@/styles/language.module.css';

function AboutLanguageBox(): JSX.Element {
  return (
    <OutlinedBox className="flex-1">
      <h3 className="capitalize font-pixel-lg font-bold text-xl">language</h3>
      <hr className="my-4" />
      <div className={lang.container}>
        <div className={lang.title}>한국어</div>
        <div className={lang.detail}>
          <RateBox rate={5} />
          <div className={lang.etc}>
            (원어민, 일상 대화 및 비즈니스 의사소통 가능합니다)
          </div>
        </div>
      </div>

      <div className={lang.container}>
        <div className={lang.title}>영어</div>
        <div className={lang.detail}>
          <RateBox rate={4} />
          <div className={lang.etc}>
            (일상 대화, Documentation 읽는 데 문제 없습니다)
          </div>
        </div>
      </div>
      <div className={lang.container}>
        <div className={lang.title}>
          <a
            href="https://github.com/lxxonx?tab=repositories&q=&type=public&language=javascript&sort="
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript
          </a>
          /
          <a
            href="https://github.com/lxxonx?tab=repositories&q=&type=public&language=typescript&sort="
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
        </div>
        <div className={lang.detail}>
          <RateBox rate={4} />
          <div className={lang.etc}>
            (js/ts의 기본 동작방식과 문법에 대해 이해하고 있습니다)
          </div>
        </div>
      </div>
      <div className={lang.container}>
        <div className={lang.title}>HTML5</div>
        <div className={lang.detail}>
          <RateBox rate={4} />
          <div className={lang.etc}>
            (semantic tag를 사용하여 웹사이트를 작성하고 있습니다)
          </div>
        </div>
      </div>
      <div className={lang.container}>
        <div className={lang.title}>Css/Scss</div>
        <div className={lang.detail}>
          <RateBox rate={3} />
          <div className={lang.etc}>
            (기본적인 css 사용법에 대해 이해하고 있으나 아직 애니매이션 사용은
            부족합니다)
          </div>
        </div>
      </div>
      <div className={lang.container}>
        <div className={lang.title}>
          <a
            href="https://github.com/lxxonx?tab=repositories&q=&type=public&language=go&sort="
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
          /C#/Python
        </div>
        <div className={lang.detail}>
          <RateBox rate={2} />
          <div className={lang.etc}>
            (프레임워크를 통해서 간단한 프로그램을 만들 수 있습니다)
          </div>
        </div>
      </div>
      <div className={lang.container}>
        <div className={lang.title}>Rust/Elixir</div>
        <div className={lang.detail}>
          <RateBox rate={1} />
          <div className={lang.etc}>(관심을 갖고 배우는 중)</div>
        </div>
      </div>
    </OutlinedBox>
  );
}

export default AboutLanguageBox;

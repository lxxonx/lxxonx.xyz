import Image from 'next/image';
import { useState } from 'react';

interface Props {
  className?: string;
  carouselItems: string[];
}

const Carousel = ({ carouselItems, className }: Props): JSX.Element => {
  const [active, setActive] = useState(0);

  const next = () => {
    if (active < carouselItems.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };
  const prev = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(carouselItems.length - 1);
    }
  };
  return (
    <>
      <div
        className={`overflow-hidden w-52 h-52 relative border-2 border-solid border-gray-900 dark:border-gray-50 ${className}`}
      >
        <button
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 fill-current text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-50 w-5"
          onClick={prev}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2V3H14V5H12V7H10V9H8V10H7V11H6V13H7V14H8V15H10V17H12V19H13H14V20V21H16V22H18V19H16V17H14V15H12V13H10V11H12V9H14V7H16V5H18V2H16Z" />
          </svg>
        </button>
        <div className="carousel-list">
          {carouselItems.map((item: string, i: number) => (
            <Image
              key={i}
              className="absolute"
              src={item}
              alt="profile"
              width={208}
              height={208}
            ></Image>
          ))}
        </div>
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 fill-current text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-50 w-5"
          onClick={next}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 11V10H16V9H14V7H12V5H10V3H8V2H6V5H8V7H10V9H12V11H14V13H12V15H10V17H8V19H6V22H8V21H10V19H12V18V17H14V16V15H16V14H17V13H18V12V11H17Z" />
          </svg>
        </button>
      </div>
      <style jsx>{`
        .carousel-list {
          width: ${carouselItems.length * 204}px;
          display: flex;
          height: 204px;
          transform: translateX(${-204 * active}px);
          transform-origin: center center;
          transition: transform 0.5s;
        }
      `}</style>
    </>
  );
};

export default Carousel;

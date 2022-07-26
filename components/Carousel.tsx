import { cloneElement, useState } from 'react';

interface Props {
  className?: string;
  carouselItems: JSX.Element[];
}

const Carousel = ({
  carouselItems,
  className,
  ...rest
}: Props): JSX.Element => {
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
          <svg viewBox="0 0 80 144" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" width="16" height="16" transform="rotate(90 80 0)" />
            <rect
              x="64"
              y="16"
              width="16"
              height="16"
              transform="rotate(90 64 16)"
            />
            <rect
              x="48"
              y="32"
              width="16"
              height="16"
              transform="rotate(90 48 32)"
            />
            <rect
              x="32"
              y="48"
              width="16"
              height="16"
              transform="rotate(90 32 48)"
            />
            <rect
              x="16"
              y="64"
              width="16"
              height="16"
              transform="rotate(90 16 64)"
            />
            <rect
              x="32"
              y="80"
              width="16"
              height="16"
              transform="rotate(90 32 80)"
            />
            <rect
              x="48"
              y="96"
              width="16"
              height="16"
              transform="rotate(90 48 96)"
            />
            <rect
              x="64"
              y="112"
              width="16"
              height="16"
              transform="rotate(90 64 112)"
            />
            <rect
              x="80"
              y="128"
              width="16"
              height="16"
              transform="rotate(90 80 128)"
            />
          </svg>
        </button>
        <div className="carousel-list">
          {carouselItems.map((item: JSX.Element) =>
            cloneElement(item, {
              ...rest,
              className: `absolute`,
            })
          )}
        </div>
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 fill-current text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-50 w-5"
          onClick={next}
        >
          <svg viewBox="0 0 80 144" xmlns="http://www.w3.org/2000/svg">
            <rect
              y="144"
              width="16"
              height="16"
              transform="rotate(-90 0 144)"
            />
            <rect
              x="16"
              y="128"
              width="16"
              height="16"
              transform="rotate(-90 16 128)"
            />
            <rect
              x="32"
              y="112"
              width="16"
              height="16"
              transform="rotate(-90 32 112)"
            />
            <rect
              x="48"
              y="96"
              width="16"
              height="16"
              transform="rotate(-90 48 96)"
            />
            <rect
              x="64"
              y="80"
              width="16"
              height="16"
              transform="rotate(-90 64 80)"
            />
            <rect
              x="48"
              y="64"
              width="16"
              height="16"
              transform="rotate(-90 48 64)"
            />
            <rect
              x="32"
              y="48"
              width="16"
              height="16"
              transform="rotate(-90 32 48)"
            />
            <rect
              x="16"
              y="32"
              width="16"
              height="16"
              transform="rotate(-90 16 32)"
            />
            <rect y="16" width="16" height="16" transform="rotate(-90 0 16)" />
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

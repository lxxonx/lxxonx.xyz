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
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 stroke-current"
          onClick={prev}
        >
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.17947 17.8729C2.45859 14.785 0.599771 12.4956 0.603023 11.0048C0.604107 10.5079 0.871774 9.86235 1.40602 9.06825C1.9402 8.30728 2.63656 7.49692 3.49509 6.63717C4.33047 5.77737 5.23528 4.93428 6.2095 4.10787C7.18366 3.31459 8.12283 2.6372 9.02702 2.0757C9.90805 1.51415 10.6729 1.13459 11.3216 0.937028C11.9471 0.772551 12.3405 0.872672 12.5018 1.23739C12.9392 2.36459 11.5227 4.28343 8.25224 6.99391C4.98184 9.67125 4.97595 12.3713 8.23457 15.0939C9.87546 16.4553 11.0421 17.6335 11.7345 18.6287C12.4269 19.657 12.6684 20.3863 12.4591 20.8166C12.2498 21.2468 11.6246 21.2457 10.5837 20.8131C9.51953 20.4135 8.05146 19.4335 6.17947 17.8729Z"
              strokeOpacity="0.96"
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
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 stroke-current"
          onClick={next}
        >
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.54983 4.09791C11.2912 7.18229 13.1619 9.4707 13.1619 10.9631C13.1619 11.4606 12.8947 12.1073 12.3602 12.9033C11.8257 13.6661 11.1286 14.4787 10.2687 15.341C9.43215 16.2033 8.52584 17.049 7.54983 17.8781C6.57381 18.6741 5.63265 19.354 4.72635 19.9178C3.84329 20.4816 3.07642 20.863 2.42574 21.062C1.7983 21.2278 1.40324 21.1283 1.24057 20.7635C0.799043 19.6359 2.21659 17.7123 5.49322 14.9927C8.76985 12.3063 8.76985 9.60336 5.49322 6.8838C3.84329 5.52402 2.66974 4.34665 1.97259 3.35169C1.27543 2.32357 1.03143 1.59393 1.24057 1.16278C1.44972 0.731629 2.07716 0.731629 3.12289 1.16278C4.19186 1.56076 5.66751 2.53914 7.54983 4.09791Z"
              strokeOpacity="0.96"
            />
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

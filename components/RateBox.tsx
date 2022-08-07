import IconLoader from '@/components/icons/IconLoader';

type RateBoxProps = {
  rate: number;
  size?: number;
  className?: string;
};

const RateBox = ({ rate, size = 6, className }: RateBoxProps): JSX.Element => {
  return (
    <div className={`flex justify-center my-1 ${className}`}>
      {Array.from({ length: rate }).map((_, i) => (
        <IconLoader
          key={i}
          kind="star"
          size={size}
          className=" text-yellow-400 dark:text-yellow-200"
        ></IconLoader>
      ))}
    </div>
  );
};

export default RateBox;

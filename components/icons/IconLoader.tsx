import Loading from './loading.svg';
import Star from './star.svg';
import Info from './info.svg';

const components = {
  loading: Loading,
  star: Star,
  info: Info,
};

interface Props {
  size?: number;
  kind: 'loading' | 'star' | 'info';
  className?: string;
}

const IconLoader = ({
  kind,
  size = 8,
  className,
}: Props): JSX.Element | null => {
  const Svg = components[kind];

  return (
    <Svg
      className={`fill-current text-yellow-500 dark:text-yellow-200 h-${size} w-${size} ${className}`}
    />
  );
};

export default IconLoader;

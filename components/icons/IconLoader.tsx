import Loading from './loading.svg';
import Star from './star.svg';
import Info from './info.svg';
import Calendar from './calendar.svg';
import Location from './location.svg';
import Github from './github.svg';
import Mail from './mail.svg';

const components = {
  loading: Loading,
  star: Star,
  info: Info,
  calendar: Calendar,
  location: Location,
  github: Github,
  mail: Mail,
};

interface Props {
  size?: number;
  kind:
    | 'loading'
    | 'star'
    | 'info'
    | 'calendar'
    | 'location'
    | 'github'
    | 'mail';
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
      width={size * 4}
      height={size * 4}
      className={`fill-current stroke-current h-${size} w-${size} ${className}`}
    />
  );
};

export default IconLoader;

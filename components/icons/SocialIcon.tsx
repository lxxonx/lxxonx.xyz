import Facebook from './facebook.svg';
import Github from './github.svg';
import Instagram from './instagram.svg';
import Linkedin from './linkedin.svg';
import Mail from './mail.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

interface Props {
  href?: string;
  size?: number;
  kind:
    | 'instagram'
    | 'mail'
    | 'twitter'
    | 'github'
    | 'facebook'
    | 'youtube'
    | 'linkedin';
}

const SocialIcon = ({ kind, href, size = 8 }: Props): JSX.Element | null => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <>
      {href ? (
        <a
          className={`text-sm text-gray-500 transition hover:text-gray-600 h-${size} w-${size}`}
          target="_blank"
          href={href}
          rel="noopener noreferrer"
        >
          <span className="sr-only">{kind}</span>
          <SocialSvg
            width={size * 4}
            height={size * 4}
            className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
          />
        </a>
      ) : (
        <SocialSvg
          width={size * 4}
          height={size * 4}
          className={`fill-current h-${size} w-${size}`}
        />
      )}
    </>
  );
};

export default SocialIcon;

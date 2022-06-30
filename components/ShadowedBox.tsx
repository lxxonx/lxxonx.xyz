import useMounted from 'hooks/useMounted';
import { useTheme } from 'next-themes';

type Props = {
  children: JSX.Element | string | undefined | null;
  className?: string;
};

function ShadowedBox({ children, className }: Props): JSX.Element {
  const { theme } = useTheme();
  const mounted = useMounted();
  return (
    <>
      {mounted && (
        <div
          className={`border-2 border-solid border-black dark:border-gray-50 px-6 py-3 ${className} shadow-${theme}`}
        >
          {children}
        </div>
      )}
      <style jsx>{`
        .shadow-dark {
          box-shadow: rgba(255, 255, 255) -5px 5px;
        }
        .shadow-light {
          box-shadow: rgba(0, 0, 0) -5px 5px;
        }
      `}</style>
    </>
  );
}

export default ShadowedBox;

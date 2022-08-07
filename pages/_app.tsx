import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

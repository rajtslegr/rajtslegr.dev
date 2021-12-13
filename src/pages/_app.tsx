import Layout from '@/components/layout/Layout';
import usePanelbear from '@/hooks/usePanelbear';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  usePanelbear('8nvtaxIaLJM');

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <NextNProgress
          // color={
          //   resolvedTheme === 'light'
          //     ? 'rgb(229, 231, 235)'
          //     : 'rgb(55, 65, 81)'
          // }
          // options={{ showSpinner: false }}
          />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;

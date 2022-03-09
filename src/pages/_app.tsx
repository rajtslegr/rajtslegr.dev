import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import usePanelbear from '@/hooks/usePanelbear';

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
          <NextNProgress options={{ showSpinner: false }} />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;

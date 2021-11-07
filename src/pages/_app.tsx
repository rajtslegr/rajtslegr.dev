import Layout from '@/components/layout/Layout';
import usePanelbear from '@/hooks/usePanelbear';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

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
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;

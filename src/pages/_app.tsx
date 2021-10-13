import Layout from '@/components/ui/Layout';
import usePanelbear from '@/hooks/usePanelbear';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  usePanelbear('8nvtaxIaLJM');

  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

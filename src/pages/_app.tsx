import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import usePanelbear from '@/hooks/usePanelbear';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  usePanelbear('8nvtaxIaLJM');

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange="true"
    >
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

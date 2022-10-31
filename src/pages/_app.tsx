import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import usePanelbear from '@/hooks/usePanelbear';

const interVariable = Inter({ subsets: ['latin'] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('8nvtaxIaLJM');

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange={true}
    >
      <Layout>
        <main className={interVariable.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

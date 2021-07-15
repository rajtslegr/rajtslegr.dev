import Layout from '@/components/ui/Layout';
import usePanelbear from '@/hooks/usePanelbear';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('8nvtaxIaLJM');

  return (
    <>
      <ThemeProvider
        disableTransitionOnChange
        defaultTheme="system"
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

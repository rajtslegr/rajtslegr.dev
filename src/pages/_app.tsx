import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Script from 'next/script';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src={'https://www.googletagmanager.com/gtag/js?id=UA-158860802-2'}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-158860802-2', {
            page_path: window.location.pathname,
            });
        `,
        }}
      />
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

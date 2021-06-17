import Layout from 'components/Layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Script from 'next/script';
import 'styles/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const GA_TRACKING_ID = process.env.GTAG;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
        `,
        }}
      />
      <ThemeProvider defaultTheme="light" attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

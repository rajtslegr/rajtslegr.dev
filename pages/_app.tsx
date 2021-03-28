import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

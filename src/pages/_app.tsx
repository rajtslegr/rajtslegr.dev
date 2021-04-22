import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

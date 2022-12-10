import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/layout/Layout';

const interVariable = Inter({ subsets: ['latin'] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme="system" attribute="class">
    <Layout>
      <NextNProgress options={{ showSpinner: false }} />
      <AnimatePresence mode="wait">
        <main className={interVariable.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </AnimatePresence>
    </Layout>
  </ThemeProvider>
);

export default App;

import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

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

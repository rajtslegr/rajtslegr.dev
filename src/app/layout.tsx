import { Inter } from 'next/font/google';

import ClientLayout from '@/components/layout/ClientLayout';
import '@/styles/globals.css';

const interVariable = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Petr Rajtslegr',
    default: 'Petr Rajtslegr',
  },
  description: 'Petr Rajtslegr - Frontend Developer',
  metadataBase: new URL('https://rajtslegr.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
      </head>
      <body className="bg-gray-50 text-black antialiased motion-safe:transition-all dark:bg-dark dark:text-white">
        <ClientLayout className={interVariable.className}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

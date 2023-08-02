import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
      </Head>
      <body className="bg-gray-50 text-black antialiased motion-safe:transition-all dark:bg-dark dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

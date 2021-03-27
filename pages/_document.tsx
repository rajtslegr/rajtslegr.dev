import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<{
    html: string;
    head?: (JSX.Element | null)[] | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styles?: ReactElement<any, string | JSXElementConstructor<any>>[] | ReactFragment | undefined;
  }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    const GA_TRACKING_ID = process.env.GTAG;

    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
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
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="shortcut icon" type="image/jpg" href="/hero.png" />
          <meta property="title" content="Petr Rajtslegr | Full-stack Dev" />
          <meta
            name="description"
            content="Petr Rajtslegr - Full-stack developer based in Prague, Czech Republic."
          ></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript, developer, Petr, Rajtslegr"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

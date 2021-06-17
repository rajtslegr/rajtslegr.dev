import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    html: string;
    head?: (JSX.Element | null)[] | undefined;
    styles?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ReactElement<any, string | JSXElementConstructor<any>>[]
      | ReactFragment
      | undefined;
  }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link
            rel="shortcut icon"
            type="image/jpg"
            href="/static/images/hero.jpg"
          />
          <meta property="title" content="Petr Rajtslegr | Full Stack Dev" />
          <meta
            name="description"
            content="Petr Rajtslegr - Full Stack developer based in Prague, Czech Republic."
          ></meta>
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, developer, Petr, Rajtslegr"
          ></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://rajtslegr.com/"></meta>
          <meta
            property="og:title"
            content="Petr Rajtslegr | Full Stack Dev"
          ></meta>
          <meta
            property="og:description"
            content="Petr Rajtslegr - Full Stack developer based in Prague, Czech Republic."
          ></meta>
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

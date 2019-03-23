import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#b71c1c" />
          <meta httpEquiv="Content-Language" content="ua" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />

          <meta property="og:url" content="https://sakhro.art" />
          <meta name="twitter:card" content="summary_large_image" />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400|Play:400,700&amp;subset=cyrillic"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

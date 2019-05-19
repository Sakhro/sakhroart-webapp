import { lngFromReq } from "next-i18next/dist/commonjs/utils";
import Document, { Head, Html, Main, NextScript } from "next/document";

interface IProps {
  lng: string;
}
export default class MyDocument extends Document<IProps> {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lng = lngFromReq(ctx.req);

    return { lng, ...initialProps };
  }

  public render() {
    const { lng } = this.props;

    return (
      <Html lang={lng}>
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

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75733367-6" />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-75733367-6');`,
            }}
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

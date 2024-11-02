// /pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '../ggAnalytics/GoogleAnalytics';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Other head content like meta tags, fonts, etc. */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KXP76Q3T"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-IN'>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var s=document.createElement('script');s.src='https://t.contentsquare.net/uxa/66153290f9825.js';s.async=true;document.head.appendChild(s);})();`,
            }}
          />
        </Head>
        <body>
          <Script
            id='gtm-script'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5T77DVZ');
          `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T77DVZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

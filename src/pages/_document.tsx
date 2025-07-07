import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-IN'>
        <Head>
          <link rel='preconnect' href='https://media.graphassets.com' crossOrigin='anonymous' />
          <link rel='preconnect' href='https://app.engati.com' crossOrigin='anonymous' />
          <link rel='preconnect' href='https://salesiq.zoho.com' crossOrigin='anonymous' />
          {/* Google Tag Manager script (in head for performance tracking) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5T77DVZ');`,
            }}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript fallback for users with JS disabled) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T77DVZ"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
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

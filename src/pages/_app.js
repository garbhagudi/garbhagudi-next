import React from "react";
import "../styles/globals.css";
import Footer from "components/footer/footer";
import Nav from "components/header/header";
import FloatPhone from "components/FloatPhone";
import SalesIQ from "components/SalesIQ";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="favicon" href="/assets/favicon/favicon.ico" />
      </Head>
      <Nav />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <SalesIQ />
      <FloatPhone />
      <Footer />
    </div>
  );
}

export default MyApp;

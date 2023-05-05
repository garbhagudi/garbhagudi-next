import React, { useEffect, useState } from "react";
import "styles/globals.css";
import "styles/calendar.css";
import Footer from "components/footer/footer";
import Nav from "components/header/header";
import FloatPhone from "components/FloatPhone";
import Salesiq from "components/SalesIQ";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5T77DVZ" });
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link
          rel="alternative"
          href={`https://www.garbhagudi.com${router.asPath}`}
          hrefLang="en-us"
        />
        <meta httpEquiv="content-language" content="en-gb"></meta>
        <link
          rel="canonical"
          href={`https://www.garbhagudi.com${router.asPath}`}
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <main className="min-h-screen">
            <Component {...pageProps} />
          </main>
          <FloatPhone />
          <Footer />
          <Analytics />
        </div>
      )}
      <Salesiq
        widgetCode={
          "93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0"
        }
        domain={"https://salesiq.zoho.com/widget"}
      />
    </>
  );
}

export default MyApp;

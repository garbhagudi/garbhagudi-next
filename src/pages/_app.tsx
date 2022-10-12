import React from "react";
import "../styles/globals.css";
import Footer from "components/footer/footer";
import Nav from "components/header/header";
import FloatPhone from "components/FloatPhone";
import SalesIQ from "components/SalesIQ";
import Script from "next/script";
import * as ga from "../lib/google-analytics";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "styles/calendar.css";
import Loading from "components/Loading";
import Head from "next/head";
import { NextResponse, NextRequest } from "next/server";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("2326481447668134");
        ReactPixel.pageView();
        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
          return () => {
            router.events.off("routeChangeComplete", () => {
              ReactPixel.pageView();
            });
          };
        });
      });
  }, [router.events]);

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
  });
  return (
    <>
      <Head>
        <link
          rel="alternative"
          href={`https://garbhagudi.com${router.pathname}`}
          hrefLang="en-us"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
          </Script>
          <Nav />
          <main className="min-h-screen">
            <Component {...pageProps} />
          </main>
          <SalesIQ />
          <FloatPhone />
          <Footer />
        </div>
      )}
    </>
  );
}

export default MyApp;

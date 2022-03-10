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

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
  return (
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
  );
}

export default MyApp;

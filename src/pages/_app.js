import React from "react";
import "../styles/globals.css";
import Footer from "components/footer/footer";
import Nav from "components/header/header";
import FloatPhone from "components/FloatPhone";
import SalesIQ from "components/SalesIQ";

function MyApp({ Component, pageProps }) {
  return (
    <div>
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

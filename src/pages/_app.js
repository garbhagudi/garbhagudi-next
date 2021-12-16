import React from "react";
import Nav from "components/header/header";
import "../styles/globals.css";
import Footer from "components/footer/footer";
import Banner from "components/header/banner";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Banner />
      <Nav />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

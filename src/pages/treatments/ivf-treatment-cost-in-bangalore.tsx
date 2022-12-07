import React from "react";
import Banner from "sections/misc/ivf-cost/hero";
import Image from "next/image";
import Packages from "sections/misc/ivf-cost/packages";
import Faq from "sections/misc/ivf-cost/faq";
import IvfProcess from "sections/misc/ivf-cost/ivfProcess";
import Head from "next/head";

const IvfCost = () => {
  const title = `Low IVF Cost in Bangalore in ${new Date().getFullYear()} | Best IVFTreatment in Bangalore - GarbhaGudi`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content="The IVF treatment cost In Bangalore starts onwards Rs 90,000/- Click to book an appointment for affordable IVF costs and get the best IVF treatment in Bangalore"
        />
      </Head>
      <Image
        src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1670318557/Misc/5564522_ef0kux.webp"
        alt=""
        className="h-full object-cover opacity-80 blur-lg fixed -z-20"
        width={1920}
        height={1080}
      />
      <Banner />
      <Packages />
      <IvfProcess />
      <Faq />
    </div>
  );
};

export default IvfCost;

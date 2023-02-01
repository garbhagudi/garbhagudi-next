import React from "react";
import Banner from "sections/location/banner";
import TreatmentOptions from "sections/location/treatments";
import graphcms from "lib/graphcms";
import Faq from "sections/location/faq";
import Cta from "sections/gg-care/cta";
import QuickLinks from "sections/location/quickLinks";
import VirtualTour from "sections/location/virtualTour";
import MapSection from "sections/location/mapSection";

const Branch = ({ branch }) => {
  return (
    <div>
      <Banner />
      <TreatmentOptions branch={branch?.title} />
      <MapSection
        maplink={branch?.mapLink}
        address={branch?.address}
        description={branch?.about?.raw?.children}
        doctors={branch?.doctors}
        title={branch?.title}
      />
      <Cta />
      <Faq branch={branch?.title} />
      <VirtualTour
        link1={branch?.virtualTourLink1}
        link2={branch?.virtualTourLink2}
        link3={branch?.virtualTourLink3}
      />
      <QuickLinks />
    </div>
  );
};

export default Branch;

export const getStaticProps = async ({ params }) => {
  const { branch } = await graphcms.request(
    `query ($slug: String!) {
        branch (where: { slug: $slug }) {
          branchPicture {
            url
          }
          title
          address
          about {
            raw
          }
          slug
          id
          mapLink
          branchPicture {
            url
          }
          virtualTourLink1
          virtualTourLink2
          virtualTourLink3
          doctors {
            id
            name
            slug
            designation
            qualification
            image {
              url
            }
          }
        }
      }`,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      branch,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { branches } = await graphcms.request(`{
    branches {
      slug
      title
    }
  }`);

  return {
    paths: branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

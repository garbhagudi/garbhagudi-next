import React from "react";
import Banner from "sections/location/banner";
import TreatmentOptions from "sections/location/treatments";
import graphcms from "lib/graphcms";
import MapSection from "sections/location/mapSections";
import Faq from "sections/location/faq";
import Cta from "sections/gg-care/cta";
import QuickLinks from "sections/location/quickLinks";
import VirtualTour from "sections/location/virtualTour";

const Branch = ({ branch }) => {
  return (
    <div>
      <Banner />
      <TreatmentOptions branch={branch.title} />
      <MapSection
        doctors={branch.doctors}
        address={branch.address}
        maplink={branch.mapLink}
        branch={branch.title}
        description={branch.about.raw}
        branchImage={branch.branchPicture.url}
        title={branch.title}
      />
      <Cta />
      <Faq branch={branch.title} />
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

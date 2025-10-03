import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, gql } = pkg;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const graphcms = new ApolloClient({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/ckx5rvt0w4p2701zaagwwby57/master',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzk0NzAyNjAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9ja3g1cnZ0MHc0cDI3MDF6YWFnd3dieTU3L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjM3NzIwZmU2LTI1YjItNGU5Zi1hZDUxLWEyMmZmNDk2NWIwNSIsImp0aSI6ImNreDV1OWd1czRycTIwMXphZmttc2RsODgifQ.pS1Q9Y3vKJrTXyx3wLULVuoIOmFZWdFkbX3Dc53dkP9n-fZKIWQ-NZBTUCL3p2NxQ8y4oXXKVepb6fsV3wEVLS7vVgiMJ_2zE6Gobo4ahTw90YdqyYRj8jtI_pEPb3O1PhILPZIoxh6w0q3K-Iaek4DqpPFR68Xzs64KEIVYMxddz5Eu_SlFJN9QYbDQD2iacxJe2ORNCANbt5ryc2znt2eG5V-5D_Lm6BOAclcXB0aeyDGh57nilgFLWJqakOcZ_adygXexOKjiJXwpppTO7J0YUyLOI0sZfXD4-QcC-sqU52X_Zb9FV2v3QpoCGI0gVKwZXycWhgLBNNDvVa6pKTbk5hnRB2UzOxxgGcSFTw-pwg0c8Zii8cyDEX54cOyslN4tDoBGbvsP6fyxwsYd1thYx5iFMdtpN23c6j8rSsroorQJisnPeVnW5vX8l3hcg4LEdi8eXreTEXeXK25gfFf3Vw9GpmcebWeRbxi-GtRfD-OSM0lLPbBkKxeGNH8eaZStS-jwuxwyAT2GBLVemjVONCU7XkwUXEk4K8PGgcqtZnyH8WGtO-PVvzIJFhBMM2MHIn6JULVutP2T1WY23PHQW_aTmTTToPfS7fzfPm2-GX4GKbDSxSE6X9-NEqwdONUOtWH38KCTrMgTpxkRKDYpX3s6iRI9iotzStNeyxQ`,
  },
});

const BASE_URL = 'https://www.garbhagudi.com';

// GraphQL Queries
const BLOGS_QUERY = gql`
  query GetBlogs($first: Int!, $skip: Int!) {
    blogs(first: $first, skip: $skip) {
      slug
    }
  }
`;

const DOCTORS_QUERY = gql`
  query GetDoctors($first: Int!, $skip: Int!) {
    doctors(first: $first, skip: $skip) {
      slug
    }
  }
`;

const TREATMENTS_QUERY = gql`
  query GetTreatments($first: Int!, $skip: Int!) {
    treatments(first: $first, skip: $skip) {
      slug
    }
  }
`;

const BRANCHES_QUERY = gql`
  query {
    branches {
      slug
    }
  }
`;

const AWARDS_QUERY = gql`
  query {
    awards {
      slug
    }
  }
`;

const CAREERS_QUERY = gql`
  query GetCareers($first: Int!, $skip: Int!) {
    careers(first: $first, skip: $skip) {
      slug
    }
  }
`;

const CAUSES_QUERY = gql`
  query {
    causes {
      slug
    }
  }
`;

const DIAGNOSES_QUERY = gql`
  query {
    diagnoses {
      slug
    }
  }
`;

const DIRECTORS_QUERY = gql`
  query {
    directors {
      slug
    }
  }
`;

const VALUEADDEDSERVICE_QUERY = gql`
  query getValueAddedServices($first: Int!, $skip: Int!) {
    valueAddedServices(first: $first, skip: $skip) {
      slug
    }
  }
`;

// Reusable paginated fetch
async function fetchPaginated(query, key) {
  const PAGE_SIZE = 100;
  let skip = 0;
  let hasMore = true;
  const allItems = [];

  while (hasMore) {
    try {
      const { data } = await graphcms.query({
        query,
        variables: { first: PAGE_SIZE, skip },
      });

      const items = data[key];
      if (!items) {
        throw new Error(`Missing expected key '${key}' in response: ${JSON.stringify(data)}`);
      }

      allItems.push(...items);

      if (items.length < PAGE_SIZE) hasMore = false;
      else skip += PAGE_SIZE;
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      throw error;
    }
  }

  return allItems;
}

// Generate full sitemap
function generateSiteMap(
  branches,
  doctors,
  treatments,
  blogs,
  awards,
  directors,
  diagnoses,
  features,
  causes,
  careers
) {
  const pages = [];

  // Static URLs
  pages.push({ loc: `${BASE_URL}/`, lastmod: new Date().toISOString() });
  pages.push({ loc: `${BASE_URL}/`, lastmod: new Date().toISOString() });
  pages.push({
    loc: `${BASE_URL}/about/overview`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/about/garbhagudi-way`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/about/vision-and-mission`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/publications`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/about/awards-and-accolades`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/events/ghar-ghar-garbhagudi`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/events/international-ivf-day`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/resources/myths-and-facts`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/resources/faq`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-experts`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/resources/video-resources`,
    lastmod: new Date().toISOString(),
  });

  pages.push({ loc: `${BASE_URL}/resources/tools`, lastmod: new Date().toISOString() });
  pages.push({
    loc: `${BASE_URL}/resources/tools/ovulation-calculator`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/resources/tools/fertility-quotient-calculator`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/diagnosis`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/features`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/features/paripoorna`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-consultants`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/blogs/linkedin/career-or-baby`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/gg-care`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/gg-care/search-branch-by-pincode`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/ivf/home`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/ivf/landing`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/legal/privacy-policy`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/legal/refund-policy`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/legal/terms-and-conditions`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/locations`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/dh/enquiry`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/egg-freezing`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/itwmedia/enquiry`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/newsfirstdigital/enquiry`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/ivf-enquiry-form-call`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/lp/ivf-enquiry-form`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/careers`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/contact/partnership`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/contact/media-kit`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/contact/enquiry`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/facilities`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/doctors-speak`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/brand-resources`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/causes`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/success-stories`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz-form`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/infertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/iui-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/ivf-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments/ivf-treatment-egg-freezing`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/yoga`,
    lastmod: new Date().toISOString(),
  });
  //add directors
  directors.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/about/executive-team/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  //add awards
  awards.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/about/awards-and-accolades/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add blogs
  blogs.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/blogs/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  //add blogs pages
  const totalBlogPages = Math.ceil(blogs.length / 6);
  for (let i = 1; i <= totalBlogPages; i++) {
    pages.push({
      loc: `${BASE_URL}/blogs/page/${i}`,
      lastmod: new Date().toISOString(),
    });
  }
  // Add fertility-experts
  doctors.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/fertility-experts/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  //add diagnoses
  diagnoses.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/diagnosis/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  //add causes
  causes.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/causes/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add branches
  branches.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/locations/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add treatments
  treatments.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/treatments/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  //add careers
  careers.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/careers/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });

  //add features
  features.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/features/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });

  pages.push({
    loc: `${BASE_URL}/fertility-center/best-ivf-clinic-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/best-fertility-clinic-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/best-infertility-clinic-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/male-clinic-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/best-iui-center-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/best-fertility-center-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/best-male-fertility-doctor-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/best-andrologist-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/facilities/best-fertility-doctors-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/cost-of-male-fertility-test-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/facilities/best-fertility-specialist-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/fertility-center/best-ivf-doctor-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/cost-of-infertility-test-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/facilities/cost-of-iui-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/cost-of-laparoscopy-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/cost-of-male-fertility-test-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/facilities/cost-of-varicocele-surgery-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/best-fertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/female-fertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/oligospermia-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/frozen-embryo-transfer-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/hysteroscopy-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/cost-of-icsi-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/azoospermia-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/varicocele-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/egg-freezing-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/best-infertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/male-infertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/solutions/male-infertility-treatment-in-bangalore`,
    lastmod: new Date().toISOString(),
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(({ loc, lastmod }) => {
        return `
      <url>
        <loc>${loc}</loc>
        <lastmod>${new Date(lastmod).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
      })
      .join('')}
  </urlset>`;
}

// Main execution
async function generateSitemap() {
  try {
    const [
      branches,
      doctors,
      treatments,
      blogs,
      awards,
      directors,
      diagnoses,
      valueAddedServices,
      causes,
      careers,
    ] = await Promise.all([
      graphcms.query({ query: BRANCHES_QUERY }).then((res) => res?.data?.branches),
      fetchPaginated(DOCTORS_QUERY, 'doctors'),
      fetchPaginated(TREATMENTS_QUERY, 'treatments'),
      fetchPaginated(BLOGS_QUERY, 'blogs'),
      graphcms.query({ query: AWARDS_QUERY }).then((res) => res?.data?.awards),
      graphcms.query({ query: DIRECTORS_QUERY }).then((res) => res?.data?.directors),
      graphcms.query({ query: DIAGNOSES_QUERY }).then((res) => res?.data?.diagnoses),
      fetchPaginated(VALUEADDEDSERVICE_QUERY, 'valueAddedServices'),
      graphcms.query({ query: CAUSES_QUERY }).then((res) => res?.data?.causes),
      fetchPaginated(CAREERS_QUERY, 'careers'),
    ]);

    const sitemap = generateSiteMap(
      branches,
      doctors,
      treatments,
      blogs,
      awards,
      directors,
      diagnoses,
      valueAddedServices,
      causes,
      careers
    );
    const filePath = path.join(__dirname, '../../public/sitemap.xml');

    fs.writeFileSync(filePath, sitemap);
    console.log('Sitemap generated at:', filePath);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  }
}

generateSitemap();

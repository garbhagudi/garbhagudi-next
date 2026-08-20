import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, gql } = pkg;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup directory context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GraphCMS endpoint and token
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
      image {
        url
      }
    }
  }
`;

const DOCTORS_QUERY = gql`
  query GetDoctors($first: Int!, $skip: Int!) {
    doctors(first: $first, skip: $skip) {
      slug
      image {
        url
      }
    }
  }
`;

const TREATMENTS_QUERY = gql`
  query GetTreatments($first: Int!, $skip: Int!) {
    treatments(first: $first, skip: $skip) {
      slug
      image {
        url
      }
    }
  }
`;

const BRANCHES_QUERY = gql`
  query {
    branches {
      slug
      branchPicture {
        url
      }
    }
  }
`;

const AWARDS_QUERY = gql`
  query {
    awards {
      slug
      image {
        url
      }
    }
  }
`;

const ARTICLES_QUERY = gql`
  query GetArticles($first: Int!, $skip: Int!) {
    articles(first: $first, skip: $skip) {
      slug
      image {
        url
      }
    }
  }
`;

const CAREERS_QUERY = gql`
  query GetCareers($first: Int!, $skip: Int!) {
    careers(first: $first, skip: $skip) {
      slug
      image {
        url
      }
    }
  }
`;

const CAUSES_QUERY = gql`
  query {
    causes {
      slug
      image {
        url
      }
    }
  }
`;

const DIAGNOSES_QUERY = gql`
  query {
    diagnoses {
      slug
      image {
        url
      }
    }
  }
`;

const DIRECTORS_QUERY = gql`
  query {
    directors {
      slug
      image {
        url
      }
    }
  }
`;

const VALUEADDEDSERVICE_QUERY = gql`
  query getValueAddedServices($first: Int!, $skip: Int!) {
    valueAddedServices(first: $first, skip: $skip) {
      slug
      image {
        url
      }
    }
  }
`;

const OTHERSERVICES_QUERY = gql`
  query getOtherServices($first: Int!, $skip: Int!) {
    otherServices(first: $first, skip: $skip) {
      slug
      image {
        url
      }
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
  articles,
  careers,
  causes,
  diagnoses,
  directors,
  valueAddedServices,
  otherServices
) {
  const pages = [];

  const addUrl = (loc, imageUrl) => {
    if (imageUrl) {
      pages.push({
        loc,
        lastmod: new Date().toISOString(),
        image: imageUrl,
      });
    }
  };

  // Static Pages
  const staticPages = [
    {
      loc: '/',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6km08v208pk1e4c8z0p',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6lj08v608pknr66yszg',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6m708va08pkgt5xrll1',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6ni08vi08pkegct0cz2',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6od08vm08pkbu54elhs',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6oz08vq08pk9nuarsth',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6po08vu08pkw8qrq5lo',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6qg08vy08pkkptynjq8',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6r708w208pk0ok4tc0d',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in18n3pky07pl537v57hy',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in19g3pl207plhoea2w49',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1a63pl607plcz55wsz8',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1ax3pla07plwitixgei',
      ],
    },
    {
      loc: '/about/vision-and-mission',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1bg3ple07plyuim0she',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1c33pli07pl9dmbstur',
      ],
    },
    {
      loc: '/about/executive-team',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1co3plm07pltvxsmg5z',
      ],
    },
    {
      loc: '/blogs/linkedin/career-or-baby',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1d93plq07plyvlrxm66',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1dz3plu07plrqgv404y',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1ep3ply07plh5m1zqr0',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmc83prp07plteu9qg1j',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmdp3prx07pl07w7dllx',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh2zbani07pfbvspuz4q',
      ],
    },
    {
      loc: '/careers',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmee3ps107pl57mgs6ms',
      ],
    },
    {
      loc: '/contact/enquiry',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv',
      ],
    },
    {
      loc: '/about/overview',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmfq3ps907pl5szpszch',
      ],
    },
    {
      loc: '/gg-care',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmgf3psd07pl3frcbfe7',
      ],
    },
    {
      loc: '/treatments/infertility-treatment-in-bangalore',
      image: [
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmh13psh07plnnci7dhn',
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmho3psl07plazzvsr0o',
      ],
    },
  ];

  staticPages.forEach((page) => {
    pages.push({
      loc: `${BASE_URL}${page.loc}`,
      lastmod: new Date().toISOString(),
      image: page.image,
    });
  });

  // Blogs
  blogs.forEach(({ slug, image }) => addUrl(`${BASE_URL}/blogs/${slug}`, image?.url));

  // Doctors
  doctors.forEach(({ slug, image }) => addUrl(`${BASE_URL}/fertility-experts/${slug}`, image?.url));

  // Treatments
  treatments.forEach(({ slug, image }) => addUrl(`${BASE_URL}/treatments/${slug}`, image?.url));

  // Branches
  branches.forEach(({ slug, branchPicture }) =>
    addUrl(`${BASE_URL}/locations/${slug}`, branchPicture?.url)
  );

  // Awards
  awards.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/about/awards-and-accolades/${slug}`, image?.url)
  );

  // Diagnoses
  diagnoses.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/resources/diagnosis/${slug}`, image?.url)
  );

  // Causes
  causes.forEach(({ slug, image }) => addUrl(`${BASE_URL}/resources/causes/${slug}`, image?.url));

  // Directors
  directors.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/about/executive-team/${slug}`, image?.url)
  );

  // Careers
  careers.forEach(({ slug, image }) => {
    addUrl(`${BASE_URL}/careers/${slug}`, image?.url);
    addUrl(
      `${BASE_URL}/careers/${slug}`,
      'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmee3ps107pl57mgs6ms'
    );
  });

  // Facilities
  otherServices.forEach(({ slug, image }) => addUrl(`${BASE_URL}/facilities/${slug}`, image?.url));
  otherServices.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/fertility-center/${slug}`, image?.url)
  );
  otherServices.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/fertility-consultants/${slug}`, image?.url)
  );
  otherServices.forEach(({ slug, image }) => addUrl(`${BASE_URL}/solutions/${slug}`, image?.url));

  //articles
  articles.forEach(({ slug, image }) => addUrl(`${BASE_URL}/facilities/${slug}`, image?.url));
  articles.forEach(({ slug, image }) => addUrl(`${BASE_URL}/fertility-center/${slug}`, image?.url));
  articles.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/fertility-consultants/${slug}`, image?.url)
  );
  articles.forEach(({ slug, image }) => addUrl(`${BASE_URL}/solutions/${slug}`, image?.url));

  // Value Added services
  valueAddedServices.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/contact/${slug}`, image?.url)
  );
  valueAddedServices.forEach(({ slug, image }) =>
    addUrl(`${BASE_URL}/features/${slug}`, image?.url)
  );

  // Build XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${pages
      .map(({ loc, lastmod, image }) => {
        return `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
        ${
          Array.isArray(image)
            ? image
                .map(
                  (img) => `
      <image:image>
        <image:loc>${img}</image:loc>
      </image:image>`
                )
                .join('\n')
            : image
              ? `<image:image>
      <image:loc>${image}</image:loc>
    </image:image>`
              : ''
        }
      </url>`;
      })
      .join('\n')}
  </urlset>`;

  return sitemapXml;
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
      articles,
      careers,
      causes,
      diagnoses,
      directors,
      valueAddedServices,
      otherServices,
    ] = await Promise.all([
      graphcms.query({ query: BRANCHES_QUERY }).then((res) => res?.data?.branches),
      fetchPaginated(DOCTORS_QUERY, 'doctors'),
      fetchPaginated(TREATMENTS_QUERY, 'treatments'),
      fetchPaginated(BLOGS_QUERY, 'blogs'),
      graphcms.query({ query: AWARDS_QUERY }).then((res) => res?.data?.awards),
      fetchPaginated(ARTICLES_QUERY, 'articles'),
      fetchPaginated(CAREERS_QUERY, 'careers'),
      graphcms.query({ query: CAUSES_QUERY }).then((res) => res?.data?.causes),
      graphcms.query({ query: DIAGNOSES_QUERY }).then((res) => res?.data?.diagnoses),
      graphcms.query({ query: DIRECTORS_QUERY }).then((res) => res?.data?.directors),
      fetchPaginated(VALUEADDEDSERVICE_QUERY, 'valueAddedServices'),
      fetchPaginated(OTHERSERVICES_QUERY, 'otherServices'),
    ]);

    const sitemap = generateSiteMap(
      branches,
      doctors,
      treatments,
      blogs,
      awards,
      articles,
      careers,
      causes,
      diagnoses,
      directors,
      valueAddedServices,
      otherServices
    );
    const filePath = path.join(__dirname, '../../public/image-sitemap.xml');

    fs.writeFileSync(filePath, sitemap);
    console.log('✅ Image sitemap generated at:', filePath);
  } catch (err) {
    console.error('❌ Error generating image sitemap:', err);
    process.exit(1);
  }
}

generateSitemap();

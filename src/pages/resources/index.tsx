import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const IndexPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Resources', url: 'https://www.garbhagudi.com/resources' },
  ]);

  return (
    <div>
      <div>
        <Head>
          {/* Primary Tags */}

          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Resources | GarbhaGudi</title>
          <meta name='title' content='Resources | GarbhaGudi IVF Centre' />
          <meta
            name='description'
            content='Explore top Resources on fertility, IVF, and parenting at GarbhaGudi. Get expert advice, guides, and support. Visit now for valuable insights!'
          />

          {/* Breadcrumb Schema */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
            id='breadcrumbs-jsonld'
          />

          {/* Open Graph / Facebook */}

          <meta property='og:title' content='Resources | GarbhaGudi IVF Centre' />
          <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
          <meta property='og:url' content='https://garbhagudi.com' />
          <meta
            property='og:description'
            content='Explore top Resources on fertility, IVF, and parenting at GarbhaGudi. Get expert advice, guides, and support. Visit now for valuable insights!'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedjb58un07pl4jrnnojz'
          />

          {/* Twitter*/}

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@garbhagudiivf' />
          <meta name='twitter:title' content='Resources | GarbhaGudi IVF Centre' />
          <meta
            name='twitter:description'
            content='Explore top Resources on fertility, IVF, and parenting at GarbhaGudi. Get expert advice, guides, and support. Visit now for valuable insights!'
          />
          <meta
            name='twitter:image'
            content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedjb58un07pl4jrnnojz'
          />
        </Head>
        <BreadCrumbs text1='Resources' link1='/resources' text2='' link2='' />
        <div className='mx-auto max-w-7xl'>
          <h1 className='pt-10 text-center font-heading text-4xl font-bold text-gray-800 dark:text-gray-200 lg:pt-24 lg:text-5xl'>
            Resources
          </h1>
          <p className='pb-10 pt-4 text-center font-content text-gray-800 dark:text-gray-200 lg:pb-16'>
            Learn more about causes, diagnosis and treatment options of infertility
          </p>
          <div className='mx-auto grid max-w-2xl grid-cols-2 gap-4'>
            {data.map((items) => (
              <Link key={items.id} href={items.link}>
                <div className='flex flex-col items-center justify-center rounded-xl py-3'>
                  <Image
                    src={items.icon}
                    alt={items.title}
                    className='h-20 w-20 transition-all duration-300 dark:grayscale dark:hover:grayscale-0'
                    width={80}
                    height={80}
                    priority={true}
                  />
                  <div className='pt-3 text-center font-content'>{items.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

const data = [
  {
    id: '1',
    title: 'Blogs',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8kwhz93za307pl4xxc6lqh',
    desc: 'Blogs regarding infertility, treatment and parenthood',
    link: '/blogs/page/1',
  },
  {
    id: '2',
    title: 'Causes',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8kwhzr3za707pl5g76yjuk',
    desc: 'The major causes for infertility',
    link: '/resources/causes',
  },
  {
    id: '3',
    title: 'Diagnosis',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8kwi0c3zab07plhr9ccok8',
    desc: 'Tests for infertility diagnosis',
    link: '/resources/diagnosis',
  },
  {
    id: '4',
    title: 'Tools',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8kwi0s3zaf07pl53bjg4wy',
    desc: 'Ovulation & fertility quotient calculators',
    link: '/resources/tools',
  },
  {
    id: '5',
    title: 'Video Resources',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8kwhyo3z9z07plu7dwlnef',
    desc: 'Informational videos from our social platforms',
    link: '/resources/video-resources',
  },
  {
    id: '6',
    title: 'Frequently Asked Questions',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8m4n6545xh07pl3ackkkc5',
    desc: 'Frequently Asked Questions',
    link: '/resources/faq',
  },
  {
    id: '7',
    title: 'Myths and Facts',
    icon: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8m4n6w45xl07pl3xub4jhl',
    desc: 'Common myths related to health and fertility',
    link: '/resources/myths-and-facts',
  },
];

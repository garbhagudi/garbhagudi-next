import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { throttledFetch } from 'lib/throttle';
import dynamic from 'next/dynamic';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
const Error = dynamic(() => import('next/error'));
const BlogFooter = dynamic(() => import('components/blogFooter'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
const Loading = dynamic(() => import('components/Loading'), { ssr: true });
const BreadCrumbs = dynamic(() => import('components/breadcrumbs'), { ssr: true });
const LandingPagePopUp = dynamic(() => import('components/landingPagePopUp'), { ssr: false });
const FAQs = dynamic(() => import('components/FAQs'), { ssr: false });
const RichText = dynamic(
  () => import('@graphcms/rich-text-react-renderer').then((mod) => mod.RichText),
  {
    ssr: false,
  }
);

export const getStaticProps = async ({ params }) => {
  const apolloQuery = async ({ slug }) => {
    return apolloClient.query({
      query: gql`
        query ($slug: String!) {
          blog(where: { slug: $slug }) {
            title
            metaTitle
            metaDescription
            ogTitle
            ogDescription
            metaKeywords
            slug
            image {
              url
            }
            doctor {
              name
            }
            content {
              raw
              text
            }
            faq {
              id
              question
              answer {
                raw
                text
              }
            }
            publishedOn
          }
        }
      `,
      variables: {
        slug,
      },
    });
  };
  const slug = params.slug;
  //check slug is string
  if (typeof slug !== 'string') {
    // Return a 404 if no blogs are found
    return {
      notFound: true,
    };
  }

  const { data } = await throttledFetch(apolloQuery, { slug: params.slug });

  if (!data || !data?.blog) {
    // Return a 404 if no blogs are found
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: data.blog,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const apolloQuery = async () => {
    return apolloClient.query({
      query: gql`
        {
          blogs {
            slug
          }
        }
      `,
    });
  };
  const { data } = await throttledFetch(apolloQuery);
  return {
    paths: data.blogs.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Blog = ({ blog }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const title = `${blog?.metaTitle || blog?.title}`;
  const description = `${blog?.metaDescription || blog?.content?.text.slice(0, 160)}`;
  const keywords = `${blog?.metaKeywords || blog?.title}`;
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <Head>
          {/* Preload the main image */}
          <link rel='preload' href={blog?.image?.url} as='image' />
          <link rel='dns-prefetch' href='https://media.graphassets.com' />
          {/* Primary Tags */}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
          <meta name='title' content={title} />
          <meta property='og:title' content={title} />
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='keywords' content={keywords} />

          {/* Ld+JSON Data */}

          {/* Open Graph / Facebook */}
          <meta property='og:title' content={blog?.ogTitle || title} />
          <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
          <meta property='og:url' content='https://garbhagudi.com' />
          <meta property='og:description' content={blog?.ogDescription || description} />
          <meta property='og:type' content='article' />
          <meta property='og:article:published_time' content={blog?.publishedOn} />
          <meta property='og:article:author' content={blog?.doctor?.name} />
          <meta property='og:image' content={blog?.image.url} />
          {/* Twitter*/}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@garbhagudiivf' />
          <meta name='twitter:title' content={`${title} | GarbhaGudi IVF Centre`} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={blog?.image?.url} />
        </Head>
        <BreadCrumbs
          link1='/blogs/page/1'
          text1='Blogs'
          text2={blog?.title}
          link2={blog?.slug}
          link3={''}
          text3={''}
          link4={''}
          text4={''}
        />
        {blog?.slug ? (
          <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
            <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full'>
              <div className='relative mx-auto h-full max-w-prose text-lg' aria-hidden='true'>
                <svg
                  className='absolute left-full top-12 translate-x-32 transform'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-100 dark:text-gray-700'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
                  />
                </svg>
                <svg
                  className='absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-100 dark:text-gray-700'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                  />
                </svg>
                <svg
                  className='absolute bottom-12 left-full translate-x-32 transform'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='d3eb07ae-5182-43e6-857d-35c643af9034'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200 dark:text-gray-700'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
                  />
                </svg>
              </div>
            </div>
            <div className='relative z-10 px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-7xl'>
                <h1 className='flex flex-col items-center justify-center gap-2'>
                  <span className='block text-center font-heading text-2xl font-bold leading-8 tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl'>
                    {blog?.title}
                  </span>
                  <div onClick={open} className='cursor-pointer font-semibold text-gray-600'>
                    Disclaimer
                  </div>
                </h1>
                <div className='relative my-8 aspect-video w-full rounded-lg'>
                  <Image
                    src={blog?.image?.url}
                    alt={blog?.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px'
                    className='rounded-lg object-cover'
                    loading='eager'
                  />
                </div>

                <div className='text-gray-800 dark:text-gray-200'>
                  <RichText
                    content={blog?.content?.raw?.children}
                    renderers={{
                      p: ({ children }) => <p className='text-justify'>{children}</p>,
                    }}
                  />
                </div>
                <div>
                  <Share pinmedia={blog?.image?.url} />
                  {blog?.faq?.length > 0 && (
                    <div className='mt-6'>
                      <FAQs data={blog?.faq} activeIndex={blog?.faq[0]?.id} />
                    </div>
                  )}
                  <BlogFooter />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Error statusCode={404} />
        )}
        <LandingPagePopUp />
      </div>
      <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={close}>
        <div className='fixed inset-0 top-1/4 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='data-closed:transform-[scale(95%)] data-closed:opacity-0 w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out'
            >
              <DialogTitle as='h3' className='text-center text-lg font-medium underline'>
                Disclaimer
              </DialogTitle>
              <p className='mt-2 text-justify text-sm/6'>
                The information on this blog is for knowledge purposes only and should not be
                considered professional medical advice. Always consult a qualified healthcare
                provider for diagnosis, treatment, or questions about a medical condition. We are
                not responsible for consequences resulting from using this information. This blog
                complies with Indian laws and regulations on medical information and acknowledges
                that treatment availability and validity may vary based on current legal
                requirements.
              </p>
              <div className='mt-4'>
                <Button
                  className='focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10'
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default Blog;

import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { throttledFetch } from 'lib/throttle';
import dynamic from 'next/dynamic';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const Error = dynamic(() => import('next/error'));
const BlogFooter = dynamic(() => import('components/blogFooter'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
const Loading = dynamic(() => import('components/Loading'), { ssr: true });
const BreadCrumbs = dynamic(() => import('components/breadcrumbs'), { ssr: true });
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
            author {
              ... on Author {
                authorName
                slug
                image {
                  url
                }
                imageAlt
              }
              ... on Doctor {
                name
                slug
                image {
                  url
                }
                imageAlt
              }
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
            updatedAt
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
export function getYouTubeFromRichText(richText) {
  if (!richText) return '';

  const extract = (node) => {
    if (!node) return '';
    if (
      node.type === 'iframe' &&
      (node.url?.includes('youtube.com') || node.url?.includes('youtu.be'))
    ) {
      return node.url;
    }
    if (node.type === 'html' && typeof node.value === 'string') {
      const match = node.value.match(/https?:\/\/(?:www\.)?(youtube\.com|youtu\.be)[^\"]+/);
      if (match) return match[0];
    }
    if (node.children) {
      for (const child of node.children) {
        const found = extract(child);
        if (found) return found;
      }
    }
    return '';
  };

  return extract(richText);
}

const Blog = ({ blog }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [youtubeURL, setYoutubeURL] = useState<string | null>('');
  const title = `${blog?.metaTitle || blog?.title}`;
  const description = `${blog?.metaDescription || blog?.content?.text.slice(0, 160)}`;
  const keywords = `${blog?.metaKeywords || blog?.title}`;
  const router = useRouter();
  useEffect(() => {
    if (blog) {
      const url = getYouTubeFromRichText(blog?.content?.raw);
      setYoutubeURL(url);
    }
  }, [blog]);

  if (router.isFallback) {
    return <Loading />;
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function addDocJsonLd() {
    const docJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.garbhagudi.com/blogs/${blog?.slug}`,
      },
      headline: blog?.title,
      image: blog?.image?.url,
      author: {
        '@type': blog?.author?.authorName || blog?.author?.name ? 'Person' : 'Organization',
        name: blog?.author?.authorName || blog?.author?.name || 'GarbhaGudi IVF Centre',
        url: blog?.author?.name
          ? `https://www.garbhagudi.com/fertility-experts/${blog?.author?.slug}`
          : 'https://www.garbhagudi.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'GarbhaGudi IVF Centre',
        logo: {
          '@type': 'ImageObject',
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1751352018/GG_New-Hori_Logo_ziwur1.svg',
        },
      },
      datePublished: blog?.publishedOn,
      dateModified: blog?.updatedAt,
    };
    return {
      __html: JSON.stringify(docJsonLd, null, 2),
    };
  }
  return (
    <>
      <div>
        <Head>
          {/* Preload the main image */}
          <link
            rel='preload'
            as='image'
            href={blog?.image?.url}
            fetchPriority='high'
            type='image/webp'
            imageSrcSet={`
                ${blog?.image?.url}?w=480 480w,
                ${blog?.image?.url}?w=800 800w,
                ${blog?.image?.url}?w=1200 1200w
        `}
            imageSizes='(max-width: 768px) 100vw, 800px'
          />
          <link rel='dns-prefetch' href='https://media.graphassets.com' />
          {/* Primary Tags */}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {(blog?.slug === 'blocked-fallopian-tubes-diagnosis-and-treatment-options' ||
            blog?.slug === 'the-impact-of-obesity-on-fertility') && (
            <meta name='robots' content='noindex, nofollow' />
          )}
          <title>{title}</title>
          <meta name='title' content={title} />
          <meta property='og:title' content={title} />
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='keywords' content={keywords} />

          {/* Ld+JSON Data */}
          <script type='application/ld+json' dangerouslySetInnerHTML={addDocJsonLd()} />
          {/* Video Schema if video found */}
          {youtubeURL && (
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'VideoObject',
                  name: blog?.title,
                  description: description,
                  thumbnailUrl: blog?.image?.url,
                  uploadDate: new Date(blog?.publishedOn).toISOString(),
                  embedUrl: youtubeURL,
                  potentialAction: {
                    '@type': 'WatchAction',
                    target: youtubeURL,
                  },
                }),
              }}
            />
          )}

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
                <div className='flex flex-col items-center justify-center gap-2'>
                  <h1 className='block text-center font-heading text-2xl font-bold leading-8 tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl'>
                    {blog?.title}
                  </h1>
                  <div onClick={open} className='cursor-pointer font-semibold text-gray-600'>
                    Disclaimer
                  </div>
                  {blog?.author && (
                    <div className='flex items-center justify-center'>
                      {blog?.author?.name && (
                        <div className='flex-shrink-0'>
                          <Link href={`/fertility-experts/${blog?.author?.slug}`} passHref>
                            <div className='mr-3 h-12 w-12 md:mr-5 md:h-16 md:w-16'>
                              <span className='sr-only'>By: GarbhaGudi IVF Centre</span>
                              <Image
                                className='h-full w-full scale-150 rounded-full dark:fill-white dark:brightness-0 dark:grayscale dark:invert'
                                src={blog?.author?.image?.url}
                                alt={blog?.author?.imageAlt}
                                width={50}
                                height={50}
                                priority
                              />
                            </div>
                          </Link>
                        </div>
                      )}
                      <div>
                        <div className='text-base font-medium text-gray-800 dark:text-gray-200'>
                          {blog?.author?.authorName ? (
                            <div className='font-lexend'>
                              Verified by : {blog?.author?.authorName}
                            </div>
                          ) : (
                            <Link href={`/fertility-experts/${blog?.author?.slug}`} passHref>
                              <div className='font-lexend'>Verified by : {blog?.author?.name}</div>
                            </Link>
                          )}
                        </div>
                        <div className='flex space-x-1 font-lexend text-sm text-gray-700 dark:text-gray-200'>
                          <time>Published: {blog?.publishedOn}</time>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='relative my-8 w-full rounded-lg'>
                  <Image
                    src={blog?.image?.url}
                    alt={blog?.title}
                    width={800}
                    height={450}
                    sizes='(max-width: 768px) 100vw, 800px'
                    className='h-auto w-full rounded-lg object-cover'
                    priority
                    fetchPriority='high'
                  />
                </div>

                <div className='text-justify text-gray-800 dark:text-gray-200'>
                  <RichText
                    content={blog?.content?.raw?.children}
                    renderers={{
                      p: ({ children }) => <p className='text-justify'>{children}</p>,
                      a: ({ children, href }) => (
                        <a href={href} className='text-gg-500 underline'>
                          {children}
                        </a>
                      ),
                      iframe: ({ url, width }) => (
                        <iframe
                          src={url || ''}
                          width={width || '100%'}
                          height={720}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                          className='w-full rounded-md'
                        />
                      ),
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

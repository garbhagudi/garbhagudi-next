import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Head from 'next/head';
import { HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';
import { useState } from 'react';
import { CloseButton, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// Returns an embeddable /preview URL for Google Drive / Docs links, or null for
// any other link. Handles /file/d/<id>/..., open?id=<id> and uc?id=<id> shares.
const getDrivePreviewUrl = (link?: string): string | null => {
  if (!link) return null;
  let url: URL;
  try {
    url = new URL(link.trim());
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '');
  if (host === 'drive.google.com') {
    const id = url.pathname.match(/\/file\/d\/([^/]+)/)?.[1] ?? url.searchParams.get('id');
    return id ? `https://drive.google.com/file/d/${id}/preview` : null;
  }
  if (host === 'docs.google.com') {
    const match = url.pathname.match(/^\/(document|presentation|spreadsheets)\/d\/([^/]+)/);
    return match ? `https://docs.google.com/${match[1]}/d/${match[2]}/preview` : null;
  }
  return null;
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        medias(orderBy: order_ASC) {
          id
          title
          description
          thumbnail {
            url
          }
          articleLink
        }
      }
    `,
  });

  return {
    props: {
      medias: data.medias,
    },
    revalidate: 180,
  };
};

const IndexPage = ({ medias }) => {
  const [preview, setPreview] = useState<{ title: string; url: string; link: string } | null>(null);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Publications', url: 'https://www.garbhagudi.com/publications' },
  ]);
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Publications | GarbhaGudi</title>
        <meta name='title' content='Publications | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Publications | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedip58uj07pl77zu9att'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Publications | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedip58uj07pl77zu9att'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        link1='/publications'
        text1='Publications'
        text2=''
        link2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='mx-auto max-w-7xl'>
        <h1 className='pt-10 text-center font-heading text-4xl font-bold lg:pt-24 lg:text-5xl'>
          Publications
        </h1>
        <div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 lg:py-24'>
          {medias &&
            medias?.map((items) => {
              const drivePreviewUrl = getDrivePreviewUrl(items?.articleLink);
              const readMore = (
                <div className='flex items-center justify-center rounded-lg border bg-brandPink4 px-3 py-2 text-center font-content text-lg font-extrabold text-white transition duration-500 ease-in-out hover:bg-brandPink'>
                  Read More <HiChevronRight className='inline-flex items-center justify-center' />
                </div>
              );
              return (
                <div
                  key={items?.id}
                  className='mx-auto rounded-xl p-2 shadow-lg transition duration-500 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl'
                >
                  <div>
                    <Image
                      quality={85}
                      src={items?.thumbnail?.url}
                      alt={items?.title}
                      className='mx-auto aspect-video w-full rounded-lg'
                      width={500}
                      height={300}
                      loading='lazy'
                    />
                  </div>
                  <div className='mt-4 px-2'>
                    <div className='line-clamp-2 py-2 text-center font-heading text-xl font-bold md:text-left'>
                      {items?.title}
                    </div>
                    <div className='mt-2 text-left font-content md:text-left'>
                      {items?.description?.slice(0, 170)}...
                    </div>
                  </div>
                  <div className='mt-4'>
                    {drivePreviewUrl ? (
                      <button
                        type='button'
                        className='w-full'
                        onClick={() =>
                          setPreview({
                            title: items?.title,
                            url: drivePreviewUrl,
                            link: items?.articleLink?.trim(),
                          })
                        }
                      >
                        {readMore}
                      </button>
                    ) : (
                      <Link href={`${items?.articleLink}`} target='_blank'>
                        {readMore}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Dialog open={!!preview} as='div' className='relative z-50' onClose={() => setPreview(null)}>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-3 md:p-6'>
          <DialogPanel className='flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl'>
            <div className='flex items-center justify-between gap-3 border-b px-4 py-3'>
              <DialogTitle className='line-clamp-1 font-heading text-lg font-bold'>
                {preview?.title}
              </DialogTitle>
              <div className='flex shrink-0 items-center gap-3'>
                <Link
                  href={preview?.link ?? '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-content text-sm font-semibold text-brandPink hover:underline'
                >
                  Open in new tab
                </Link>
                <CloseButton aria-label='Close' className='text-gray-600 hover:text-brandPink'>
                  <IoIosCloseCircleOutline fontSize={28} />
                </CloseButton>
              </div>
            </div>
            {preview && (
              <iframe
                src={preview.url}
                title={preview.title}
                className='h-full w-full flex-1'
                allow='autoplay'
              />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default IndexPage;

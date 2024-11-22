import React, { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Head from 'next/head';
import Link from 'next/link';
import { VscVerified } from 'react-icons/vsc';
import moment from 'moment';
import Image from 'next/image';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const recommendedData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyETkI9qBtY9BSEGsTxrQYcw&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const tvAppearanceData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyHGeOsWF-O_mVh5MBz8HPPR&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const garbhasandeshaData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyGc__8VHjlvgmO6sVXIoxFt&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonialData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const recommended = await recommendedData.json();
  const garbhasandesha = await garbhasandeshaData.json();
  const tvAppearance = await tvAppearanceData.json();
  const testimonials = await testimonialData.json();

  return {
    props: {
      recommended,
      garbhasandesha,
      tvAppearance,
      testimonials,
    },
  };
}

const IndexPage = ({ recommended, garbhasandesha, tvAppearance, testimonials }) => {
  const [url, setUrl] = useState(recommended?.items[0].snippet.resourceId.videoId);
  const [url2, setUrl2] = useState(garbhasandesha?.items[0].snippet.resourceId.videoId);
  const [url3, setUrl3] = useState(tvAppearance?.items[0].snippet.resourceId.videoId);
  const [url4, setUrl4] = useState(testimonials?.items[0].snippet.resourceId.videoId);

  const renderRecommended = (image: string, url: string, label: string, by: string) => {
    return (
      <div className='flex items-center justify-start border-b pb-4 font-sans md:border-none md:pb-0'>
        <Image
          src={image}
          alt={label}
          className='col-span-1 max-w-[200px] rounded-lg sm:w-32 md:max-w-[230px] xl:w-48'
          width={200}
          height={200}
        />
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-start'>
            <button
              onClick={() => {
                setUrl(url);
              }}
              className='ml-4 cursor-pointer text-left text-sm md:text-base'
            >
              {label}
            </button>
            <div className='ml-4 mt-2 flex items-center space-x-2 text-sm'>
              <span>{by}</span>{' '}
              <VscVerified className='h-5 w-5 fill-brandPink dark:fill-gray-200' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGarbhaSandesha = (image: string, url2: string, label: string, by: string) => {
    return (
      <div className='flex items-center justify-start font-sans'>
        <Image
          src={image}
          alt={label}
          className='col-span-1 max-w-[230px] rounded-lg sm:w-32 xl:w-48'
          width={200}
          height={200}
        />
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-start'>
            <button
              onClick={() => {
                setUrl2(url2);
              }}
              className='ml-4 cursor-pointer text-left text-base'
            >
              {label}
            </button>
            <div className='ml-4 mt-2 flex items-center space-x-2 text-sm'>
              <span>{by}</span>{' '}
              <VscVerified className='h-5 w-5 fill-brandPink dark:fill-gray-200' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTvAppreances = (image: string, url3: string, label: string, by: string) => {
    return (
      <div className='flex items-center justify-start font-sans'>
        <Image
          src={image}
          alt={label}
          className='col-span-1 max-w-[230px] rounded-lg sm:w-32 xl:w-48'
          width={200}
          height={200}
        />
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-start'>
            <button
              onClick={() => {
                setUrl3(url3);
              }}
              className='ml-4 cursor-pointer text-left text-base'
            >
              {label}
            </button>
            <div className='ml-4 mt-2 flex items-center space-x-2 text-sm'>
              <span>{by}</span>{' '}
              <VscVerified className='h-5 w-5 fill-brandPink dark:fill-gray-200' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTestimonials = (image: string, url4: string, label: string, by: string) => {
    return (
      <div className='flex items-center justify-start font-sans'>
        <Image
          src={image}
          alt={label}
          className='col-span-1 max-w-[230px] rounded-lg sm:w-32 xl:w-48'
          width={200}
          height={200}
        />
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-start'>
            <button
              onClick={() => {
                setUrl4(url4);
              }}
              className='ml-4 cursor-pointer text-left text-base'
            >
              {label}
            </button>
            <div className='ml-4 mt-2 flex items-center space-x-2 text-sm'>
              <span>{by}</span>{' '}
              <VscVerified className='h-5 w-5 fill-brandPink dark:fill-gray-200' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Video Resources | GarbhaGudi</title>
        <meta name='title' content='Tools and Calculator | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Informational Videos from our various social platforms consolidated for your viewing...'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Video Resources | GarbhaGudi' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Informational Videos from our various social platforms consolidated for your viewing...'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Video Resources | GarbhaGudi' />
        <meta
          name='twitter:description'
          content='Informational Videos from our various social platforms consolidated for your viewing...'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp'
        />
      </Head>
      <div className='mx-auto'>
        <div>
          <h1 className='text-brandDark py-6 text-center font-heading text-2xl font-bold sm:text-4xl'>
            Video Resources
          </h1>
        </div>
        <TabGroup>
          <TabList className='mx-auto grid max-w-7xl grid-cols-2 rounded-xl bg-gg-500 p-1 transition-all duration-300 ease-linear dark:bg-gg-400 md:grid-cols-4 lg:flex lg:flex-nowrap lg:space-x-1'>
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              Recommended
            </Tab>

            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              GarbhaSandesha
            </Tab>
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              TV Programs
            </Tab>
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              Testimonials
            </Tab>
          </TabList>
          <TabPanels className={'px-3 lg:px-4 xl:px-10'}>
            <TabPanel>
              <div className='mx-auto grid grid-cols-1 gap-6 xl:grid-cols-3'>
                <section className='xl:col-span-2'>
                  <div className='mt-8 overflow-hidden rounded-lg border-2 border-brandPink'>
                    <LiteYouTubeEmbed
                      id={url}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start md:flex-row md:justify-between'>
                    {recommended?.items?.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title } = snippet;
                      return (
                        url === snippet.resourceId.videoId && (
                          <div key={id}>
                            <div className='ml-1 mt-2 max-w-2xl font-sans text-xl font-medium'>
                              {title}
                            </div>
                            <div className='ml-1 mt-2 flex items-center space-x-3 font-sans text-sm font-medium'>
                              <div>Added: </div>
                              <div>
                                {moment(`${snippet.publishedAt}`)
                                  .utcOffset('+05:30')
                                  .format('MMM DD, YYYY - HH:mm')}
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                    <div className='mt-4'>
                      <Link href='https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1'>
                        <div className='rounded-3xl bg-[#FF0000] px-4 py-2.5 font-sans font-semibold text-white'>
                          Subscribe
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
                <section className='xl:mt-8'>
                  <div className='flex flex-col space-y-4 pb-8'>
                    <div className='sticky top-0 rounded-md bg-brandPink py-3 text-center font-heading text-lg font-bold text-white'>
                      Recommended
                    </div>
                    {recommended?.items.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title, thumbnails } = snippet;
                      const { medium = {} } = thumbnails;
                      return (
                        <div
                          className={
                            url === snippet.resourceId.videoId
                              ? 'text-gg-500 dark:text-gg-400'
                              : 'max-w-md hover:text-gg-400 dark:hover:text-gray-300 md:max-w-xl'
                          }
                          key={id}
                        >
                          {renderRecommended(
                            medium.url,
                            snippet.resourceId.videoId,
                            title,
                            snippet.channelTitle
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='mx-auto grid grid-cols-1 gap-6 xl:grid-cols-3'>
                <section className='xl:col-span-2'>
                  <div className='mt-8 overflow-hidden rounded-lg border-2 border-brandPink'>
                    <LiteYouTubeEmbed
                      id={url2}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start md:flex-row md:justify-between'>
                    {garbhasandesha?.items?.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title } = snippet;
                      return (
                        url2 === snippet.resourceId.videoId && (
                          <div key={id}>
                            <div className='ml-1 mt-2 max-w-2xl font-sans text-xl font-medium'>
                              {title}
                            </div>
                            <div className='ml-1 mt-2 flex items-center space-x-3 font-sans text-sm font-medium'>
                              <div>Added: </div>
                              <div>
                                {moment(`${snippet.publishedAt}`)
                                  .utcOffset('+05:30')
                                  .format('MMM DD, YYYY - HH:mm')}
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                    <div className='mt-4'>
                      <Link href='https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1'>
                        <div className='rounded-3xl bg-[#FF0000] px-4 py-2.5 font-sans font-semibold text-white'>
                          Subscribe
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
                <section className='xl:mt-8'>
                  <div className='flex flex-col space-y-4 pb-8'>
                    <div className='sticky top-0 rounded-md bg-gg-500 py-3 text-center font-heading text-lg font-bold text-white dark:bg-gg-400'>
                      GarbhaSandesha
                    </div>
                    {garbhasandesha?.items.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title, thumbnails } = snippet;
                      const { medium = {} } = thumbnails;
                      return (
                        <div
                          className={
                            url2 === snippet.resourceId.videoId
                              ? 'text-gg-500 dark:text-gg-400'
                              : 'max-w-md hover:text-gg-400 dark:hover:text-gray-300 md:max-w-xl'
                          }
                          key={id}
                        >
                          {renderGarbhaSandesha(
                            medium.url,
                            snippet.resourceId.videoId,
                            title,
                            snippet.channelTitle
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='mx-auto grid grid-cols-1 gap-6 xl:grid-cols-3'>
                <section className='xl:col-span-2'>
                  <div className='mt-8 overflow-hidden rounded-lg border-2 border-brandPink'>
                    <LiteYouTubeEmbed
                      id={url3}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start md:flex-row md:justify-between'>
                    {tvAppearance?.items?.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title } = snippet;
                      return (
                        url3 === snippet.resourceId.videoId && (
                          <div key={id}>
                            <div className='ml-1 mt-2 max-w-2xl font-sans text-xl font-medium'>
                              {title}
                            </div>
                            <div className='ml-1 mt-2 flex items-center space-x-3 font-sans text-sm font-medium'>
                              <div>Added: </div>
                              <div>
                                {moment(`${snippet.publishedAt}`)
                                  .utcOffset('+05:30')
                                  .format('MMM DD, YYYY - HH:mm')}
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                    <div className='mt-4'>
                      <Link href='https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1'>
                        <div className='rounded-3xl bg-[#FF0000] px-4 py-2.5 font-sans font-semibold text-white'>
                          Subscribe
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
                <section className='xl:mt-8'>
                  <div className='flex flex-col space-y-4 pb-8'>
                    <div className='sticky top-0 rounded-md bg-brandPink py-3 text-center font-heading text-lg font-bold text-white'>
                      TV Programs
                    </div>
                    {tvAppearance?.items.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title, thumbnails } = snippet;
                      const { medium = {} } = thumbnails;
                      return (
                        <div
                          className={
                            url3 === snippet.resourceId.videoId
                              ? 'text-gg-500 dark:text-gg-400'
                              : 'max-w-md hover:text-gg-400 dark:hover:text-gray-300 md:max-w-xl'
                          }
                          key={id}
                        >
                          {renderTvAppreances(
                            medium.url,
                            snippet.resourceId.videoId,
                            title,
                            snippet.channelTitle
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='mx-auto grid grid-cols-1 gap-6 xl:grid-cols-3'>
                <section className='xl:col-span-2'>
                  <div className='mt-8 overflow-hidden rounded-lg border-2 border-brandPink'>
                    <LiteYouTubeEmbed
                      id={url4}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start md:flex-row md:justify-between'>
                    {testimonials?.items?.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title } = snippet;
                      return (
                        url4 === snippet.resourceId.videoId && (
                          <div key={id}>
                            <div className='ml-1 mt-2 max-w-2xl font-sans text-xl font-medium'>
                              {title}
                            </div>
                            <div className='ml-1 mt-2 flex items-center space-x-3 font-sans text-sm font-medium'>
                              <div>Added: </div>
                              <div>
                                {moment(`${snippet.publishedAt}`)
                                  .utcOffset('+05:30')
                                  .format('MMM DD, YYYY - HH:mm')}
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                    <div className='mt-4'>
                      <Link href='https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1'>
                        <div className='rounded-3xl bg-[#FF0000] px-4 py-2.5 font-sans font-semibold text-white'>
                          Subscribe
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
                <section className='xl:mt-8'>
                  <div className='flex flex-col space-y-4 pb-8'>
                    <div className='sticky top-0 rounded-md bg-brandPink py-3 text-center font-heading text-lg font-bold text-white'>
                      Testimonials
                    </div>
                    {testimonials?.items.map((item) => {
                      const { id, snippet = {} } = item;
                      const { title, thumbnails } = snippet;
                      const { medium = {} } = thumbnails;
                      return (
                        <div
                          className={
                            url4 === snippet.resourceId.videoId
                              ? 'text-gg-500 dark:text-gg-400'
                              : 'max-w-md hover:text-gg-400 dark:hover:text-gray-300 md:max-w-xl'
                          }
                          key={id}
                        >
                          {renderTestimonials(
                            medium.url,
                            snippet.resourceId.videoId,
                            title,
                            snippet.channelTitle
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default IndexPage;

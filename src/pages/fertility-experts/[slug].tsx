import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Link from 'next/link';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Share from 'components/share';
import { SiGooglemaps } from 'react-icons/si';

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        doctor(where: { slug: $slug }) {
          id
          name
          bio {
            raw
            text
          }
          slug
          languages
          image {
            url
          }
          qualification
          designation
          medicalRegNo
          hanumanthaNagarOnline
          hanumanthaNagarPhysical
          kalyanNagarOnline
          kalyanNagarPhysical
          jayanagarOnline
          jayanagarPhysical
          electronicCityOnline
          electronicCityPhysical
          marathahalliOnline
          marathahalliPhysical
          newBelRoadOnline
          newBelRoadPhysical
          nagarbhaviOnline
          nagarbhaviPhysical
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      doctor: data.doctor,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors {
          slug
          name
        }
      }
    `,
  });

  return {
    paths: data.doctors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Doctor = ({ doctor }) => {
  const router = useRouter();
  const title = `${doctor?.name} - Fertility Specialist`;

  function addDocJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "${doctor?.name}",
        "url": "https://garbhagudi.com/fertility-experts/${doctor?.slug}",
        "image": "${doctor?.image?.url}",
        "jobTitle": "${doctor?.designation}",
        "worksFor": {
          "@type": "Organization",
          "name": "GarbhaGudi IVF Centre"
        }
      }`,
    };
  }

  if (router.isFallback) {
    return (
      <div className='h-screen text-brandPink flex items-center justify-center text-content animate-ping'>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={doctor?.bio?.text.slice(0, 160)} />

        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addDocJsonLd()}
          key='org-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content={doctor?.bio?.text.slice(0, 160)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={doctor?.bio?.text.slice(0, 160)}
        />
        <meta name='twitter:image' content={doctor?.image.url} />
      </Head>
      <BreadCrumbs
        text1={'Our Fertility Experts'}
        link1='/fertility-experts'
        text2={doctor?.name}
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <main className='profile-page'>
        <section className='relative block' style={{ height: '500px' }}>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.jpg')",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-30 dark:opacity-70 bg-black'
            ></span>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-gray-300 dark:text-gray-700 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative py-16 bg-gray-300 dark:bg-gray-700'>
          <div className='container mx-auto md:px-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-xl rounded-3xl -mt-64'>
              <div className='px-2 md:px-6' key={doctor.id}>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                    <div className='relative'>
                      <img
                        alt={doctor.name}
                        src={doctor.image.url}
                        className='shadow-xl rounded-full max-w-xs h-auto align-middle border-none -m-16 -mt-44 -ml-20 mb-4 lg:-ml-16 bg-gray-300/30 dark:bg-gray-600'
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center mt-12 font-content'>
                  <h1 className='text-4xl font-semibold leading-normal mb-2 text-gray-800 dark:text-gray-200'>
                    {doctor.name}
                  </h1>
                  <div className='leading-normal mt-0 mb-2 textbrantext-brandPink2 font-bold text-xl'>
                    {doctor.qualification}
                  </div>
                  <div className='mb-2 text-gray-800 dark:text-gray-200'>
                    {doctor.designation}
                  </div>
                  {doctor?.medicalRegNo && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Medical Registration Number (KMC) :{' '}
                      <span className='font-bold underline'>
                        {doctor?.medicalRegNo}
                      </span>
                    </div>
                  )}
                  {doctor?.languages && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Languages Known :{' '}
                      <span className='font-bold underline'>
                        {doctor?.languages}
                      </span>
                    </div>
                  )}
                  <div>
                    <button className='px-4 py-2 bg-brandPink hover:bg-brandPink3 text-white font-bold font-content rounded-md mt-6'>
                      <a href='tel:+919108910832' hrefLang='en-us'>
                        Give us a Call
                      </a>
                    </button>
                  </div>
                  {(doctor?.hanumanthaNagarPhysical ||
                    doctor?.kalyanNagarPhysical ||
                    doctor?.jayanagarPhysical ||
                    doctor?.electronicCityPhysical ||
                    doctor?.marathahalliPhysical ||
                    doctor?.newBelRoadPhysical ||
                    doctor?.nagarbhaviPhysical) && (
                    <section className='antialiased text-gray-600 mt-8 font-content overflow-hidden'>
                      <div className='flex flex-col justify-center h-full'>
                        <div className='w-full max-w-3xl mx-auto bg-white dark:bg-gray-700 shadow-xl rounded-2xl border border-pink-200 dark:border-gray-600'>
                          <header className='px-5 py-2'>
                            <h2 className='font-semibold text-gray-800 dark:text-gray-200'>
                              Book Your Appointment
                            </h2>
                          </header>
                          <div className=''>
                            <div className='overflow-x-auto'>
                              <table className='table-auto w-full'>
                                <thead className='text-sm font-bold uppercase text-gray-800 dark:text-gray-200 bg-brandPink'>
                                  <tr>
                                    <th className='p-2 whitespace-nowrap '>
                                      <div className='font-bold text-left ml-1'>
                                        Branch
                                      </div>
                                    </th>
                                    <th className='p-2 whitespace-nowrap'>
                                      <div className='font-bold text-left'>
                                        Physical
                                      </div>
                                    </th>
                                    <th className='p-2 whitespace-nowrap'>
                                      <div className='font-bold text-left'>
                                        Online
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className='text-sm divide-y divide-pink-100 dark:divide-gray-500'>
                                  {doctor.hanumanthaNagarOnline &&
                                    doctor.hanumanthaNagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800 flex items-center justify-center'>
                                              <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                                <SiGooglemaps className='text-2xl' />
                                              </div>
                                              <Link
                                                href='/locations/hanumanthanagar'
                                                passHref
                                              >
                                                <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                  Hanumanthanagar
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.hanumanthaNagarPhysical && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.hanumanthaNagarPhysical
                                                  }
                                                  className='font-semibold hover:underline'
                                                  hrefLang='en-us'
                                                  target='_blank'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.hanumanthaNagarOnline && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.hanumanthaNagarOnline
                                                  }
                                                  className='font-semibold hover:underline'
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.kalyanNagarOnline &&
                                    doctor.kalyanNagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800'>
                                              <div className='font-medium text-gray-800 flex items-center justify-center'>
                                                <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                                  <SiGooglemaps className='text-2xl' />
                                                </div>
                                                <Link
                                                  href='/locations/kalyan-nagar'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                    Kalyan Nagar
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.kalyanNagarPhysical && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.kalyanNagarPhysical
                                                  }
                                                  className='font-semibold hover:underline'
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.kalyanNagarOnline && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.kalyanNagarOnline
                                                  }
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                  className='font-semibold hover:underline'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.jayanagarOnline &&
                                    doctor.jayanagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800'>
                                              <div className='font-medium text-gray-800 flex items-center justify-center'>
                                                <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                                  <SiGooglemaps className='text-2xl' />
                                                </div>
                                                <Link
                                                  href='/locations/jayanagar'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                    Jayanagar
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.jayanagarPhysical && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.jayanagarPhysical
                                                  }
                                                  className='font-semibold hover:underline'
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.jayanagarOnline && (
                                              <button>
                                                <a
                                                  href={doctor.jayanagarOnline}
                                                  className='font-semibold hover:underline'
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.electronicCityOnline &&
                                    doctor.electronicCityPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium'>
                                              <div className='font-medium flex items-center justify-center'>
                                                <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                                  <SiGooglemaps className='text-2xl' />
                                                </div>
                                                <Link
                                                  href='/locations/electronic-city'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                    Electronic City
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.electronicCityPhysical && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.electronicCityPhysical
                                                  }
                                                  target='_blank'
                                                  rel='noreferrer'
                                                  hrefLang='en-us'
                                                  className='hover:underline'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.electronicCityOnline && (
                                              <button>
                                                <a
                                                  href={
                                                    doctor.electronicCityOnline
                                                  }
                                                  className=' hover:underline'
                                                  target='_blank'
                                                  hrefLang='en-us'
                                                  rel='noreferrer'
                                                >
                                                  Book Now
                                                </a>
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {(doctor.marathahalliOnline ||
                                    doctor.marathahalliPhysical) && (
                                    <tr>
                                      <td className='p-2 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                          <div className='font-medium flex items-center justify-center'>
                                            <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link
                                              href='/locations/marathahalli'
                                              passHref
                                            >
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                Marathahalli
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.marathahalliPhysical && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.marathahalliPhysical
                                                }
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className=' hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.marathahalliOnline && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.marathahalliOnline}
                                                className=' hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                  {(doctor.newBelRoadOnline ||
                                    doctor.newBelRoadPhysical) && (
                                    <tr>
                                      <td className='p-2 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                          <div className='font-medium flex items-center justify-center'>
                                            <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link
                                              href='/locations/new-bel-road'
                                              passHref
                                            >
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                New BEL Road
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.newBelRoadPhysical && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.newBelRoadPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className=' hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.newBelRoadOnline && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.newBelRoadOnline}
                                                className='hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                  {(doctor.nagarbhaviOnline ||
                                    doctor.nagarbhaviPhysical) && (
                                    <tr>
                                      <td className='p-2 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                          <div className='font-medium flex items-center justify-center'>
                                            <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link
                                              href='/locations/nagarabhavi'
                                              passHref
                                            >
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                Nagarabhavi
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.nagarbhaviPhysical && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.nagarbhaviPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className=' hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.nagarbhaviOnline && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.nagarbhaviOnline}
                                                className='hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className='text-xs mt-5 text-gray-800 dark:text-gray-200'>
                        *Appointments are subject to doctor availability.
                        Please, make sure you have given your registered number
                        if you have already visited GarbhaGudi.
                      </p>
                    </section>
                  )}
                </div>
                <div className='mt-10 py-10 border-t border-gray-300'>
                  <div className='flex justify-center'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <div className='mb-4 text-gray-800 dark:text-gray-200 prose'>
                        <RichText content={doctor?.bio?.raw?.children} />
                      </div>
                    </div>
                  </div>
                  <Share pinmedia={doctor?.image?.url} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor;

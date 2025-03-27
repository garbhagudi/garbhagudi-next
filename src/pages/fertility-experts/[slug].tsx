import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Link from 'next/link';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { SiGooglemaps } from 'react-icons/si';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Share = dynamic(() => import('components/share'), { ssr: false });
const VideoTestimonials = dynamic(() => import('sections/fertility-experts/videoTestimonials'), {
  ssr: false,
});
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
          videoTestimonials
          keyFeaturesOfTreatment
          approachToIvfTreatment
          experienceExpertise {
            raw
            text
          }
          educationCredentials {
            raw
            text
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data.doctor) {
    return {
      notFound: true,
    };
  }
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
      <div className='text-content flex h-screen animate-ping items-center justify-center text-brandPink'>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={doctor?.image?.url} as='image' />
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
        <meta property='og:description' content={doctor?.bio?.text.slice(0, 160)} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={doctor?.bio?.text.slice(0, 160)} />
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
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.webp')",
            }}
          >
            <span
              id='blackOverlay'
              className='absolute h-full w-full bg-black opacity-30 dark:opacity-70'
            ></span>
          </div>
          <div
            className='pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden'
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
                className='fill-current text-gray-300 dark:text-gray-700'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative bg-gray-300 py-16 dark:bg-gray-700'>
          <div className='container mx-auto md:px-4'>
            <div className='relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl dark:bg-gray-800'>
              <div className='px-2 md:px-6' key={doctor.id}>
                <div className='flex flex-wrap justify-center'>
                  <div className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'>
                    <div className='relative'>
                      <Image
                        width={340}
                        height={340}
                        alt={doctor.name}
                        src={doctor.image.url}
                        className='-m-16 -ml-20 -mt-44 mb-4 h-auto max-w-xs rounded-full border-none bg-gray-300/30 align-middle shadow-xl dark:bg-gray-600 lg:-ml-16'
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-12 text-center font-content'>
                  <h1 className='mb-2 text-4xl font-semibold leading-normal text-gray-800 dark:text-gray-200'>
                    {doctor.name}
                  </h1>
                  <div className='textbrantext-brandPink2 mb-2 mt-0 text-xl font-bold leading-normal'>
                    {doctor.qualification}
                  </div>
                  <div className='mb-2 text-gray-800 dark:text-gray-200'>{doctor.designation}</div>
                  {doctor?.medicalRegNo && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Medical Registration Number (KMC) :{' '}
                      <span className='font-bold underline'>{doctor?.medicalRegNo}</span>
                    </div>
                  )}
                  {doctor?.languages && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Languages Known :{' '}
                      <span className='font-bold underline'>{doctor?.languages}</span>
                    </div>
                  )}
                  <div>
                    <button className='mt-6 rounded-md bg-brandPink px-4 py-2 font-content font-bold text-white hover:bg-brandPink3'>
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
                    <section className='mt-8 overflow-hidden font-content text-gray-600 antialiased'>
                      <div className='flex h-full flex-col justify-center'>
                        <div className='mx-auto w-full max-w-3xl rounded-2xl border border-pink-200 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-700'>
                          <header className='px-5 py-2'>
                            <h2 className='font-semibold text-gray-800 dark:text-gray-200'>
                              Book Your Appointment
                            </h2>
                          </header>
                          <div className=''>
                            <div className='overflow-x-auto'>
                              <table className='w-full table-auto'>
                                <thead className='bg-brandPink text-sm font-bold uppercase text-gray-800 dark:text-gray-200'>
                                  <tr>
                                    <th className='whitespace-nowrap p-2'>
                                      <div className='ml-1 text-left font-bold'>Branch</div>
                                    </th>
                                    <th className='whitespace-nowrap p-2'>
                                      <div className='text-left font-bold'>Physical</div>
                                    </th>
                                    <th className='whitespace-nowrap p-2'>
                                      <div className='text-left font-bold'>Online</div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className='divide-y divide-pink-100 text-sm dark:divide-gray-500'>
                                  {doctor.hanumanthaNagarOnline &&
                                    doctor.hanumanthaNagarPhysical && (
                                      <tr>
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='flex items-center'>
                                            <div className='flex items-center justify-center font-medium text-gray-800'>
                                              <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                                <SiGooglemaps className='text-2xl' />
                                              </div>
                                              <Link href='/locations/hanumanthanagar' passHref>
                                                <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                  Hanumanthanagar
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.hanumanthaNagarPhysical && (
                                              <button>
                                                <a
                                                  href={doctor.hanumanthaNagarPhysical}
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
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            {doctor.hanumanthaNagarOnline && (
                                              <button>
                                                <a
                                                  href={doctor.hanumanthaNagarOnline}
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
                                  {doctor.kalyanNagarOnline && doctor.kalyanNagarPhysical && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='font-medium text-gray-800'>
                                            <div className='flex items-center justify-center font-medium text-gray-800'>
                                              <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                                <SiGooglemaps className='text-2xl' />
                                              </div>
                                              <Link href='/locations/kalyan-nagar' passHref>
                                                <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                  Kalyan Nagar
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td className='whitespace-nowrap p-2'>
                                        <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                          {doctor.kalyanNagarPhysical && (
                                            <button>
                                              <a
                                                href={doctor.kalyanNagarPhysical}
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
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                          {doctor.kalyanNagarOnline && (
                                            <button>
                                              <a
                                                href={doctor.kalyanNagarOnline}
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
                                  {doctor.jayanagarOnline && doctor.jayanagarPhysical && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='font-medium text-gray-800'>
                                            <div className='flex items-center justify-center font-medium text-gray-800'>
                                              <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                                <SiGooglemaps className='text-2xl' />
                                              </div>
                                              <Link href='/locations/jayanagar' passHref>
                                                <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                  Jayanagar
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td className='whitespace-nowrap p-2'>
                                        <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                          {doctor.jayanagarPhysical && (
                                            <button>
                                              <a
                                                href={doctor.jayanagarPhysical}
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
                                      <td className='whitespace-nowrap p-2'>
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
                                  {doctor.electronicCityOnline && doctor.electronicCityPhysical && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='font-medium'>
                                            <div className='flex items-center justify-center font-medium'>
                                              <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                                <SiGooglemaps className='text-2xl' />
                                              </div>
                                              <Link href='/locations/electronic-city' passHref>
                                                <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                  Electronic City
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td className='whitespace-nowrap p-2'>
                                        <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                          {doctor.electronicCityPhysical && (
                                            <button>
                                              <a
                                                href={doctor.electronicCityPhysical}
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
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                          {doctor.electronicCityOnline && (
                                            <button>
                                              <a
                                                href={doctor.electronicCityOnline}
                                                className='hover:underline'
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
                                  {(doctor.marathahalliOnline || doctor.marathahalliPhysical) && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='flex items-center justify-center font-medium'>
                                            <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link href='/locations/marathahalli' passHref>
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                Marathahalli
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.marathahalliPhysical && (
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.marathahalliPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.marathahalliOnline && (
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.marathahalliOnline}
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
                                  {(doctor.newBelRoadOnline || doctor.newBelRoadPhysical) && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='flex items-center justify-center font-medium'>
                                            <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link href='/locations/new-bel-road' passHref>
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                New BEL Road
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.newBelRoadPhysical && (
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.newBelRoadPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.newBelRoadOnline && (
                                        <td className='whitespace-nowrap p-2'>
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
                                  {(doctor.nagarbhaviOnline || doctor.nagarbhaviPhysical) && (
                                    <tr>
                                      <td className='whitespace-nowrap p-2'>
                                        <div className='flex items-center'>
                                          <div className='flex items-center justify-center font-medium'>
                                            <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brandPink text-white sm:mr-3'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link href='/locations/nagarabhavi' passHref>
                                              <span className='cursor-pointer text-gray-800 dark:text-gray-200'>
                                                Nagarabhavi
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.nagarbhaviPhysical && (
                                        <td className='whitespace-nowrap p-2'>
                                          <div className='text-left font-medium text-gg-500 dark:text-gg-400'>
                                            <button>
                                              <a
                                                href={doctor.nagarbhaviPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='hover:underline'
                                              >
                                                Book Now
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.nagarbhaviOnline && (
                                        <td className='whitespace-nowrap p-2'>
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
                      <p className='mt-5 text-xs text-gray-800 dark:text-gray-200'>
                        *Appointments are subject to doctor availability. Please, make sure you have
                        given your registered number if you have already visited GarbhaGudi.
                      </p>
                    </section>
                  )}
                </div>
                <div className='mt-10 border-t border-gray-300 py-10'>
                  <div className='flex flex-col items-center justify-center gap-y-2'>
                    <div className='w-full px-4 lg:w-9/12'>
                      <h1 className='text-2xl font-bold'>{`About ${doctor?.name}`}</h1>
                      <div className='prose mb-4 text-gray-800 dark:text-gray-200'>
                        <RichText content={doctor?.bio?.raw?.children} />
                      </div>
                    </div>
                    {doctor?.educationCredentials?.text && (
                      <div className='w-full px-4 lg:w-9/12'>
                        <h2 className='text-2xl font-bold'>Education & Credentials</h2>
                        <div className='prose mb-4 text-gray-800 dark:text-gray-200'>
                          <RichText content={doctor?.educationCredentials?.raw?.children} />
                        </div>
                      </div>
                    )}
                    {doctor?.experienceExpertise?.text && (
                      <div className='w-full px-4 lg:w-9/12'>
                        <h2 className='text-2xl font-bold'>Experience & Expertise</h2>
                        <div className='prose mb-4 text-gray-800 dark:text-gray-200'>
                          <RichText content={doctor?.experienceExpertise?.raw?.children} />
                        </div>
                      </div>
                    )}

                    {doctor?.approachToIvfTreatment && (
                      <div className='w-full px-4 lg:w-9/12'>
                        <h2 className='text-2xl font-bold'>Approach to IVF Treatment</h2>
                        <div className='prose mb-4 text-gray-800 dark:text-gray-200'>
                          {doctor?.approachToIvfTreatment}
                        </div>
                      </div>
                    )}

                    {doctor?.keyFeaturesOfTreatment && (
                      <div className='w-full px-4 lg:w-9/12'>
                        <h2 className='text-2xl font-bold'>Key Features of Treatment</h2>
                        <div className='prose mb-4 text-gray-800 dark:text-gray-200'>
                          {doctor?.keyFeaturesOfTreatment}
                        </div>
                      </div>
                    )}
                  </div>
                  {doctor?.videoTestimonials?.length > 0 && (
                    <div className='my-5'>
                      <VideoTestimonials testimonials={doctor?.videoTestimonials} />
                    </div>
                  )}
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

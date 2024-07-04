import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Calender from 'sections/misc/international-ivf-day/Calendar';
import BranchEvent from 'sections/misc/international-ivf-day/BranchEvent';
import { Location } from 'components/header/headerData';
import Image from 'next/image';

const Page = () => {
  const title = `Celebrate International IVF Day with Garbhagudi | GarbhaGudi IVF Centre`;
  const desc = `Discover the confluence of science and Indic wisdom to enhance fertility.`; // Replace with the actual image URL

  const sections = [
    {
      type: 'paragraph',
      content: {
        header: 'Holistic Approach to Fertility',
        paragraph: `At Garbhagudi, we integrate the tri-fold path of yoga, nutrition, and Ayurveda with advanced medical treatments to enhance fertility. This unique approach not only supports your physical health but also nurtures your mental and emotional well-being, creating an optimal environment for conception.`,
      },
    },
    {
      type: 'paragraph',
      content: {
        header: 'Engage and Learn with Us',
        paragraph: `Join us in celebrating International IVF Day by participating in our various events and activities. Our event calendar from July 1 to July 25 is packed with opportunities for you to learn and engage. Whether you are an existing patient or new to our services, there's something for everyone. We also have special events happening at our branches across 7 locations, ensuring you can be part of the celebration no matter where you are.`,
      },
    },
    {
      type: 'paragraph',
      content: {
        header: 'Join the 21-Day Yoga Challenge',
        paragraph: `As part of our campaign, we invite you to take part in our 21-day yoga challenge. This program is designed to improve reproductive health through specially curated yoga practices. By participating, you'll not only enhance your fertility but also become part of a supportive community committed to holistic well-being.`,
      },
    },
    {
      type: 'imageBanner',
      content: {
        image: {
          url: '/path/to/your/banner/image.jpg', // Replace with the actual image URL
        },
      },
    },
    {
        type: 'paragraph',
        content: {
          header: 'Content on Yoga, Ayurveda, and Nutrition',
          paragraph: `Detailed information on how these practices support fertility.`,
        },
      },
    {
      type: 'eventCalendar',
      content: {
        eventCalendar: [
          { date: 'July 1', event: 'Opening Ceremony' },
          { date: 'July 2', event: 'Yoga Session' },
          { date: 'July 3', event: 'Nutrition Workshop' },
          // Add more events here
        ],
      },
    },
    {
        type: 'branchEvents',
        content: {
         location : Location
        },
    },
    {
        type: 'paragraph',
        content: {
          header: 'Freedom From Infertility Marathon',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx6F0SNFxv_4zpxvFrfddu7i8E86C3O2DNA&s', // Replace with the actual image URL
        },
    },
    {
        type: 'paragraph',
        content: {
          header: 'Hybrid Event and Agenda',
          paragraph: `Details on our hybrid event, including the agenda and how to participate.`,
        },
    },
    {
      type: 'callToAction',
      content: {
        text: 'Join Us',
      },
    },
  ];

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={desc} />
      </Head>

      <BreadCrumbs
        link1='/features'
        text1='Features'
        link2='Celebrate International IVF Day with Garbhagudi'
        text2='Celebrate International IVF Day with Garbhagudi'
        link3=''
        text3=''
        link4=''
        text4=''
      />

      <div className='relative py-16 bg-white dark:bg-gray-800 overflow-hidden'>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl font-heading'>
              Celebrate International IVF Day with Garbhagudi
            </h1>
            <p className='text-center text-gray-600 dark:text-gray-400'>
              Discover the confluence of science and Indic wisdom to enhance fertility.
            </p>

            {sections.map((section, index) => (
              <div key={index} className='my-8'>
                {section.type === 'paragraph' && (
                  <div>
                    <h2 className='text-xl font-bold'>{section.content.header}</h2>
                    <p className='text-gray-800 dark:text-gray-200'>{section.content.paragraph}</p>
                    {section.content.image && (
                      <figure>
                        <Image
                          height={100}
                          width={100}
                          className='rounded-lg mt-10 mb-5 w-full'
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx6F0SNFxv_4zpxvFrfddu7i8E86C3O2DNA&s'
                          alt='Freedom From Infertility Marathon Banner'
                        />
                      </figure>
                    )}
                  </div>
                )}
                {section.type === 'imageBanner' && (
                  <figure>
                    <Image
                      width={100}
                      height={100}
                      className='rounded-lg mt-10 mb-5 w-full'
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx6F0SNFxv_4zpxvFrfddu7i8E86C3O2DNA&s'
                      alt='Campaign Banner'
                    />
                  </figure>
                )}
                {section.type === 'eventCalendar' && (
                  <Calender />
                )}
                 {section.type === 'branchEvents' && (
                  <BranchEvent locations={section.content.location} />
                )}
                {section.type === 'callToAction' && (
                  <div className='text-center mt-8'>
                    <button className='bg-[#EE6F88] text-white px-4 py-2 rounded'>
                      {section.content.text}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

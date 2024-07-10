import { useState } from 'react';
import { SiGooglemaps } from 'react-icons/si';
import Link from 'next/link';

// Example event details for each location
const Location = [
  {
    name: 'Hanumanthanagar',
    href: '/locations/hanumanthanagar',
    icon: <SiGooglemaps />,
    short: 'HN',
    events: [
      {
        date: '23 July',
        activity: 'Yoga session',
        description: 'Join our health camp for free check-ups and consultations.',
      },
    ],
  },
  {
    name: 'Kalyan Nagar',
    href: '/locations/kalyan-nagar',
    icon: <SiGooglemaps />,
    short: 'KN',
    events: [
      {
        date: '11 July',
        activity: 'Yoga Session',
        description: 'Participate in our special yoga session to enhance fertility.',
      },
    ],
  },
  {
    name: 'Jayanagar',
    href: '/locations/jayanagar',
    icon: <SiGooglemaps />,
    short: 'JN',
    events: [
      {
        date: '16 July',
        activity: 'Yoga session',
        description: 'Learn about nutrition and its impact on fertility.',
      },
    ],
  },
  {
    name: 'Electronic City',
    href: '/locations/electronic-city',
    icon: <SiGooglemaps />,
    short: 'EC',
    events: [
      {
        date: '19 July',
        activity: 'Yoga session',
        description: 'Discover the benefits of Ayurveda for reproductive health.',
      },
    ],
  },
  {
    name: 'Marathahalli',
    href: '/locations/marathahalli',
    icon: <SiGooglemaps />,
    short: 'MH',
    events: [
      {
        date: '12 July',
        activity: 'Yoga session',
        description: 'Join our yoga challenge to improve your overall wellness.',
      },
    ],
  },
  {
    name: 'New BEL Road',
    href: '/locations/new-bel-road',
    icon: <SiGooglemaps />,
    short: 'NBR',
    events: [
      {
        date: '18 July',
        activity: 'Yoga session',
        description: 'Attend our health talk to learn more about fertility treatments.',
      },
    ],
  },
  {
    name: 'Nagarabhavi',
    href: '/locations/nagarabhavi',
    icon: <SiGooglemaps />,
    short: 'NBV',
    events: [
      {
        date: '17 July',
        activity: 'Yoga session',
        description: 'Join our seminar to gain insights into holistic wellness.',
      },
    ],
  },
];

const BranchEvents = () => {
  const [openLocation, setOpenLocation] = useState(null);

  const toggleLocation = (location) => {
    setOpenLocation(openLocation === location ? null : location);
  };

  return (
    <div>
      <h2 className='text-xl font-bold mt-10'>Events at Branch Level</h2>
      {Location.map((item, index) => (
        <div key={index} className='my-8'>
          <div className='group'>
            <div
              onClick={() => toggleLocation(item.name)}
              className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer'
            >
              <div className='flex items-center justify-center bg-gg-500 dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out rounded-lg flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 text-base text-center lg:text-2xl'>
                <div className='mt-1 text-center flex items-center justify-center flex-col'>
                  {item.icon}
                  <div className='text-xs text-center'>{item.short}</div>
                </div>
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-sm font-medium text-gray-800 dark:text-white'>
                  {item.name}
                </p>
              </div>
              <div className='ml-2'>
                {openLocation === item.name ? (
                  <svg
                    className='w-5 h-5 text-gray-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 15l7-7 7 7'
                    />
                  </svg>
                ) : (
                  <svg
                    className='w-5 h-5 text-gray-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              openLocation === item.name ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openLocation === item.name && (
              <div className='p-4 mt-3 bg-white dark:bg-gray-800'>
                {item.events.map((event, eventIndex) => (
                  <div key={eventIndex} className='mb-4'>
                    <p className='text-gray-800 dark:text-gray-200'>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className='text-gray-800 mt-2 dark:text-gray-200'>
                      <strong>Activity:</strong> {event.activity}
                    </p>
                    <Link href={"https://www.garbhagudi.com/ivf/yoga"}>
                    <button className='mt-2 bg-gg-500 text-white px-4 py-2 rounded'>
                      Register
                    </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchEvents;

import { MdAlternateEmail, MdPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='divide-y-2 divide-gray-200'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-3xl'>
              Get in touch
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 font-content sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              {contactData?.getInTouch.map((items) => (
                <div key={items.id}>
                  <h3 className='text-lg font-medium leading-6 text-gray-800 dark:text-gray-200'>
                    {items.name}
                  </h3>
                  <div className='mt-2 text-base'>
                    <div className='sr-only'>Email</div>
                    <Link
                      href={`mailto:${items.email}`}
                      className='text-purple-800 hover:underline dark:text-purple-300'
                    >
                      <div>
                        <MdAlternateEmail className='inline-flex' /> {items.email}
                      </div>
                    </Link>
                    {items.phone && (
                      <div className='mt-1'>
                        <div className='sr-only'>Phone number</div>
                        <Link
                          href={`tel:${items.phone}`}
                          className='text-gg-500 hover:underline dark:text-gg-400'
                        >
                          <div>
                            <MdPhone className='inline-block h-5 w-5' /> {items.phone}
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-16 pt-16 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mt-8 grid grid-cols-1 gap-12 font-content sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              <h2 className='font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-3xl'>
                Locations
              </h2>
              {contactData?.locations.map((items) => (
                <div key={items.id}>
                  <h3 className='text-lg font-medium leading-6 text-gray-800 dark:text-gray-200'>
                    {items.name}
                  </h3>
                  <div className='mt-2 text-base text-gray-500 dark:text-gray-300'>
                    <div className='mt-1'>
                      <Link
                        href={`tel:${items.phone}`}
                        className='text-gg-500 hover:underline dark:text-gg-400'
                      >
                        <div>
                          <MdPhone className='inline-block h-5 w-5' /> {items.phone}
                        </div>
                      </Link>
                    </div>
                    <div>{items.address}</div>
                    <div className='space-x-3'>
                      <Link
                        href={items.directionLink}
                        className='inline-flex h-8 w-auto max-w-[32px] items-center overflow-hidden rounded-3xl bg-gg-500 font-bold text-white transition-all duration-500 ease-linear hover:max-w-[340px] hover:bg-brandPink2 dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gg-400'
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        <span>
                          <SiGooglemaps className='ml-2 flex items-center text-base' />
                        </span>
                        <span className='whitespace-nowrap pl-2 pr-4'>Direction</span>
                      </Link>
                      <Link
                        href={`tel:${items.phone}`}
                        className='inline-flex h-8 w-auto max-w-[32px] items-center overflow-hidden rounded-3xl bg-gg-500 font-bold text-white transition-all duration-500 ease-linear hover:max-w-[340px] hover:bg-brandPink2 dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gg-400'
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        <span>
                          <MdPhone className='ml-2 flex items-center text-base' />
                        </span>
                        <span className='whitespace-nowrap pl-2 pr-4'>Phone Call</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const contactData = {
  getInTouch: [
    {
      id: 1,
      name: 'Appointments & Queries',
      email: 'dreams@garbhagudi.com',
      phone: '+91 9108 9108 32',
    },
    {
      id: 2,
      name: 'Feedback & Complaints',
      email: 'grievance@garbhagudi.com',
      phone: '+91 9108 9108 32',
    },
    {
      id: 3,
      name: 'Human Resources',
      email: 'hr@garbhagudi.com',
    },
    {
      id: 4,
      name: 'Partnership',
      email: 'jayaram@garbhagudi.com',
    },
  ],
  locations: [
    {
      id: '1',
      name: 'Hanumanthanagar',
      address: (
        <div>
          <p>
            Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1, Banashankari Stage
            I, Banashankari,
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560050</p>
        </div>
      ),
      phone: '+91 9886 9155 56',
      directionLink: 'https://g.page/GG1-HN?share',
    },
    {
      id: '2',
      name: 'Kalyan Nagar',
      address: (
        <div>
          <p>
            Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout, HRBR Layout 2nd Block,
            Chelekare, Extension,
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560043</p>
        </div>
      ),
      phone: '+91 8861 4333 39',
      directionLink: 'https://g.page/GarbhaGudi-IVF-Bangalore?share',
    },
    {
      id: '3',
      name: 'Jayanagar',
      address: (
        <div>
          <p>
            #26, Pattalamma Temple Road, Behind South End Circle Metro Station, Basavanagudi, <br />
            Jayanagar
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560004</p>
        </div>
      ),
      phone: '+91 9972 4633 55',
      directionLink: 'https://g.page/ggivf?share',
    },
    {
      id: '4',
      name: 'Electronic City',
      address: (
        <div>
          <p>
            Ganesh Towers, 3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank, Konappana Agrahara,
            Electronic City,
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560100</p>
        </div>
      ),
      phone: '+91 8861 8111 16',
      directionLink: 'https://g.page/GG4-EC?share',
    },
    {
      id: '5',
      name: 'Marathahalli',
      address: (
        <div>
          <p>
            2nd Floor, Balaji Plaza, 95/1, Abdul Kalam Layout, opp. ISRO Main Gate, above Karnataka
            Bank, Aswath Nagar,
            <br />
            Marathahalli,
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560037</p>
        </div>
      ),
      phone: '+91 8105 1815 15',
      directionLink: 'https://goo.gl/maps/kxhfM5SCZuq6EDnE9',
    },
    {
      id: '6',
      name: 'New BEL Road',
      address: (
        <div>
          <p>
            #3, 1st Floor, New BEL Rd, opp. to Ramaiah Hospital, RMV 2nd Stage, Ashwath Nagar,
            Devasandra Layout, Sadashivnagar
          </p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560094</p>
        </div>
      ),
      phone: '+91 9108 9108 25',
      directionLink: 'https://goo.gl/maps/Fmiwn4ZCsSTxehnq9',
    },
    {
      id: '7',
      name: 'Nagarbhavi',
      address: (
        <div>
          <p>1st Floor, 80ft Main Road, NGCF Layout, 2nd Stage, BDA Road, Naagarabhaavi,</p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560072</p>
        </div>
      ),
      phone: '+91 9886 9886 65',
      directionLink: 'https://goo.gl/maps/6ZCKzTrmE3UzgFuS7',
    },
    {
      id: '8',
      name: 'Yelahanka',
      address: (
        <div>
          <p>Pyramid North Square, S-1, 520/432, Bellary Road, Nehru Nagar, Yelahanka Hobli,</p>
          <p className='mb-5 mt-1'>Bengaluru, Karnataka 560064</p>
        </div>
      ),
      phone: '+91 9108 9108 32',
      directionLink: 'https://maps.app.goo.gl/GSj2ctaQ347UhCS67',
    },
  ],
};

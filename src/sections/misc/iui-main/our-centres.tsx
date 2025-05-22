import Link from 'next/link';

const OurCentres = () => {
  return (
    <div className='container mx-auto scroll-m-24 px-3' id='iui-centres-in-bangalore'>
      <h2 className='pb-5 text-center font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-3xl'>
        GarbhaGudi IVF Centers in Bangalore
      </h2>
      <div className='flex items-center justify-center pb-5'>
        <svg
          aria-hidden='true'
          className='h-5 w-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>First star</title>
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
        <svg
          aria-hidden='true'
          className='h-5 w-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Second star</title>
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
        <svg
          aria-hidden='true'
          className='h-5 w-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Third star</title>
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
        <svg
          aria-hidden='true'
          className='h-5 w-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Fourth star</title>
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
        <svg
          aria-hidden='true'
          className='h-5 w-5 text-gray-300 dark:text-gray-500'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Fifth star</title>
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
        <p className='ml-2 font-lexend text-sm font-medium text-gray-800 dark:text-gray-200'>
          4.8 out of 5
        </p>
      </div>
      <div className='pb-5 text-center font-content text-gray-800 dark:text-gray-200'>
        "Experience the exceptional service and quality that has earned us a 4.8-star rating!"
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 lg:gap-10'>
        {Data.map((items) => (
          <div key={items.id} className='rounded-lg border-2 border-brandPink4'>
            <div>
              <iframe
                width='100%'
                height='100%'
                className='h-72 w-full max-w-md rounded-lg rounded-b-none border-b-2 border-brandPink4 dark:brightness-75 dark:contrast-150 dark:grayscale dark:invert'
                loading='lazy'
                title='map'
                src={items.map}
              ></iframe>
            </div>
            <div className='max-w-md space-y-2 px-2 pb-2 pt-2 font-content'>
              <div className='border-b border-brandPink4 font-heading text-xl'>{items.branch}</div>
              <div className='h-16 pb-2 text-sm'>Address: {items.address}</div>
              <div className='flex items-center justify-between space-x-2'>
                <button className='rounded-lg bg-gg-400 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-400'>
                  <Link href={`tel:${items.phone}`}>Call Now</Link>
                </button>
                <button className='rounded-lg bg-gg-400 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-400'>
                  <Link href={items.link}>Directions</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCentres;

const Data = [
  {
    id: 1,
    branch: 'Hanumantha Nagar',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.886019164418!2d77.556468!3d12.9416527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61c537027ad19840!2sGarbhaGudi%20IVF%20Centre%2C%20Hanumanthanagar.!5e0!3m2!1sen!2sin!4v1641896590112!5m2!1sen!2sin',
    phone: '+91 9886 9155 56',
    address: (
      <span>
        Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1,Banashankari Stage I,
        Bengaluru, Karnataka 560050
      </span>
    ),
    link: 'https://g.page/GG1-HN?share',
  },
  {
    id: 2,
    branch: 'Kalyan Nagar',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.402186224549!2d77.64597804814905!3d13.022862590006048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb184afa11ae1fdd!2sGarbhaGudi%20IVF%20Centre%2C%20Kalyan%20Nagar.!5e0!3m2!1sen!2sin!4v1641899203760!5m2!1sen!2sin',
    phone: '+91 8861 4333 39',
    address: (
      <span>
        Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout, HRBR Layout 2nd Block, Chelekare,
        Bengaluru, Karnataka 560043
      </span>
    ),
    link: 'https://g.page/GarbhaGudi-IVF-Bangalore?share',
  },
  {
    id: 3,
    branch: 'Electronic City',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124455.97184736053!2d77.5509549079939!3d12.891696289434682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c972baa2581%3A0x38dd3f8049f5f606!2sGarbhaGudi%20IVF%20Centre%2C%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1641809188374!5m2!1sen!2sin',
    phone: '+91 8861 8111 16',
    address: (
      <span>
        Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank, Konappana Agrahara,
        Electronic City, Bengaluru, Karnataka 560100
      </span>
    ),
    link: 'https://g.page/GG4-EC?share',
  },
  {
    id: 4,
    branch: 'Jayanagar',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.13494747385!2d77.5796657!3d12.9376617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1641897947020!5m2!1sen!2sin',
    phone: '+91 9972 4633 55',
    address: (
      <span>
        South End Circle, #26, Pattalamma Temple Road, Basavanagudi, Jayanagar Bengaluru, Karnataka
        560004
      </span>
    ),
    link: 'https://g.page/ggivf?share',
  },
  {
    id: 5,
    branch: 'Marathahalli',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.74401242251!2d77.7016368!3d12.9599467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3b45ee50de8eedf!2sGarbhaGudi%20IVF%20Centre%2C%20Marathahalli.!5e0!3m2!1sen!2sin!4v1641899595868!5m2!1sen!2sin',
    phone: '+91 8105 1815 15',
    address: (
      <span>
        4TH floor, Chirag Towers, Born Babies Building, 24 & 64, Service Rd, next to कलामंदिर,
        Marathahalli, Bengaluru, Karnataka 560037
      </span>
    ),
    link: 'https://goo.gl/maps/kxhfM5SCZuq6EDnE9',
  },
  {
    id: 6,
    branch: 'New BEL Road',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62206.24078266471!2d77.54224755616912!3d12.978883707796326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1787016c1729%3A0xc0292defa84a9230!2sGarbhaGudi%20IVF%20Centre%2C%20New%20BEL%20Road!5e0!3m2!1sen!2suk!4v1679131051329!5m2!1sen!2suk',
    phone: '+91 9108 9108 25',
    address: (
      <span>
        No. 3, 1st Floor, New BEL Rd, opp. to Ramaiah Hospital, RMV 2nd Stage, Ashwath Nagar,
        Devasandra Layout, Bengaluru, Karnataka 560094, India
      </span>
    ),
    link: 'https://goo.gl/maps/Fmiwn4ZCsSTxehnq9',
  },
  {
    id: 7,
    branch: 'Nagarabhavi',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.02095515674114!2d77.51104068056954!3d12.961122397852817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fcd6ee8ee57%3A0x2b5769e83d027d93!2sGarbhaGudi%20IVF%20Centre%2C%20Nagarbhavi!5e0!3m2!1sen!2sin!4v1683275922959!5m2!1sen!2sin',
    phone: '+91 9886 9886 65',
    address: <span>80 Feet Main Rd, 2 Stage, Naagarabhaavi, Bengaluru, Karnataka 560072</span>,
    link: 'https://www.google.com/maps/place/GarbhaGudi+IVF+Centre,+Nagarbhavi,+80+Feet+Main+Rd,+2+Stage,+Naagarabhaavi,+Bengaluru,+Karnataka+560072/@12.961096,77.5109731,19z/data=!4m6!3m5!1s0x3bae3fcd6ee8ee57:0x2b5769e83d027d93!8m2!3d12.961096!4d77.5109735!16s%2Fg%2F11ty4tr17s',
  },
  {
    id: 8,
    branch: 'Yelahanka',
    map: 'https://maps.app.goo.gl/GSj2ctaQ347UhCS67',
    phone: '+91 9108 9108 32',
    address: (
      <span>
        Pyramid North Square, S-1, 520/432, Bellary Road, Nehru Nagar, Yelahanka Hobli, Bengaluru,
        Karnataka 560064
      </span>
    ),
    link: 'https://www.google.com/maps/place/GarbhaGudi+IVF+Centre,+Yelahanka/@13.0972851,77.595591,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3bae1967f7537aa5:0x22df6e1d1a01b7f!2sGarbhaGudi+IVF+Centre,+Yelahanka!8m2!3d13.0972799!4d77.5981659!10e1!16s%2Fg%2F11x1pmb_3f!3m5!1s0x3bae1967f7537aa5:0x22df6e1d1a01b7f!8m2!3d13.0972799!4d77.5981659!16s%2Fg%2F11x1pmb_3f?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D',
  },
];

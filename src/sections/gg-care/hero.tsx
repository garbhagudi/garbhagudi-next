import { HiChatAlt, HiPhone, HiCalendar } from 'react-icons/hi';

const supportLinks = [
  {
    name: 'Chat Support',
    description:
      'Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!',
    icon: HiChatAlt,
    ctaAction: 'Chat Now',
    ctaLink:
      'https://salesiq.zoho.com/signaturesupport.ls?widgetcode=93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0',
  },
  {
    name: 'Call Support',
    description:
      'Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!',
    icon: HiPhone,
    ctaAction: 'Call Now',
    ctaLink: 'tel:+919108910832',
  },
  {
    name: 'Book an Appointment',
    description:
      'Now book an appointment with any of your nearest locations of GarbhaGudi IVF Centre, and get the best fertility treatments from our experts!',
    icon: HiCalendar,
    ctaAction: 'Book an Appointment',
    ctaLink: 'https://medicsprime.in/OnlineAppointment/OnlineAppointment.jsp?enx=%7B%22e%22%3A%22Pv1yAd9b5VMo2DOud8JSJFkU7CzPOXXBQlPNffirhwA6fe2HHci3dR%2BT1cnBNmqH3kNc2wKJoqqIdPgk0Ie7iA%3D%3D%22%2C%22s%22%3A%22f5ec95cc090eb4a5273afdb7946feb74%22%2C%22i%22%3A%22d919f6d46ee942475fcf1bd0928d6b47%22%7D',
  },
];

const Hero = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      {/* Header */}
      <div className='relative pb-32 '>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.webp'
            alt='gg care'
          />
          <div
            className='absolute inset-0 bg-gray-400 dark:bg-gray-600 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 xl:py-56 sm:px-6 lg:px-8'></div>
      </div>

      {/* Overlapping cards */}
      <section
        className='md:-mt-12 lg:-mt-44 -mt-8 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8 '
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className='flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-xl group dark:border-2 dark:border-gray-600'
            >
              <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                <div className='absolute top-0 p-5 inline-block bg-gg-400 dark:bg-gray-600  group-hover:dark:bg-gg-400 transition-all duration-150 rounded-xl shadow-lg transform -translate-y-1/2'>
                  <link.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-gray-800 dark:text-gray-200 font-heading'>
                  {link.name}
                </h3>
                <p className='mt-4 text-sm text-gray-700 dark:text-gray-300  font-content'>
                  {link.description}
                </p>
              </div>
              <button className='px-4  py-2 bg-gg-400 dark:bg-gray-600 dark:group-hover:bg-gg-400 transition-all duration-150 rounded-b-xl font-content text-white font-semibold'>
                <a href={link.ctaLink} target='_blank' rel='noreferrer'>
                  {link.ctaAction}
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

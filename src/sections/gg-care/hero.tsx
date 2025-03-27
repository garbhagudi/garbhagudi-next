import { HiChatAlt, HiPhone, HiCalendar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const supportLinks = [
  {
    name: 'Chat Support',
    description:
      'Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!',
    icon: HiChatAlt,
    ctaAction: 'Chat Now',
    ctaLink: '/contact/enquiry?utm_source=ggcare&utm_medium=chat&utm_campaign=ggcare_chat',
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
    ctaLink:
      'https://medicsprime.in/OnlineAppointment/OnlineAppointment.jsp?enx=%7B%22e%22%3A%22Pv1yAd9b5VMo2DOud8JSJFkU7CzPOXXBQlPNffirhwA6fe2HHci3dR%2BT1cnBNmqH3kNc2wKJoqqIdPgk0Ie7iA%3D%3D%22%2C%22s%22%3A%22f5ec95cc090eb4a5273afdb7946feb74%22%2C%22i%22%3A%22d919f6d46ee942475fcf1bd0928d6b47%22%7D',
  },
];

const Hero = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      {/* Header */}
      <div className='relative pb-32'>
        <div className='absolute inset-0'>
          <Image
            className='h-full w-full object-cover'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.webp'
            alt='gg care'
            width={500}
            height={500}
            priority={true}
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply dark:bg-gray-600'
            aria-hidden='true'
          />
        </div>
        <div className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 xl:py-56'></div>
      </div>

      {/* Overlapping cards */}
      <section
        className='relative z-10 mx-auto -mt-8 max-w-7xl px-4 pb-32 sm:px-6 md:-mt-12 lg:-mt-44 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className='group flex flex-col rounded-2xl bg-white shadow-xl dark:border-2 dark:border-gray-600 dark:bg-gray-800'
            >
              <div className='relative flex-1 px-6 pb-8 pt-16 md:px-8'>
                <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gg-400 p-5 shadow-lg transition-all duration-150 dark:bg-gray-600 group-hover:dark:bg-gg-400'>
                  <link.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </div>
                <h3 className='font-heading text-xl font-medium text-gray-800 dark:text-gray-200'>
                  {link.name}
                </h3>
                <p className='mt-4 font-content text-sm text-gray-700 dark:text-gray-300'>
                  {link.description}
                </p>
              </div>
              <button className='rounded-b-xl bg-gg-400 px-4 py-2 font-content font-semibold text-white transition-all duration-150 dark:bg-gray-600 dark:group-hover:bg-gg-400'>
                <Link href={link.ctaLink} target='_blank' rel='noreferrer'>
                  {link.ctaAction}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

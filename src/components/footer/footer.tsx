import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import Form from 'sections/LandingPages/Performant/form';

const navigation = {
  treatments: [
    { name: 'Hysteroscopy', href: '/treatments/hysteroscopy-treatment-in-bangalore' },
    { name: 'ICSI Treatment', href: '/treatments/icsi-treatment-in-bangalore' },
    { name: 'IUI Treatment', href: '/treatments/iui-treatment-in-bangalore' },
    { name: 'IVF Treatment', href: '/treatments/ivf-treatment-in-bangalore' },
    { name: 'Laparoscopy', href: '/treatments/laparoscopy-treatment-in-bangalore' },
    { name: 'FET', href: '/treatments/frozen-embryo-transfer' },
  ],
  locations: [
    { name: 'Hanumanthanagar', href: '/locations/hanumanthanagar' },
    { name: 'Electronic city', href: '/locations/electronic-city' },
    { name: 'Kalyan Nagar', href: '/locations/kalyan-nagar' },
    { name: 'Marthahalli', href: '/locations/marathahalli' },
    { name: 'Nagarbhavi', href: '/locations/nagarabhavi' },
    { name: 'New BEL road', href: '/locations/new-bel-road' },
    { name: 'Jayanagar', href: '/locations/jayanagar' },
    { name: 'Yelahanka', href: '/locations/yelahanka' },
    { name: 'Davanagere', href: '/locations/davanagere' },
    { name: 'Hosur', href: '/locations/hosur' },
  ],
  resources: [
    { name: 'Fertility Experts', href: '/fertility-experts' },
    { name: 'Fertility center', href: '/fertility-center' },
    { name: 'Blogs', href: '/blogs/page/1' },
    { name: 'FAQ', href: '/resources/faq' },
  ],
  company: [
    { name: 'GarbhaGudi', href: '/about/overview' },
    { name: 'GGIRHR', href: 'https://ggirhr.com' },
    { name: 'GarbhaGnan', href: 'https://garbhagnan.org' },
    { name: 'Pharmacy', href: '#' },
  ],
  contact: [
    { name: 'Paripoorna', href: '/features/paripoorna' },
    { name: 'Careers', href: '/careers' },
    { name: 'GG care', href: '/gg-care' },
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy-policy' },
    { name: 'Terms', href: '/legal/terms-and-conditions' },
  ],
};

export default function Footer() {
  const router = useRouter();
  const isYogaPage = router.pathname === '/yoga';
  return (
    <footer
      className='bg-neutral-50 font-content dark:bg-gray-800'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto flex max-w-7xl flex-col justify-between border-t px-1 pb-12 dark:border-gray-600 sm:px-6 lg:flex-row lg:py-8'>
        <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
          <div className='mt-12 grid grid-cols-1 gap-8 text-center antialiased xl:col-span-full xl:mt-0 xl:grid-cols-1'>
            <div className='grid grid-cols-3 gap-5 md:grid-cols-6'>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Treatments
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.treatments.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Locations
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.locations.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Resources
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Companies
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Contact
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {!isYogaPage && (
          <div className='mt-5 w-fit self-center rounded-md bg-gray-800 md:mt-0'>
            <Form />
          </div>
        )}
      </div>
      <div className='mx-auto max-w-7xl border-t border-gray-200 dark:border-gray-600'>
        <div className='items-ceter mt-8 flex justify-center space-x-2 sm:space-x-3'>
          {SocialIcon.map((item) => (
            <Link key={item.name} href={item.url} target='_blank' rel='noreferrer' className=''>
              <span className='sr-only'>{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <p className='py-8 text-center font-content text-gray-800 dark:text-white'>
          &copy; {new Date().getFullYear()} GarbhaGudi IVF Centre, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon = [
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/c/GarbhaGudiIVFCentre',
    icon: <BsYoutube className='text-3xl text-red-600 dark:text-red-500' />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/garbhagudiIVF/',
    icon: <BsFacebook className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/garbhagudiivfcentre/?hl=en',
    icon: <BsInstagram className='text-3xl text-pink-600 dark:text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/garbagudi',
    icon: <BsLinkedin className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=919108910832&text=Hi.',
    icon: <BsWhatsapp className='text-3xl text-green-600 dark:text-green-500' />,
  },
  {
    name: 'X',
    url: 'https://X.com/garbhagudiivf',
    icon: <RiTwitterXFill className='text-3xl dark:text-white' />,
  },
  {
    name: 'Mail',
    url: 'mailto:dreams@garbhagudi.com',
    icon: <BsFillEnvelopeAtFill className='text-3xl text-gray-600 dark:text-gray-200' />,
  },
];

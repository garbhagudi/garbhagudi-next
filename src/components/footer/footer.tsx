import Link from 'next/link';
import {
  BsYoutube,
  BsTwitch,
  BsReddit,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';

const navigation = {
  about: [
    { name: 'Vision & Mission', href: '/about/vision-and-mission' },
    { name: 'Directors', href: '/about/overview' },
    {
      name: 'Awards',
      href: '/about/awards-and-accolades',
    },
    { name: 'Dr Asha S Vijay', href: 'https://drashasvijay.com' },
  ],
  quickLinks: [
    { name: 'IVF Treatment', href: '/treatments/in-vitro-fertilization-ivf' },
    {
      name: 'IUI Treatment',
      href: '/treatments/intra-uterine-insemination-iui',
    },
    {
      name: 'Treatment Pricing',
      href: '/treatments/ivf-treatment-cost-in-bangalore',
    },
  ],
  support: [
    { name: 'GG CARE', href: '/gg-care' },
    { name: 'Diagnosis', href: '/resources/diagnosis' },
    { name: 'Treatment', href: '/resources/treatments' },
    { name: 'Career', href: '/careers' },
  ],
  company: [
    { name: 'GarbhaGudi', href: '/about/overview' },
    { name: 'GGIRHR', href: 'https://ggirhr.com' },
    { name: 'GarbhaGnan', href: 'https://garbhagnan.org' },
    { name: 'Pharmacy', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy-policy' },
    { name: 'Terms', href: '/legal/terms-and-conditions' },
    { name: 'Refund Policy', href: '/legal/refund-policy' },
  ],
};

export default function Footer() {
  return (
    <footer
      className='bg-neutral-50 font-content dark:bg-gray-800'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl border-t px-4 pb-12 dark:border-gray-600 sm:px-6 lg:px-8 lg:py-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='mt-12 grid grid-cols-1 gap-8 text-center antialiased xl:col-span-full xl:mt-0 xl:grid-cols-1'>
            <div className='grid grid-cols-3 gap-5 md:grid-cols-5'>
              <div className=''>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-white'>
                  About
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.about.map((item) => (
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
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-white'>
                  Support
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.support.map((item) => (
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
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-white'>
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
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-white'>
                  Quicklinks
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.quickLinks.map((item) => (
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
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-white'>
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
    url: 'https://api.whatsapp.com/send/?phone=918884183338&text=Hi.',
    icon: <BsWhatsapp className='text-3xl text-green-600 dark:text-green-500' />,
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/garbhagudi',
    icon: <BsTwitch className='text-3xl text-purple-600 dark:text-purple-500' />,
  },
  {
    name: 'X',
    url: 'https://X.com/garbhagudiivf',
    icon: <RiTwitterXFill className='text-3xl dark:text-white' />,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/garbhagudi/',
    icon: <BsReddit className='text-3xl text-orange-600' />,
  },
  {
    name: 'Mail',
    url: 'mailto:dreams@garbhagudi.com',
    icon: <BsFillEnvelopeAtFill className='text-3xl text-gray-600 dark:text-gray-200' />,
  },
];

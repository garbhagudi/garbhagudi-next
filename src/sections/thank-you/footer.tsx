type NavLink = { name: string; href: string };

const nav: {
  treatments: NavLink[];
  locations: NavLink[];
  resources: NavLink[];
  contact: NavLink[];
} = {
  treatments: [
    {
      name: 'Hysteroscopy',
      href: 'https://www.garbhagudi.com/treatments/hysteroscopy-treatment-in-bangalore',
    },
    {
      name: 'ICSI Treatment',
      href: 'https://www.garbhagudi.com/treatments/icsi-treatment-in-bangalore',
    },
    {
      name: 'IUI Treatment',
      href: 'https://www.garbhagudi.com/treatments/iui-treatment-in-bangalore',
    },
    {
      name: 'IVF Treatment',
      href: 'https://www.garbhagudi.com/treatments/ivf-treatment-in-bangalore',
    },
    {
      name: 'Laparoscopy',
      href: 'https://www.garbhagudi.com/treatments/laparoscopy-treatment-in-bangalore',
    },
    { name: 'FET', href: 'https://www.garbhagudi.com/treatments/frozen-embryo-transfer' },
  ],
  locations: [
    { name: 'Hanumanthanagar', href: 'https://www.garbhagudi.com/locations/hanumanthanagar' },
    { name: 'Electronic City', href: 'https://www.garbhagudi.com/locations/electronic-city' },
    { name: 'Kalyan Nagar', href: 'https://www.garbhagudi.com/locations/kalyan-nagar' },
    { name: 'Marthahalli', href: 'https://www.garbhagudi.com/locations/marathahalli' },
    { name: 'Nagarbhavi', href: 'https://www.garbhagudi.com/locations/nagarabhavi' },
    { name: 'New BEL Road', href: 'https://www.garbhagudi.com/locations/new-bel-road' },
    { name: 'Jayanagar', href: 'https://www.garbhagudi.com/locations/jayanagar' },
    { name: 'Yelahanka', href: 'https://www.garbhagudi.com/locations/yelahanka' },
    { name: 'Davanagere', href: 'https://www.garbhagudi.com/locations/davanagere' },
    { name: 'Hosur', href: 'https://www.garbhagudi.com/locations/hosur' },
  ],
  resources: [
    { name: 'Fertility Experts', href: 'https://www.garbhagudi.com/fertility-experts' },
    { name: 'Fertility Centre', href: 'https://www.garbhagudi.com/fertility-center' },
    { name: 'Blogs', href: 'https://www.garbhagudi.com/blogs/page/1' },
    { name: 'FAQ', href: 'https://www.garbhagudi.com/resources/faq' },
  ],
  contact: [
    { name: 'Paripoorna', href: 'https://www.garbhagudi.com/features/paripoorna' },
    { name: 'Careers', href: 'https://www.garbhagudi.com/careers' },
    { name: 'GG Care', href: 'https://www.garbhagudi.com/gg-care' },
  ],
};

export default function ThankYouFooter() {
  return (
    <footer className='relative z-10 bg-[#1e1210]'>
      <div className='border-t border-[#c0452a]/[0.08] bg-white px-6 pb-8 pt-10 md:px-12 md:pb-12 md:pt-16'>
        <div className='mx-auto grid max-w-[1140px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-10'>
          {[
            { label: 'Treatments', items: nav.treatments },
            { label: 'Locations', items: nav.locations },
            { label: 'Resources', items: nav.resources },
            { label: 'Contact', items: nav.contact },
          ].map(({ label, items }) => (
            <div key={label}>
              <h3 className='mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#c0452a]'>
                {label}
              </h3>
              <ul className='m-0 list-none space-y-2.5 p-0'>
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-[13px] text-[#7a5c52] no-underline transition-colors duration-200 hover:text-[#1e1210]'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className='m-0 px-6 py-7 text-center text-[13px] text-white/50'>
        © 2026 GarbhaGudi Centre. All rights reserved. &nbsp;|&nbsp;{' '}
        <a
          href='https://www.garbhagudi.com/'
          className='text-white/70 no-underline transition-colors duration-200 hover:text-white'
        >
          Back to Website
        </a>
      </p>
    </footer>
  );
}

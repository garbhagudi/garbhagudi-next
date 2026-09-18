import { BsBuildings, BsHospital } from 'react-icons/bs';
import { CiMedicalCase } from 'react-icons/ci';
import { ImLab } from 'react-icons/im';

const stats = [
  { value: '15,000+', label: 'Babies delivered since 2011' },
  { value: '16', label: 'Years of fertility expertise' },
  { value: 'GarbhaGudi', label: 'Fertility centre in Davanagere' },
  { value: 'In-house', label: 'IVF & embryology labs' },
];

const whyCentre = [
  {
    icon: <BsHospital />,
    title: 'A dedicated fertility hospital, not just a clinic',
    body: 'GarbhaGudi is built end-to-end for fertility care — from consultation and diagnostics to the IVF lab, andrology, and recovery — so your entire treatment happens under one trusted roof.',
  },
  {
    icon: <ImLab />,
    title: 'Advanced in-house IVF & embryology labs',
    body: 'Our centre runs a modern, quality-controlled IVF laboratory. So embryo handling, culture, and transfer are managed by our own embryology team — never outsourced.',
  },
  {
    icon: <CiMedicalCase />,
    title: 'Experienced fertility specialists',
    body: 'Gynaecologists, embryologists, andrologists and counsellors work together on each case, including complex and previously failed cycles.',
  },
  {
    icon: <BsBuildings />,
    title: 'World-class fertility care, close to you in Davanagere',
    body: 'Our Davanagere centre brings the same advanced fertility care available at GarbhaGudi’s larger centres right to your city.',
  },
];

const Content = () => {
  return (
    <>
      {/* Trust stats strip */}
      <section aria-label='GarbhaGudi at a glance' className='border-y border-gg-100 bg-white'>
        <div className='mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8'>
          {stats.map((s) => (
            <div key={s.label} className='text-center'>
              <div className='font-heading text-2xl font-extrabold text-gg-600 sm:text-3xl'>
                {s.value}
              </div>
              <div className='mt-1 font-content text-sm text-gray-600'>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Centre / hospital SEO content */}
      <section
        className='bg-gradient-to-b from-white to-gg-50/40'
        aria-labelledby='why-centre-heading'
      >
        <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <h2
            id='why-centre-heading'
            className='text-center font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
          >
            Why GarbhaGudi is a leading IVF centre in Davanagere
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-center font-content text-gray-700'>
            Choosing the right <span className='font-semibold'>IVF centre</span> shapes your entire
            fertility journey. As Davanagere&apos;s most trusted{' '}
            <span className='font-semibold'>fertility hospital</span>, GarbhaGudi brings together
            advanced technology, an experienced clinical team, and genuinely caring support so that
            you feel confident from your first consultation onward.
          </p>

          <div className='mt-10 grid gap-5 sm:grid-cols-2'>
            {whyCentre.map((item) => (
              <div
                key={item.title}
                className='flex gap-4 rounded-xl border border-gg-100 bg-white p-5 shadow-sm transition hover:shadow-lg'
              >
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gg-50 text-2xl text-gg-600'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='font-heading text-lg font-bold text-gray-900'>{item.title}</h3>
                  <p className='mt-1.5 font-content text-sm leading-relaxed text-gray-700'>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

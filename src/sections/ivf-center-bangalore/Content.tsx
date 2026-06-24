import { BsBuildings, BsHospital } from 'react-icons/bs';
import { CiMedicalCase } from 'react-icons/ci';
import { ImLab } from 'react-icons/im';
import { HiCheckCircle } from 'react-icons/hi';

const stats = [
  { value: '15,000+', label: 'Babies delivered since 2011' },
  { value: 'Since 2011', label: 'Years of fertility expertise' },
  { value: 'Multiple', label: 'Centres across Bangalore' },
  { value: 'In-house', label: 'IVF & embryology labs' },
];

const whyCentre = [
  {
    icon: <BsHospital />,
    title: 'A dedicated fertility hospital, not just a clinic',
    body: 'GarbhaGudi is built end-to-end for fertility care — consultation, diagnostics, IVF lab, andrology and recovery — so your entire treatment happens under one trusted roof.',
  },
  {
    icon: <ImLab />,
    title: 'Advanced in-house IVF & embryology labs',
    body: 'Our centres run modern, quality-controlled IVF laboratories so embryo handling, culture and transfer are managed by our own embryology team — never outsourced.',
  },
  {
    icon: <CiMedicalCase />,
    title: 'Experienced fertility specialists',
    body: 'Gynaecologists, embryologists, andrologists and counsellors work together on each case, including complex and previously failed cycles.',
  },
  {
    icon: <BsBuildings />,
    title: 'Centres close to you in Bangalore',
    body: 'With multiple branches across the city, world-class fertility care stays accessible — pick the GarbhaGudi centre nearest to you.',
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
      <section className='bg-gradient-to-b from-white to-gg-50/40' aria-labelledby='why-centre-heading'>
        <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <h2
            id='why-centre-heading'
            className='text-center font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
          >
            Why GarbhaGudi is a leading IVF centre in Bangalore
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-center font-content text-gray-700'>
            Choosing the right <span className='font-semibold'>IVF centre</span> shapes your entire
            fertility journey. As one of Bangalore&apos;s most trusted{' '}
            <span className='font-semibold'>fertility hospitals</span>, GarbhaGudi brings advanced
            technology, an experienced clinical team and genuinely caring support together so you
            feel confident from your first consultation onward.
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

          {/* Treatments offered — supports "clinic / hospital" intent breadth */}
          <div className='mt-12 rounded-2xl bg-brandPurpleDark px-6 py-8 text-white sm:px-10'>
            <h3 className='font-heading text-2xl font-bold'>Fertility treatments under one roof</h3>
            <div className='mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'IVF (In-Vitro Fertilisation)',
                'IUI (Intrauterine Insemination)',
                'ICSI & advanced fertilisation',
                'Egg freezing & fertility preservation',
                'Male infertility treatment',
                'Fertility evaluation & diagnostics',
              ].map((t) => (
                <div key={t} className='flex items-center gap-2 font-content text-sm'>
                  <HiCheckCircle className='shrink-0 text-lg text-brandYellow' aria-hidden='true' />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

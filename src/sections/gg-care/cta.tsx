import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Cta = () => {
  const path = usePathname();

  return (
    <section className='bg-gray-50 dark:bg-gray-700'>
      <div className='mx-auto max-w-7xl px-4 py-12 lg:flex lg:items-center lg:justify-between'>
        <h2 className='font-heading text-3xl font-extrabold text-gray-900'>
          <span>Ready to get started?</span>
          <span className='mt-2 block text-xl text-gray-800 dark:text-gray-200'>
            We&apos;re here to provide information, advice, support and understanding.
          </span>
        </h2>

        <div className='mt-8 flex gap-3 lg:mt-0'>
          <Link
            href={`/contact/enquiry?pageVisit=${path}`}
            className='inline-flex items-center justify-center rounded-md bg-gg-500 px-5 py-3 font-content text-base font-medium text-gray-200 hover:bg-brandPink3 dark:hover:bg-gg-600'
          >
            Contact Us
          </Link>

          <a
            href='https://wa.me/919108910832?text=Hi.'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center rounded-md bg-gg-500 px-5 py-3 font-content text-base font-medium text-gray-200 hover:bg-brandPink3 dark:hover:bg-gg-600'
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;

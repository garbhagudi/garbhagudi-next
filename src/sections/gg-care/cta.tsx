import MyModal from 'components/modal';
import { BsWhatsapp } from 'react-icons/bs';
const Cta = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-700'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-heading'>
          <span className='block text-gg-400'>Ready to get started?</span>
          <span className='block text-gray-800 dark:text-gray-200 text-xl md:text-2xl'>
            We&apos;re here to provide information, advice, support and
            understanding.
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <MyModal
              title={'Contact Us'}
              clnm={
                'inline-flex items-center justify-center px-5 py-3 border border-transparent font-content text-base font-medium rounded-md text-gg-500 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-gray-600'
              }
            />
          </div>
          <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href='https://wa.me/918884183338?text=Hi.'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent font-content text-base font-medium rounded-md text-gg-500 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-gray-600'
            >
              <BsWhatsapp /> <span className='ml-2'>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

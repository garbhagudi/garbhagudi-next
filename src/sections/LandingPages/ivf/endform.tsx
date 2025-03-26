import Image from 'next/image';

const EndForm = () => {
  return (
    <div id='form'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <div className='mx-auto'>
              <h4 className='text-center font-lexend text-4xl font-bold text-gg-500'>
                Book an Appointment
              </h4>
              <div className='flex flex-col items-center bg-[#005E7E]'>
                <h2 className='mt-3 text-center font-lexend text-xl font-bold text-white'>
                  Talk To Our Fertility Experts Today
                </h2>
                <div className='mb-10 mt-5 flex w-full flex-col px-5 pt-4'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='w-full rounded border border-gg-500 px-4 py-1'
                  />
                  <input
                    type='text'
                    placeholder='Phone'
                    className='mt-5 rounded border border-gg-500 px-4 py-1'
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    className='mt-5 rounded border border-gg-500 px-4 py-1'
                  />
                  <button className='mx-auto mt-5 w-1/2 rounded bg-gg-500 px-3 py-2 font-lexend text-white'>
                    {' '}
                    Submit{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={
                'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742986480/landing-page/footer-form_ikr1ye.webp'
              }
              alt='EndForm Image'
              width={500}
              height={500}
              className='rounded-lg'
              fetchPriority='low'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndForm;

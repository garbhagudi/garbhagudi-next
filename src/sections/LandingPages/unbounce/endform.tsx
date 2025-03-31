import Image from 'next/image';
import Form from '../Performant/form';

const EndForm = () => {
  return (
    <div id='form'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <div className='mx-2 flex flex-col gap-2.5'>
              <h4 className='text-center font-lexend text-xl font-bold text-gg-500 md:text-4xl'>
                Book an Appointment
              </h4>
              <div className='flex w-full rounded-md bg-gray-800 p-2'>
                <Form />
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

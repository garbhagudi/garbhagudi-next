import Form from './form';
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
              <Form />
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

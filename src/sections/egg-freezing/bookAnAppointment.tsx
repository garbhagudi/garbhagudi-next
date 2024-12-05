const BookAnAppointment = () => {
  return (
    <div
      className='relative w-[90%] max-w-md rounded-lg bg-white p-8 shadow-lg'
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className='font-nunito-sans decoration-none mb-2 text-center text-2xl font-extrabold leading-[43.65px] underline-offset-[from-font]'>
        Book an Appointment
      </h2>
      <p className='mb-6 text-center text-gray-600'>
        Help us with your mobile number and we will give you a call, or you can directly call us
      </p>

      <input
        type='text'
        placeholder='Enter Mobile Number here'
        className='mb-4 w-full rounded-md border p-3 text-center text-gray-800 placeholder-gray-400 focus:outline-none'
      />

      <button
        type='button'
        className='mb-4 w-full rounded-md bg-[#DD6F6F] py-2 font-semibold text-white'
      >
        Submit
      </button>

      <div className='mb-2 text-center text-gray-500'>OR</div>

      <div className='text-center'>
        <a href='tel:+919108910832' className='font-semibold text-[#DD6F6F]'>
          Call at +91 9108 9108 32
        </a>
      </div>
    </div>
  );
};

export default BookAnAppointment;

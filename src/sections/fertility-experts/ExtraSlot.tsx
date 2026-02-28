interface TimingSlot {
  doctorName: string;
  timing: string;
}

interface ExtraSlotProps {
  effectiveDate: string;
  timings: TimingSlot[];
}

const ExtraSlot = ({ effectiveDate, timings }: ExtraSlotProps) => {
  if (!timings || timings.length === 0) {
    return null;
  }
  return (
    <div className='my-8'>
      <h2 className='text-center text-lg font-bold text-gg-500'>{effectiveDate}</h2>
      <div className='mt-5 flex w-full justify-center'>
        <ul className='mx-auto w-full space-y-2 rounded-2xl border border-pink-200 bg-white p-5 text-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 md:w-1/2'>
          {timings.map((slot, index) => (
            <li
              key={index}
              className={`flex justify-between pb-2 ${
                index < timings.length - 1 ? 'border-b border-gray-700' : ''
              }`}
            >
              <span className='font-bold text-gray-800 dark:text-gray-200'>{slot.doctorName}</span>
              <span className='text-gray-600 dark:text-gray-100'>{slot.timing}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExtraSlot;

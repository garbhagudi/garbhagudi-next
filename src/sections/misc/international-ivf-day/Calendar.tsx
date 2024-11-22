import { useState, useEffect } from 'react';

const events = [
  {
    date: '11',
    event: 'Yoga session',
    details: 'Yoga session with 10-15pax (including 5 couples)',
  },
  { date: '2', event: 'Yoga Session', details: 'Details for Yoga Session' },
  { date: '3', event: 'Nutrition Workshop', details: 'Details for Nutrition Workshop' },
  { date: '4', event: 'IVF Seminar', details: 'Details for IVF Seminar' },
  { date: '5', event: 'Mindfulness Workshop', details: 'Details for Mindfulness Workshop' },
  { date: '6', event: 'Ayurveda for Fertility', details: 'Details for Ayurveda for Fertility' },
  { date: '7', event: 'Community Support Meetup', details: 'Details for Community Support Meetup' },
  { date: '8', event: 'Dietary Tips', details: 'Details for Dietary Tips' },
  { date: '9', event: 'IVF Q&A', details: 'Details for IVF Q&A' },
  { date: '10', event: 'Closing Ceremony', details: 'Details for Closing Ceremony' },
  { date: '11', event: 'Yoga Session', details: 'Details for Yoga Session' },
  { date: '12', event: 'Nutrition Workshop', details: 'Details for Nutrition Workshop' },
  { date: '13', event: 'IVF Seminar', details: 'Details for IVF Seminar' },
  { date: '14', event: 'Mindfulness Workshop', details: 'Details for Mindfulness Workshop' },
  { date: '15', event: 'Ayurveda for Fertility', details: 'Details for Ayurveda for Fertility' },
  {
    date: '16',
    event: 'Community Support Meetup',
    details: 'Details for Community Support Meetup',
  },
  { date: '17', event: 'Dietary Tips', details: 'Details for Dietary Tips' },
  { date: '18', event: 'IVF Q&A', details: 'Details for IVF Q&A' },
  { date: '19', event: 'Closing Ceremony', details: 'Details for Closing Ceremony' },
  { date: '20', event: 'Yoga Session', details: 'Details for Yoga Session' },
  { date: '21', event: 'Nutrition Workshop', details: 'Details for Nutrition Workshop' },
  { date: '22', event: 'IVF Seminar', details: 'Details for IVF Seminar' },
  { date: '23', event: 'Mindfulness Workshop', details: 'Details for Mindfulness Workshop' },
  { date: '24', event: 'Ayurveda for Fertility', details: 'Details for Ayurveda for Fertility' },
  {
    date: '25',
    event: 'Community Support Meetup',
    details: 'Details for Community Support Meetup',
  },
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Find the event for the current date in IST time zone and set it as selected by default
    const currentDay = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
    });

    const defaultEvent = events.find((event) => event.date === currentDay);
    setSelectedDate(defaultEvent || events[0]); // Default to the first event if current date not found
  }, []);

  const handleDateClick = (event) => {
    setSelectedDate(event);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Left side: Calendar */}
      <div className='mb-4 w-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 md:mb-0 md:w-1/2'>
        <h2 className='mb-4 text-2xl font-bold'>Event Calendar - July 2024</h2>
        <div className='grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5'>
          {events.map((event, index) => (
            <div
              key={index}
              className={`cursor-pointer overflow-hidden rounded-lg border shadow-md transition-all duration-300 ${
                selectedDate && event.date === selectedDate.date ? 'border-blue-500' : ''
              }`}
              style={{
                backgroundColor:
                  selectedDate && event.date === selectedDate.date ? '#EE6F88' : 'inherit',
                color: selectedDate && event.date === selectedDate.date ? 'white' : 'inherit',
              }}
              onClick={() => handleDateClick(event)}
            >
              <div className='flex items-center justify-between p-4 transition-colors'>
                <strong className='text-lg'>{event.date}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Event details */}
      {selectedDate && (
        <div className='w-full p-4 md:w-1/2'>
          <h2 className='mb-4 text-2xl font-bold'>
            Event Details for {selectedDate.date} July 2024
          </h2>
          <div className='rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800'>
            <>
              <h3 className='mb-2 text-lg font-bold'>{selectedDate.event}</h3>
              <p>{selectedDate.details}</p>
              <button className='duration-2 cursor-pointer rounded-lg bg-gg-500 px-3 py-2 font-lexend text-xs text-gray-200 transition-all ease-in hover:bg-brandPink3 dark:bg-gg-500 dark:hover:bg-gg-600 sm:text-sm'>
                Register Now
              </button>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

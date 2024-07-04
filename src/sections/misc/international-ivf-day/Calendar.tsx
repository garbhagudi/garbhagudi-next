import { useState, useEffect } from 'react';

const events = [
    { date: '1', event: 'Opening Ceremony', details: 'Details for Opening Ceremony' },
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
    { date: '16', event: 'Community Support Meetup', details: 'Details for Community Support Meetup' },
    { date: '17', event: 'Dietary Tips', details: 'Details for Dietary Tips' },
    { date: '18', event: 'IVF Q&A', details: 'Details for IVF Q&A' },
    { date: '19', event: 'Closing Ceremony', details: 'Details for Closing Ceremony' },
    { date: '20', event: 'Yoga Session', details: 'Details for Yoga Session' },
    { date: '21', event: 'Nutrition Workshop', details: 'Details for Nutrition Workshop' },
    { date: '22', event: 'IVF Seminar', details: 'Details for IVF Seminar' },
    { date: '23', event: 'Mindfulness Workshop', details: 'Details for Mindfulness Workshop' },
    { date: '24', event: 'Ayurveda for Fertility', details: 'Details for Ayurveda for Fertility' },
    { date: '25', event: 'Community Support Meetup', details: 'Details for Community Support Meetup' },
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Find the event for the current date in IST time zone and set it as selected by default
    const currentDate = new Date().toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      
    const currentDay = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
      });

    const defaultEvent = events.find(event => event.date === currentDay);
    setSelectedDate(defaultEvent || events[0]); // Default to the first event if current date not found
  }, []);

  const handleDateClick = (event) => {
    setSelectedDate(event);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Left side: Calendar */}
      <div className='w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-4 md:mb-0'>
        <h2 className='text-2xl font-bold mb-4'>Event Calendar - July 2024</h2>
        <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3'>
          {events.map((event, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
                selectedDate && event.date === selectedDate.date ? 'border-blue-500' : ''
              }`}
              style={{
                backgroundColor: selectedDate && event.date === selectedDate.date ? '#EE6F88' : 'inherit',
                color: selectedDate && event.date === selectedDate.date ? 'white' : 'inherit',
              }}
              onClick={() => handleDateClick(event)}
            >
              <div className='p-4 flex justify-between items-center transition-colors'>
                <strong className='text-lg'>{event.date}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Event details */}
      {selectedDate && (
      <div className='w-full md:w-1/2 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Event Details for {selectedDate.date} July 2024</h2>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4'>
         
            <>
              <h3 className='text-lg font-bold mb-2'>{selectedDate.event}</h3>
              <p>{selectedDate.details}</p>
              <button className='px-3 py-2 text-xs sm:text-sm text-gray-200 cursor-pointer bg-gg-500 dark:bg-gg-500 rounded-lg font-lexend 
              hover:bg-brandPink3 dark:hover:bg-gg-600 transition-all ease-in duration-2'>Register Now</button>
            </>
          
        </div>
      </div>
      )}
    </div>
  );
};

export default Calendar;

const Curriculum = () => {
  return (
    <div id='curriculum'>
      <div className='mx-auto max-w-7xl px-4 pb-16'>
        <div className='xl:max-w-3xl'>
          <div className='py-8 font-lexend text-3xl font-bold sm:text-4xl'>
            7 Day Curriculum – Swasthya Sapthaha - 2025
          </div>
          <div>
            {yogaSchedule.map((item, index) => {
              return (
                <div key={index} className='mb-3 flex w-full gap-x-3 px-4'>
                  <div
                    className={`flex w-1/3 flex-col items-center justify-center rounded-lg ${index === 0 || index === 7 ? 'bg-gg-500 text-white' : 'bg-gray-100'} font-lexend`}
                  >
                    <div>{item.title}</div> <div>{item.Day}</div>
                  </div>
                  <div
                    className={`w-full space-y-2 rounded-lg ${index === 0 || index === 7 ? 'bg-gg-500 text-white' : 'bg-gray-100'} px-4 py-2 font-content`}
                  >
                    {item.Practice && (
                      <p>
                        {(index === 0 || index === 7) && <strong>Practice:</strong>} {item.Practice}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;

const yogaSchedule = [
  {
    title: 'Day 1',
    Day: 'Fri',
    Practice: 'Inauguration and Practice,Grounding and hormone balancing',
  },
  {
    title: 'Day 2',
    Day: 'Sat',
    Practice: 'Womb Vitality and Circulation',
  },
  {
    title: 'Day 3',
    Day: 'Sun',
    Practice: 'Diet for Healthy Life & Acupressure for common ailments',
  },
  {
    title: 'Day 4',
    Day: 'Mon',
    Practice: 'Stress relief and emotional Balance',
  },
  {
    title: 'Day 5',
    Day: 'Tue',
    Practice: 'Heart-Opening & Emotional Detox',
  },
  {
    title: 'Day 6',
    Day: 'Wed',
    Practice: 'Energy & Vitality Boost',
  },
  {
    title: 'Day 7',
    Day: 'Thu',
    Practice: 'Chair yoga for professionals',
  },
  {
    title: 'Day 8',
    Day: 'Fri',
    Practice: 'Closing Ceremony',
  },
];

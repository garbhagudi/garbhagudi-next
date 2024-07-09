import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const Curriculum = () => {
  const weeks = [...new Set(yogaSchedule.map((item) => item.Week))];

  return (
    <div id='curriculum'>
      <div className='mx-auto max-w-7xl px-4 pb-16'>
        <div className='xl:max-w-3xl'>
          <div className='py-8 font-lexend text-3xl font-bold sm:text-4xl'>
            Curriculum For The 21 Days
          </div>
          <TabGroup className={`w-full`}>
            <TabList
              className={`flex w-full justify-around space-x-3 rounded-lg border font-lexend text-xl lg:space-x-6`}
            >
              {weeks.map((week) => (
                <Tab
                  key={week}
                  className={`w-full rounded-lg px-3 py-3 data-[selected]:border-2 data-[selected]:border-black data-[selected]:bg-gg-500 data-[selected]:text-white data-[hover]:underline data-[selected]:focus:outline-none`}
                >
                  Week {week}
                </Tab>
              ))}
            </TabList>
            <TabPanels className={`mt-4`}>
              {weeks.map((week) => (
                <TabPanel key={week} className={`space-y-4`}>
                  {yogaSchedule
                    .filter((item) => item.Week === week)
                    .map((item, index) => (
                      <div key={index} className='flex w-full gap-x-3 px-4'>
                        <div className='flex w-1/3 flex-col items-center justify-center rounded-lg bg-gray-100 font-lexend'>
                          <div>{item.title}</div> <div>{item.Day}</div>
                        </div>
                        <div className='w-full space-y-2 rounded-lg bg-gray-100 px-4 py-2 font-content'>
                          {item.Knowledge && (
                            <p>
                              <strong>Knowledge:</strong> {item.Knowledge}
                            </p>
                          )}
                          {item.Practice && (
                            <p>
                              <strong>Practice:</strong> {item.Practice}
                            </p>
                          )}
                          {item.Practice1 && (
                            <p>
                              <strong>Practice 1:</strong> {item.Practice1}
                            </p>
                          )}
                          {item.Practice2 && (
                            <p>
                              <strong>Practice 2:</strong> {item.Practice2}
                            </p>
                          )}
                          {item.Pranayama && (
                            <p>
                              <strong>Pranayama:</strong> {item.Pranayama}
                            </p>
                          )}
                          {item.Relaxation && (
                            <p>
                              <strong>Relaxation:</strong> {item.Relaxation}
                            </p>
                          )}
                          {item.Special && (
                            <p>
                              <strong>Special:</strong> {item.Special}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;

const yogaSchedule = [
  {
    Week: 1,
    title: 'Day 1',
    Day: 'Mon',
    Knowledge: 'Ashtanga Yoga',
    Practice: 'Yoga for Balance',
    Relaxation: 'Yoga Nidra',
  },
  {
    Week: 1,
    title: 'Day 2',
    Day: 'Tue',
    Knowledge: 'Ahimsa',
    Practice: 'Yoga for Legs',
    Pranayama: 'Anulom Vilom',
  },
  {
    Week: 1,
    title: 'Day 3',
    Day: 'Wed',
    Knowledge: 'Satya',
    Practice: 'Yoga for Arms & Shoulders',
    Pranayama: 'Yogic Breathing',
  },
  {
    Week: 1,
    title: 'Day 4',
    Day: 'Thu',
    Knowledge: 'Asteya',
    Practice: 'Yoga for the Back',
    Special: 'Soup fast',
  },
  {
    Week: 1,
    title: 'Day 5',
    Day: 'Fri',
    Knowledge: 'Brahmacharya',
    Practice: 'Yoga for Hips & Pelvis',
    Relaxation: 'Guided Meditation',
  },
  {
    Week: 1,
    title: 'Day 6',
    Day: 'Sat',
    Knowledge: 'Aparigrah',
    Practice: 'Yoga for abdominals',
    Relaxation: 'Bhav Meditation',
  },
  {
    Week: 1,
    title: 'Day 7',
    Day: 'Sun',
    Practice1: 'Trataka Dhyaan',
    Practice2: 'Full Body Flow',
    Special: 'Quiz',
  },
  {
    Week: 2,
    title: 'Day 8',
    Day: 'Mon',
    Knowledge: 'Shauch',
    Practice: 'Suryanamaskar A',
    Pranayama: 'Ujjayi Breathing',
  },
  {
    Week: 2,
    title: 'Day 9',
    Day: 'Tue',
    Knowledge: 'Santosh',
    Practice: 'Yin Yoga',
    Pranayama: 'Affirmations',
  },
  {
    Week: 2,
    title: 'Day 10',
    Day: 'Wed',
    Knowledge: 'Tapas',
    Practice: 'Suryanamaskar B',
    Relaxation: 'Yoga Nidra',
  },
  {
    Week: 2,
    title: 'Day 11',
    Day: 'Thu',
    Knowledge: 'Svadhyaya',
    Practice: 'Yoga for flexibility',
    Special: 'Smoothie Fast',
  },
  {
    Week: 2,
    title: 'Day 12',
    Day: 'Fri',
    Knowledge: 'Ishwar Pranidhan',
    Practice: 'Heart Opening Yoga',
    Pranayama: 'Kirtan',
  },
  {
    Week: 2,
    title: 'Day 13',
    Day: 'Sat',
    Knowledge: 'Asanas',
    Practice: 'Deep stretch',
    Relaxation: 'Savasana',
  },
  {
    Week: 2,
    title: 'Day 14',
    Day: 'Sun',
    Practice1: 'Trataka Dhyaan',
    Practice2: 'Inversions',
    Special: 'Quiz',
  },
  {
    Week: 3,
    title: 'Day 15',
    Day: 'Mon',
    Knowledge: 'Pranayama',
    Practice: 'Detox Yoga',
    Pranayama: '3 Types of Pranayama',
  },
  {
    Week: 3,
    title: 'Day 16',
    Day: 'Tue',
    Knowledge: 'Pratyahara',
    Practice: 'Yoga for stress relief',
    Relaxation: '5 sense Meditation',
  },
  {
    Week: 3,
    title: 'Day 17',
    Day: 'Wed',
    Knowledge: 'Dharana',
    Practice: 'Yoga for Concentration',
    Relaxation: 'Mantra Chanting',
  },
  {
    Week: 3,
    title: 'Day 18',
    Day: 'Thu',
    Knowledge: 'Meaning of OM',
    Practice: 'Satvic Yoga Flow',
    Relaxation: 'Om Chanting',
  },
  {
    Week: 3,
    title: 'Day 19',
    Day: 'Fri',
    Knowledge: 'Dhyan',
    Practice: 'Satvic Yoga Flow',
    Relaxation: 'Guided Meditation',
  },
  {
    Week: 3,
    title: 'Day 20',
    Day: 'Sat',
    Knowledge: 'Samadhi',
    Practice: 'Satvic Yoga Flow',
    Special: 'ABCD of Yoga',
  },
  {
    Week: 3,
    title: 'Day 21',
    Day: 'Sun',
    Practice1: 'Trataka Dhyaan',
    Practice2: 'Satvic Yoga Flow',
    Special: 'Quiz',
  },
];

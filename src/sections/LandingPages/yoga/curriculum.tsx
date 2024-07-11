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
                          {item.Practice && (
                            <p>
                              <strong>Practice:</strong> {item.Practice}
                            </p>
                          )}
                          {item.Pranayama && (
                            <p>
                              <strong>Pranayama:</strong> {item.Pranayama}
                            </p>
                          )}
                          {item.Kriya && (
                            <p>
                              <strong>Pranayama:</strong> {item.Kriya}
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
    Day: 'Thu',
    Practice: 'Yoga for Balance',
    Relaxation: 'Yoga Nidra',
  },
  {
    Week: 1,
    title: 'Day 2',
    Day: 'Fri',
    Practice: 'Yoga for Legs',
    Pranayama: 'Anulom Vilom',
  },
  {
    Week: 1,
    title: 'Day 3',
    Day: 'Sat',
    Practice: 'Yoga for Arms & Shoulders',
    Pranayama: 'Full Yogic Breathing',
  },
  {
    Week: 1,
    title: 'Day 4',
    Day: 'Sun',
    Special : 'Diet & Ayurveda'
  },
  {
    Week: 2,
    title: 'Day 5',
    Day: 'Mon',
    Practice: 'Yoga for Hips & Pelvis',
    Relaxation: 'DRT',
  },
  {
    Week: 2,
    title: 'Day 6',
    Day: 'Tue',
    Practice: 'Yoga for abdominals',
    Relaxation: 'Ida and Pingala Breathing',
  },
  {
    Week: 2,
    title: 'Day 7',
    Day: 'Wed',
    Practice: 'Full Body Flow',
    Kriya :'Kapalabhathi'
  },
  {
    Week: 2,
    title: 'Day 8',
    Day: 'Thu',
    Practice: 'Suryanamaskar A',
    Pranayama: 'Ujjayi Breathing',
  },
  {
    Week: 2,
    title: 'Day 9',
    Day: 'Fri',
    Practice: 'Yoga for Back',
    Pranayama: 'Cooling',
  },
  {
    Week: 2,
    title: 'Day 10',
    Day: 'Sat',
    Practice: 'Yoga for flexibility',
    Special: 'Quiz',
  },
  {
    Week: 2,
    title: 'Day 11',
    Day: 'Sun',
    Special: 'Diet & Ayurveda',
  },
  {
    Week: 3,
    title: 'Day 12',
    Day: 'Mon',
    Practice: 'Yoga for Arms & Shoulders',
    Relaxation: 'IRT',
  },
  {
    Week: 3,
    title: 'Day 13',
    Day: 'Tue',
    Practice: 'Yoga for Balance',
    Relaxation: 'Nadanusandana',
  },
  {
    Week: 3,
    title: 'Day 14',
    Day: 'Wed',
    Practice: 'Yoga for stress relief',
    Kriya: 'Agnisara',
  },
  {
    Week: 3,
    title: 'Day 15',
    Day: 'Thu',
    Practice: 'Suryanamaskar B',
    Relaxation: 'Savasana',
  },
  {
    Week: 3,
    title: 'Day 16',
    Day: 'Fri',
    Practice: 'Yoga for abdominals',
    Pranayama: 'Bhramari',
  },
  {
    Week: 3,
    title: 'Day 17',
    Day: 'Sat',
    Practice: 'Yoga for Legs',
    Special: 'Quiz',
  },
  {
    Week: 3,
    title: 'Day 18',
    Day: 'Sun',
    Special: 'Diet & Ayurveda',
  },
  {
    Week: 4,
    title: 'Day 19',
    Day: 'Mon',
    Practice: 'Yoga for Hips & Pelvis',
    Relaxation: 'QRT',
  },
  {
    Week: 4,
    title: 'Day 20',
    Day: 'Tue',
    Practice: 'Yoga for Concentration',
    Pranayama: '3 Types of Pranayama',
  },
  {
    Week: 4,
    title: 'Day 21',
    Day: 'Wed',
    Practice: 'Normal Suryanamaskar',
    Relaxation: 'Om Chanting',
  },
];

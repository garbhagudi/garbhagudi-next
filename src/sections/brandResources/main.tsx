import React from 'react';
import { Tab } from '@headlessui/react';
import Overview from 'sections/brandResources/overview';
import LogosIconsColours from 'sections/brandResources/logos-icons-colours';
import Typography from 'sections/brandResources/badging';
import Partners from 'sections/brandResources/partners-and-advertisers';

const BRComponent = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto mt-6 px-4 md:px-6 lg:px-8 py-8 lg:py-10'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <Tab.Group>
            <Tab.List
              className={
                'flex items-start justify-start text-left md:space-y-6 text-base flex-row flex-wrap gap-x-6 md:flex-col font-lexend'
              }
            >
              <Tab
                className={
                  'py-2 ui-selected:border-b-2 ui-selected:outline-none border-gray-500 transition-all duration-75 ease-linear'
                }
              >
                Overview
              </Tab>
              <Tab
                className={
                  'py-2 ui-selected:border-b-2 ui-selected:outline-none border-gray-500 transition-all duration-75 ease-linear'
                }
              >
                Logos, icons and colours
              </Tab>
              <Tab
                className={
                  'py-2 ui-selected:border-b-2 ui-selected:outline-none border-gray-500 transition-all duration-75 ease-linear'
                }
              >
                Fonts and Web Typography
              </Tab>
              <Tab
                className={
                  'py-2 ui-selected:border-b-2 ui-selected:outline-none border-gray-500 transition-all duration-75 ease-linear'
                }
              >
                Partners & Advertisers
              </Tab>
              {/* <Tab
                className={
                  'py-2 ui-selected:border-b-2 ui-selected:outline-none border-gray-500 transition-all duration-75 ease-linear'
                }
              >
                Media Write-ups & Resources
              </Tab> */}
            </Tab.List>
            <Tab.Panels className={'max-w-4xl flex-1'}>
              <Tab.Panel>
                <Overview />
              </Tab.Panel>
              <Tab.Panel>
                <LogosIconsColours />
              </Tab.Panel>
              <Tab.Panel>
                <Typography />
              </Tab.Panel>
              <Tab.Panel>
                <Partners />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default BRComponent;

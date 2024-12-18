import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Overview from 'sections/mediaKit/brandResources/overview';
import Introduction from 'sections/mediaKit/brandResources/introduction';
import LogosIconsColours from 'sections/mediaKit/brandResources/logos-icons-colours';
import Typography from 'sections/mediaKit/brandResources/badging';
import Partners from 'sections/mediaKit/brandResources/partners-and-advertisers';
import KeyPersonnel from 'sections/mediaKit/brandResources/keyPersonnel';
import SocialPostsGuide from './brandResources/socialImageGuide';
import SocialMediaTemplates from './brandResources/socialMediaTemplates';

const MediaKit = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto mt-6 max-w-7xl px-4 py-8 md:px-6 lg:px-8 lg:py-10'>
        <div className='flex flex-row md:justify-between'>
          <TabGroup className={'flex w-full flex-col gap-10 md:flex-row'}>
            <TabList
              className={
                'flex flex-row flex-wrap items-start justify-start gap-x-6 text-left font-lexend text-base md:flex-col md:space-y-6'
              }
            >
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Overview
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Introduction
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Key Personnel
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Logos, icons and colours
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Social Media Posts Guidelines
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Social Media Posts Templates
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Fonts and Web Typography
              </Tab>
              <Tab
                className={
                  'border-gray-500 py-2 transition-all duration-75 ease-linear ui-selected:border-b-2 ui-selected:outline-none'
                }
              >
                Partners & Advertisers
              </Tab>
            </TabList>
            <TabPanels className={'max-w-4xl flex-1'}>
              <TabPanel>
                <Overview />
              </TabPanel>
              <TabPanel>
                <Introduction />
              </TabPanel>
              <TabPanel>
                <KeyPersonnel />
              </TabPanel>
              <TabPanel>
                <LogosIconsColours />
              </TabPanel>
              <TabPanel>
                <SocialPostsGuide />
              </TabPanel>
              <TabPanel>
                <SocialMediaTemplates />
              </TabPanel>
              <TabPanel>
                <Typography />
              </TabPanel>
              <TabPanel>
                <Partners />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;

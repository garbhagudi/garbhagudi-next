import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import dynamic from 'next/dynamic';
const Overview = dynamic(() => import('sections/mediaKit/brandResources/overview'), { ssr: true });
const Introduction = dynamic(() => import('sections/mediaKit/brandResources/introduction'), {
  ssr: false,
});
const LogosIconsColours = dynamic(
  () => import('sections/mediaKit/brandResources/logos-icons-colours'),
  { ssr: false }
);
const Typography = dynamic(() => import('sections/mediaKit/brandResources/badging'), {
  ssr: false,
});
const Partners = dynamic(
  () => import('sections/mediaKit/brandResources/partners-and-advertisers'),
  { ssr: false }
);
const KeyPersonnel = dynamic(() => import('sections/mediaKit/brandResources/keyPersonnel'), {
  ssr: false,
});
const SocialPostsGuide = dynamic(() => import('./brandResources/socialImageGuide'), { ssr: false });
const SocialMediaTemplates = dynamic(() => import('./brandResources/socialMediaTemplates'), {
  ssr: false,
});
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

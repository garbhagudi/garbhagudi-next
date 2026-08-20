import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import useInViewAutoplay from 'lib/useInViewAutoplay';

interface doctorListProps {
  doctors: {
    id: string;
    name: string;
    slug: string;
    qualification: string;
    designation: string;
    category: string;
    image: {
      url: string;
    };
    imageAlt: string;
  }[];
}

type Doctor = doctorListProps['doctors'][number];

const CATEGORY_TITLES: Record<string, string> = {
  fertilitySpecialist: 'Fertility Specialists',
  embryologist: 'Embryologists',
  andrologist: 'Andrologists',
  yogaSpecialist: 'Yoga Specialists',
  medicalSuperintendent: 'Medical Superintendent',
  consultants: 'Consultant',
};

/** Tab order on desktop; keys not present in data are omitted (except andrologist — see below). */
const CATEGORY_ORDER = [
  'fertilitySpecialist',
  'embryologist',
  'andrologist',
  'yogaSpecialist',
  'medicalSuperintendent',
  'consultants',
] as const;

/** Doubles as the carousel's visible-slide count and the threshold above which a
 *  category gets a "Load More" button at all. */
const INITIAL_VISIBLE = 4;

function orderCategoryKeys(keys: string[]): string[] {
  const keySet = new Set(keys);
  const ordered = CATEGORY_ORDER.filter((c) => keySet.has(c));
  const rest = keys
    .filter((k) => !CATEGORY_ORDER.includes(k as (typeof CATEGORY_ORDER)[number]))
    .sort();
  return [...ordered, ...rest];
}

const arrowClass =
  'flex h-10 w-10 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-3xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple';

const renderPreviousControl = ({ previousSlide }: { previousSlide: () => void }) => (
  <button onClick={previousSlide} aria-label='Previous doctor' className={`ml-3 ${arrowClass}`}>
    <HiChevronLeft className='mr-1' />
  </button>
);

const renderNextControl = ({ nextSlide }: { nextSlide: () => void }) => (
  <button onClick={nextSlide} aria-label='Next doctor' className={`mr-3 ${arrowClass}`}>
    <HiChevronRight className='ml-1' />
  </button>
);

/** Shared by the desktop and mobile carousels; each adds its own sizing and autoplay gate. */
const carouselProps = {
  autoplayInterval: 5000,
  defaultControlsConfig: { pagingDotsStyle: { display: 'none' } },
  wrapAround: true,
  dragging: true,
  enableKeyboardControls: true,
  pauseOnHover: true,
  renderCenterLeftControls: renderPreviousControl,
  renderCenterRightControls: renderNextControl,
};

const DoctorCard = ({ doctor }: { doctor: Doctor }) => (
  <div className='transition-all duration-300 hover:scale-105'>
    <Link href={`/fertility-experts/${doctor.slug}`} passHref>
      <div className='space-y-4'>
        <div className='relative mx-auto h-44 w-44'>
          <div className='absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 bg-[length:400%] dark:bg-gray-400'></div>
          <Image
            className='shadow-champaigne rounded-full bg-transparent drop-shadow-2xl'
            src={doctor.image.url}
            alt={doctor.imageAlt || doctor.name}
            width={400}
            height={400}
            loading='lazy'
          />
        </div>
        <div className='space-y-0.5'>
          <h3 className='font-heading text-lg font-bold text-gray-800 dark:text-gray-200'>
            {doctor.name}
          </h3>
          <p className='text-sm text-purple-900 dark:text-purple-200'>{doctor.qualification}</p>
          <p className='text-sm text-gg-500 dark:text-gg-300'>{doctor.designation}</p>
        </div>
      </div>
    </Link>
  </div>
);

/* Deliberately not a variant of DoctorCard: different image size, a stacked layout, its own
 * typography, and a category pill the desktop card has nowhere to put. */
const MobileDoctorCard = ({ doctor }: { doctor: Doctor }) => (
  <div className='rounded-xl transition-all duration-500'>
    <Link href={`/fertility-experts/${doctor.slug}`} passHref>
      <div className='space-y-4'>
        <div className='mx-auto flex w-64 flex-col items-center justify-center'>
          <Image
            className='h-52 w-52 rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 shadow-2xl drop-shadow-2xl dark:bg-gray-400'
            src={doctor.image.url}
            alt={doctor.imageAlt || doctor.name}
            width={500}
            height={500}
            loading='lazy'
          />
          <div className='mt-12 flex items-center justify-center space-y-4 text-center'>
            <div className='space-y-1 text-lg font-medium leading-6'>
              <h3 className='font-content text-gray-800 dark:text-white'>{doctor.name}</h3>
              <p className='font-content text-sm text-brandPurpleDark dark:text-purple-300'>
                {doctor.qualification}
              </p>
              <p className='pb-2 font-content text-sm text-gg-500 dark:text-gg-300'>
                {doctor.designation}
              </p>
            </div>
          </div>
          <div className='mx-auto w-fit rounded-lg bg-gg-500 px-8 py-2 text-center font-bold text-white'>
            {CATEGORY_TITLES[doctor.category] || doctor.category}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const DoctorList = (doctorList: doctorListProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Both trees are display-gated rather than conditionally rendered, so each stays mounted at
   * the other's breakpoint. One observer apiece keeps the invisible carousel from ticking.
   * Desktop needs only one hook — of its tab panels, only the selected one is mounted. */
  const { ref: desktopRef, autoplay: desktopAutoplay } = useInViewAutoplay(3000);
  const { ref: mobileRef, autoplay: mobileAutoplay } = useInViewAutoplay(3000);

  const toggleCategory = (category: string) => {
    const willExpand = !expandedCategories[category];
    setExpandedCategories((prev) => ({ ...prev, [category]: willExpand }));
    // Collapsing drops several rows from above the button, which would otherwise leave the
    // viewport stranded in the next section — bring the tabs back into view.
    if (!willExpand) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Already alphabetical — the homepage query asks Hygraph for `orderBy: name_ASC`.
  const groupedDoctors = doctorList.doctors.reduce(
    (acc, doctor) => {
      const categoryKey = doctor.category || 'Others';
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(doctor);
      return acc;
    },
    {} as Record<string, Doctor[]>
  );
  // Always show Andrologists tab after Embryologists (empty until CMS has doctors with category `andrologist`).
  if (!groupedDoctors.andrologist) {
    groupedDoctors.andrologist = [];
  }
  const categories = orderCategoryKeys(Object.keys(groupedDoctors));
  return (
    <div>
      <div
        ref={sectionRef}
        className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
        id='ourTeam'
      >
        <div className='mx-auto max-w-[1366px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                Meet our Fertility Experts
              </h2>
              <p className='text-md font-content text-gray-800 dark:text-gray-200'>
                Our team of IVF specialists in Bangalore have been known for their extensive
                clinical experience and research contributions and their success in treating the
                most challenging fertility cases.
              </p>
            </div>
            {/* Tabs for Categories */}
            <div ref={desktopRef} className='hidden lg:block'>
              <TabGroup>
                <TabList className='mt-12 flex space-x-2 rounded-xl bg-gg-400 p-2'>
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        `w-full rounded-lg py-2.5 text-base font-medium leading-5 focus:outline-none ${
                          selected
                            ? 'bg-brandPurpleDark text-white shadow'
                            : 'text-white hover:bg-gg-500/[0.9]'
                        }`
                      }
                    >
                      {CATEGORY_TITLES[category] || category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className='mt-8'>
                  {categories.map((category) => {
                    const doctorsInCategory = groupedDoctors[category];
                    const isExpanded = expandedCategories[category];
                    const isExpandable = doctorsInCategory.length > INITIAL_VISIBLE;

                    return (
                      <TabPanel key={category}>
                        {doctorsInCategory.length === 0 ? (
                          <p className='font-content text-gray-600 dark:text-gray-300'>
                            Expert profiles in this category will appear here soon.
                          </p>
                        ) : isExpandable && !isExpanded ? (
                          <Carousel
                            {...carouselProps}
                            autoplay={desktopAutoplay}
                            slidesToShow={INITIAL_VISIBLE}
                            slidesToScroll={1}
                            cellAlign='left'
                            className='mx-auto w-full'
                          >
                            {doctorsInCategory.map((doctor) => (
                              /* Padding keeps the card's hover scale from being clipped by the
                               * carousel frame. */
                              <div className='px-3 py-2' key={doctor.id}>
                                <DoctorCard doctor={doctor} />
                              </div>
                            ))}
                          </Carousel>
                        ) : (
                          /* Only ever `lg` and up, so no need for a narrower column count. */
                          <div className='grid grid-cols-4 gap-8'>
                            {doctorsInCategory.map((doctor) => (
                              <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                          </div>
                        )}
                        {isExpandable && (
                          <button
                            type='button'
                            onClick={() => toggleCategory(category)}
                            aria-expanded={!!isExpanded}
                            className='mx-auto mt-10 flex w-32 items-center justify-center rounded-lg border-2 border-gg-500 bg-transparent px-3 py-2 text-center font-content font-bold text-gg-500 duration-300 hover:-translate-y-1 hover:bg-gg-500 hover:text-white hover:shadow-2xl hover:shadow-gg-500 hover:transition-all dark:border-gg-400 dark:text-gg-400 dark:hover:bg-gg-400 dark:hover:text-gray-800'
                          >
                            {isExpanded ? 'Show Less' : 'Load More'}
                          </button>
                        )}
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </TabGroup>
            </div>
            <div
              ref={mobileRef}
              className='relative mx-auto flex flex-row items-center justify-center lg:hidden'
            >
              <Carousel
                {...carouselProps}
                autoplay={mobileAutoplay}
                className='mx-auto max-w-xs sm:max-w-sm md:max-w-md'
              >
                {doctorList.doctors.map((doctor) => (
                  <MobileDoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

import { HiChevronDown } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

interface AccordionLayoutProps {
  title: string;
  children: React.ReactNode;
  index: number | string;
  activeIndex: string | number | null;
  setActiveIndex: (index: number | string) => void;
}
const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: AccordionLayoutProps) => {
  const handleSetIndex = (index: number | string) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={
          activeIndex === index
            ? `text-md mt-3 flex w-full items-center justify-between rounded-t-lg bg-gg-500 px-3 py-2 font-semibold text-gray-200 transition-all duration-500 ease-in-out hover:cursor-pointer dark:bg-gg-400 dark:text-gray-800 sm:px-6 xl:text-xl`
            : `text-md mt-3 flex w-full items-center justify-between border-gray-300 px-3 py-1 font-lexend font-medium text-gray-800 transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-lg hover:bg-gg-400 hover:py-3 dark:text-gray-200 sm:px-6 sm:hover:text-lg xl:hover:text-xl`
        }
      >
        <div className='flex items-center justify-center'>
          <div className='mt-1'>{title}</div>
        </div>
        <div>
          {activeIndex === index ? (
            <HiChevronDown className='h-8 w-8 rotate-180 transition-all duration-500' />
          ) : (
            <HiChevronDown className='h-8 w-8' />
          )}
        </div>
      </div>
      <Transition
        as={'div'}
        show={true}
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-100 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        {activeIndex === index && (
          <div className='shadow-3xl rounded-b-lg border-2 border-gg-500 p-4 font-lexend text-gray-800 dark:border-gg-400 dark:text-gray-200'>
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};

export default AccordionLayout;

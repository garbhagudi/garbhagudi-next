import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MyModal from './modal';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

const DoctorLayout = ({
  name,
  index,
  imageComponent,
  activeIndex,
  docpic,
  setActiveIndex,
  bio,
}) => {
  let [isOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const handleSetIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className=''>
        <div
          onClick={() => handleSetIndex(index)}
          className=' px-3 pt-4 flex items-center mr-1 ml-1 justify-center dark:border-gray-600 rounded-lg dark:bg-gray-700 transition duration-200 ease-in-out'
        >
          <div className=''>{imageComponent}</div>
        </div>
      </div>
      {activeIndex === index && (
        <Transition appear show={isOpen} as={`div`}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 flex items-start justify-center overflow-y-auto'>
              <div className='mt-24  p-4 text-center'>
                <Transition.Child
                  as={React.Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-7xl transform rounded-2xl bg-white dark:bg-gray-600 p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-heading font-bold text-center leading-6 text-gg-500 dark:text-gray-200'
                    >
                      {name}
                    </Dialog.Title>
                    <div className='flex items-center justify-center mx-auto w-44 h-44 mt-3'>
                      <div className='relative'>
                        <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                        <Image
                          className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                          src={docpic}
                          alt={name}
                          width={500}
                          height={500}
                          loading='lazy'
                        />
                      </div>
                    </div>
                    <div className='mt-2 text-gray-800 dark:text-gray-200'>
                      <RichText content={bio} />
                    </div>

                    <div className='mt-4 text-center space-y-4'>
                      <MyModal
                        title={'Book an Appointment'}
                        clnm={
                          'font-medium text-white font-lexend uppercase px-3 py-2 bg-brandPink dark:bg-gray-500 dark:hover:bg-gg-400 rounded-md'
                        }
                      />
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-600 dark:hover:bg-gg-400 font-lexend hover:text-white'
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default DoctorLayout;

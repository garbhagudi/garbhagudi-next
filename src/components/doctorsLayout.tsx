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
  const [isOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
    setIsOpen(true);
  };
  return (
    <div>
      <div className=''>
        <div
          onClick={() => handleSetIndex(index)}
          className='ml-1 mr-1 flex items-center justify-center rounded-lg px-3 pt-4 transition duration-200 ease-in-out dark:border-gray-600 dark:bg-gray-700'
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
              <div className='mt-24 p-4 text-center'>
                <Transition.Child
                  as={React.Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-7xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-600'>
                    <Dialog.Title
                      as='h3'
                      className='text-center font-heading text-2xl font-bold leading-6 text-gg-500 dark:text-gray-200'
                    >
                      {name}
                    </Dialog.Title>
                    <div className='mx-auto mt-3 flex h-44 w-44 items-center justify-center'>
                      <div className='relative'>
                        <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                        <Image
                          className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
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

                    <div className='mt-4 space-y-4 text-center'>
                      <MyModal
                        title={'Book an Appointment'}
                        clnm={
                          'font-medium text-white font-lexend uppercase px-3 py-2 bg-brandPink dark:bg-gray-500 dark:hover:bg-gg-400 rounded-md'
                        }
                      />
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 font-lexend text-sm font-medium text-gray-900 hover:bg-gray-600 hover:text-white dark:hover:bg-gg-400'
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

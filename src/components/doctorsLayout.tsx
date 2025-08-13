import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const DoctorLayout = ({
  name,
  index,
  imageComponent,
  activeIndex,
  docpic,
  setActiveIndex,
  bio,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
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
              as={Fragment}
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
                  as={Fragment}
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
                    <div className='mt-2 text-justify text-gray-800 dark:text-gray-200'>
                      <RichText
                        content={bio}
                        renderers={{
                          p: ({ children }) => <p className='text-justify'>{children}</p>,
                          a: ({ children, href }) => (
                            <a href={href} className='text-gg-500 underline'>
                              {children}
                            </a>
                          ),
                        }}
                      />
                    </div>

                    <div className='mt-4 flex flex-col items-center space-y-4 text-center'>
                      <Link href={`/contact/enquiry?pageVisit=${path}`}>
                        <button
                          type='button'
                          className='rounded-md bg-brandPink px-3 py-2 font-lexend font-medium uppercase text-white dark:bg-gray-500 dark:hover:bg-gg-400'
                        >
                          Consult Dr. Asha S Vijay
                        </button>
                      </Link>
                      <button
                        type='button'
                        className='inline-flex w-fit justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 font-lexend text-sm font-medium text-gray-900 hover:bg-gray-600 hover:text-white dark:hover:bg-gg-400'
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

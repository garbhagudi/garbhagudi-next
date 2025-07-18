import { Button, CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
export default function YogaPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Button
        onClick={open}
        className='hidden rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'
      >
        PopUp
      </Button>

      <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={close}>
        {/* Faded background */}
        <div
          className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
          onClick={close}
        ></div>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-3 pt-8'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] relative max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <CloseButton
                className={
                  'absolute right-2 top-1 z-50 h-fit w-fit rounded-2xl bg-white text-gg-500'
                }
              >
                <IoIosCloseCircleOutline fontSize={24} />
              </CloseButton>
              <Link href={'/yoga'} target='_blank' className='relative h-96 w-full'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1752758910/Swastya_Sapthaha_SMP_Eng_s7rqyd.webp'
                  alt='formBanner'
                  className='h-full w-full rounded-md'
                  width={380}
                  height={220}
                />
              </Link>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

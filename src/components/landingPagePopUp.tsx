import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { useState, useEffect } from 'react';
import Form from 'sections/LandingPages/Performant/form';

export default function LandingPagePopUp() {
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
          <div className='flex min-h-full items-center justify-center'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-white px-4 py-1 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='px-1'>
                <Form />
              </div>
              <div className='mx-auto mt-2 flex justify-center'>
                <Button
                  className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 font-content text-base font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

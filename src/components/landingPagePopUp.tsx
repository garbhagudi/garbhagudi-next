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
    }, 20000); // 20000 milliseconds = 20 seconds

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
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
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-white/5 p-3 backdrop-blur-3xl duration-300 ease-out data-[closed]:opacity-0'
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

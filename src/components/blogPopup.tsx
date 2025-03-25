import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Form from 'sections/LandingPages/Performant/form';

export default function BlogPopUp() {
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
    }, 30000); // 30000 milliseconds = 30 seconds

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
              className='data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-gray-800 backdrop-blur-3xl duration-300 ease-out data-[closed]:opacity-0'
            >
              <Image
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722509021/Banner/Google_Form_Header-min_tjenif_1_1_k8jrow.webp'
                alt='formBanner'
                className='h-32 w-full rounded-t-md'
                width={380}
                height={220}
              />
              <DialogTitle
                as='h3'
                className='font-centent pb-3 text-center text-2xl font-extrabold'
              >
                Contact Us
              </DialogTitle>
              <div className='px-0'>
                <div className='flex justify-center'>
                  <div className='mx-5 mt-5 w-fit self-center rounded-md bg-white px-2 py-1 text-center text-[13px] font-semibold text-brandPink shadow-sm'>
                    ₹1,00,000 off on IVF Treatment
                    <span> | Free Fertility Screening</span>
                  </div>
                </div>
                <Form />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

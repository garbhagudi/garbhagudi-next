import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Form from 'sections/LandingPages/Performant/form';

const FloatRequestCallBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className='fixed -left-16 top-2/3 rotate-90 cursor-pointer rounded-md bg-gg-500 p-1.5 px-5 text-white shadow-md'
        onClick={open}
      >
        <h1 className='text-base font-bold'>Request Call Back</h1>
      </div>
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
              className='data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='relative h-32 w-full'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722509021/Banner/Google_Form_Header-min_tjenif_1_1_k8jrow.webp'
                  alt='formBanner'
                  className='h-full w-full rounded-t-md'
                  width={380}
                  height={220}
                />
                <CloseButton
                  className={'absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-gg-500'}
                >
                  <IoIosCloseCircleOutline fontSize={24} />
                </CloseButton>
              </div>
              <div className='px-0'>
                <div className='flex justify-center'>
                  <div className='mx-5 mt-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm'>
                    ₹1,00,000 off on IVF Treatment &
                    <br />
                    Free Consultation
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
};

export default FloatRequestCallBack;

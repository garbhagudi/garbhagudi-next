'use client';

import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { type FormEvent, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const OFFER_IMAGE =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783582858/ivf-center-bangalore/July_2026_-Offer_Icon_Eng_atuyfq.png';
const OPEN_DELAY_MS = 10000;

interface OfferPopupProps {
  branches: {
    id: string;
    title: string;
  }[];
}

const OfferPopup = ({ branches }: OfferPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [centre, setCentre] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!centre) {
      setError('Please select a preferred centre');
      return;
    }
    setIsOpen(false);
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Dialog open={isOpen} as='div' className='relative z-50 focus:outline-none' onClose={close}>
      <div
        className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
        onClick={close}
      ></div>

      <div className='fixed inset-0 z-50 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center px-3 py-8'>
          <DialogPanel
            transition
            className='data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white pb-6 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition duration-300 ease-out data-[closed]:opacity-0 dark:bg-gray-800'
          >
            <div className='relative w-full'>
              <Image
                src={OFFER_IMAGE}
                alt='GarbhaGudi fertility screening offer'
                className='h-auto w-full rounded-t-xl object-contain'
                width={720}
                height={400}
                priority
              />
              <CloseButton
                aria-label='Close offer popup'
                className='absolute right-2 top-2 rounded-full bg-white p-1 text-gray-800 shadow-md hover:bg-gray-100'
              >
                <IoClose fontSize={22} />
              </CloseButton>
            </div>

            <div className='px-6 pt-5'>
              <h3 className='font-heading text-2xl font-bold text-gray-800 dark:text-gray-100'>
                Register Now
              </h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className='mt-5'>
                  <label htmlFor='offer-popup-centre' className='sr-only'>
                    Preferred Centre
                  </label>
                  <select
                    id='offer-popup-centre'
                    name='preferred_centre'
                    value={centre}
                    onChange={(e) => {
                      setCentre(e.target.value);
                      setError('');
                    }}
                    aria-invalid={error ? 'true' : 'false'}
                    className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 focus:border-gg-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100'
                  >
                    <option value=''>Preferred Centre*</option>
                    {branches?.map((branch) => (
                      <option key={branch.id} value={branch.title}>
                        {branch.title}
                      </option>
                    ))}
                  </select>
                  {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
                </div>

                <button
                  type='submit'
                  className='mt-5 w-full rounded-lg bg-gg-500 py-3 text-base font-bold text-white hover:bg-gg-400'
                >
                  Submit
                </button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OfferPopup;

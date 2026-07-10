'use client';

import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { type FormEvent, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { scrollToForm } from 'sections/ivf-center-bangalore/constants';

const OFFER_IMAGE =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783582858/ivf-center-bangalore/July_2026_-Offer_Icon_Eng_atuyfq.png';
const OPEN_DELAY_MS = 10000;

/* Centres not offering this promotion. */
const EXCLUDED_CENTRES = ['davanagere', 'hosur'];

interface OfferPopupProps {
  branches: {
    id: string;
    title: string;
  }[];
}

type FieldErrors = { name?: string; phone?: string; centre?: string };

const OfferPopup = ({ branches }: OfferPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  const clearFieldError = (key: keyof FieldErrors) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').replace(/\D/g, '');
    const centre = String(data.get('preferred_centre') ?? '');

    const next: FieldErrors = {};
    if (!name || name.length < 2) next.name = 'Name is required';
    if (!phone) next.phone = 'Mobile number is required';
    else if (!/^\d{10}$/.test(phone)) next.phone = 'Enter a valid 10-digit mobile number';
    if (!centre) next.centre = 'Please select a preferred centre';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    /* No backend integration yet — close and take the visitor to the main
     * lead form (same #form anchor the branch cards scroll to). */
    setIsOpen(false);
    scrollToForm();
  };

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder-gray-500 focus:border-gg-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400';

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
            className='data-[closed]:transform-[scale(95%)] relative w-full max-w-md rounded-xl bg-white pb-6 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition duration-300 ease-out data-[closed]:opacity-0 dark:bg-gray-800 md:max-w-3xl md:pb-0'
          >
            <CloseButton
              aria-label='Close offer popup'
              className='absolute right-2 top-2 z-10 rounded-full bg-white p-1 text-gray-800 shadow-md hover:bg-gray-100'
            >
              <IoClose fontSize={22} />
            </CloseButton>

            {/* Stacked on mobile; image | form columns on desktop. */}
            <div className='md:flex md:items-stretch'>
              <div className='relative w-full md:w-1/2 md:shrink-0'>
                <Image
                  src={OFFER_IMAGE}
                  alt='GarbhaGudi fertility screening offer'
                  className='h-auto w-full rounded-t-xl object-contain md:h-full md:rounded-l-xl md:rounded-tr-none md:object-cover'
                  width={720}
                  height={400}
                  priority
                />
              </div>

              <div className='px-6 pt-5 md:flex md:w-1/2 md:flex-col md:justify-center md:py-6'>
                <h3 className='font-heading text-2xl font-bold text-gray-800 dark:text-gray-100'>
                  Register Now
                </h3>

                <form noValidate onSubmit={handleSubmit}>
                  <div className='mt-5'>
                    <label htmlFor='offer-popup-name' className='sr-only'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='offer-popup-name'
                      name='name'
                      placeholder='Name'
                      autoComplete='name'
                      maxLength={255}
                      className={inputClass}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      onInput={() => clearFieldError('name')}
                    />
                    {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
                  </div>

                  <div className='mt-4'>
                    <label htmlFor='offer-popup-phone' className='sr-only'>
                      Mobile No.
                    </label>
                    <input
                      type='text'
                      inputMode='numeric'
                      pattern='\d{10}'
                      id='offer-popup-phone'
                      name='phone'
                      placeholder='Mobile No.'
                      autoComplete='tel'
                      maxLength={10}
                      className={inputClass}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      onInput={(e) => {
                        const el = e.currentTarget;
                        const digits = el.value.replace(/\D/g, '').slice(0, 10);
                        if (el.value !== digits) {
                          el.value = digits;
                        }
                        clearFieldError('phone');
                      }}
                    />
                    {errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone}</p>}
                  </div>

                  <div className='mt-4'>
                    <label htmlFor='offer-popup-centre' className='sr-only'>
                      Preferred Centre
                    </label>
                    <select
                      id='offer-popup-centre'
                      name='preferred_centre'
                      defaultValue=''
                      aria-invalid={errors.centre ? 'true' : 'false'}
                      className={inputClass}
                      onChange={() => clearFieldError('centre')}
                    >
                      <option value=''>Preferred Centre*</option>
                      {branches
                        ?.filter(
                          (branch) => !EXCLUDED_CENTRES.includes(branch.title.trim().toLowerCase())
                        )
                        .map((branch) => (
                          <option key={branch.id} value={branch.title}>
                            {branch.title}
                          </option>
                        ))}
                    </select>
                    {errors.centre && <p className='mt-1 text-sm text-red-500'>{errors.centre}</p>}
                  </div>

                  <button
                    type='submit'
                    className='mt-5 w-full rounded-lg bg-gg-500 py-3 text-base font-bold text-white hover:bg-gg-400'
                  >
                    Submit
                  </button>
                  <input type='hidden' id='zc_gad' name='zc_gad' value='' />
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OfferPopup;

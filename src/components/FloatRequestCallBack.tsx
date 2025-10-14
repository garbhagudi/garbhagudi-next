import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Form from 'sections/LandingPages/Performant/form';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import axios from 'axios';
const FloatRequestCallBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (value) => {
    try {
      const parsed = parsePhoneNumberFromString(value, 'IN');
      return parsed && parsed.isValid();
    } catch {
      return false;
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) return setError('Please enter a valid phone number.');
    setError('');
    setLoading(true);
    try {
      await axios.post('/api/send-otp', { phone });
      setStep('otp');
    } catch (e) {
      setError('Failed to send OTP. Try again later.');
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/verify-otp', { phone, otp });
      if (data.success) {
        // onVerified(phone);
        setStep('form');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch {
      setError('Error verifying OTP.');
    }
    setLoading(false);
  };

  const handleResend = () => {
    // onResend();
    setError('');

    setTimeout(() => {
      setError('OTP resent successfully! Check your phone.');
    }, 1000);
  };
  const isOtpValid = otp.length === 6 && /^\d+$/.test(otp);

  return (
    <>
      <div
        className='fixed -left-16 top-2/3 z-10 rotate-90 cursor-pointer rounded-md bg-gg-500 p-1.5 px-5 text-white shadow-md'
        onClick={open}
      >
        <p className='text-base font-bold'>Request Call Back</p>
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
              className='data-[closed]:transform-[scale(95%)] relative max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='relative h-full p-6 text-center'>
                {step !== 'form' && (
                  <CloseButton
                    className={
                      'absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-gg-500'
                    }
                  >
                    <IoIosCloseCircleOutline fontSize={24} />
                  </CloseButton>
                )}
                {step === 'phone' && (
                  <form className='p-6 pt-2' onSubmit={(e)=>handleSendOtp(e)}>
                    <div className='mb-4'>
                      <h2 className='text-xl font-bold text-gg-500'>Verify your phone number</h2>
                      <p className='mt-1 text-sm text-gray-300'>For Booking with Dr. Asha</p>
                    </div>

                    <div className='mb-6'>
                      <label
                        htmlFor='phone'
                        className='mb-2 block text-sm font-medium text-gray-100'
                      >
                        Enter Phone number (without +91)
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))
                        }
                        placeholder='+91XXXXXXXXXX'
                        className='w-full rounded-lg border border-gray-300 px-4 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-brandPink focus:ring-brandPink'
                        maxLength={10}
                        required
                      />
                    </div>

                    <button
                      type='submit'
                      disabled={loading || phone.length !== 10}
                      className='flex w-full items-center justify-center rounded-xl bg-brandPink py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-gg-400 disabled:opacity-50'
                    >
                      {loading ? (
                        <svg
                          className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                      ) : (
                        'Send OTP'
                      )}
                    </button>

                    {error && (
                      <p
                        className={`mt-3 text-center text-sm ${error.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {error}
                      </p>
                    )}

                    <p className='mt-4 text-center text-xs text-gray-400'>
                      We'll send a one-time code via SMS to verify your number.
                    </p>
                  </form>
                )}

                {step === 'otp' && (
                  <form className='p-6 pt-2' onSubmit={handleVerifyOtp}>
                    <div className='mb-4'>
                      <h2 className='text-xl font-semibold text-gg-500'>Enter 6 digits OTP</h2>
                    </div>

                    <div className='mb-6'>
                      <label htmlFor='otp' className='mb-2 block text-sm font-medium text-gray-200'>
                        OTP
                      </label>
                      <input
                        type='tel'
                        id='otp'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                        placeholder='6-digit code'
                        className='w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-lg tracking-widest placeholder-gray-400 shadow-sm focus:border-brandPink focus:ring-brandPink'
                        maxLength={6}
                        required
                      />
                    </div>

                    {error && (
                      <p
                        className={`mb-4 mt-3 text-center text-sm ${error.includes('successfully') || error.includes('verified') ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {error}
                      </p>
                    )}

                    <div className='flex space-x-3'>
                      <button
                        type='button'
                        onClick={handleResend}
                        className='w-1/2 rounded-xl border border-brandPink py-3 font-semibold text-brandPink shadow-md transition duration-300 hover:bg-brandPink hover:text-white disabled:opacity-50'
                        disabled={loading}
                      >
                        Resend OTP
                      </button>
                      <button
                        type='submit'
                        disabled={loading || !isOtpValid}
                        className='flex w-1/2 items-center justify-center rounded-xl bg-brandPink py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-gg-400 disabled:opacity-50'
                      >
                        {loading ? (
                          <svg
                            className='-ml-1 h-5 w-5 animate-spin text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                        ) : (
                          'Verify & Continue'
                        )}
                      </button>
                    </div>

                    <p className='mt-4 text-center text-xs text-gray-300'>
                      By continuing you agree to receive an SMS for verification.
                    </p>
                  </form>
                )}
              </div>
              {step === 'form' && (
                <>
                  <div className='relative h-32 w-full'>
                    <Image
                      src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp'
                      alt='formBanner'
                      className='h-full w-full rounded-t-md'
                      width={380}
                      height={220}
                    />
                    <CloseButton
                      className={
                        'absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-gg-500'
                      }
                    >
                      <IoIosCloseCircleOutline fontSize={24} />
                    </CloseButton>
                  </div>

                  <div className='px-0'>
                    <div className='flex justify-center'>
                      <div className='mx-5 mt-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm'>
                        Book your Consultations
                      </div>
                    </div>
                    <Form />
                  </div>
                </>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FloatRequestCallBack;

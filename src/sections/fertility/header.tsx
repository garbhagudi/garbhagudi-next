import Link from 'next/link';
import React, { Fragment } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export default function Banner() {
  return (
    <Fragment>
      <div>
        <section className='relative bg-[url(https://s3-alpha-sig.figma.com/img/413a/2046/df464e21502ffaa6a950a068c02c614a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ii7hu4iZpNm0jBJpXNjunFxZD-uO-jebMfg2gM-Rd2-RHlVo9t4~EAOf5ovE1brpojWuaBOf5FL85fol~vWCeslmEleNzddq91psQB0nyD-Jpo10fEYZkaZhKseVZ8q-rymlBFtTpkqowIapNjTMn9y3TkjEv0vsloQaqH0FZk0ryTV4-pPd2AY4HAJ~JKqWqQAfoO2jDcb2PgJearK5mNh5Qd6vblgATWGZlY3ONnxi2jmWnLHxyF31JJZPmvRwzvBIjXE2kXFgkZQ3H5g1lNG~5WFmhwtfVJ9S3rKImNuCqtM9KY5m6DcwbEghPafxArxdi~pT5xHXRS2NQ69k8w__)] bg-cover bg-right bg-no-repeat sm:bg-center'>
          <div className='absolute inset-0 bg-gradient-to-r dark:from-gray-800/90 dark:to-gray-800/30 sm:bg-transparent'></div>
          <div className='relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
            <div className='max-w-2xl text-center sm:text-left'>
              <h1 className='flex flex-col text-white'>
                <span className='font-nunito-Sans py-2 text-5xl font-extrabold dark:text-gray-200 sm:text-5xl'>
                  Preserve Your Fertility, Empower Your Choices!
                </span>
              </h1>
              <h3 className='mt-3 font-nunito-Sans  max-w-lg  text-white dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
                Egg freezing allows you to plan for the future on your terms.
                Discover the science, support, and possibilities behind
                preserving your fertility with expert care.
              </h3>

              <div className='mt-8 flex flex-wrap items-center gap-4 text-base font-semibold font-figtree'>
                <Link
                  href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
                  className='block w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
                >
                  <span className='flex items-center justify-center gap-2 font-figtree text-lg' >
                    <BsWhatsapp
                      size={22}
                      className='text-white'
                    />{' '}
                    Drop us a "Hi" here
                  </span>
                </Link>

                <Link
                  href='#know-more'
                  className='text-lg rounded-[10px] block w-full scroll-smooth  bg-white px-4 py-2 font-content text-brandPink shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
                >
                  Book an Appointment
                </Link>
                <Link
                  href='/treatments/ivf-treatment-fertility/fertility-quiz'
                  className='block w-full scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-2 font-content text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500  dark:text-white  sm:w-auto text-lg'
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="zigzag-line"></div> */}
      </div>
      <style>{`
        .zigzag-bottom {

  border: none;
  background: linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/80px 100%;

}

.zigzag-line {
  position: absolute;
  bottom: -5px; /* Adjust to position the line just below the div */
  left: 0;
  width: 100%;
  height: 10px; /* Adjust height to control zig-zag size */
  background-color: transparent;
  background-image: linear-gradient(
    135deg,
    purple 25%,
    transparent 25%,
    transparent 75%,
    purple 75%,
    purple
  );
  background-size: 20px 20px; /* Adjust size for the zig-zag width */
}



`}</style>
    </Fragment>
  );
}

import React from 'react';
import { contactData } from 'sections/gg-care/content';
import Link from 'next/link';
import Image from 'next/image';

const Faq = ({ branch, doctors }) => {
  return (
    <div>
      <section className='max-w-7xl mx-auto font-content pt-8'>
        <div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
          <h2 className='mb-8 text-3xl font-bold leading-none text-center sm:text-4xl font-heading'>
            Frequently Asked Questions
          </h2>
          <div className='divide-y divide-gray-700'>
            <div className='py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                Doctors available at GarbhaGudi, {branch}?
              </h3>
              <div className='md:pl-0 md:col-span-8'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {doctors?.map((item) => (
                    <div
                      className='text-center flex items-center justify-start flex-col mb-2 transition-all duration-500 ease-in-out transform hover:scale-105'
                      key={item?.id}
                    >
                      <Link href={`/fertility-experts/${item?.slug}`} passHref>
                        <div className='space-y-4'>
                          <div className='relative h-32 w-32 mx-auto'>
                            <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                            <Image
                              className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                              src={item?.image?.url}
                              alt={item?.imageAlt}
                              width={500}
                              height={500}
                            />
                          </div>
                          <div className='space-y-4'>
                            <div className='text-lg leading-6 font-medium space-y-1'>
                              <h3 className='text-brandDark font-content'>
                                {item?.name}
                              </h3>
                              {/* <p className='text-brandPurpleDark text-xs font-content'>
                                {item?.qualification}
                              </p> */}
                              <p className='text-brandPink text-xs font-content'>
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                How to contact GarbhaGudi IVF Centre in {branch}?
              </h3>
              <div className='md:pl-0 md:col-span-8'>
                To contact the fertility specialists at our {branch} branch,
                please visit{' '}
                <Link href={'/gg-care'} className='text-brandPink'>
                  GG Care (Support)
                </Link>{' '}
                page. You can find all the information related to {branch}{' '}
                branch and how to contact there. Alternatively, you can use the
                chat feature that the bottom right-hand corner to ask us your
                queries.
                <div className='mt-4'>
                  {contactData.locations.map(
                    (items) =>
                      items.name === branch && (
                        <div key={items.id}>
                          <div className='font-semibold'>
                            {items.name} branch
                          </div>
                          <div>
                            <Link
                              href={`tel:${items.phone}`}
                              className='text-brandPink hover:underline'
                            >
                              {items.phone}
                            </Link>
                          </div>
                        </div>
                      ),
                  )}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                  {contactData.getInTouch.map((items) => (
                    <div key={items.id}>
                      <div>
                        <div className='font-bold'>{items.name}</div>
                        <div>
                          <Link
                            href={`mailto:${items.email}`}
                            className='text-brandPurpleDark hover:underline font-semibold'
                          >
                            {items.email}
                          </Link>
                        </div>
                        <Link
                          href={`tel:${items.phone}`}
                          className='text-brandPink hover:underline'
                        >
                          {items.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                What are our success rates for IVF treatments in {branch}?
              </h3>
              <div className='md:pl-0 md:col-span-8'>
                The success rate of of an IVF Treatment depends on numerous
                factors. At our {branch} branch the average success rate ranges
                from 65 - 73%. <br /> <br />
                It's important to note that IVF success rates can also vary
                between fertility clinics, so it's important to do your research
                and choose a reputable clinic with a good track record.
                Additionally, some clinics may have higher success rates for
                certain types of patients or certain IVF procedures.
              </div>
            </div>

            <div className='py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                What is the total cost of IVF in <strong>{branch}</strong>?
              </h3>
              <div className='md:pl-0 md:col-span-8'>
                The total cost of IVF in <strong>{branch}</strong> can vary
                depending on the individual patient's needs. On average, the
                cost of a single IVF cycle in <strong>{branch}</strong> can
                range from INR 1,50,000 to INR 3,00,000. However, some
                additional services such as genetic testing or use of donor
                eggs/sperm may cost additional sum. It's important to speak with
                a specialist at the clinic to understand the total cost and any
                additional fees that may apply.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

import { contactData } from 'sections/gg-care/content';
import Link from 'next/link';
import Image from 'next/image';

const Faq = ({ branch, doctors }) => {
  return (
    <div>
      <section className='mx-auto max-w-7xl pt-8 font-content'>
        <div className='container mx-auto flex flex-col justify-center px-4 py-8 text-gray-800 dark:text-gray-200 md:p-8'>
          <h2 className='mb-8 text-center font-heading text-3xl font-bold leading-none sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <div className='divide-y divide-gray-700 dark:divide-gray-600'>
            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                Doctors available at GarbhaGudi, {branch}?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {doctors?.map((item) => (
                    <div
                      className='mb-2 flex transform flex-col items-center justify-start text-center transition-all duration-500 ease-in-out hover:scale-105'
                      key={item?.id}
                    >
                      <Link href={`/fertility-experts/${item?.slug}`} passHref>
                        <div className='space-y-4'>
                          <div className='relative mx-auto h-32 w-32'>
                            <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                            <Image
                              className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                              src={item?.image?.url}
                              alt={item?.name}
                              width={500}
                              height={500}
                            />
                          </div>
                          <div className='space-y-4'>
                            <div className='space-y-1 text-lg font-medium leading-6'>
                              <h3 className='text-brandDark font-content'>{item?.name}</h3>
                              <p className='font-content text-xs text-brandPink'>
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
            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                How to contact GarbhaGudi IVF Centre in {branch}?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                To contact the fertility specialists at our {branch} branch, please visit{' '}
                <Link href={'/gg-care'} className='text-gg-500 dark:text-gg-400'>
                  GG Care (Support)
                </Link>{' '}
                page. You can find all the information related to {branch} branch and how to contact
                there. Alternatively, you can use the chat feature that the bottom right-hand corner
                to ask us your queries.
                <div className='mt-4'>
                  {contactData.locations.map(
                    (items) =>
                      items.name === branch && (
                        <div key={items.id}>
                          <div className='font-semibold'>{items.name} branch</div>
                          <div>
                            <Link
                              href={`tel:${items.phone}`}
                              className='text-gg-500 hover:underline dark:text-gg-400'
                            >
                              {items.phone}
                            </Link>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
                  {contactData.getInTouch.map((items) => (
                    <div key={items.id}>
                      <div>
                        <div className='font-bold'>{items.name}</div>
                        <div>
                          <Link
                            href={`mailto:${items.email}`}
                            className='font-semibold text-brandPurpleDark hover:underline dark:text-purple-400'
                          >
                            {items.email}
                          </Link>
                        </div>
                        <Link
                          href={`tel:${items.phone}`}
                          className='text-gg-500 hover:underline dark:text-gg-400'
                        >
                          {items.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                What are our success rates for IVF treatments in {branch}?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                The success rate of of an IVF Treatment depends on numerous factors. <br /> <br />
                It's important to note that IVF success rates can also vary between fertility
                clinics, so it's important to do your research and choose a reputable clinic with a
                good track record. Additionally, some clinics may have higher success rates for
                certain types of patients or certain IVF procedures.
              </div>
            </div>

            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                What is the total cost of IVF in <strong>{branch}</strong>?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                The total cost of IVF in <strong>{branch}</strong> can vary depending on the
                individual patient's needs. On average, the cost of a single IVF cycle in{' '}
                <strong>{branch}</strong> starts from INR 1,60,000. It's important to speak with a
                specialist at the clinic to understand the total cost and any additional fees that
                may apply.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

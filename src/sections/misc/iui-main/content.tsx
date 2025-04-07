import Link from 'next/link';

const Content = () => {
  return (
    <div className='mx-auto max-w-7xl text-gray-800 dark:text-gray-200'>
      <h2 className='py-10 text-center font-heading text-2xl font-bold lg:py-16 lg:text-3xl'>
        What Is IUI treatment?
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='col-span-3 max-w-4xl px-3 font-content'>
          <h3 className='pb-6 font-heading text-lg font-bold'>Introduction to IUI</h3>
          <div>
            IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is
            placed directly inside a woman's uterus to increase the chance of pregnancy. It is a
            relatively simple and low-invasive procedure, often used in cases of infertility caused
            by issues with ovulation, sperm count, or cervical mucus. It may be used alone or in
            combination with other{' '}
            <Link
              href={'/treatments/iui-treatment-in-bangalore'}
              className='text-brandPink hover:underline'
            >
              fertility treatments
            </Link>
            , such as ovulation induction medications. The success rate of IUI varies depending on
            the individual patient's circumstances, and it is typically more successful when
            performed in conjunction with other fertility treatments.
          </div>
        </div>
        <div className='col-span-1 mt-16 rounded-lg bg-gray-300 px-3 pb-5 dark:bg-gray-700 lg:mt-0 lg:pt-7'>
          <h3 className='pb-6 pt-5 font-heading text-lg font-bold lg:pt-0'>Quick Links</h3>
          <div className='font-content'>
            <ul className='list-outside list-disc space-y-3'>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#iui-centres-in-bangalore'>IUI Centres in Bangalore</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#cost-of-iui-in-bangalore'>Cost of IUI in Bangalore</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#procedure-of-iui'>Procedure of IUI</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#faq'>Frequently asked questions on IUI</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

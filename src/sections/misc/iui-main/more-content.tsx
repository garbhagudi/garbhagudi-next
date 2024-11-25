import Image from 'next/image';
import React from 'react';

const ContentXtra = () => {
  return (
    <div
      className='mx-auto max-w-7xl scroll-m-10 py-10 text-gray-800 dark:text-gray-200 lg:py-16'
      id='procedure-of-iui'
    >
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
        <div className='px-3'>
          <h3 className='py-4 font-heading text-2xl font-bold lg:text-3xl'>
            The Process of IUI Treatment
          </h3>
          <div className='mt-4 font-content'>
            IUI, or intrauterine insemination, is a fertility treatment procedure that involves
            placing sperm inside a woman's uterus to help her become pregnant. Here's a simple
            explanation of the process:
            <ul className='ml-4 max-w-lg list-outside list-disc space-y-3 pt-4'>
              <li>
                The first step is to stimulate the woman's ovaries with medication to produce
                multiple eggs.
              </li>
              <li>
                Next, the sperm is collected from the man or a sperm donor and is washed and
                prepared for the procedure.
              </li>
              <li>
                Then, a thin, flexible tube called a catheter is inserted through the cervix and
                into the uterus.
              </li>
              <li>The prepared sperm is then injected into the uterus through the catheter.</li>
              <li>
                After the procedure, the woman will rest for a short period before going home.
              </li>
            </ul>
          </div>
        </div>
        <div className='px-3'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722504481/IUI-Process_01_lo7z7w_1_ggwdwi.png'
            alt='IUI treatment Process'
            className='rounded-lg'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className='mt-4 px-3 font-content'>
        It's important to note that IUI is usually done in conjunction with ovulation induction
        medications. The success rate for IUI varies depending on several factors, including the
        woman's age and the cause of infertility. It's a relatively simple and low-invasive
        procedure.
      </div>
      <div>
        <h3 className='px-3 pt-6 font-heading text-lg font-bold'>
          How Does IUI treatment Help in Achieving Pregnancy ?
        </h3>
        <div className='mt-4 px-3 font-content'>
          IUI helps in pregnancy by increasing the number of sperm that reach the fallopian tubes,
          where fertilization of the egg occurs. By placing the sperm directly inside the uterus,
          the procedure bypasses the cervix, which can be a barrier to fertilization. The procedure
          is timed to coincide with ovulation, which increases the chances of the sperm meeting and
          fertilizing an egg. Additionally, IUI can also help with cervical mucus issues, which can
          be a barrier to fertilization.
        </div>
      </div>
    </div>
  );
};

export default ContentXtra;

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { faqData } from 'sections/campaigns-bangalore-en/faqData';

function AccordionItem({ title, children, isActive, onOpen }) {
  return (
    <>
      <div
        onClick={onOpen}
        className={
          isActive
            ? 'text-md mt-3 flex w-full items-center justify-between rounded-t-lg bg-brandPink3 px-3 py-2 text-white transition-all duration-500 ease-in-out hover:cursor-pointer sm:px-6 xl:text-xl'
            : 'text-md mt-3 flex w-full items-center justify-between border-gray-300 px-3 py-1 transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-lg hover:border-b-0 hover:bg-brandPink4 hover:py-3 sm:px-6 sm:hover:text-lg xl:hover:text-xl'
        }
      >
        <div className='flex items-center justify-center font-semibold'>
          <div className='mt-1'>{title}</div>
        </div>
        <HiChevronDown size={32} className={isActive ? 'rotate-180' : undefined} aria-hidden />
      </div>
      {isActive && <div className='rounded-b-lg border-2 border-brandPink3 p-4'>{children}</div>}
    </>
  );
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className='bg-fuchsia-50'>
      <h2 className='pt-10 text-center text-2xl font-bold text-[#363636] sm:text-3xl lg:pt-16'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
          {faqData.map((item) => (
            <AccordionItem
              title={item.Question}
              key={item.id}
              isActive={activeIndex === item.id}
              onOpen={() => setActiveIndex(item.id)}
            >
              {item.Answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export default function AccordionSection({ sections = [] }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    setOpenIndexes(sections.map((s) => s?.defaultOpen || false));
  }, [sections]);

  const toggle = (index) => {
    setOpenIndexes((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className='mx-auto max-w-7xl px-4 py-6 font-sans'>
      {sections.map(
        (section, index) =>
          section?.links?.length > 0 && (
            <div key={index} className='border-b border-gray-300 py-4'>
              <button
                onClick={() => toggle(index)}
                className='flex w-full items-center justify-between text-left'
              >
                <span className='text-2xl font-bold text-gg-500'>{section?.heading}</span>

                <span
                  className={`text-3xl font-light text-gg-500 transition-transform duration-300 ${
                    openIndexes[index] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <HiChevronDown
                    className={`h-8 w-8 transition-transform duration-500 ${openIndexes[index] ? 'rotate-120' : ''}`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndexes[index] ? 'mt-4 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className='grid list-disc grid-cols-2 gap-x-6 gap-y-2 pl-5 marker:text-gg-500 md:grid-cols-4 lg:grid-cols-3'>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className='text-base text-gg-500 hover:underline'>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
      )}
    </div>
  );
}

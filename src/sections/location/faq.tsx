'use client';

import { RichText } from '@graphcms/rich-text-react-renderer';
import type { RichTextContent } from '@graphcms/rich-text-types';
import { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

type BranchFaq = {
  id: string;
  question: string;
  answer?: {
    raw?: {
      children?: RichTextContent;
    };
    text?: string;
  };
};

type FaqProps = {
  data: BranchFaq[];
};

const Faq = ({ data }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | string | null>(data?.[0]?.id || null);

  if (!data?.length) return null;

  return (
    <div className='bg-fuchsia-50 py-10 dark:bg-gray-800'>
      <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-white'>
        Frequently Asked Questions
      </h2>

      <div className='mx-auto mt-10 max-w-6xl px-4'>
        {data.map((item) => (
          <AccordionLayout
            key={item?.id}
            title={item?.question}
            index={item?.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {item?.answer?.raw?.children ? (
              <RichText
                content={item.answer.raw.children}
                renderers={{
                  p: ({ children }) => (
                    <p className='mb-1 text-justify text-gray-700 dark:text-gray-300'>{children}</p>
                  ),

                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className='text-gg-500 hover:text-gg-600 hover:underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {children}
                    </a>
                  ),

                  h2: ({ children }) => (
                    <h2 className='mb-2 mt-4 text-xl font-semibold'>{children}</h2>
                  ),

                  ul: ({ children }) => <ul className='mb-4 list-disc pl-6'>{children}</ul>,

                  ol: ({ children }) => <ol className='mb-4 list-decimal pl-6'>{children}</ol>,

                  li: ({ children }) => <li className='mb-1'>{children}</li>,

                  table: ({ children }) => (
                    <div className='my-6 overflow-x-auto'>
                      <table className='min-w-full'>{children}</table>
                    </div>
                  ),

                  table_head: ({ children }) => <thead className=''>{children}</thead>,

                  table_body: ({ children }) => <tbody className=''>{children}</tbody>,

                  table_row: ({ children }) => <tr className=''>{children}</tr>,

                  table_header_cell: ({ children }) => (
                    <th className='px-4 py-2 text-left font-semibold'>{children}</th>
                  ),

                  table_cell: ({ children }) => <td className='px-4 py-2'>{children}</td>,
                }}
              />
            ) : (
              <p className='text-justify'>{item?.answer?.text || ''}</p>
            )}
          </AccordionLayout>
        ))}
      </div>
    </div>
  );
};

export default Faq;

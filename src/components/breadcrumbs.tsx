import React from 'react';
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';

interface BreadcrumbItem {
  link?: string;
  text: string;
}

interface BreadCrumbsProps {
  items?: BreadcrumbItem[];
  // Legacy props for backward compatibility
  link1?: string;
  text1?: string;
  link2?: string;
  text2?: string;
  link3?: string;
  text3?: string;
  link4?: string;
  text4?: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  items,
  link1,
  text1,
  link2,
  text2,
  link3,
  text3,
  link4,
  text4,
}) => {
  // Support both new API (items) and legacy API (link1, text1, etc.)
  let breadcrumbItems: BreadcrumbItem[] = [];

  if (items && items.length > 0) {
    breadcrumbItems = items;
  } else {
    // Legacy API support
    if (text1) breadcrumbItems.push({ link: link1, text: text1 });
    if (text2) breadcrumbItems.push({ link: link2, text: text2 });
    if (text3) breadcrumbItems.push({ link: link3, text: text3 });
    if (text4) breadcrumbItems.push({ link: link4, text: text4 });
  }

  // Filter out items without text
  const validItems = breadcrumbItems.filter((item) => item.text);

  return (
    <div>
      <nav
        className='z-10 flex rounded-lg px-5 py-3 font-content font-semibold'
        aria-label='Breadcrumb'
      >
        <ol className='flex flex-row items-center space-x-1'>
          <li className='inline-flex items-center'>
            <Link href='/' passHref>
              <span className='flex items-center justify-center text-sm text-gray-800 hover:text-brandPink2 dark:text-gray-200'>
                <HiHome className='mb-0.5 mr-1 h-4 w-4' /> Home
              </span>
            </Link>
          </li>
          {validItems.map((item, index) => {
            const isLast = index === validItems.length - 1;
            return (
              <li key={index} className={isLast ? 'inline-flex items-center' : ''}>
                <div className='flex items-center'>
                  <HiChevronRight className='h-5 w-5 text-gray-400' />
                  {item.link && !isLast ? (
                    <Link href={item.link} passHref>
                      <span className='ml-1 text-sm text-gray-800 hover:text-brandPink2 dark:text-gray-200'>
                        {item.text}
                      </span>
                    </Link>
                  ) : (
                    <span
                      className={`ml-1 text-sm ${
                        isLast
                          ? 'font-medium text-gray-800 dark:text-gray-200'
                          : 'text-gray-800 hover:text-brandPink2 dark:text-gray-200'
                      }`}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;

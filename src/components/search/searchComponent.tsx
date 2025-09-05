import { Fragment, useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from '@headlessui/react';
import { HiCheck, HiOutlineSearch } from 'react-icons/hi';
import Link from 'next/link';

export default function SearchComponent({
  searchTerms: terms,
}: {
  searchTerms: { title: string; slug: string }[];
}) {
  const [selected, setSelected] = useState(terms[0]);
  const [query, setQuery] = useState('');

  const searchTerms =
    query === ''
      ? terms
      : terms.filter((item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='mx-auto mt-10 w-80 bg-gray-100 outline-none dark:bg-gray-800'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div className='relative w-full cursor-default overflow-hidden text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <ComboboxInput
              className='w-full rounded-xl border-2 border-brandPink bg-gray-50 px-3 py-3 pr-10 font-content text-lg leading-5 text-gray-800 focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-200'
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search'
            />
            <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-4'>
              <HiOutlineSearch className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </ComboboxButton>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 sm:text-sm'>
              {searchTerms.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none px-4 py-2 text-gray-800 dark:bg-gray-200'>
                  Nothing found.
                </div>
              ) : (
                searchTerms.map((item) => (
                  <ComboboxOption
                    key={item.title}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 font-lexend ${
                        active
                          ? 'bg-brandPink text-white dark:bg-gray-600'
                          : 'text-gray-800 dark:text-gray-200'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-brandPink'
                            }`}
                          >
                            <HiCheck className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

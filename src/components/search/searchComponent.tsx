import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiCheck, HiOutlineSearch } from 'react-icons/hi';
import { terms } from './searchData';
import Link from 'next/link';

export default function SearchComponent() {
  const [selected, setSelected] = useState(terms[0]);
  const [query, setQuery] = useState('');

  const searchTerms =
    query === ''
      ? terms
      : terms.filter((item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <div className='w-80 bg-gray-100 outline-none mx-auto mt-10'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div className='relative w-full cursor-default overflow-hidden  text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <Combobox.Input
              className='w-full py-3 px-3 font-content pr-10 text-lg rounded-xl bg-gray-50 leading-5 text-brandDark border-2 border-brandPink focus:outline-none focus:ring-0'
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search'
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-4'>
              <HiOutlineSearch
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {searchTerms.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                searchTerms.map((item) => (
                  <Combobox.Option
                    key={item.title}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-brandPink text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
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
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

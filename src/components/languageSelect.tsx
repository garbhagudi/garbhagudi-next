import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiSelector } from 'react-icons/hi';
import Link from 'next/link';

const people = [
  { name: 'English', link: '/' },
  { name: 'ಕನ್ನಡ', link: 'https://kannada.garbhagudi.com' },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className=''>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-wbite border border-gg-500 dark:border-gg-400 py-1 sm:py-2 px-1.5 sm:px-3 pr-6 sm:pr-8 text-center '>
            <span className='block text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-semibold font-content'>
              {selected.name}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1'>
              <HiSelector
                className='sm:h-5 sm:w-5 text-brandPurpleDark dark:text-brandPurple2'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Link href={person.link} passHref key={personIdx}>
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-default font-content select-none text-sm py-2 px-4 pr-4  rounded-lg ${
                        active
                          ? 'text-gray-800 dark:text-gray-200 font-bold hover:bg-gg-200 dark:hover:bg-gray-600'
                          : 'text-gray-800 dark:text-gray-200 font-bold'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center text-amber-600'></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

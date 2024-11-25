import { Fragment, useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { HiSelector } from 'react-icons/hi';
import Link from 'next/link';

const language = [
  { name: 'English', link: '/' },
  { name: 'ಕನ್ನಡ', link: 'https://kannada.garbhagudi.com' },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(language[0]);

  return (
    <div className=''>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <ListboxButton className='bg-wbite relative w-full cursor-default rounded-lg border border-gg-500 px-1.5 py-1 pr-6 text-center dark:border-gg-400 sm:px-3 sm:py-2 sm:pr-8'>
            <span className='block font-content text-xs font-semibold text-gray-800 dark:text-gray-200 sm:text-sm'>
              {selected.name}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1'>
              <HiSelector
                className='text-brandPurpleDark dark:text-brandPurple2 sm:h-5 sm:w-5'
                aria-hidden='true'
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 sm:text-sm'>
              {language.map((languages, languageIdx) => (
                <Link href={languages.link} passHref key={languageIdx}>
                  <ListboxOption
                    className={`relative cursor-default select-none rounded-lg px-4 py-2 pr-4 font-content text-sm font-bold text-gray-800 data-[focus]:font-bold data-[focus]:text-gray-800 data-[focus]:hover:bg-gg-200 dark:text-gray-200 dark:hover:bg-gray-600 data-[focus]:dark:text-gray-200`}
                    value={languages}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {languages.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center text-amber-600'></span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                </Link>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

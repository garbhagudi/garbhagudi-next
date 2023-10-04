import React, { useState, useEffect } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className={`rounded-md hover:scale-110 active:scale-100 duration-200 dark:bg-gray-800 dark:text-white flex items-center justify-center`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <BsFillSunFill className='w-7 h-7' />
      ) : (
        <MdDarkMode className='w-7 h-7 text-white' />
      )}
    </button>
  );
};

export default ThemeToggle;

'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = ({className}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`inline-block lg:ml-auto lg:mr-3 transition duration-200 items-center p-1 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
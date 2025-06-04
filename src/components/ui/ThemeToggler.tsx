'use client';

import { useTheme } from '@/hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} color='white' />}
    </button>
  );
}
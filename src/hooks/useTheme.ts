'use client'

import { useEffect, useState } from "react";
import { Theme } from "@/types/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  // check saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
  
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  // theme toggler + saver
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  }

  return { theme, toggleTheme };
}

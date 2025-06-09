'use client'

import React from "react";
import Logo from "./ui/Logo";
import { ThemeToggle } from "./ui/ThemeToggler";
import { CurrencySelector } from "./CurrencySelector";

const Header: React.FC = () => {
  return (
    <header className="bg-crypto-dark border-b border-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="flex space-x-4">
          <a href="/coins" className="hover:text-blue-400">Coins</a>
          <a href="#" className="hover:text-blue-400">Portfolio</a>
        </nav>
        <CurrencySelector />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;

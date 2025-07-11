'use client';

import { useState, useEffect } from 'react';
import Search from '../ui/Search';

type CoinSearchProps = {
  onSearch: (searchName: string) => void,
}

const CoinSearch: React.FC<CoinSearchProps> = ({ onSearch }) => {
  const [searchName, setSearchName] = useState('');

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchName);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchName, onSearch]);

  return (
    <Search
      value={searchName}
      onChange={setSearchName}
      placeholder="Search BTC, Ethereum..."
      className="max-w-md mb-6"
    />
  );
}

export default CoinSearch;

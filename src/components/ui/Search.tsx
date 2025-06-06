import React, { useState } from "react";

type SearchProps = {
  onSearch: (arg0: string) => void,
  placeholder?: string,
} 

export default function Search({ onSearch, placeholder }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault;
    onSearch(searchValue);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        required
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      />
      <button type='submit' className='ml-2 p-2 bg-blue-500 text-white rounded'>
        Search
      </button>
    </form>
  )
}
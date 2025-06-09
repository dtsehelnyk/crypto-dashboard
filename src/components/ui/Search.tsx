import React, { ChangeEvent, useEffect, useState } from "react";
import { Input, InputProps } from "./Input";

interface SearchProps extends Omit<InputProps, 'onChange'>  {
  onChange: (value: string) => void;
  debounceDelay?: number;
} 

const Search: React.FC<SearchProps> = ({
  value: externalValue,
  onChange,
  debounceDelay = 300,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(externalValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    setInternalValue(externalValue || '');
  }, [externalValue]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {/* <SearchIcon className="h-5 w-5 text-gray-400" /> */}
      </div>
      <Input
        type="text"
        value={internalValue}
        onChange={handleChange}
        className="pl-10 pr-4 py-2"
        aria-label="Search input"
        {...props}
      />
    </div>
  );
}

export default Search;

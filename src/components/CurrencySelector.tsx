'use client'

import { CURRENCY_CODES } from "@/constants/currencies";
import { Currency } from "@/types/currency";
import { useCryptoStore } from "@/stores/useCryptoStore";
import { useCallback, useEffect } from "react";

export const CurrencySelector = () => {
  const changeCurrency = useCryptoStore(state => state.changeCurrency);
  const fetchCoins = useCryptoStore(state => state.fetchCoins);
  const currency = useCryptoStore(state => state.currency);

  useEffect(() => {
    fetchCoins(currency as Currency);
  }, [currency]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    changeCurrency(newCurrency as Currency);
    localStorage.setItem('currency', newCurrency);
  }, [changeCurrency, fetchCoins, currency]);

  return (
    <select
      value={localStorage.getItem('currency') || currency}
      onChange={(e) => handleChange(e)}
      className="p-2 border rounded bg-white dark:bg-gray-800"
    >
      {CURRENCY_CODES.map(curr => (
        <option key={curr.code} value={curr.code}>
          {curr.code.toUpperCase()} {curr.symbol}
        </option>
      ))}
    </select>
  ); 
}


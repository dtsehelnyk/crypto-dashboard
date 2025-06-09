'use client'

import { useCallback, useEffect, useState } from "react";
import CoinSearch from "@/components/coins/CoinSearch";
import { CoinsTable } from "@/components/coins/CoinsTable";
import { ICoin } from "@/types/coin";
import { useCryptoStore } from "@/stores/useCryptoStore";
import { Currency } from "@/types/currency";

const CoinsPage = () => {
  const { coins, fetchCoins, isLoading } = useCryptoStore();
  const [filteredCoins, setFilteredCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    fetchCoins(localStorage.getItem('currency') as Currency || 'usd');    
  }, [fetchCoins]);

  const handleSearch = useCallback((searchName: string) => {
    if (!searchName) {
      setFilteredCoins(coins);

      return;
    }

    const filtered = coins.filter(coin => 
      coin.name.toLowerCase().includes(searchName.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchName.toLowerCase())
    );
    
    setFilteredCoins(filtered);
    console.log('__________', coins);

  }, [coins]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <CoinSearch onSearch={handleSearch} />
      <CoinsTable coins={filteredCoins} />
    </div>
  );
}

export default CoinsPage;

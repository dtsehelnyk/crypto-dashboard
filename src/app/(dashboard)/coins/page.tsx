'use client'

import { useCallback, useEffect, useState } from "react";
import { CoinSearch } from "@/components/coins/CoinSearch";
import CoinsTable from "@/components/coins/CoinsTable";
import { fetchCoins } from "@/lib/api/coingeko";
import { ICoin } from "@/types/coin";

export default function CoinsPage() {
  const [allCoins, setAllCoins] = useState<ICoin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState(allCoins);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCoins();
        setAllCoins(data);
        setFilteredCoins(data);
        
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSearch = useCallback((searchName: string) => {
    if (!searchName) {
      setFilteredCoins(allCoins);

      return;
    }

    const filtered = allCoins.filter(coin => 
      coin.name.toLowerCase().includes(searchName.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchName.toLowerCase())
    );
    
    setFilteredCoins(filtered);
  }, [allCoins]);

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

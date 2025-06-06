'use client';

import { formatCurrency, formatPercentage } from '@/lib/utils';
import { ICoin } from '@/types/coin';
import TableHeader, { Column, SortConfig } from './TableHeader';
import { useState } from 'react';
import Search from '../ui/Search';

const columns: Column[] = [
  { key: '№', label: '№', sortable: false },
  { key: 'name', label: 'Coin', sortable: true },
  { key: 'current_price', label: 'Price', sortable: true },
  { key: 'price_change_percentage_24h', label: '24h %', sortable: true },
  { key: 'market_cap', label: 'Market Cap', sortable: true },
  { key: 'actions', label: '', sortable: false }
];

export default function CoinsTable({ coins }: { coins: ICoin[] }) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'market_cap',
    direction: 'asc',
  });

  const sortedCoins = [...coins].sort((a, b) => {
    const aValue = a[sortConfig.key as keyof ICoin];
    const bValue = b[sortConfig.key as keyof ICoin];

    if (aValue > bValue) return sortConfig.direction === 'desc' ? 1 : -1;
    if (aValue < bValue) return sortConfig.direction === 'desc' ? -1 : 1;
    return 0;
  })

   const handleSort = (key: string): void => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  return (
    <div className="overflow-x-auto">
      {/* <Search onSearch={} /> */}
      <table className="w-full">
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
        />
        <tbody>
          {sortedCoins.map(({
            id,
            name,
            image,
            symbol,
            current_price,
            price_change_percentage_24h,
            market_cap,
          }, index) => (
            <tr key={id} className="border-b border-border hover:bg-muted/50">
              <td className="p-4">{index + 1}</td>
              <td className="p-4 flex items-center gap-3">
                <img src={image} alt={name} className="w-6 h-6" />
                <span className="font-medium">{name}</span>
                <span className="text-muted-foreground">{symbol.toUpperCase()}</span>
              </td>
              <td className="text-right p-4 font-medium">
                {formatCurrency(current_price)}
              </td>
              <td className={`text-right p-4 ${
                price_change_percentage_24h >= 0 
                  ? 'text-green-500' 
                  : 'text-red-500'
              }`}>
                {formatPercentage(price_change_percentage_24h)}
              </td>
              <td className="text-right p-4">
                {formatCurrency(market_cap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

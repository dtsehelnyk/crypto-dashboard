'use client';

import { formatCurrency, formatPercentage } from '@/lib/utils';
import { ICoin } from '@/types/coin';

export default function CoinsTable({ coins }: { coins: ICoin[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-border">
          <tr>
            <th className="text-left p-4">#</th>
            <th className="text-left p-4">Coin</th>
            <th className="text-right p-4">Price</th>
            <th className="text-right p-4">24h</th>
            <th className="text-right p-4">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(({
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

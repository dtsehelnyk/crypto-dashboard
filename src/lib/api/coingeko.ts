// src/lib/api/coingecko.ts
import { ApiError, NetworkError } from '@/types/api';
import { ICoin } from '@/types/coin';
import { fetchWithRetry } from '../fetchWithRetry';

export const fetchCoins = async (): Promise<ICoin[]> => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => null); // attempt to get an error with desc
      throw new ApiError(
        res.status, 
        errorData?.message || 'CoinGecko API error',
        errorData,
      );
    }

    return await res.json() as ICoin[];
  } catch (error) {
    if (error instanceof TypeError) {
      throw new NetworkError('Network connection failed');
    }
    throw error;
  }
};

export const fetchCoinsSafe = () => fetchWithRetry(fetchCoins);

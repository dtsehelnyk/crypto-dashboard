// src/lib/api/coingecko.ts
import { ICoin } from '@/types/coin';
import { fetchWithRetry } from '../fetchWithRetry';
import { ApiError, NetworkError } from '@/types/api';
import { BASE_URL } from '@/constants/api';

export const fetchCoins = async (currency = 'usd'): Promise<ICoin[]> => {
  try {
    const url = new URL(BASE_URL);

    url.searchParams.set('vs_currency', currency);
    url.searchParams.set('order', 'market_cap_desc');
    url.searchParams.set('per_page', '50');
    url.searchParams.set('page', '1');
    url.searchParams.set('sparkline', 'false');

    const res = await fetch(url);
    
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

import { create } from 'zustand';
import { ICoin } from '../types/coin';
import { fetchCoinsSafe } from '../lib/api/coingeko';
import { Currency } from '@/types/currency';

interface CryptoStore {
  coins: ICoin[],
  currency: Currency,
  isLoading: boolean,
  fetchCoins: (currency: Currency) => Promise<void>,
  changeCurrency: (currency: Currency) => void,
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  coins: [],
  isLoading: false,
  currency: 'usd',
  fetchCoins: async (currency: Currency) => {
    set({ isLoading: true });
    const data = await fetchCoinsSafe(currency);
    set({ coins: data, isLoading: false });
  },
  changeCurrency: (currency: Currency) => {
    set({ currency });
  }
}));

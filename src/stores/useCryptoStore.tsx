import { create } from 'zustand';
import { ICoin } from '../types/coin';
import { fetchCoinsSafe } from '../lib/api/coingeko';

interface CryptoStore {
  coins: ICoin[];
  loading: boolean;
  fetchCoins: () => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  coins: [],
  loading: false,
  fetchCoins: async () => {
    set({ loading: true });
    const data = await fetchCoinsSafe();
    set({ coins: data, loading: false });
  },
}));

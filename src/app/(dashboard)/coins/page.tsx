import CoinsTable from "@/components/CoinsTable";
import { fetchCoins } from "@/lib/api/coingeko";

export default async function CoinsPage() {
  const coins = await fetchCoins();
  console.log(coins);
  

  return <CoinsTable coins={coins} />;
}

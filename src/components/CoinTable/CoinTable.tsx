'use client'

// import { fetchCoins } from "@/app/api/coins/route";
import { useCryptoStore } from "@/stores/useCryptoStore";
import { ICoin } from "@/types/coin";
import React, { useEffect, useState } from "react";

type Props = {

}

export const CoinTable: React.FC<Props> = () => {
  // const [coins, setCoins] = useState();
  const coins = useCryptoStore((state: any) => state.coins);
  const fetch = useCryptoStore((state: any) => state.fetchCoins);

  useEffect( () => {
    // fetchCoins()
    //   .then((data) => {
    //     setCoins(data);
    //   });
    // fetchCoins
    fetch();
  }, []);

  return (
    <div>
      <ul>
        {coins.map((el: ICoin) => 
          <li key={el.id}>
            <img
              src={el.image}
              alt={el.name}
              width={30}
              height={30}
            />
            {el.name}
            ________________
            {el.current_price}
            ________________
            {el.total_volume}

          </li>
        )}
      </ul>
    </div>
  )
}

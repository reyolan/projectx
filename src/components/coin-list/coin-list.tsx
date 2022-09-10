import { useEffect, useState } from "react";

import { List, CoinListItem } from "./coin-list.styled";
import { IMarketData } from "../../types";

interface ICoinListProps {
  list: IMarketData[];
  setClickedCoin: React.Dispatch<React.SetStateAction<string>>;
}

interface ICoinNames {
  name: string;
  symbol: string;
  image: string;
}

function CoinList({ list, setClickedCoin }: ICoinListProps) {
  // Image Bitcoin(btc)
  // usePagination hook

  const [coinNames, setCoinNames] = useState<ICoinNames[]>([]);

  useEffect(() => {
    const mappedCoinNames = list.map(item => {
      return { name: item.name, symbol: item.symbol, image: item.image };
    });

    setCoinNames(mappedCoinNames);
  }, []);

  return (
    <List>
      {coinNames.map((item, i) => {
        return (
          <CoinListItem
            key={i}
            onClick={e =>
              setClickedCoin((e.target as HTMLLIElement).textContent || "")
            }
          >
            {item.name}
          </CoinListItem>
        );
      })}
    </List>
  );
}

export default CoinList;
